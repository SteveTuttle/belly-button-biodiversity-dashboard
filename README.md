# belly-button-challenge
UNC_data_bootcamp_module_14

## Challenge Description
### Background
> This dataset reveals that a small handful of microbial species (_also called operational taxonomic units, or OTUs, in the study_) were present in more than 70% of people, while the rest were relatively rare.

***from the UNC Bootcamp instructions for this challenge***


## Deliverables
In this challenge, I will need to build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The completed dashboard, with all visualizations can be viewed on the following GitHub Pages site:

[stevetuttle.github/belly-button-challenge](https://stevetuttle.github.io/belly-button-challenge/)

### Challenge Instructions
Complete the following steps:
1) Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.
2) Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  * Use `sample_values` as the _values_ for the bar chart.
  * Use `otu_ids` as the _labels_ for the bar chart.
  * Use `otu_labels` as the _hovertext_ for the chart.

![Top 10 OTU]   placeholder

3) Create a bubble chart that displays each sample.
  * Use `otu_ids` for the __x__ values.
  * Use `sample_values` for the __y__ values.
  * Use `sample_values` for the _marker size_.
  * Use `otu_ids` for the _marker colors_.
  * Use `otu_labels` for the _text values_.

![Bubble Chart]  placeholder

4) Display the sample metadata, i.e., an individual's demographic information.
5) Display each key-value pair from the metadata JSON object somewhere on the page.

![Demographic Info]  placeholder

6) Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

_An example dashboard is shown as follows_:

![Belly Button DB example]

7) Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file


### Advanced Challenge Assignment
The following task is advanced and therefore optional.
* Adapt the Gauge Chart from [Gauge Charts in JavaScript](https://plotly.com/javascript/gauge-charts/) example to plot the weekly washing frequency of the individual.
* You will need to modify the example gauge code to account for values ranging from 0 through 9.
* Update the chart whenever a new sample is selected.

![Belly Button Wash Frequency]

## Resources
### Bootcamp References -- update later
Module 14 Instructions

Starter_Code
* index.html
* samples.json

static/js
* .gitkeep
* app.js


Example Data:

output_data
* cities.csv
* Fig1.png


***Special Thanks:***
* Jamie Miller
* Mounika Mamindla
* Lisa Shemanciik

### External References
_(where possible will provide link to website)_
* [pandas documentation](https://pandas.pydata.org/docs/reference/general_functions.html)
* [matplotlib documentation](https://matplotlib.org/stable/index.html)
* [hvplot documentation](https://hvplot.holoviz.org/reference/geopandas/points.html)
* [scipy.stats documentation](https://docs.scipy.org/doc/scipy/reference/stats.html)
* [Plotly horizontal-bar-charts in JavaScript](https://plotly.com/javascript/horizontal-bar-charts/)
* [Plotly bubble-charts in JavaScript](https://plotly.com/javascript/bubble-charts/)
* [Plotly colorscales in JavaScript](https://plotly.com/javascript/colorscales/)
* [Plotly text-and-annotations in JavaScript](https://plotly.com/javascript/text-and-annotations/)

