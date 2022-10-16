//============================================================================
// FUNCTION TO POPULATE THE DROPDOWN
//============================================================================

let dropdown = document.getElementById('selElectionYear');
let defaultOption = document.createElement('option');

var map = L.map('map').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 


function initDropDown(){
    let option;
    let electionYear=[2016,2020];
     defaultOption.text = "Year";
     dropdown.add(defaultOption);

    for (let i =0; i<electionYear.length; i++){
        option=document.createElement('option');
        option.text=electionYear[i];
        dropdown.add(option);
    };


//L.geoJson(statesData).addTo(map);


};

initDropDown();