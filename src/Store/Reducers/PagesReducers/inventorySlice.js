import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/Api'; // Adjust path if needed

// Fetch products (GET /api/products)
export const fetchInventory = createAsyncThunk(
  'inventory/fetchInventory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/inventory'); // Sanctum requires withCredentials + cookie
      return response.data;
    } catch (error) {
      // Return custom error message
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    inventories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchInventory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.loading = false;
        state.inventories = action.payload;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default inventorySlice.reducer;
