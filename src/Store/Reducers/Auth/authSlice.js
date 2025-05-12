import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/authApi";

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    await api.get('/sanctum/csrf-cookie');
    const response = await api.post('/api/login', credentials);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.get('/sanctum/csrf-cookie'); // ensure CSRF token is set
    await api.post('/api/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || "Logout failed");
  }
});


const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null, isLogged: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
        state.error = action.payload.message;
        state.isLogged = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLogged = false;
        localStorage.removeItem('token'); 
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.isLogged = true; // still logged in
      });
  },
});

export default authSlice.reducer;