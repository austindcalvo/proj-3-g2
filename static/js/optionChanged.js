//============================================================================
// FUNCTION THAT MANAGES THE EVENT ON DROPDOWN CHANGE
//============================================================================

const baseUrl="https://api.open.fec.gov/v1/presidential/contributions/by_state/?per_page=100&candidate_id=P00000002&candidate_id=P00000003&election_year=";
const api_key ="&api_key=DEMO_KEY"; //Test API Key provided by OpenFEC


function optionChanged(value){
   
    const url = baseUrl + value + api_key;
    console.log(url);
    L.DomUtil.remove('div', 'info');
 
     d3.json(url).then(function(response) {
         
        let sampleData = Object.values(response.results);
        
        console.log(`Candidate Id ${sampleData[0].candidate_id}`);
 
        //Separating Democrats from Republicians
        let demo_list=[], repu_list=[];
               
        //candidate_id=="P00000002" ==> Democrates
        //candidate_id=="P00000003" ==> Republicians
 
        console.log(`SampleDatalength: ${sampleData.length}`);
     
        for (let d = 0; d<sampleData.length;d++){
         if(sampleData[d].candidate_id=="P00000002"){
             demo_list.push(sampleData[d]);
 
         }else if(sampleData[d].candidate_id=="P00000003"){
             repu_list.push(sampleData[d]);
         };
 
        };
         
        updatePlotly(value,demo_list,repu_list);
        
                
        //Map Update based on year selected
        if (value == "2016"){
           
            initMap(statesData2016);
            
        }else if (value == "2020"){
           
            initMap(statesData2020);
        };
        
 
     });
 };