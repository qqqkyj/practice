import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
	return (
		<div>
			<div className="flex gap-4 p-2 border-2 border-gray-300">
				<Link to="/">홈페이지</Link>
				<Link to="/dummy">더미 페이지</Link>
			</div>
			{/* Outlet 컴포넌트 : 중첩된 자식 컴포넌트가 위치할 구멍*/}
			<Outlet />
		</div>
	);
}
