import React, { useState, useEffect } from "react";
let timer;
export default function Footer(props) {
	const [is_playing, setis_playing] = useState(false);
	const [progress_bar, setprogress_bar] = useState(0);
	let playpauseclass =
		"fixed-size fas " + (is_playing ? "fa-pause" : "fa-play");

	timer = setInterval(changeProgressBar, 100);
	return (
		<footer>
			<input
				type="range"
				id="progress-bar"
				min="0"
				max="1000"
				value={progress_bar}
				onChange={(e) =>
					props.player.seekTo(
						props.player.getDuration() * (e.target.value / 1000)
					)
				}
			/>
			<div className="song-config">
				<div className="fside1">
					<i
						className="fas fa-plus fixed-size"
						onClick={props.fun_formbttn}
					></i>
				</div>
				<div className="fside2">
					<i className="fas fa-backward fixed-size" onClick={previousSong}></i>

					<i className={playpauseclass} onClick={playpause}></i>
					<i className="fas fa-forward fixed-size" onClick={nextSong}></i>
				</div>
				<div className="fside3">
					<i
						className="fas fa-list fixed-size"
						onClick={props.show_playlistbttn}
					></i>
				</div>
			</div>
		</footer>
	);
	function changeProgressBar() {
		if (props.player.getDuration() > 0) {
			setprogress_bar(
				props.player.getCurrentTime() * (1000 / props.player.getDuration())
			);
		} else setprogress_bar(0);
	}

	function nextSong() {
		clearInterval(timer);
		setis_playing(true);
		props.nextSong();
	}
	function previousSong() {
		clearInterval(timer);
		setis_playing(true);
		props.previousSong();
	}
	function playpause() {
		console.log(props);
		if (is_playing) props.player.pauseVideo();
		else props.player.playVideo();
		setis_playing(!is_playing);
	}
}
