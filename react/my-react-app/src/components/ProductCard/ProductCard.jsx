// components/ProductCard/ProductCard.jsx

export default function ProductCard(props) {
	return (
		<div className="border rounded-lg p-4 shadow-md">
			<h2 className="font-bold">{props.name}</h2>
			<p className="text-green-600 font-bold">{props.price}</p>
			<p className={`${props.inStock ? "text-green-600" : "text-red-500"}`}>
				{props.inStock ? "재고 있음" : "품절"}
			</p>
			<p>별점★ {props.rating}</p>
			<div>
				{props.tags.map((tag) => (
					<span className="m-1 p-1 bg-blue-300 rounded">{tag}</span>
				))}
			</div>
		</div>
	);
}
