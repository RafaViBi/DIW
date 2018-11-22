function deleteFalta(auxId){
  console.log(auxId);
  $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/convivencia/"+auxId,
    data: "",
    success: function(msg){
        location.reload();
    }
  });
}

$.getJSON("http://localhost:3000/convivenciaLeve", function (data) {
  var items = [];
  $.each(data, function (key, val) {
    items.push("<tr><td> " + val.nombreAlumno + "<input class='eliminar' type='submit' value='Eliminar' onclick='deleteFalta(\"" + val._id + "\")'></td></tr>");
  });

  $("<table/>", {
    "class": "table table-striped table-dark",
    html: items.join("")
  }).appendTo("#divListaLeves");
});