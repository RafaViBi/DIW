document.addEventListener("DOMContentLoaded", cargar, false);

var acc;
var i;

function cargar() {

    document.getElementById("openNav").addEventListener("click", openNav);
    document.getElementById("closeNav").addEventListener("click", closeNav);
    acc = document.getElementsByClassName("accordion");

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    location.href = javascript.void(0);
}