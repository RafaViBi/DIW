function onSubmit(form) {

  var data = JSON.stringify($(form).serializeArray()); //  <-----------
  console.log(data);
  return false; //don't submit
}

function visibilidadLeve() {
  document.getElementById("leve").style.visibility="visible";
  document.getElementById("grave").style.visibility="hidden";
}

function visibilidadGrave() {
  document.getElementById("grave").style.visibility="visible";
  document.getElementById("leve").style.visibility="hidden";
}

function returnMenu() {
  location.href='http://localhost:3000/menu.html';
}