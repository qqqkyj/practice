import React from "react";

export default function Comment({ comment }) {
	return (
		<div className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
			<div className="flex items-start gap-4">
				<div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
					<span className="font-bold text-indigo-600">
						{comment.user.username.charAt(0).toUpperCase()}
					</span>
				</div>
				<div className="flex-grow">
					<p className="text-gray-800 leading-relaxed mb-2">
						{comment.body}
					</p>
					<div className="flex justify-between items-center text-sm text-gray-500">
						<p className="font-semibold">{comment.user.username}</p>
						<p className="flex items-center gap-1">
							<span className="text-red-500">♥</span>
							{comment.likes}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
