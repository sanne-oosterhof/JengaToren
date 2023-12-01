var buttonBouwen = document.getElementById('button_bouwen');
var buttonVerwijderen = document.getElementById('button_verwijderen');
var buttonInstorten = document.getElementById('button_instorten');
var video = document.getElementById('video');


buttonBouwen.addEventListener('click', speelBouwen);
buttonVerwijderen.addEventListener('click', speelVerwijderen);
buttonInstorten.addEventListener('click', speelInstorten);

function speelBouwen() {
    video.src = "images/test.mp4";
    console.log('run mooi');
}

function speelVerwijderen() {
    video.src = "img/videos/matig.mp4";
    console.log('run matig');
}

function speelInstorten() {
    video.src = "images/test.mp4";
    console.log('sup slecht');
}