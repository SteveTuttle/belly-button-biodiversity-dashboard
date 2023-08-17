// BONUS - - Advanced Challenge Assignment
// check connection between bonus.js and index.html
console.log("Testing connection for bonus.js");

/*
Criteria for the Bonus:
    * Adapt the Gauge Chart from Guage Charts in JavaScript website: 
    'https://plotly.com/javascript/gauge-charts/' to plot the weekly washing frequency of the individual. []
    * You will need to modify the example gauge code to account for values ranging from 0 through 9. []
    * Update the chart whenever a new sample is selected. []
*/

function bonusGauge(wfreq) {

let gaugeData = [
    {
        domain: { x: [0, 1], y: [0, 1] },
        value: wfreq,
        title: { text: 'Belly Button Washing Frequency <br> Scrubs per Week' },
        type: 'indicator',
        mode: 'gauge+number',
        gauge: {
            axis: { range: [null, 9] },
            steps: [
                // set color range for gauge to 'Greens' scale from least (lightest) to greatest (darkest)
              { range: [0, 1], color: "#f0f4c3" },
              { range: [1, 2], color: "#dce775" },
              { range: [2, 3], color: "#aed581" },
              { range: [3, 4], color: "#81c784" },
              { range: [4, 5], color: "#66bb6a" },
              { range: [5, 6], color: "#4caf50" },
              { range: [6, 7], color: "#43a047" },
              { range: [7, 8], color: "#388e3c" },
              { range: [8, 9], color: "#1b5e20" },
            ],           
        },
    }
];


let gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0},  };

// build a guage-chart at <div id="gauge"></div> from index.html
Plotly.newPlot('gauge', gaugeData, gaugeLayout);

};

