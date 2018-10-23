document.getElementById("uno").addEventListener("click", function (event) {
    alert("X: " + event.screenX + " Y: " + event.screenY);
}, false);

document.getElementById("btn1").addEventListener("click",function (event) {
    alert("Has pulsado el boton " + this.id);
},false);

document.getElementById("btn2").addEventListener("click",function (event) {
    var x = new Event("click");
    document.getElementById("btn1").dispatchEvent(x);
},false);