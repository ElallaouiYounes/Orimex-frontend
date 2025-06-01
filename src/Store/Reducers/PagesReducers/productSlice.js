import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/Api'; // Adjust path if needed

// Fetch products (GET /api/products)
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/products'); // Sanctum requires withCredentials + cookie
      return response.data;
    } catch (error) {
      // Return custom error message
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
