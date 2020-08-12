function myFunction(x) {
  x.classList.toggle("fas");
}

var songs = ["ShadesOfMan.mp3","GrassAndClouds.mp3","StillDRE.mp3","WishIKnewYou.mp3"];
var title = ["Shades Of Man", "Grass And Clouds","Still DRE","Wish I Knew You"];
var artist = ["Khurangbin","Tom Doolie","Snoop Dogg","The Revivalists"];
// var poster = ["Poster1.jpg","Poster2.jpg","Poster3.jpg"];

// var songTitle = document.getElementById("songTitle");
// var songArtist = document.getElementById("songArtist");
var songTitle = document.getElementsByClassName("songTitle");
var songArtist = document.getElementsByClassName("songArtist");
var fillBar = document.getElementsByClassName("fill");
// console.log(songTitle, songArtist, fillBar);

var song = new Audio();
var currentSong = 0;
var playlistSize = songs.length;
var shuffleCheck = false;

window.onload = playSong;

function playSong(){
  
    song.src = "songs/" + songs[currentSong];
  
    songTitle[0].textContent = title[currentSong];
    songArtist[0].textContent = artist[currentSong];
    var x = document.getElementsByClassName("fa-heart");
    x[0].classList = "far fa-heart";
  
    song.play();
}

function playOrPauseSong(x){
    if(song.paused){
        song.play();
        x.classList = "far fa-pause-circle";
    }
    else{
        song.pause();
        x.classList = "far fa-play-circle";
    }
}

song.addEventListener('timeupdate',function(){ 
  
    var position = song.currentTime / song.duration;
    fillBar[0].style.width = position * 100 +'%';
});


function next(){
    if(shuffleCheck) currentSong = Math.floor(Math.random() * playlistSize);
    else currentSong++;
    currentSong = currentSong%playlistSize;
    playSong();
    const x = document.getElementById("playButton");
    x.classList = "far fa-pause-circle";
    // $("#image img").attr("src",poster[currentSong]);
    // $("#bg img").attr("src",poster[currentSong]);
}

function pre(){
    if(shuffleCheck) currentSong = Math.floor(Math.random() * playlistSize);
    else currentSong--;
    currentSong = (currentSong + playlistSize)%playlistSize;
    playSong();
    const x = document.getElementById("playButton");
    x.classList = "far fa-pause-circle";
    // $("#image img").attr("src",poster[currentSong]);
    // $("#bg img").attr("src",poster[currentSong]);
}

function shuffle(x) {
  shuffleCheck = !shuffleCheck;
  if(shuffleCheck) x.classList = "fas fa-exchange-alt fa-2x";
  else x.classList = "fas fa-random fa-2x";
}

function togglePlaylist() {
  var wd = document.getElementById("playlistMenu").style.width;
  console.log(wd);
  if(wd=='0px') document.getElementById("playlistMenu").style.width = "100%";
  else document.getElementById("playlistMenu").style.width = "0";
}





