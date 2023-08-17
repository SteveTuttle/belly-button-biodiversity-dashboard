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
        title: { text: 'Belly Button Washing Frequency' },
        type: 'indicator',
        mode: 'gauge+number'
    }
];

let gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0} };

// build a guage-chart at <div id="gauge"></div>
Plotly.newPlot('gauge', gaugeData, gaugeLayout);

};

