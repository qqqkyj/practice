import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Carts from "../pages/Carts";
import Posts from "../pages/Posts";

const router = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/dummy/products",
		Component: Products,
	},
	{
		path: "/dummy/carts",
		Component: Carts,
	},
	{
		path: "/dummy/posts",
		Component: Posts,
	},
]);

export default router;
