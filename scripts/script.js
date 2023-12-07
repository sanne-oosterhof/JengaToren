// var buttonBouwen = document.getElementById('button_bouwen');
// var buttonVerwijderen = document.getElementById('button_verwijderen');
// var buttonInstorten = document.getElementById('button_instorten');
// var video = document.getElementById('video');
// var videoSource = document.querySelector('section video source')


// buttonBouwen.addEventListener('click', speelBouwen);
// buttonVerwijderen.addEventListener('click', speelVerwijderen);
// buttonInstorten.addEventListener('click', speelInstorten);


// function speelBouwen() {
//     video.src = "images/torenBouwen.mp4";
//     console.log('run bouwen');
// }

// function speelVerwijderen() {
//     video.src = "images/torenVerwijderen.mp4";
//     console.log('run verwijderen');
// }

// function speelInstorten() {
//     video.src = "images/torenInstorten.mp4";
//     console.log('run instorten');
// }




var buttonBouwen = document.getElementById('button_bouwen');
var buttonVerwijderen = document.getElementById('button_verwijderen');
var buttonInstorten = document.getElementById('button_instorten');
var video = document.getElementById('video');
var videoMessage = document.getElementById('video-message');

buttonBouwen.addEventListener('click', function() {
    speelVideo("images/torenBouwen.mp4");
});

buttonVerwijderen.addEventListener('click', function() {
    speelVideo("images/torenVerwijderen.mp4");
});

buttonInstorten.addEventListener('click', function() {
    speelVideo("images/torenInstorten.mp4");
});

function speelVideo(videoBron) {
    // Zorg ervoor dat de video op pauze staat voordat de bron wordt gewijzigd
    video.pause();

    // Stel de nieuwe bron in
    video.src = videoBron;

    // Laat de video zien
    video.style.opacity = 1;

    // Start de video
    video.play();

    // Verberg het bericht
    videoMessage.style.display = "none";
}























// Niet gelukt om scherm transities toe te voegen als je op de buttons klikt, wel veel geprobeerd; 

// var buttonBouwen = document.getElementById('button_bouwen');
// var buttonVerwijderen = document.getElementById('button_verwijderen');
// var buttonInstorten = document.getElementById('button_instorten');
// var video = document.getElementById('video');

// buttonBouwen.addEventListener('click', function() {
//     speelBouwen("images/torenBouwen.mp4");
// });

// buttonVerwijderen.addEventListener('click', function() {
//     speelVerwijderen("images/torenVerwijderen.mp4");
// });

// buttonInstorten.addEventListener('click', function() {
//     speelInstorten("images/torenInstorten.mp4");
// });

// function speelBouwen(nieuweBron) {
//     video.classList.add('videoTransition');
    
//     // Wacht tot de fade-out is voltooid en verander dan de video source
//     setTimeout(function() {
//         video.src = nieuweBron;
//         console.log('run bouwen');
//         video.classList.remove('videoTransition'); // Verwijder de klasse na het instellen van de nieuwe bron
//     }, 1200); // Verander dit naar de duur van je fade-out animatie (in milliseconden)
// }

// function speelVerwijderen(nieuweBron) {
//     video.src = nieuweBron;
//     console.log('run verwijderen');
// }

// function speelInstorten(nieuweBron) {
//     video.src = nieuweBron;
//     console.log('run instorten');
// }