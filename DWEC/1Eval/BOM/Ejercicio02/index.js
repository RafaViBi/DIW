window.addEventListener("load", cargar, false);

function cargar() {
    document.getElementById("playPause").addEventListener("click", iniciarVideo);
    document.getElementById("volumenOff").addEventListener("click", silencio);
    document.getElementById("subirVolumen").addEventListener("click", subirVolumen);
    document.getElementById("bajarVolumen").addEventListener("click", bajarVolumen);
    document.getElementById("reiniciar").addEventListener("click", reiniciarVideo);
    document.getElementById("atrasarVideo").addEventListener("click", atrasarVideo);
    document.getElementById("adelantarVideo").addEventListener("click", adelantarVideo);
    document.getElementById("video0").addEventListener("timeupdate", barraVideo, false);

}

function obtenerVideo(element) {
    var empleado = element.parentNode; //etiqueta img 
    var jefe = empleado.parentNode; //etiqueta div controladores
    var video = jefe.getElementsByTagName("video");

    return video[0];
}


function iniciarVideo() {

    var video = obtenerVideo(this);

    if (video.paused) {
        video.play();
        this.src = "pausaVideo.png";
    } else {
        video.pause();
        this.src = "playVideo.png";
    }
}

function silencio() {
    var video = obtenerVideo(this);
    var barra = document.getElementById("barraVolumen");

    if (video.volume != 0) {
        video.volume = 0;
        barra.value = 0;
    }
}

function subirVolumen() {
    var video = obtenerVideo(this);
    var actualVolumen = video.volume;
    var barra = document.getElementById("barraAudio");

    if (video.volume >= 0 && video.volume < 0.9) {
        video.volume = actualVolumen + 0.1;
        barra.value = (actualVolumen + 0.1) * 100;
    } else {
        if (video.volume == 0.9) {
            barra.value = 100;
        }
    }

}

function bajarVolumen() {
    var video = obtenerVideo(this);
    var actualVolumen = video.volume;
    var barra = document.getElementById("barraAudio");

    if (video.volume <= 1 && video.volume > 0.1) {
        video.volume = actualVolumen - 0.1;
        barra.value = (actualVolumen - 0.1) * 100;
    }
}

function reiniciarVideo() {
    var video = obtenerVideo(this);

    video.currentTime = 0.0;
}

function irFinal() {
    var video = obtenerVideo(this);
    var videoTotal = video.duration;

    video.currentTime = videoTotal;
}

function atrasarVideo() {
    var video = obtenerVideo(this);
    var videoActual = video.currentTime;

    video.currentTime = videoActual - 5.0;

}

function adelantarVideo() {
    var video = obtenerVideo(this);
    var videoActual = video.currentTime;

    video.currentTime = videoActual + 5.0;

}

function barraVideo() {
    var momentoVideo = this.currentTime;
    var total = this.duration;
    var barra = document.getElementById("barraVideo");

    barra.value = (100 * momentoVideo) / total;
}