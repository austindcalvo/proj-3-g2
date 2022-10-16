//============================================================================
// FUNCTION TO POPULATE THE DROPDOWN
//============================================================================

let dropdown = document.getElementById('selElectionYear');
let defaultOption = document.createElement('option');

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

};

initDropDown();