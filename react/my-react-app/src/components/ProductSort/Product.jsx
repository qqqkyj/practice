import React from "react";

export default function Product({ product }) {
	return (
		<>
			<div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-7xl hover:shadow-lg transition border">
				<h3 className="text-2xl font-bold mb-4">{product.title}</h3>

				{/* 2개씩 한 줄 */}
				<div className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-700">
					<p>
						<span className="font-semibold">ID:</span> {product.id}
					</p>
					<p>
						<span className="font-semibold">가격:</span> ${product.price}
					</p>
					<p>
						<span className="font-semibold">평점:</span> {product.rating}
					</p>
					<p>
						<span className="font-semibold">재고:</span> {product.stock}
					</p>
					<p>
						<span className="font-semibold">카테고리:</span> {product.category}
					</p>
					<p>
						<span className="font-semibold">브랜드:</span> {product.brand}
					</p>
				</div>

				<p className="mt-4 text-gray-600">{product.description}</p>
			</div>
		</>
	);
}
