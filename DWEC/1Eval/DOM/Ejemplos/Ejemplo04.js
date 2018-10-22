/* document.getElementById("uno").addEventListener("onclick",coordenadas(),false);

function coordenadas(element) {
    console.log(element.screenX);
    console.log(element.screenY);
} */

document.getElementById("uno").addEventListener("click", function( event ) {
    console.log(event.screenX);
    console.log(event.screenY);
  }, false);