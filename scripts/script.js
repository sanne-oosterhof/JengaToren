var buttonBouwen = document.getElementById('button_bouwen');
var buttonVerwijderen = document.getElementById('button_verwijderen');
var buttonInstorten = document.getElementById('button_instorten');
var video = document.getElementById('video');


buttonBouwen.addEventListener('click', speelBouwen);
buttonVerwijderen.addEventListener('click', speelVerwijderen);
buttonInstorten.addEventListener('click', speelInstorten);

function speelBouwen() {
    video.src = "images/torenBouwen.mp4";
    console.log('run bouwen');
}

function speelVerwijderen() {
    video.src = "images/torenVerwijderen.mp4";
    console.log('run verwijderen');
}

function speelInstorten() {
    video.src = "images/torenInstorten.mp4";
    console.log('run instorten');
}