import { useEffect, useState } from "react";
import { getAllSortedProducts, getPaginatedProducts } from "../api/dummyJson";
import { Link, useSearchParams } from "react-router-dom";

export default function ProductsList() {
	const [products, setProducts] = useState([]);
	const [skip, setSkip] = useState(0);
	const LIMIT = 5;

	useEffect(() => {
		async function fetchData() {
			const res = await getPaginatedProducts(LIMIT, skip);
			setProducts(res.data.products);
		}
		fetchData();
	}, [skip]);

	return (
		<div className="p-8">
			<h1 className="text-bold text-4xl mb-6">상품 목록</h1>
			<div className="flex gap-4 mb-6">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						skip >= LIMIT && setSkip(skip - 5);
					}}
				>
					이전
				</button>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => {
						skip < 190 && setSkip(skip + 5);
					}}
				>
					다음
				</button>
			</div>
			<ul className="space-y-2">
				{products.map((product) => {
					return (
						<li key={product.id}>
							<Link
								to={`/dummy/products/${product.id}`}
								className="block p-4 border rounded hover:bg-gray-100"
							>
								No.{product.id} - {product.title}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);

	// const [products, setProducts] = useState([]);
	// const [searchParams, setSearchParams] = useSearchParams();

	// useEffect(() => {
	// 	const sortBy = searchParams.get("sortBy") ?? "id";
	// 	const order = searchParams.get("order") ?? "asc";

	// 	async function fetchData() {
	// 		const res = await getAllSortedProducts(sortBy, order);
	// 		setProducts(res["data"]["products"]);
	// 	}

	// 	fetchData();
	// }, [searchParams]);

	// function handleSortChange(sortBy, order) {
	// 	setSearchParams({ sortBy: sortBy, order: order });
	// }

	// return (
	// 	<div className="p-8">
	// 		<h1 className="text-bold text-4xl mb-6">상품 목록</h1>
	// 		<div className="flex gap-4 mb-6">
	// 			<button
	// 				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	// 				onClick={() => {
	// 					handleSortChange("price", "asc");
	// 				}}
	// 			>
	// 				상품 가격 오름차순
	// 			</button>
	// 			<button
	// 				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	// 				onClick={() => {
	// 					handleSortChange("price", "desc");
	// 				}}
	// 			>
	// 				상품 가격 내림차순
	// 			</button>
	// 			<button
	// 				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	// 				onClick={() => {
	// 					handleSortChange("id", "asc");
	// 				}}
	// 			>
	// 				상품 ID 오름차순
	// 			</button>
	// 			<button
	// 				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	// 				onClick={() => {
	// 					handleSortChange("id", "desc");
	// 				}}
	// 			>
	// 				상품 ID 내림차순
	// 			</button>
	// 		</div>
	// 		<ul className="space-y-2">
	// 			{products.map((product) => {
	// 				return (
	// 					<li key={product.id}>
	// 						<Link
	// 							to={`/dummy/products/${product.id}`}
	// 							className="block p-4 border rounded hover:bg-gray-100"
	// 						>
	// 							No.{product.id} - {product.title}
	// 						</Link>
	// 					</li>
	// 				);
	// 			})}
	// 		</ul>
	// 	</div>
	// );
}
