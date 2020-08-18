import React, { useState, useEffect } from "react";
import Form from "./Form";
import Upnext from "./Upnext";
import SongArtist from "./SongArtist";
export default function SongInfo({
	song,
	likeUnlike,
	showPlaylistbttn,
	showPlaylist,
	submitform,
	formbttn,
}) {
	return (
		<div className="song-info">
			<div className="side1">
				{formbttn ? <Form submitform={submit} /> : null}
			</div>
			<SongArtist song={song} likeUnlike={() => likeUnlike} />
			<div className="side3">
				{showPlaylistbttn ? <Upnext showPlaylist={showPlaylist} /> : null}
			</div>
		</div>
	);
	function submit(obj) {
		submitform(obj);
	}
}
