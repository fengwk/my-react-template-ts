import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    value: '',
  },
  reducers: {
    setValue: (state, { payload }: { payload: string }) => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。
      // 它并不是真正的改变状态值，因为它使用了 Immer 库，
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的不可变的状态。
      state.value = payload;
    },
  },
});

export default homeSlice;
