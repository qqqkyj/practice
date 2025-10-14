import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAProductByID } from "../../api/dummyJson";

export default function ProductDetail() {
	const { productId } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		async function fetchData() {
			const res = await getAProductByID(productId);
			setProduct(res.data);
		}

		fetchData();
	}, [productId]);

	return (
		<div className="p-8">
			<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
				<div className="md:w-1/2">
					<img
						className="h-full w-full object-cover"
						src={product.thumbnail}
						alt={`${product.title} thumbnail`}
					/>
				</div>
				<div className="p-8 md:w-1/2">
					<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
						{product.category}
					</div>
					<h1 className="text-3xl font-bold mt-1 mb-4">{product.title}</h1>
					<p className="text-gray-700 mb-6">{product.description}</p>

					<div className="flex justify-between items-center mb-4">
						<div className="text-2xl font-bold text-gray-900">
							${product.price?.toFixed(2)}
						</div>
						<div className="text-sm font-bold text-red-500">
							{product.discountPercentage}% OFF
						</div>
					</div>

					<div className="mb-6">
						<span
							className={`px-3 py-1 text-xs font-semibold rounded-full ${
								product.stock > 0
									? "bg-green-200 text-green-800"
									: "bg-red-200 text-red-800"
							}`}
						>
							{product.stock > 0 ? `${product.stock} in Stock` : "Out of Stock"}
						</span>
					</div>

					<div>
						<span className="text-sm text-gray-600">Brand: </span>
						<span className="text-sm font-medium text-gray-900">
							{product.brand}
						</span>
					</div>
					<div>
						<span className="text-sm text-gray-600">Rating: </span>
						<span className="text-sm font-medium text-gray-900">
							{product.rating} / 5
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
