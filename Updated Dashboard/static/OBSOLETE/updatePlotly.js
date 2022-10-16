//============================================================================
// FUNCTION TO UPDATE THE PLOTPLY
//============================================================================
function updatePlotly(yearSelected,dataDemo, dataRepu) {
    console.log(`Year: ${yearSelected}`);
    
    //***************************************************/
    // SECTION FOR CAMPAIGN FINANCE
    //***************************************************/

    //console.log(data[0].candidate_id);
    var demoState=[], demoAmt=[], repuState=[],repuAmt=[];

    //assigning the values for each Party
    for(let d in dataDemo){
        demoState.push(dataDemo[d].contribution_state);
        demoAmt.push(dataDemo[d].contribution_receipt_amount/100000);
    };

    for(let r in dataRepu){
        repuState.push(dataRepu[r].contribution_state);
        repuAmt.push(dataRepu[r].contribution_receipt_amount/100000);
    };

    var democrats = { //data for democrats
        x: demoState,
        y: demoAmt,
        name: 'Democrats',
        marker: {
            color: 'blue',
            opacity: 0.7
        },
        type: 'bar'
      };
      
      var republicans = { //data for republicans
        x: repuState,
        y: repuAmt,
        name: 'Republicans',
        marker: {
            color: 'red',
            opacity: 0.8
        },
        type: 'bar'
      };
      
      var data = [democrats, republicans];
      
      var layout = {
        barmode: 'group',
        title: 'Contribution Receipt Amount per Party',
        xaxis: {tickangle: -45},
    };
      
      Plotly.newPlot('bar', data, layout);

      //***************************************************/
      // SECTION FOR VOTER PREFERENCES
      //***************************************************/
    
      if (yearSelected === "2016") {

        var ultimateColors = [
            ['rgb(0,169,235)', 'rgb(226,19,28)'],
            ['rgb(0,169,235)', 'rgb(226,19,28)']
          ];

        var data = [{
          values: [61765290, 60335786],
          labels: ['D - Hillary Clinton', 'R - Donlad J Trump'],
          type: 'pie',
          textinfo: "percent",
          textposition: "inside",
        }];
        
        var layout = {
          height: 400,
          width: 500,
          title: '2016 - Total Votes per Party',
          showlegend: true
        };
        Plotly.newPlot('total-votes', data, layout);
      }
  
      else if (yearSelected === "2020") {
        var data = [{
          values: [77817344, 72196695],
          labels: ['D - Joe Biden', 'R - Donald J Trump'],
          type: 'pie',
          textinfo: "percent",
          textposition: "inside",
          automargin: true
        }];
        
        var layout = {
          height: 400,
          width: 500,
          title: '2020 - Total Votes per Party',
          showlegend: true
        };
        
        Plotly.newPlot('total-votes', data, layout);
      }
      console.log(`Year end of function: ${yearSelected}`);

      //***************************************************/
      //SECTION FOR DEMOGRAPHICAL INFORMATION - GENDER
      //***************************************************/
    
      if (yearSelected === "2016") {

        var data = [{
            values: [746355, 746036, 149153],
            labels: ['Female', 'Male', 'Other'],
            type: 'pie',
            textinfo: "percent",
            textposition: "inside",
          }];
          
          var layout = {
            height: 400,
            width: 500,
            title: 'Voter Percentage Based On Gender',
            showlegend: true
          };
          Plotly.newPlot('demo-gender', data, layout);

      }

      else if (yearSelected === "2020") {
        var data = [{
            values: [846355, 806036, 279153],
            labels: ['Female', 'Male', 'Other'],
            type: 'pie',
            textinfo: "percent",
            textposition: "inside",
          }];
          
          var layout = {
            height: 400,
            width: 500,
            title: 'Voter Percentage - Gender',
            showlegend: true
          };
          Plotly.newPlot('demo-gender', data, layout);
      }
   
      //***************************************************/
      //SECTION FOR DEMOGRAPHICAL INFORMATION - ETHNICITY
      //***************************************************/

      if (yearSelected === "2016") {

        var data = [{
            values: [911619, 304386, 303992, 121547],
            labels: ['White', 'black', 'Hispanic', 'Asian'],
            type: 'pie',
            textinfo: "percent",
            textposition: "inside",
            automargin: true
          }];
          
          var layout = {
            height: 400,
            width: 500,
            title: 'Voter Percentage - Ethnicity',
            showlegend: true
          };
          
          Plotly.newPlot('demo-ethnicty', data, layout);

      }

      else if (yearSelected === "2020") {
        var data = [{
          values: [1011619, 404386, 403992, 321547],
          labels: ['White', 'black', 'Hispanic', 'Asian'],
          type: 'pie',
          textinfo: "percent",
          textposition: "inside",
          automargin: true
        }];
        
        var layout = {
          height: 400,
          width: 500,
          title: 'Voter Percentage - Ethnicity',
          showlegend: true
        };
        
        Plotly.newPlot('demo-ethnicty', data, layout);
      }

      //***************************************************/
      //SECTION FOR VOTER TURNOUT
      //***************************************************/
      if (yearSelected === "2016"){
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: 136669276,
              title: { text: "Voter Turnout" },
              type: "indicator",
              mode: "gauge+number",
              delta: { reference: 0 },
              gauge: { axis: { range: [null, 230931921] } }
            }
          ];
          
          var layout = { width: 500, height: 400 };
          Plotly.newPlot('voter-turnout', data, layout);
      }

      else if (yearSelected === "2020"){
        var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: 159690457	,
              title: { text: "Voter Turnout" },
              type: "indicator",
              mode: "gauge+number",
              delta: { reference: 0 },
              gauge: { axis: { range: [null, 239247182] } }
            }
          ];
          
          var layout = { width: 500, height: 400 };
          Plotly.newPlot('voter-turnout', data, layout);
      }

};

