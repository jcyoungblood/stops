var d3 = require("d3");
var turf = require("@turf/turf")
var fs = require('fs');

fs.readFile("route.csv", "utf8", function(error, data) {
  data = d3.csvParse(data);
  console.log(data);

  var line =[]
  for (var i=0; i<data.length; i++){
    line.push([+data[i].lng, +data[i].lat])
  }

  var geo_line = turf.lineString(line);
  console.log(geo_line);
  fs.writeFileSync('bu_route.geojson', JSON.stringify(geo_line));
});
