import React, { useState, useEffect } from "react";

export default function SongArtist({ song, likeUnlike }) {
	let likeclass = "fa-heart fa-2x " + (song.heart ? "far" : "fas");
	return (
		<div className="side2">
			<div className="cside2">
				<img src={song.cover} id="thumbnail" />
			</div>

			<div className="song-artist">
				<i className={likeclass} onClick={likeUnlike()}></i>
				<h2 id="song-name">{song.title}</h2>
				<h3 id="song-author">{song.artist}</h3>
			</div>
		</div>
	);
}
