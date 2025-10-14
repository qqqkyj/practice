import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAPostByID } from "../../api/dummyJson";

export default function PostDetail() {
	const { postId } = useParams();
	const [post, setPost] = useState({});
	useEffect(() => {
		async function fetchData() {
			const res = await getAPostByID(postId);
			setPost(res["data"]);
		}

		fetchData();
	}, [postId]);

	return (
		<div className="p-8">
			<div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
				<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
				<p className="text-gray-700 text-lg mb-6">{post.body}</p>
				<div className="text-gray-500 text-sm">조회수: {post.views}</div>
			</div>
		</div>
	);
}
