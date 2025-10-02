export default function Post({ post }) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<div className="p-6">
				<h2 className="text-2xl font-bold mb-3 text-gray-800">
					<span className="text-blue-600 font-semibold">No. {post.id}</span>{" "}
					{post.title}
				</h2>
				<p className="text-gray-700 text-lg leading-relaxed mb-4">
					{post.body}
				</p>
			</div>
			<div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
				<div className="flex justify-end items-center gap-6 text-sm text-gray-600">
					<span>
						작성자 ID: <span className="font-medium">{post.userId}</span>
					</span>
					<span>
						조회수: <span className="font-medium">{post.views}</span>
					</span>
				</div>
			</div>
		</div>
	);
}
