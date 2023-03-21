console.log("Ejecutando JS...");

const video = document.getElementById("video");
const play = document.getElementById("play");
const big = document.getElementById("big");
const small = document.getElementById("small");
const time = document.getElementById("time2");

play.onclick = () => {
 if (video.paused)
   video.play()
 else {
   video.pause()
 }
}

big.onclick = () => {
 video.width = 1000;
 video.height = 1000;
}

small.onclick = () => {
 video.width = 500;
 video.height = 500;
}

time.onclick = () => {
 video.currentTime = 2;
}