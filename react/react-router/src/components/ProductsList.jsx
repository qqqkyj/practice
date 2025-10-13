import { useEffect, useState } from "react";
import { getAllProducts } from "../api/dummyJson";

export default function ProductsList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await getAllProducts();
			setProducts(res["data"]["products"]);
		}

		fetchData();
	}, []);

	return (
		<div>
			<h1 className="text-bold text-4xl">상품 목록</h1>
			<ul>
				{products.map((product) => {
					return <li key={product.id}>{product.title}</li>;
				})}
			</ul>
		</div>
	);
}
