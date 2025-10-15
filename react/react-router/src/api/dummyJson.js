import axiosInstance from "./index";

export async function getAllProducts() {
	const res = await axiosInstance.get("/products");
	console.log("getAllProducts:", res);
	return res;
}

export async function getAProductByID(id) {
	const res = await axiosInstance.get(`/products/${id}`);
	console.log("getAProductByID:", res);
	return res;
}

export async function getAllSortedProducts(sortBy, order) {
	const res = await axiosInstance.get(
		`/products?sortBy=${sortBy}&order=${order}`
	);
	console.log("getAllSortedProducts:", res);
	return res;
}

export async function getPaginatedProducts(limit, skip) {
	const res = await axiosInstance.get(`/products?limit=${limit}&skip=${skip}`);
	console.log("getPaginatedProducts", res);
	return res;
}

export async function getAllCarts() {
	const res = await axiosInstance.get("/carts");
	console.log("getAllCarts:", res);
	return res;
}

export async function getAllPosts() {
	const res = await axiosInstance.get("/posts");
	console.log("getAllPosts:", res);
	return res;
}

export async function getAPostByID(id) {
	const res = await axiosInstance.get(`/posts/${id}`);
	console.log("getAPostByID:", res);
	return res;
}

export async function getAllSortedPosts(sortBy, order) {
	const res = await axiosInstance.get(`/posts?sortBy=${sortBy}&order=${order}`);
	console.log("getAllSortedPosts:", res);
	return res;
}

export async function getPaginatedPosts(limit, skip, sortBy, order) {
	const res = await axiosInstance.get(
		`/posts?limit=${limit}&skip=${skip}&sortBy=${sortBy}&order=${order}`
	);
	console.log("getPaginatedPosts", res);
	return res;
}
