$.getJSON("http://localhost:3000/convivenciaLeve", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    console.log(key);
    items.push("<tr><td> " + val.nombreAlumno + "</td></tr>");
  });


  $("<table/>", {
    "class": "table table-striped table-dark",
    html: items.join("")
  }).appendTo("#divListaLeves");
});


