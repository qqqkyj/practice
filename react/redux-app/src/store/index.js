import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// 스토어 생성 및 내보내기
// ...
export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
