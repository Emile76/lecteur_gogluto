var video = document.getElementsByTagName('video')[0];
var playPause = document.querySelector(".bouche");
var stop = document.querySelector(".stop");

playPause.addEventListener("click", function(){
  if (video.paused){
    video.play();
    playPause.classList.add("pause")
    droit.style.transform = "translateX(120%)";
    gauche.style.transform = "translateX(-122%)";
  } 
  else {
    video.pause();
    playPause.classList.remove("pause")
    droit.style.transform = "translateX(120%)";
    gauche.style.transform = "translateX(-122%)";
  }
});


stop.addEventListener("click", function(){
    video.pause();
    playPause.classList.remove("pause")
    video.currentTime = 0
    droit.style.transition = "transform 1s  ease-in-out 0s";
    droit.style.transform = "translateX(65%)";
    gauche.style.transition = "transform 1s  ease-in-out 0s";
    gauche.style.transform = "translateX(-68%)";
});


var droit = document.querySelector('.bras_droit');
var gauche = document.querySelector('.bras_gauche');

video.onended = function(e) {
  droit.style.transition = "transform 1s  ease-in-out 0s";
  droit.style.transform = "translateX(65%)";
  gauche.style.transition = "transform 1s  ease-in-out 0s";
  gauche.style.transform = "translateX(-68%)";
}


var volume = document.querySelector('.oeil_gauche');
var volumeEnfonce = false;

volume.addEventListener('mousedown', function() {
  console.log("tt");
  volumeEnfonce = true;
});

volume.addEventListener('mouseup', function() {
  volumeEnfonce = false;
});

volume.addEventListener('mouseout', function() {
  volumeEnfonce = false;
});

function mouseAngle(e) {
  if(volumeEnfonce) {
    var _mouseX = e.clientX; // Position de la souris sur les X
    var _mouseY = e.clientY; // Position de la souris sur les Y
    var _w = window.innerWidth / 4; // Demi largeur d'écran
    var _h = window.innerHeight / 2; // Demi hauteur d'écran
    var _angle = Math.atan2(_h - _mouseY, _w - _mouseX) * 180 / Math.PI - 90; // https://fr.wikipedia.org/wiki/Atan2
    
    if(_angle < -360){
      _angle=-360
    }
    if(_angle > 0){
      _angle=0
    }
    var ratioVolume = _angle/-360
    console.log(ratioVolume);
    volume.style.transform = 'rotate(' + _angle + 'deg)';
    video.volume = ratioVolume
  }
}
volume.addEventListener('mousemove', function(e) {
  mouseAngle(e);
});



var progression = document.querySelector('.oeil_droit');
var progressionEnfonce = false;

progression.addEventListener('mousedown', function() {
  console.log("tt");
  progressionEnfonce = true;
});

progression.addEventListener('mouseup', function() {
  progressionEnfonce = false;
});

progression.addEventListener('mouseout', function() {
  progressionEnfonce = false;
});

function mouseAngle2(e) {
  if(progressionEnfonce) {
    var _mouseX = e.clientX; // Position de la souris sur les X
    var _mouseY = e.clientY; // Position de la souris sur les Y
    var _w = window.innerWidth * 0.75; // Demi largeur d'écran
    var _h = window.innerHeight / 2; // Demi hauteur d'écran
    var _angle = Math.atan2(_h - _mouseY, _w - _mouseX) * 180 / Math.PI - 90; // https://fr.wikipedia.org/wiki/Atan2
    
    if(_angle < -360){
      _angle=-360
    }
    if(_angle > 0){
      _angle=0
    }
    var ratioProgression = _angle/-360
    console.log(ratioProgression);
    progression.style.transform = 'rotate(' + _angle + 'deg)';
    video.currentTime = ratioProgression * video.duration;
  }
}
progression.addEventListener('mousemove', function(e) {
  mouseAngle2(e);
});


