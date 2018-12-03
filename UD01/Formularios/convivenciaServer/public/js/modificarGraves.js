auxId = location.search.substring(1,location.search.length);
ruta = "http://localhost:3000/convivencia/"+auxId;

$.getJSON(ruta, function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<label for='alumno' class='col-sm-2 col-form-label'>ALUMNE/A</label>");
  });

  $("<div/>", {
    html: items.join("")
  }).appendTo("#modificarFalta");
});