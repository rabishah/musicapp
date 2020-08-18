import React, { useState, useEffect } from "react";

export default function Form({ submitform }) {
	const [formname, setformname] = useState("");
	const [formartist, setformartist] = useState("");
	const [formimage, setformimage] = useState("");
	const [formurl, setformurl] = useState("");
	return (
		<div id="add-song-form">
			<form>
				<label>Song </label>
				<input
					type="text"
					id="songForm"
					value={formname}
					onChange={(e) => setformname(e.target.value)}
				/>

				<label>Artist</label>
				<input
					type="text"
					id="artistForm"
					value={formartist}
					onChange={(e) => setformartist(e.target.value)}
				/>
				<label>Image Url </label>
				<input
					type="text"
					id="imageForm"
					value={formimage}
					onChange={(e) => setformimage(e.target.value)}
				/>

				<label>Youtube Url</label>
				<input
					type="text"
					id="youtubeForm"
					value={formurl}
					onChange={(e) => setformurl(e.target.value)}
				/>

				<div>
					<i
						className="fas fa-paper-plane fa-2x fixed-size"
						onClick={submit}
					></i>
				</div>
			</form>
		</div>
	);
	function submit() {
		let obj = {
			title: formname,
			artist: formartist,
			cover: formimage,
			url: formurl,
			heart: false,
		};
		submitform(obj);
		setformname("");
		setformartist("");
		setformimage("");
		setformurl("");
	}
}
