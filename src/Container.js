import React, { useState, useEffect } from "react";
import { player, isYoutubeReady } from "./youtube";
import Search from "./Search";
import SongInfo from "./SongInfo";
import Footer from "./Footer";
let playlist = [];
let song_index = 0;
const list_size = 3;
export default function Container() {
	const [isReady, setIsReady] = useState(false);
	const [current_song, setcurrent_song] = useState({});
	const [showPlaylistbttn, setshowPlaylistbttn] = useState(true);
	const [showPlaylist, setshowPlaylist] = useState([]);
	const [formbttn, setformbttn] = useState(false);
	const [first_song, setfirst_song] = useState(true);
	useEffect(() => {
		async function checkYoutubeReady() {
			console.log("Wating for player to be ready");
			await isYoutubeReady();

			await fetch("http://localhost:3000/playlist")
				.then((resp) => resp.json())
				.then(function (data) {
					const temp = data["songs"].map((ele) => ele);
					//setPlaylist(temp);
					playlist = temp;
					console.log(playlist);
					makeplaylist();
					get_song_info();
				})
				.catch(function (error) {
					console.log(error);
				});
			setIsReady(true);
		}

		checkYoutubeReady();
	}, []);

	return (
		<div className="container">
			<div id="player"></div>
			{isReady ? (
				<div className="container">
					<Search />
					<SongInfo
						song={current_song}
						likeUnlike={likeUnlike}
						showPlaylistbttn={showPlaylistbttn}
						showPlaylist={showPlaylist}
						submitform={submitform}
						formbttn={formbttn}
					/>
					<Footer
						player={player}
						nextSong={nextSong}
						previousSong={previousSong}
						show_playlistbttn={show_playlistbttn}
						fun_formbttn={fun_formbttn}
					/>
				</div>
			) : null}
		</div>
	);
	function fun_formbttn() {
		setformbttn(!formbttn);
	}
	function show_playlistbttn() {
		setshowPlaylistbttn(!showPlaylistbttn);
	}
	function makeplaylist() {
		let dir = [];
		for (let i = song_index + 1, j = 0; j < list_size; ++j) {
			i = i % playlist.length;
			dir.push(playlist[i]);
			i++;
		}
		setshowPlaylist(dir);
	}
	function nextSong() {
		console.log("nextsong");
		if (song_index + 1 < playlist.length) song_index++;
		else song_index = 0;
		makeplaylist();
		get_song_info();
	}
	function previousSong() {
		if (song_index > 0) song_index--;
		else song_index = playlist.length - 1;
		makeplaylist();
		get_song_info();
	}
	function get_song_info() {
		let url = "http://localhost:3000/song/" + playlist[song_index]["id"];
		fetch(url)
			.then((resp) => resp.json())
			.then(function (data) {
				console.log(data);
				let url = data["url"];
				let video_id = url.substring(url.indexOf("=") + 1);
				console.log(video_id);

				player.loadVideoById(video_id, 5, "large");
				if (first_song) {
					player.pauseVideo();
					setfirst_song(false);
				}
				setcurrent_song(data);

				console.log("yes");
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	function likeUnlike() {
		if (current_song.heart) {
			post_heart(false);
			setcurrent_song({ ...current_song, heart: false });
		} else {
			post_heart(true);
			setcurrent_song({ ...current_song, heart: true });
		}
	}
	function post_heart(heart) {
		let url =
			"http://localhost:3000/song/" + playlist[song_index].id + "/heart";
		fetch(url, {
			method: "POST",
			body: JSON.stringify({
				heartStatus: heart,
			}),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		}).then((json) => console.log(json));
	}
	function submitform(obj) {
		let url = "http://localhost:3000/playlist/song";
		fetch(url, {
			method: "POST",
			body: JSON.stringify(obj),
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((resp) => resp.json())
			.then(function (data) {
				console.log(data["song"]["id"]);
				let ele = {
					id: data["song"]["id"],
					title: data["song"]["title"],
				};
				playlist.push(ele);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
}
