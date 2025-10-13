import React, { useEffect, useState } from "react";

export default function Carts({ cart }) {
	const [products, setProducts] = useState([]);

	if (!cart) return null; // cart가 undefined면 렌더링하지 않음

	return (
		<div className="border rounded-xl p-4 shadow-md">
			<h2 className="font-semibold text-2xl mb-3">🧺 Cart ID: {cart.id}</h2>
			<ul className="list-disc ml-5">
				{cart.products?.map((product) => (
					<li key={product.id}>
						{product.title} — {product.price}$
					</li>
				))}
			</ul>
		</div>
	);
}
