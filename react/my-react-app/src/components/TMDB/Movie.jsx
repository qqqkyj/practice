import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Movie({ movie }) {
	return (
		<div>
			<p>{movie.title}</p>
			<img
				src={
					movie.poster_path
						? `${IMAGE_BASE_URL}${movie.poster_path}`
						: "https://placehold.co/500x750/000000/FFFFFF.png?text=No+Image"
				}
				alt={`${movie.title} 포스터`}
			/>
			<p className="line-clamp-3">{movie.overview}</p>
			<p>{movie.release_date}</p>
			<p>{movie.vote_average}</p>
		</div>
	);
}
