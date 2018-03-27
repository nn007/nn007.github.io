var audio= document.getElementById("audio");
var btn=document.getElementById("demo");
btn.innerHTML="STOP";

function play() {
  if(audio.paused){
    audio.play();
    btn.innerHTML="STOP";
  }
  else {
    audio.pause();
    btn.innerHTML="PLAY";
  }
}
