import { useEffect, useState } from "react";
import { getPaginatedPosts } from "../api/dummyJson";
import { Link, useSearchParams } from "react-router-dom";

export default function PostList() {
	const [posts, setPosts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const skip = Number(searchParams.get("skip") ?? 0);
	const sortBy = searchParams.get("sortBy") ?? "id";
	const order = searchParams.get("order") ?? "asc";

	const LIMIT = 5;

	useEffect(() => {
		async function fetchData() {
			const res = await getPaginatedPosts(LIMIT, skip);
			setPosts(res.data.posts);
		}

		fetchData();
	}, [searchParams]);

	return (
		<div className="p-8">
			<h1 className="text-bold text-4xl mb-6">게시글 목록</h1>
			<div className="flex gap-4 mb-6">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						// skip >= LIMIT && setSearchParams({ skip: skip - LIMIT });
						setSearchParams((searchParams) => {
							searchParams.set("skip", Number(skip) - 5);
							return searchParams;
						});
					}}
				>
					이전
				</button>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						skip < 250 && setSearchParams({ skip: skip + LIMIT });
					}}
				>
					다음
				</button>
			</div>
			<ul className="space-y-2">
				{posts.map((post) => {
					return (
						<li key={post.id}>
							<Link
								to={`/dummy/posts/${post.id}`}
								className="block p-4 border rounded hover:bg-gray-100"
							>
								No.{post.id} - {post.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);

	// const [posts, setPosts] = useState([]);
	// const [searchParams, setSearchParams] = useSearchParams();

	// useEffect(() => {
	// 	const sortBy = searchParams.get("sortBy") ?? "id";
	// 	const order = searchParams.get("order") ?? "asc";

	// 	async function fetchData() {
	// 		const res = await getAllSortedPosts(sortBy, order);
	// 		setPosts(res["data"]["posts"]);
	// 	}

	// 	fetchData();
	// }, [searchParams]);

	// function handleSortChange(sortBy, order) {
	// 	setSearchParams({ sortBy: sortBy, order: order });
	// }

	// return (
	// 	<div className="p-8">
	// 		<h1 className="text-bold text-4xl mb-6">게시글 목록</h1>
	// 		<div className="flex gap-4 mb-6">
	// 			<button
	// 				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	// 				onClick={() => {
	// 					handleSortChange("title", "asc");
	// 				}}
	// 			>
	// 				게시글 제목 오름차순
	// 			</button>
	// 			<button
	// 				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	// 				onClick={() => {
	// 					handleSortChange("title", "desc");
	// 				}}
	// 			>
	// 				게시글 제목 내림차순
	// 			</button>
	// 			<button
	// 				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	// 				onClick={() => {
	// 					handleSortChange("id", "asc");
	// 				}}
	// 			>
	// 				게시글 ID 오름차순
	// 			</button>
	// 			<button
	// 				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	// 				onClick={() => {
	// 					handleSortChange("id", "desc");
	// 				}}
	// 			>
	// 				게시글 ID 내림차순
	// 			</button>
	// 		</div>
	// 		<ul className="space-y-2">
	// 			{posts.map((post) => {
	// 				return (
	// 					<li key={post.id}>
	// 						<Link
	// 							to={`/dummy/posts/${post.id}`}
	// 							className="block p-4 border rounded hover:bg-gray-100"
	// 						>
	// 							No.{post.id} - {post.title}
	// 						</Link>
	// 					</li>
	// 				);
	// 			})}
	// 		</ul>
	// 	</div>
	// );
}
