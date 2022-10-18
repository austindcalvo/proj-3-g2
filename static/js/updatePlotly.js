//============================================================================
// FUNCTION TO UPDATE THE VISUALIZATION FOR EACH SECTION OF THE DASHBOARD
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
        demoAmt.push(dataDemo[d].contribution_receipt_amount/1000000);
    };

    for(let r in dataRepu){
        repuState.push(dataRepu[r].contribution_state);
        repuAmt.push(dataRepu[r].contribution_receipt_amount/1000000);
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
        xaxis: {tickangle: -45, title: "Individual States"},
        yaxis:{title:"USD (millions)"},
        width: 1000
        
    };
      
      Plotly.newPlot('bar', data, layout);

      //***********************************************************/
      // IF BLOCK FOR 2016
      //Voter count, voter turnout, voter gender, voter ethnicity
      //**********************************************************/
      var ultimateColors = ['rgb(0, 48, 240)','rgb(215, 11, 11)'];   
      if (yearSelected === "2016") {

        var dataVoteCount = [{
          values: [61765290, 60335786],
          labels: ['D - Hillary Clinton', 'R - Donlad Trump'],
          marker: { colors:ultimateColors },
          type: 'pie',
          textinfo: "label+percent",
          textposition: "inside"
        }];
        
        var layoutVoteCount = {
          title: '2016 - Total Votes per Party',
          showlegend: false
        };

        var dataDemoGender = [{
           values: [746355, 746036, 149153],
           labels: ['Female', 'Male', 'Other'],
            type: 'pie',
            textinfo: "percent",
            textposition: "inside",
          }];
          
          var layoutDemoGender = {
            height: 400,
            width: 500,
            title: 'Voter Percentage Based On Gender',
            showlegend: true
          };

          var dataEthnic = [{
            values: [911619, 304386, 303992, 121547],
            labels: ['White', 'Black', 'Hispanic', 'Asian'],
            type: 'pie',
            textinfo: "percent",
            textposition: "inside",
            automargin: true
          }];
          
          var layoutEthnic = {
            height: 400,
            width: 500,
            title: 'Voter Percentage - Ethnicity',
            showlegend: true
          };

          var dataVoteGauge = [
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
          
          var layoutVoteGauge = { width: 500, height: 500 };
          

         Plotly.newPlot('total-votes', dataVoteCount, layoutVoteCount); //VoteCount
         Plotly.newPlot('demo-gender', dataDemoGender, layoutDemoGender); //Demo-Gender
         Plotly.newPlot('demo-ethnicty', dataEthnic, layoutEthnic); //Demo- Ethnic
         Plotly.newPlot('voter-turnout', dataVoteGauge, layoutVoteGauge); //VoteGauge

      } //END OF 2016

      //***********************************************************/
      // IF BLOCK FOR 2020
      // Voter count, voter turnout, voter gender, voter ethnicity
      //**********************************************************/
  
      else if (yearSelected === "2020") {
        var dataVoteCount = [{
          values: [77817344, 72196695],
          labels: ['D - Joe Biden', 'R - Donald Trump'],
          type: 'pie',
          marker:{colors:ultimateColors},
          textinfo: "label+percent",
          textposition: "inside",
        }];
        
        var layoutVoteCount = {
          title: '2020 - Total Votes per Party',
          showlegend: false
        };

        var dataDemoGender = [{
           values: [82154, 72474],
           labels: ['Female', 'Male'],
            type: 'pie',
            textinfo: "percent",
            textposition: "inside",
          }];
          
          var layoutDemoGender = {
            height: 400,
            width: 500,
            title: 'Voter Percentage - Gender',
            showlegend: true
          };

          var dataEthnic = [{
            values: [1098300, 189220, 164590, 68810],
            labels: ['White', 'Black', 'Hispanic', 'Asian'],
            type: 'pie',
            textinfo: "percent",
            textposition: "inside",
            automargin: true
          }];
          
          var layoutEthnic = {
            height: 400,
            width: 500,
            title: 'Voter Percentage - Ethnicity',
            showlegend: true
          };

          var dataVoteGauge = [
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
          
          var layoutVoteGauge = { width: 500, height: 400 };

        
         Plotly.newPlot('total-votes', dataVoteCount, layoutVoteCount); //VoteCount 
         Plotly.newPlot('demo-gender', dataDemoGender, layoutDemoGender); //Demo-Gender
         Plotly.newPlot('demo-ethnicty', dataEthnic, layoutEthnic); //Demo- Ethnic
         Plotly.newPlot('voter-turnout', dataVoteGauge, layoutVoteGauge); //VoteGauge
      };
      

};

