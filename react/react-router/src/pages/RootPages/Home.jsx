import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
			<div className="p-12 bg-white rounded-lg shadow-xl text-center">
				<h1 className="text-6xl font-bold text-gray-800 mb-4">홈 페이지</h1>
				<p className="text-xl text-gray-600 mb-8">
					리액트 라우터와 더미 데이터를 활용한 예제입니다.
				</p>
				<Link
					to="/dummy"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
				>
					더미 데이터 보러가기
				</Link>
			</div>
		</div>
	);
}
