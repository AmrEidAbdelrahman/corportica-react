import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataSets: (state, action) => {
      state.dataSets = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
    filtersOptions: (state, action) => {
      state.filtersOptions = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError, setFilteredData } = dataSlice.actions;
export default dataSlice.reducer;
