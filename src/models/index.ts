import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home';

// 导出 actions
export const homeActions = homeSlice.actions;

// 导出 store
export default configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});
