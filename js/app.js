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


if (matchMedia) {
const mq = window.matchMedia("(min-width: 1024px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

// media query change
function WidthChange(mq) {
if (mq.matches) {



	var MusImages = document.querySelectorAll(".musImg"),
			musArea = document.querySelector("#musArea"),
  		imgBkgrd = ["images/musicBkgrd_1.jpg","images/musicBkgrd_2.jpg","images/musicBkgrd_3.jpg","images/musicBkgrd_4.jpg","images/musicBkgrd_5.jpg","images/musicBkgrd_6.jpg"],
			musicHeading = document.querySelector("#musicHeading"),
			musicArticle = document.querySelector("#musicArticle"),
			heading = ["Lady Gaga Strongly Supports Gay Rights","The Life Story Of Paul McCartney","The Complicated Life Of Kurt Cobain",
									"Jack White: From Altar Boy To Rock God","“Flexible” Sia Doesn’t Care About Gender","Rapper Angel Haze Identifies As Pansexual"],
			article = ["Lady Gaga tweeted as recently as June 2018, “I love the lgbtq community more than I can say. So I’ll sing it instead. Forever. And that’s a NY promise. One love!” ...",
								"Paul McCartney is a living legend. He penned some of the Beatles’ most beloved hits including “Hey Jude” and “Yesterday.” ...",
								"Most people know Kurt Cobain as the singer of Nirvana who tragically took his own life at the age of 27. Cobain was a talented musician and ...",
								"If you’ve ever picked up a guitar, chances are one of the first things you learned to strum was the chord progression to the White Stripes “Seven Nation Army.”...",
								"Australian singer Sia has always been open about her sexual fluidity. While some celebs keep their orientation private, Sia is ...",
								"Gay rappers are uncommon, but Angel Haze easily breaks stereotypes. She identifies as pansexual, a person who can love “men and women but also transgendered, ..."];

		function musicSwap(e){
					var i;
					var pic = e.target;

					if(pic.src.endsWith("1.jpg")){
							i=0;
					}
					if(pic.src.endsWith("2.jpg")){
						i=1;
					}
					if(pic.src.endsWith("3.jpg")){
						i=2;
					}
					if(pic.src.endsWith("4.jpg")){
						i=3;
					}
					if(pic.src.endsWith("5.jpg")){
						i=4;
					}
					if(pic.src.endsWith("6.jpg")){
						i=5;
					}
		musArea.style.backgroundImage ="url("+imgBkgrd[i]+")";;
		musicHeading.innerText = heading[i];
		musicArticle.innerText = article[i];
			}


for(i=0; i<MusImages.length; i++){
		MusImages[i].addEventListener("mouseover", musicSwap, false);
}
}}
