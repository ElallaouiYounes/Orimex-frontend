import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isOpen: true,
    poopup: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    openPoop: (state) => {
      state.poopup = true;
    },
    closePoop: (state) => {
      state.poopup = false;
    },
  },
});

export const { toggleSidebar, openPoop, closePoop } =
  navSlice.actions;
export default navSlice.reducer;
