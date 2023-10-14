const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

function init() {   // this is the dropdown function, just need the dropdown here and store? the result and output that to chart and bubble and demo

    d3.json(url).then((data) => {
        let subject_id = data.names;
        let dropdown = d3.select("#selDataset");

        for (let i = 0; i < subject_id.length; i++){   // .forEach per TA Paveen? shorter version of what is here...
        dropdown
            .append("option")
            .text(subject_id[i])
            .property("value", subject_id[i])
        }
    console.log(subject_id[0])
        metaData(subject_id[0])   // callilng function below with subject_id[0]
        chart(subject_id[0])            
        
    //     let meta_info = d3.select("#sample-metadata");

    //         d3.json(url).then(function(m) {          // anytime you use d3.json in it shouldn't be set to a variable bc then the data isn't available outside of that variable
    //         let m_id = m.metadata.map(m => m.id);
    //         let m_ethnicity = m.metadata.map(m => m.ethnicity);

        // let bubble_chart = d3.select("#bubble");
        // console.log(meta_data)
        // });
    })};

    init (); // calling function init, allows you to call if it needed

    challenge_data = d3.json(url)
    console.log(challenge_data)

function optionChanged(new_id) {
    // d3.selectAll("#selDataset").on("change", updatePlotly) // updatePlotly here is calling the function which we don't have
    chart(new_id)
    metaData(new_id)
};

//                         // <select id="selDataset" onchange="optionChanged(this.value)"></select> WHERE DOES THIS GO? HOW TO IMPLEMENT?
//                         // use a .filter somewhere for id, etc.?

function metaData(new_id) {

    d3.json(url).then((data) => {
        let data_meta = data.metadata;
        let results_meta = data_meta.filter(data_meta => data_meta.id == new_id);  // filters by id, but still shows everything...
        let meta_pull = results_meta[0];

        let metaText = d3.select("#sample-metadata");

        metaText.html("")  // empties out upon change in id, code below is help from LA sunshine
        for (key in meta_pull){
            metaText
                .append("h6")   // size of text, but what is the actual syntax or parameter that goes in here?
                .text(`${key.toLowerCase()}: ${meta_pull[key]}`);   // how to access a dictionary and iterate through it
          };
        });
    };

function chart(new_id) {

    // use the .find to grab info with id
    // const desiredObject = myArray.find(item => item.id === 2);

    let bar_chart = d3.select("#bar");
    d3.json(url).then((data) => {
        let raw_data = data.samples;
        let interestArray = raw_data.filter(new_idObj => new_idObj.id == new_id);
        let interest = interestArray[0];

        let sample_values = interest.sample_values
        let sample_values_bar = sample_values.slice(0, 10).reverse()

        let otu_ids = interest.otu_ids;
        let otu_ids_bar = otu_ids.slice(0, 10).map((otu_ids) => `OTU ${otu_ids}  `).reverse()  // inspiration from TA paveen

        let labels = interest.otu_labels;
        let labels_bar = labels.slice(0, 10).reverse()
    
                            // let raw_data_sorted = raw_data.sort(function sortFunction(a, b) {   // USE .FILTER INSTEAD...
                            //     return b - a;
                            //   });

                            // let raw_data_sliced = raw_data_sorted.slice(0, 10);  // this returned first 10 ids, not otu_ids...
                            // let raw_data_sliced = raw_data_sorted.filter(raw_data_sorted => raw_data_sorted.sample_values.slice(0, 10));

                                            // let xData = raw_data_sorted.map(function(x){
                                            //     return x.sample_values
                                            // });
                                            // let yData = raw_data_sorted.map(function(y){
                                            //     return y.otu_ids
                                            // });
                                            // let labels = raw_data_sorted.map(function(l){
                                            //     return l.otu_labels
                                            // });
        let trace_bar = {
            x: sample_values_bar,
            y: otu_ids_bar,
            type: "bar",
            orientation: "h",
            hovertext: labels_bar
        };

        let chart_display = [trace_bar];   

        Plotly.newPlot("bar", chart_display);

        // bar_chart.html("")   // was not needed after all...
        //     bar_chart
        //         .append(trace_bar)   
        
        let bubble_chart = d3.select("#bubble");

        let trace_bubble = {
            x: otu_ids,
            y: sample_values,
            mode: 'markers',   // inspiration from chatGPT, all the way down to text
            marker: {          // mode: markers is what makes it a bubble chart! size, color, and text are different lingo for doing the same thing...
                size: sample_values,
                color: otu_ids,
            },
            text: labels
        };

        bubble_display = [trace_bubble];

        let layout = {
            xaxis: {title: "OTU ID"}
        };

        Plotly.newPlot('bubble', bubble_display, layout);

        });

// console.log(raw_data);
        // console.log(sample_values_final);
        // console.log(otu_ids_final);
        // console.log(labels_final);
        // console.log(interest);
    };
