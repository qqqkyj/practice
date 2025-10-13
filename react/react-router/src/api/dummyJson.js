import axiosInstance from "./index";

export async function getAllProducts() {
	const res = await axiosInstance.get("/products");
	console.log("products:", res);
	return res;
}

export async function getAllCarts() {
	const res = await axiosInstance.get("/carts");
	console.log("carts:", res);
	return res;
}

export async function getAllPosts() {
	const res = await axiosInstance.get("/posts");
	console.log("posts:", res);
	return res;
}
