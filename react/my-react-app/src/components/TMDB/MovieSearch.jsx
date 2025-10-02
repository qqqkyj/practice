import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";

// BASE_URL 과 API_KEY 를 선언하고, 적절한 값을 할당한다
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieSearch() {
	// 검색 결과와 검색어를 관리할 적절한 상태를 생성한다
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState(""); // 초기 검색어 설정

	// 컴포넌트 마운트 시 초기 영화 목록을 가져온다
	useEffect(() => {
		getMoviesByTitle();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function getMoviesByTitle() {
		// 검색어가 없거나 공백만 있으면 함수 실행을 중단하고 영화 목록을 비운다
		if (!search.trim()) {
			setMovies([]);
			return;
		}

		const config = {
			method: "GET",
			url: `${BASE_URL}/search/movie`,
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
				Authorization: `Bearer ${API_KEY}`,
			},
			params: {
				query: search,
				language: "ko-KR",
				page: 1,
			},
		};

		try {
			const res = await axios(config);
			console.log(res.data.results);
      setMovies(res.data.results);
		} catch (error) {
			console.error("Error fetching movies:", error);
			setMovies([]); // 오류 발생 시 영화 목록 비우기
		}
	}

	return (
		<div className="p-4 md:p-8 max-w-screen-2xl mx-auto bg-gray-50 min-h-screen">
			<h1 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
				🎬 영화 정보 검색
			</h1>
			<form
				className="flex gap-2 mb-10 max-w-2xl mx-auto"
				onSubmit={(e) => {
					e.preventDefault(); // 새로고침 방지
					getMoviesByTitle();
				}}
			>
				<input
					className="flex-grow p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 shadow-sm"
					type="text"
					placeholder="영화 제목을 검색해보세요..."
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
				<input
					type="submit"
					value="검색"
					className="bg-indigo-600 text-white px-8 py-3 rounded-r-full hover:bg-indigo-700 cursor-pointer transition duration-300 shadow-sm font-semibold"
				/>
			</form>
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
				{movies.length > 0 ? (
					movies.map((movie) => (
						<li
							key={movie.id}
							className="transform hover:scale-105 transition-transform duration-300"
						>
							<Movie movie={movie} />
						</li>
					))
				) : (
					<p className="col-span-full text-center text-gray-500 text-lg mt-10">
						검색 결과가 없습니다.
					</p>
				)}
			</ul>
		</div>
	);
}
