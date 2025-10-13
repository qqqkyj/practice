import { useEffect, useState } from "react";
import { getAllPosts } from "../api/dummyJson";

export default function PostList() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await getAllPosts();
			setPosts(res["data"]["posts"]);
		}

		fetchData();
	}, []);

	return (
		<div>
			<h1 className="text-bold text-4xl">게시글 목록</h1>
			<ul>
				{posts.map((post) => {
					return <li key={post.id}>{post.title}</li>;
				})}
			</ul>
		</div>
	);
}
