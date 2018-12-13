auxId = location.search.substring(1, location.search.length);
ruta = "http://localhost:3000/convivencia/" + auxId;
var camposMostrar = ["nombreAlumno", "grupoAlumno", "nombreProfesor", "horarioAtencion", "fechaIncidente", "horaIncidente", "lugarIncidente", "telefonoPadres", "emailPadres", "fechaHoy"];

$.getJSON(ruta, function (data) {
  var items = [];
  $.each(data, function (key, val) {
    if (camposMostrar.includes(key)) {
      items.push("<label>" + key + "</label><br>");
      items.push("<input name='" + val + "' value='" + val + "'></input> <input type='submit' value='Modificar campo' onclick='renovarCampo()'> <br>");
    }
  });

  $("<div/>", {
    html: items.join("")
  }).appendTo("#modificarFalta");
});

function renovarCampo(auxId) {
  $.ajax({
    type: "PUT",
    url: "http://localhost:3000/convivencia/" + auxId,
    data: "",
  });
  setInterval(function () {
    window.location.reload();
  }, 50);
}