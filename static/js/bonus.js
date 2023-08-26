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
// Build gauge chart (with needle pointer)
function bonusGauge(wfreq) {

let gaugeData = [
    {
        domain: { x: [0, 1], y: [0, 1] },
        value: wfreq,
        title: { text: 'Belly Button Washing Frequency <br> Scrubs per Week' },
        type: 'indicator',
        mode: 'gauge',        
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

// Calculate coordinates and direction of the needle pointer
let angle = 180 - (wfreq / 9) * 180;
let r = 0.4;
let x_head = r * Math.cos(Math.PI / 180 * angle);
let y_head = r * Math.sin(Math.PI / 180 * angle);

// Proportions of gauge needle radius
let arrowBaseWidth = 0.08; 
let arrowPointWidth = 0.02; 

// Arrow head and base points of the gauge needle
let arrowShape = [
    // Left base point
    0.5 - arrowBaseWidth / 2, 0.23,
    // Right base point
    0.5 + arrowBaseWidth / 2, 0.23,
    // Arrow points
    0.5 + arrowPointWidth / 2 + x_head, 0.23 + y_head,
    0.5 - arrowPointWidth / 2 + x_head, 0.23 + y_head
];

let arrowPath = `M ${arrowShape[0]} ${arrowShape[1]} L ${arrowShape[2]} ${arrowShape[3]} L ${arrowShape[4]} ${arrowShape[5]} L ${arrowShape[6]} ${arrowShape[7]} Z`;


let gaugeLayout = {
    xaxis: { range: [0, 1], showgrid: false, zeroline: false, visible: false },
    yaxis: { range: [0, 1], showgrid: false, zeroline: false, visible: false },
    showlegend: false,
    shapes: [
        {
            type: 'path',
            path: arrowPath,
            fillcolor: 'darkred',
            line: { color: 'darkred' }
        }
    ]
};


// build a guage-chart at <div id="gauge"></div> from index.html
Plotly.newPlot('gauge', gaugeData, gaugeLayout);

};

