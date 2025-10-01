import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

export default function ProductContainer() {
	const BASE_URL = "https://dummyjson.com";
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getAllProducts() {
			const res = await axios.get(`${BASE_URL}/products`);
			const products = res["data"]["products"];
			// console.log(products);
			setProducts(products);
		}
		getAllProducts();
	}, []);

	// Sort
	async function getAllSortProducts(sortBy, order) {
		const res = await axios.get(
			`${BASE_URL}/products?sortBy=${sortBy}&order=${order}`
		);
		const products = res["data"]["products"];
		setProducts(products);
		//console.log(products);
	}

	return (
		<>
			<div className="m-2">
				<button
					className="border m-2 p-1 rounded-lg bg-blue-500 text-white cursor-pointer"
					onClick={() => {
						getAllSortProducts("id", "asc");
					}}
				>
					ID ↑
				</button>
				<button
					className="border m-2 p-1 rounded-lg bg-blue-500 text-white cursor-pointer"
					onClick={() => {
						getAllSortProducts("id", "desc");
					}}
				>
					ID ↓
				</button>
				<button
					className="border m-2 p-1 rounded-lg bg-green-400 text-white cursor-pointer"
					onClick={() => {
						getAllSortProducts("price", "asc");
					}}
				>
					가격 ↑
				</button>
				<button
					className="border m-2 p-1 rounded-lg bg-green-400 text-white cursor-pointer"
					onClick={() => {
						getAllSortProducts("price", "desc");
					}}
				>
					가격 ↓
				</button>
				<button
					className="border m-2 p-1 rounded-lg bg-amber-400 text-white cursor-pointer"
					onClick={() => {
						getAllSortProducts("rating", "asc");
					}}
				>
					평점 ↑
				</button>
				<button
					className="border m-2 p-1 rounded-lg bg-amber-400 text-white cursor-pointer"
					onClick={() => {
						getAllSortProducts("rating", "desc");
					}}
				>
					평점 ↓
				</button>
			</div>
			<div>
				{products.map((product) => {
					return <Product product={product} key={product.id} />;
				})}
			</div>
		</>
	);
}
