auxId = location.search.substring(1,location.search.length);  

$.getJSON("http://localhost:3000/convivencia/"+auxId, function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<div class='form-group row'>");
      items.push("<label for='alumno' class='col-sm-2 col-form-label'>ALUMNE/A</label>");
      items.push("<div class='col-sm-7'>");
        items.push("<input name='nombreAlumno' type='text' class='form-control' id='alumno' value=" + val.nombreAlumno + ">");
      items.push("</div>");
      items.push("<label for='grupo' class='col-sm-1 col-form-label'>GRUP</label>");
      items.push("<div class='col-sm-2'>");
        items.push("<input name='grupoAlumno' type='text' class='form-control' id='grupo' value=" + val.grupoAlumno + ">");
      items.push("</div>");
    items.push("</div>");
  });

  $("<form/>", {
    "method": "POST",
    "action": "http://localhost:3000/convivencia/",
    html: items.join("")
  }).appendTo("#modificarFalta");
});