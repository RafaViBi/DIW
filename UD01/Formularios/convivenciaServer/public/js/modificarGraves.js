$.getJSON("http://localhost:3000/convivenciaGrave", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<input name='nombreAlumno' type='text' class='form-control' id='alumno' value=" + val.nombreAlumno + ">");
  });

  $("<table/>", {
    "class": "table table-striped table-dark",
    html: items.join("")
  }).appendTo("#divListaGraves");
});