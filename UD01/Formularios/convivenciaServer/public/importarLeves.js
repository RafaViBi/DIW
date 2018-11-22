$.getJSON("http://localhost:3000/convivenciaLeve", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<tr><td id='" + val._id + "'> " + val.nombreAlumno + "<input class='eliminar' type='button' value='Eliminar' onclick='borrar()'>" + "</td></tr>");
  });

  $("<table/>", {
    "class": "table table-striped table-dark",
    html: items.join("")
  }).appendTo("#divListaLeves");
});

function borrar() {
  $.ajax ({
    type:'DELETE',
    url: '/convivencia/:' + this.id,
  })
}