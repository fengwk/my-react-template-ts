import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './home';

// 导出 actions
export const homeActions = homeSlice.actions;

// 导出 store
const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
