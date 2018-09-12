$(document).foundation()

//this is for videoPlayer

var teaserVideo, trailerVideo, toggleButton, toggleButtonx, toggleButton2, toggleButtony, fullscreenbtn;
var teaserVolume = document.querySelector("#teaserVolControl");
var teaserVolumeOn = document.querySelector("#teaserVolumeOn");


function init() {
	//console.log("From Init()");
	teaserVideo = document.querySelector("#teaserVideo");
	//console.log(video.currentSrc) //This determines which codac the video is being played in.
	toggleButtonx = document.querySelector("#restartTeaser");
	toggleButton = document.querySelector("#playTeaser");
	toggleButton.addEventListener("click", togglePlay, false);
	toggleButtonx.addEventListener("click", restart, false);
  fullscreenbtn = document.getElementById("fullscreenbtn");
  fullscreenbtn.addEventListener("click",toggleFullScreen,false);
}




function togglePlay(evt) { //to get the video to fire and play
	console.log("from togglePlay()");

	//condition for pause and play
	if(teaserVideo.paused)
	{
		console.log(evt.target);
		teaserVideo.play();
	evt.target.classList.remove('fa-play');
  	evt.target.classList.add('fa-pause');
	}
	else
	{
		teaserVideo.pause();
    evt.target.classList.remove('fa-pause');
    	evt.target.classList.add('fa-play');
	}
}




function restart() {
        teaserVideo.currentTime = 0;
    }



function mutePlayer (evt) {
                    if (teaserVideo.muted) {
                        teaserVideo.muted = false;
                        evt.target.classList.remove('fa-volume-off');
                          evt.target.classList.add('fa-volume-down');
                    } else {
                        teaserVideo.muted = true;
                        evt.target.classList.remove('fa-volume-up');
                        evt.target.classList.remove('fa-volume-down');
                          evt.target.classList.add('fa-volume-off');
                    }
}

function muteVolume(){
  teaserVideo.volume = this.value / 100;

if(teaserVideo.volume ===0){
	teaserVideo.muted = true;

  teaserVolumeOn.classList.remove('fa-volume-up');
  teaserVolumeOn.classList.remove('fa-volume-down');
    teaserVolumeOn.classList.add('fa-volume-off');}
    else {
            teaserVideo.muted = false;
            teaserVolumeOn.classList.remove('fa-volume-off');
            teaserVolumeOn.classList.add('fa-volume-down');
          }
    if(teaserVideo.volume > 0.6){
    teaserVolumeOn.classList.remove('fa-volume-down');
    teaserVolumeOn.classList.remove('fa-volume-off');
    teaserVolumeOn.classList.add('fa-volume-up');}
    else {
            teaserVideo.muted = false;
            teaserVolumeOn.classList.remove('fa-volume-up');
            teaserVolumeOn.classList.add('fa-volume-down');
          }


}
function toggleFullScreen(){
	if(teaserVideo.requestFullScreen){
		teaserVideo.requestFullScreen();
	} else if(teaserVideo.webkitRequestFullScreen){
		teaserVideo.webkitRequestFullScreen();
	} else if(teaserVideo.mozRequestFullScreen){
		teaserVideo.mozRequestFullScreen();
	}
}



teaserVolume.addEventListener("input",muteVolume,false );//for volume bar
window.addEventListener ("load", init, false); //make sures the video loads before they can interact (Until the entire page loads they cant hit play)
teaserVolumeOn.addEventListener("click", mutePlayer, false);

//


	var MusImages = document.querySelectorAll(".musImg"),
			musArea = document.querySelector("#musArea"),
  		a = ["images/musicBkgrd_1.jpg","images/musicBkgrd_2.jpg","images/musicBkgrd_3.jpg"];

		function imageSwap(e){
					var i;
					var pic = e.target.src;
					if(pic.endsWith("1.jpg")){
							i=0;
					}
					if(pic.endsWith("2.jpg")){
						i=1;
					}
					if(pic.endsWith("3.jpg")){
						i=2;
					}
		musArea.style.backgroundImage ="url("+a[i]+")";;
			}


for(i=0; i<MusImages.length; i++){

		MusImages[i].addEventListener("mouseover", imageSwap, false);
}
