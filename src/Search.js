import React, { useState, useEffect } from "react";
export default function Search() {
	return (
		<div className="search-container">
			<input type="text" className="search" placeholder="Search" />
			<a href="#">
				<i className="fas fa-search fa-2x"></i>
			</a>
		</div>
	);
}
