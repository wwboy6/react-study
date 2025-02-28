import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'fetchData',
  initialState:{
    state: 'ready'
  },
  reducers: {
    request: (state, action) => {
      state.state = 'fetching';
    },
    success: (state, action) => {
      console.log(action);
      console.log(action.payload);
      state.state = 'success';
    },
    failure: (state, action) => {
      state.state = 'failure';
    },
  },
})

export const { request, success, failure } = counterSlice.actions;

// Note: fetchData is a thunk, that doesn't need to know which store to be used
export const fetchData = () => async (dispatch, getState) => {
  dispatch(request());
  try {
    const response = await fetch('http://localhost:3000');
    const data = await response.text();
    dispatch(success(data));
  } catch (error) {
    dispatch(failure(error));
  }
}
