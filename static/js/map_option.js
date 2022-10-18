function initMap(statesData){
   
   L.geoJson(statesData).addTo(map);
   
    function style(feature) {
        
        return {
            fillColor: feature.properties.RepTotalVotes>feature.properties.DemoTotalVotes ? 'red':'blue',
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.5
        };
    
    };

    var geojson= L.geoJson(statesData, {style: style}).addTo(map);

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
            
        }
        
        info.update(layer.feature.properties);
        
    };


    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
        
    };


    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight
        });
        
    }

    geojson = L.geoJson(statesData, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);


    var info = L.control();
  

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    
    };

    info.onRemove= function(map) {
             
        
    };

    // method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        this._div.innerHTML = '<h4>State Election Results</h4>' +  (props ?
        '<b>' + props.name + '</b><br />Republican Votes: ' + props.RepTotalVotes + '</b><br />Democratic Votes: ' +props.DemoTotalVotes 
        : 'Hover over a state');
        
    };

    info.addTo(map);
   
   

};