import React, { useEffect, useState } from "react";
import { getAllCarts } from "../api/dummyJson";
import Carts from "../pages/DummyPages/Carts";

export default function CartsList() {
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const res = await getAllCarts();
			setCarts(res["data"]["carts"]);
		}

		fetchData();
	}, []);

	return (
		<div className="p-8">
			<h1 className="font-bold text-4xl mb-4">🛒 장바구니 목록</h1>
			<div className="space-y-6">
				{carts.map((cart) => (
					<Carts key={cart.id} cart={cart} />
				))}
			</div>
		</div>
	);
}
