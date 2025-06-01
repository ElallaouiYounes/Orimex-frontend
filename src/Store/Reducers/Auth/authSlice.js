import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/Api";
import { fetchProducts } from "../PagesReducers/productSlice";
import { fetchInventory } from "../PagesReducers/inventorySlice";
import { fetchTeam } from "../PagesReducers/teamSlice";

// LOGIN
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      await api.get("/sanctum/csrf-cookie"); // important for Sanctum
      const response = await api.post("/api/login", credentials);

      // fetch data after login
      thunkAPI.dispatch(fetchProducts());
      thunkAPI.dispatch(fetchInventory());
      thunkAPI.dispatch(fetchTeam());

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: "Login failed" }
      );
    }
  }
);

// LOGOUT
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("/api/logout"); // sanctum logout
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

// CHECK AUTH STATUS
export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, thunkAPI) => {
    try {
      const response = await api.get("/api/user");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Not authenticated"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
    isLogged: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLogged = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
        state.isLogged = false;
      })

      // LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLogged = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
      })

      // CHECK AUTH
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLogged = true;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.isLogged = false;
      });
  },
});

export default authSlice.reducer;
