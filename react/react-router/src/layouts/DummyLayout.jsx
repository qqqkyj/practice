import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function DummyLayout() {
	const basicClass = `border-2 border-amber-300 p-2`;

	return (
		<div className="text-center text-5xl m-7">
			<div>
				<NavLink className={`${basicClass}`} to="/dummy/products">
					상품 목록
				</NavLink>
				<NavLink className={`${basicClass}`} to="/dummy/carts">
					장바구니 목록
				</NavLink>
				<NavLink className={`${basicClass}`} to="/dummy/posts">
					게시글 목록
				</NavLink>
			</div>
			<Outlet />
		</div>
	);
}
