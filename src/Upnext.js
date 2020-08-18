import React, { useState, useEffect } from "react";

export default function Upnext({ showPlaylist }) {
	return (
		<div id="show-playlist">
			<h3 id="playlist-head">Up next</h3>
			<ul id="playlist">
				{showPlaylist.map((ele) => (
					<li key={ele.id}> {ele.title}</li>
				))}
			</ul>
		</div>
	);
}
