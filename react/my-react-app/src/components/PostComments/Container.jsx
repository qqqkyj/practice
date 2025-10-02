import React, { useEffect, useState } from "react";
import Post from "./Post";
import Comment from "./Comment";
import axios from "axios";

export default function Container() {
	const BASE_URL = "https://dummyjson.com";
	const [postID, setPostID] = useState(1);
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		getASinglePost();
		getAllCommentsByPostID();
	}, []);

	async function getASinglePost() {
		const res = await axios.get(`${BASE_URL}/posts/${postID}`);
		console.log(res["data"]);
		setPost(res["data"]);
	}

	async function getAllCommentsByPostID() {
		const res = await axios.get(`${BASE_URL}/comments/post/${postID}`);
		console.log(res["data"]["comments"]);
		setComments(res["data"]["comments"]);
	}

	return (
		<div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8">
			<div className="max-w-4xl mx-auto">
				<div className="mb-8 p-6 bg-white rounded-lg shadow-md">
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<label htmlFor="postID" className="font-semibold text-gray-700">
							게시글 번호
						</label>
						<input
							type="number"
							id="postID"
							name="postID"
							placeholder="ID 입력"
							value={postID}
							className="flex-grow w-full px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
							onChange={(e) => {
								setPostID(e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									getASinglePost();
									getAllCommentsByPostID();
								}
							}}
						/>
						<button
							className="w-full sm:w-auto px-6 py-2 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
							onClick={() => {
								getASinglePost();
								getAllCommentsByPostID();
							}}
						>
							검색
						</button>
					</div>
				</div>

				<Post post={post} />

				<div className="mt-8">
					<h2 className="text-2xl font-bold mb-4 text-gray-800">댓글</h2>
					<div className="space-y-4">
						{comments.length === 0 ? (
							<div className="text-center py-12 px-6 bg-white rounded-lg shadow-md">
								<p className="text-gray-500">댓글이 없습니다.</p>
							</div>
						) : (
							comments.map((comment) => {
								return <Comment comment={comment} key={comment.id} />;
							})
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
