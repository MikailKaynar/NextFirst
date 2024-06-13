import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: [
    { title: "Başlık 1", description: "Açıklama 1", tag: "Etiket 1", id: "1" },
    { title: "Başlık 2", description: "Açıklama 2", tag: "Etiket 2", id: "2" },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.dataList.push(action.payload);
    },
    removeData: (state, action) => {
      state.dataList = state.dataList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;
