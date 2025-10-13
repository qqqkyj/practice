import { createBrowserRouter } from "react-router-dom";

import DummyLayout from "../layouts/DummyLayout";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/RootPages/Home";
import DummyHome from "../pages/DummyPages/DummyHome";
import Products from "../pages/DummyPages/Products";
import CartsList from "../components/CartsList";
import Posts from "../pages/DummyPages/Posts";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
		],
	},
	{
		path: "/dummy",
		Component: DummyLayout,
		children: [
			{
				index: true,
				Component: DummyHome,
			},
			{
				path: "products",
				Component: Products,
			},
			{
				path: "carts",
				Component: CartsList,
			},
			{
				path: "posts",
				Component: Posts,
			},
		],
	},
]);

export default router;
