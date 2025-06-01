import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/Api'; // Adjust path if needed

// Fetch team (GET /api/team)
export const fetchTeam = createAsyncThunk(
  'team/fetchTeam',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/team'); // Sanctum requires withCredentials + cookie
      return response.data;
    } catch (error) {
      // Return custom error message
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    teamMembers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch team
      .addCase(fetchTeam.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.teamMembers = action.payload;
      })
      .addCase(fetchTeam.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default teamSlice.reducer;
