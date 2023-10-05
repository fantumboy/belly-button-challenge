const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

challenge_data = d3.json(url)
console.log(challenge_data)

challenge_data = d3.json(url).then(function(s) {
    let s_id = s.samples.map(s => s.id);
    let s_otuid = s.samples.map(s => s.otu_ids);
    let s_sv = s.samples.map(s => s.sample_values);
    console.log(s_id) // this is calling the whole thing when not mapped
})

                    // four functions? relatively simple? need xxx => xxx somewhere with d3...
                    //      function build metaData, 
                    //      function build charts, 
                    //      function init, 
                    //      function option change
                    //      d3.json ... => {let... , let..., let... , etc.}

function metaData() {

// .sample-metadata
// keys-values?

challenge_data = d3.json(url).then(function(m) {
    let m_id = m.metadata.map(m => m.id);
    let m_ethnicity = m.metadata.map(m => m.ethnicity);
    let m_gender = m.metadata.map(m => m.gender);
    let m_age = m.metadata.map(m => m.age);
    let m_location = m.metadata.map(m => m.location);
    let m_bbtype = m.metadata.map(m => m.bbtype); // (str)
    let m_wfreq = m.metadata.map(m => m.wfreq); // (int)
            // console.log(m_id); // this is calling just the ids
            // console.log(m_ethnicity);
            // console.log(m_gender);
            // console.log(m_age);
            // console.log(m_location);
            // console.log(m_bbtype);
            // console.log(m_wfreq)
    // d3.select(".sample-metadata")
    // "id: " : m_id[xxx];
    // "ethnicity: " : m_ethnicity[xxx];
    // "gender: " : m_gender[xxx];
    // "age: " : m_age[xxx];
    // "location: " : m_location[xxx];
    // "bbtype: " : m_bbtype[xxx];
    // "wfreq: " : m_wfreq[xxx]

    // let xxx = Object.values(m.xxx[ggg]);
    // let xxx = Object.keys(m.xxx[ggg]);

})};

// function chart() {  // UNCOMMENT HERE!!

    // d3.select("#bar");
    // d3.select("#bubble");

//     let sortedData = s_sv.sort((a, b) => b.s_sv - a.s_sv);
//     let slicedData = sortedData.slice(0, 10);
//     slicedData.reverse();

//     let trace1 = {
        // x: slicedData.map(s_sv[1]), // object => object.
        // y: slicedData.map(s_otuid[1]), // object => object.
        //   text: slicedData.map(object => object.greekName),
        //   name: "Greek", // prob del
        // hovertext: xxx,
        
//     };

//     // Data array
//     let data = [trace1];

//     // Render the plot to the div tag with id "plot"
//     Plotly.newPlot("bar", data);

// }
// for the hbar graph
//    2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//        Use sample_values as the values for the bar chart.
//        Use otu_ids as the labels for the bar chart.
//        Use otu_labels as the hovertext for the chart.

function init() {   // this is the dropdown function, just need the dropdown here and store? the result and output that to chart and bubble and demo

//     let dropdown = d3.select("#selDataset"); // per TA mark
//     let selection = dropdown.property("value");
//     let output = [{
//         values: s_sv[0],
//         labels: s_otuid[0],
//         // hovertext: "text",  // s_otulabels, need to create
//         type: "bar",
//         orientation: "h"
// }]
// };
    let dropdown = d3.select("#selDataset").html;
    d3.json(url).then((data) => {
        let subject_id = data.names;
        for (let i = 0; i < subject_id.length; i++){
        dropdown
            .append("option")
            .text(subject_id[i])
            .property("value", subject_id[i])
        // let selection = dropdown.value;
        };
    });
};

init ();


// Initializes the page with a default plot
// function init() {
//     data = [{
//       x: [1, 2, 3, 4, 5],
//       y: [1, 2, 4, 8, 16] }];
  
//     Plotly.newPlot("plot", data);
//   }
  
  
//     // Initialize x and y arrays
//     let x = [];
//     let y = [];
  
//     if (dataset === 'dataset1') {
//       x = [1, 2, 3, 4, 5];
//       y = [1, 2, 4, 8, 16];
//     }
  
//     else if (dataset === 'dataset2') {
//       x = [10, 20, 30, 40, 50];
//       y = [1, 10, 100, 1000, 10000];
//     }
  
//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle("plot", "x", [x]);
//     Plotly.restyle("plot", "y", [y]);
//   }  

// init();


// function change() // UNCOMMENT HERE!!

//   d3.selectAll("#selDataset").on("change", updatePlotly);
  
//   // This function is called when a dropdown menu item is selected
//   function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     let dropdown = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     let dataset = dropdown.property("value");


// test subject id no in dropdown
// d3.select("#selDataset").html

// slicedData 

// Sort the data by Greek search results descending
// let sortedByGreekSearch = searchResults.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// Slice the first 10 objects for plotting
// let slicedData = sortedByGreekSearch.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
// slicedData.reverse();

// Trace1 for the Greek Data
// let trace1 = {
//   x: slicedData.map(object => object.greekSearchResults),
//   y: slicedData.map(object => object.greekName),
//   text: slicedData.map(object => object.greekName),
//   name: "Greek",
//   type: "bar",
//   orientation: "h"
// };

// Data array
// let data = [trace1];

// Apply a title to the layout
// let layout = {
//   title: "Popular Roman gods search results"
// };

// Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", data, layout);


// Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", data, layout);
