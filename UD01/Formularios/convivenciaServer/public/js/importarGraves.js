function deleteFalta(auxId){
  $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/convivencia/"+auxId,
    data: "",
  });
  setInterval(function() {
    window.location.reload();
  }, 50); 
}

function modificarIncidencia(auxId) {
  window.location.href='../modificarGraves.html?' + auxId;
}

$.getJSON("http://localhost:3000/convivenciaGrave", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<tr><td> " + val.nombreAlumno + " / " + val.nombreProfesor + " / " + val.fechaHoy + "<input type='submit' class='modificar' value='Modificar' onclick='modificarIncidencia(\"" + val._id + "\")' ><input class='eliminar' type='submit' value='Eliminar' onclick='deleteFalta(\"" + val._id + "\")'></td></tr>");
  });

  $("<table/>", {
    "class": "table table-striped table-dark",
    html: items.join("")
  }).appendTo("#divListaGraves");
});