document.querySelector('#pause').style.display= "none";

var songsList = [
    {songTitle : "Bohemian Rhapsody", songArtist : "Queen", cover : "../img/bohemian_rhapsody.jpg", liked : 0},
    {songTitle : "Stairway To Heaven", songArtist : "Led Zeppelin", cover : "../img/stairways_to_heaven.jpg", liked : 0},
    {songTitle : "The Less I Know The Better", songArtist : "Tame Impala ", cover : "../img/the_less_i_know_th_better.jpg", liked : 0},
    {songTitle : "Mind Mischief ", songArtist : "Tame Impala", cover : "../img/mind_mischief.jpg", liked : 0}
];

var currentSongTitle;
var currentNo = 0;
var progressBarWidth;
var currSongId;
var playlistToggle=1;


function initSong(){

    var coverImage = document.querySelector('#back-cover');
    coverImage.src = songsList[currentNo].cover;

    document.querySelector('#title').innerText = songsList[currentNo].songTitle + " by " + songsList[currentNo].songArtist;

    progressBarWidth = 0;
    
    likeLogic();

}

function startPlayer(){

    var currSong = document.querySelector('#progress_bar');
    currSongId = setInterval(frame,100);

    function frame(){
        if(progressBarWidth>=100){
            stopPlayer();
            progressBarWidth=0;
            nextfunc();
        }else{
            progressBarWidth++;
            currSong.style.width = progressBarWidth + "%";
        }
    }

}

function stopPlayer(){

    clearInterval(currSongId);

}






initSong();


function prevfunc(){

    currentNo = currentNo - 1 ;
    if(currentNo < 0) currentNo = songsList.length - 1;

    pausefunc();
    initSong();
    playfunc();

};

function playfunc(){

    document.querySelector('#pause').style.display= "inline";
    document.querySelector('#play').style.display= "none";

    startPlayer();
    

};

function pausefunc(){

    document.querySelector('#pause').style.display= "none";
    document.querySelector('#play').style.display= "inline";
    
    stopPlayer();

};

function nextfunc(){

    currentNo = currentNo + 1 ;
    if(currentNo == songsList.length)currentNo = 0;

    pausefunc();
    initSong();
    playfunc();

};

function togglePlaylist(){

    if(playlistToggle==1){

        document.querySelector('#songs-playlist').style.display = 'none';
        playlistToggle = 0;

    }else{

        document.querySelector('#songs-playlist').style.display = 'block';
        playlistToggle = 1;

    }

}

function setLike(){

    songsList[currentNo].liked = 1 ;

    likeLogic();

}

function unsetLike(){

    songsList[currentNo].liked = 0 ;

    likeLogic();

}

function likeLogic(){

    var likedIt= document.querySelector('#liked');
    var notlikedIt = document.querySelector('#not-liked');

    if(songsList[currentNo].liked==0){
        likedIt.style.display = 'none';
        notlikedIt.style.display = 'inline';
    }else{
        likedIt.style.display = 'inline';
        notlikedIt.style.display = 'none';
    }

}