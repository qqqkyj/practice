import React, { useEffect, useState } from "react";
import { getAllCarts } from "../api/dummyJson";
import Carts from "../pages/Carts";

export default function CartsList() {
	const [carts, setCarts] = useState([]);

	useEffect(() => {
		async function fetchData() {
			console.log("fetchData 시작");
			const res = await getAllCarts();
			console.log("res 확인:", res);
			setCarts(res["data"]["carts"]);
		}

		fetchData();
	}, []);

	return (
		<div>
			<h1 className="font-bold text-4xl mb-4">🛒 장바구니 목록</h1>
			<div className="space-y-6">
				{carts.map((cart) => (
					<Carts key={cart.id} cart={cart} />
				))}
			</div>
		</div>
	);
}
