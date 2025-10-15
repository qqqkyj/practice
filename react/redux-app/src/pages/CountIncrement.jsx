// 전역 상태 count 증가 로직을 위한 코드
// ...

import { increment } from "../store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CountIncrement() {
	// 전역 상태 count 증가 로직을 위한 코드
	// ...
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count);

	function handleIncrement() {
		// 전역 상태 count 증가 로직
		// ...
		dispatch(increment());
	}
	return (
		<div>
			<button
				className="border-2 p-2 cursor-pointer"
				onClick={() => handleIncrement()}
			>
				전역 상태 count 증가
			</button>
			<div>
				현재 단위: {count}
				{/* 전역 상태 step 불러와서 표시 */}
			</div>
		</div>
	);
}
