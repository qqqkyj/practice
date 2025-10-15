// 전역 상태 count 감소 로직을 위한 코드
// ...

import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../store/counterSlice";

export default function CountDecrement() {
	// 전역 상태 count 감소 로직을 위한 코드
	// ...
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();

	function handleDecrement() {
		// 전역 상태 count 감소 로직
		// ...
		dispatch(decrement());
	}
	return (
		<div>
			<button
				className="border-2 p-2 cursor-pointer"
				onClick={() => handleDecrement()}
			>
				전역 상태 count 감소
			</button>
			<div>
				현재 단위: {count}
				{/* 전역 상태 step 불러와서 표시 */}
			</div>
		</div>
	);
}
