import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 0,
	step: 1,
};

// 전역 상태 count, step 초기값 설정
// ...

// 필요한 상태 변경(액션)
// count 증가(액션명: increment)
// count 감소(액션명: decrement)
// step 변경(액션명: setStep)
// ...

const counterSlice = createSlice({
	name: "counter",
	initialState: initialState,
	reducers: {
		increment: (state) => {
			state.count = state.count + state.step;
		},
		decrement: (state) => {
			state.count = state.count - state.step;
		},
		setStep: (state, action) => {
			state.step = Number(action.payload);
		},
	},
});

export const { increment, decrement, setStep } = counterSlice.actions;
export default counterSlice.reducer;
