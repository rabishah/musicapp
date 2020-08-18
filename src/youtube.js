// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
let isPlayerReady = false;
let playerPromise;
function onYouTubeIframeAPIReady() {
	// eslint-disable-next-line
	player = new YT.Player("player", {
		events: {
			onReady: onPlayerReady,
		},
	});
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	console.log("onplayerready");
	isPlayerReady = true;
	if (playerPromise) {
		playerPromise();
		playerPromise = undefined;
	}
}

const isYoutubeReady = () => {
	return new Promise((resolve, reject) => {
		if (isPlayerReady) {
			return resolve();
		}
		playerPromise = resolve;
	});
};

export { player, isYoutubeReady };
