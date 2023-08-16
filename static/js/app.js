// check connection between app.js and index.html
console.log("Test for connection -- Good")


/*
1) Use the D3 library to read in samples.json from the URL:
 https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json
*/

// Create const variable to samples.json from Amazon server
const sample_json = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// Fetch the JSON data and view in console log
d3.json(sample_json).then(function(data) {
    // console.log("Testing sample_json data")
    // console.log(data);    
});

/*
Swap the order of  performing Steps 2 and 3 from the instructions, but create the function to build both charts.
Console log steps in process with to verify all variables.
*/

// Create chart building function for data -- this will be for both bar and bubble charts
function data_charts(samples) {
    console.log("Testing the data_charts function");
    d3.json(sample_json).then(function(data) {
        console.log("Testing sample_json data")
        console.log(data);

        // Build chart data equal to data.samples from the console log
        let chartData = data.samples;
        console.log(chartData);

        // begin filtering the samples into Array
        let dataArray = chartData.filter(samplesObject => samplesObject.id == samples);
        console.log(dataArray);

        // unpack Object from the Array
        let showResult = dataArray[0];
        console.log(showResult);

        // Create chart variables
        let sample_values = showResult.sample_values;
        console.log(sample_values);

        let otu_ids = showResult.otu_ids;
        console.log(otu_ids);

        let otu_labels = showResult.otu_labels;
        console.log(otu_labels);

        // Build bubble-chart
        /*  
            3) Create a bubble chart that displays each sample.
                * Use 'otu_ids' for the x values.
                * Use 'sample_values' for the y values.
                * Use 'sample_values' for the marker size.
                * Use 'otu_ids' for the marker colors.
                * Use 'otu_labels' for the text values.
        */
        let bubbleTrace = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        };

        let bubbleData = [bubbleTrace];

        let bubbleLayout = {
            title: 'Presense of OTUs per Sample',
            showlegend: false,
            xaxis: {title: 'OTU ID'},
            yaxis: {title: 'sample count'}
        };

        // Build bubble-chart at <div id="bubble"></div>
        Plotly.newPlot('bubble', bubbleData, bubbleLayout);

        // Build horizontal bar chart
        /*
            2) Create a horizontal bar chart with a dropdown menu to display the Top 10 OTUs found in that individual.
                * Use 'sample_values' as the values for the bar chart.
                * Use 'otu_ids' as the labels for the bar chart.
                * Use 'otu_labels' as the hovertext for the chart.
        */
        let barData = [{
            type: 'bar',
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map(OTUs => `OTU ${OTUs}`).reverse(),
            text: otu_labels.slice(0,10).reverse(),
            orientation: 'h'
        }];

        let barLayout = {
            title: 'Top 10 OTUs',

        };

        // Build horizontal-bar-chart at <div id="bar"></div>
        Plotly.newPlot('bar', barData, barLayout);

    });
};


/*
4) Display the sample metadata, i.e., an individual's demographic information.
*/



/*
5) Display each key-value pair from the metadata JSON object somewhere on the page.
*/



/*
6) Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.
*/



/*

*/



// Create 'jumpstart' function to initialize other functions when/where needed
function jumpstart() {

    // initialize data_charts function
    data_charts(940);

};

jumpstart();



