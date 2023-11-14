import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    viewContactInfo: false,
    scanViewVisible: true,
    previousPage: false,
    contactInfo: {},
    alertInfo: {
      visibility: false,
      theme: "",
    }
  },
  reducers: {
    setViewContact: (state, action) => {
      state.viewContactInfo = action.payload;
    },
    setScanViewVisible: (state, action) => {
      state.scanViewVisible = action.payload;
    },
    setPreviousPage: (state, action) => {
      state.previousPage = action.payload;
    },
    setContactInfo: (state, action) => {
      state.contactInfo = action.payload;
    },
    setAlertVisibility: (state, action) => {
      state.alertInfo.visibility = action.payload;
    },
    setAlertTheme: (state, action) => {
      state.alertInfo.theme = action.payload;
    },
  },
});

export const { setViewContact, setContactInfo, setScanViewVisible, setPreviousPage, setAlertTheme, setAlertVisibility } = appSlice.actions;


export default appSlice.reducer;
