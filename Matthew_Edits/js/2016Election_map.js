// Creating the map object
// var myMap = L.map("map", {
//     center: [27.96044, -82.30695],
//     zoom: 7
//   });

// Creating the map object

var map = L.map('map').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(statesData).addTo(map);

//Example
  // var map = L.map("map", {
  //   center: [27.96044, -82.30695],
  //   zoom: 7
  // });
// var map = L.map('map').setView([37.8, -96], 4);
//Real

//Example
  // Adding the tile layer
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
  
  // // Load the GeoJSON data.
  // var geoData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/15-Mapping-Web/ACS-ED_2014-2018_Economic_Characteristics_FL.geojson";
  
  // var geojson;
  
  // // Get the data with d3.
  // d3.json(geoData).then(function(data) {
  //   console.log(data);
  //   // Create a new choropleth layer.
  //  geojson = L.choropleth(data, {
  
  //     // Define which property in the features to use.
  //     valueProperty: "DP03_16E",
  
  //     // Set the color scale.
  //     scale: ["#ffffb2", "#b10026"],
  
  //     // The number of breaks in the step range
  //     steps: 10,
  
  //     // q for quartile, e for equidistant, k for k-means
  //     mode: "q",
  //     style: {
  //       // Border color
  //       color: "#fff",
  //       weight: 1,
  //       fillOpacity: 0.8
  //     },
  
  //     // Binding a popup to each layer
  //     onEachFeature: function(feature, layer) {
  //       layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br /><br />Estimated employed population with children age 6-17: " +
  //         feature.properties.DP03_16E + "<br /><br />Estimated Total Income and Benefits for Families: $" + feature.properties.DP03_75E);
  //     }
  //   }).addTo(map);
  
  //   // Set up the legend.
  //   var legend = L.control({ position: "bottomright" });
  //   legend.onAdd = function() {
  //     var div = L.DomUtil.create("div", "info legend");
  //     var limits = geojson.options.limits;
  //     var colors = geojson.options.colors;
  //     var labels = [];
  
  //     // Add the minimum and maximum.
  //     var legendInfo = "<h1>Population with Children<br />(ages 6-17)</h1>" +
  //       "<div class=\"labels\">" +
  //         "<div class=\"min\">" + limits[0] + "</div>" +
  //         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
  //       "</div>";
  
  //     div.innerHTML = legendInfo;
  
  //     limits.forEach(function(limit, index) {
  //       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
  //     });
  
  //     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  //     return div;
  //   };
  
  //   // Adding the legend to the map
  //   legend.addTo(map);
  
  // });
  

//   var data = [{
//     type: 'choropleth',
//     locationmode: 'USA-states',
//     locations: unpack(rows, 'code'),
//     z: unpack(rows, 'total exports'),
//     text: unpack(rows, 'state'),
//     zmin: 0,
//     zmax: 17000,
//     colorscale: [
//         [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
//         [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
//         [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
//     ],  