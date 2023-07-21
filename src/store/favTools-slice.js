import { createSlice } from "@reduxjs/toolkit";

const favToolsSlice = createSlice({
  name: "favTools",
  initialState: { value: JSON.parse(localStorage.getItem("favTools")) || [] },
  reducers: {
    toggleFavTool: (state, action) => {
      const favToolsArray = state.value;
      const tool = action.payload;

      if (favToolsArray.some((favtool) => favtool._id === tool._id)) {
        const index = favToolsArray.findIndex(
          (favtool) => favtool._id === tool._id
        );
        favToolsArray.splice(index, 1);
      } else {
        favToolsArray.push(tool);
      }
      localStorage.setItem("favTools", JSON.stringify(favToolsArray));
      state.value = favToolsArray;
    },
  },
});

export const { toggleFavTool } = favToolsSlice.actions;
export default favToolsSlice;
