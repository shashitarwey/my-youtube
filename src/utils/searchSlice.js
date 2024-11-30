import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    cachedResults: (state, action) => {
      // { "ip": ["iphone", "iphone11"]}
      return { ...action.payload, ...state}
      // state = Object.assign(state, action.payload)
    },
  },
});

export const { cachedResults } = searchSlice.actions;
export default searchSlice.reducer;


// LRU cache