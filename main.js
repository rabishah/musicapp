let playlist = [
	{
		name: "Level of Concern",
		author: "Twenty One Pilots",
		audio_src: "./src/music/level_of_concern.mp3",
		img_src: "./src/images/twenty-one-pilots.jpg",
		like: 0,
	},
	{
		name: "Kalimba",
		author: "Khurangbin",
		audio_src: "./src/music/Kalimba.mp3",
		img_src: "./src/images/imagine_dragons.jpeg",
		like: 0,
	},
	{
		name: "Stars",
		author: "Pink Floyd",
		audio_src: "./src/music/star.mp3",
		img_src: "./src/images/pink_floyd.png",
		like: 0,
	},
];

let song_index = 0;
let is_playing = 0;
let list_size = 2;
let thumbnail = document.getElementById("thumbnail");
let audio = document.getElementById("song");
let play_bttn = document.getElementById("play-bttn");
let pause_bttn = document.getElementById("pause-bttn");
let show_playlist = document.getElementById("show-playlist");
let progress_bar = document.getElementById("progress-bar");
let timer;
let ul_playlist = document.getElementById("playlist");

for (let i = 0, j = 1; i < list_size; i++) {
	let next_item_name = playlist[j].name + " by " + playlist[j].author;
	j = (j + 1) % playlist.length;
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(next_item_name));
	ul_playlist.appendChild(li);
}
loadSong();
function loadSong() {
	clearInterval(timer);
	progress_bar.value = 0;
	audio.pause();
	audio.src = playlist[song_index].audio_src;
	thumbnail.src = playlist[song_index].img_src;
	document.getElementById("song-name").innerHTML = playlist[song_index].name;
	document.getElementById("song-author").innerHTML =
		playlist[song_index].author;
	likefun();
	timer = setInterval(changeProgressBar, 100);
	audio.addEventListener("ended", nextSong);
}
function previousSong() {
	if (song_index > 0) song_index--;
	else song_index = playlist.length - 1;
	is_playing = 0;
	loadSong();
	playPause();

	let idx = (song_index + 1) % playlist.length;

	ul_playlist.removeChild(ul_playlist.childNodes[list_size - 1]);
	let next_item_name = playlist[idx].name + " by " + playlist[idx].author;
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(next_item_name));
	ul_playlist.insertBefore(li, ul_playlist.childNodes[0]);
}
function nextSong() {
	if (song_index + 1 < playlist.length) song_index++;
	else song_index = 0;
	is_playing = 0;
	loadSong();
	playPause();

	let idx = (song_index + list_size) % playlist.length;
	ul_playlist.removeChild(ul_playlist.childNodes[0]);
	let next_item_name = playlist[idx].name + " by " + playlist[idx].author;
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(next_item_name));
	ul_playlist.appendChild(li);
}
function playPause() {
	if (is_playing == 0) {
		play_bttn.style.display = "none";
		pause_bttn.style.display = "block";
		is_playing = 1;
		audio.play();
	} else {
		play_bttn.style.display = "block";
		pause_bttn.style.display = "none";
		is_playing = 0;
		audio.pause();
	}
}

function showPlaylist() {
	if (show_playlist.style.display == "none")
		show_playlist.style.display = "block";
	else show_playlist.style.display = "none";
}
function shuffle() {}
function changeProgressBar() {
	progress_bar.value = audio.currentTime * (100 / audio.duration);
}
function changeSongTime() {
	audio.currentTime = audio.duration * (progress_bar.value / 100);
}

function likeUnlike() {
	if (playlist[song_index].like == 0) playlist[song_index].like = 1;
	else playlist[song_index].like = 0;

	likefun();
}
function likefun() {
	if (playlist[song_index].like == 1) {
		document.getElementById("like-bttn").style.display = "inline";
		document.getElementById("unlike-bttn").style.display = "none";
	} else {
		document.getElementById("like-bttn").style.display = "none";
		document.getElementById("unlike-bttn").style.display = "inline";
	}
}
