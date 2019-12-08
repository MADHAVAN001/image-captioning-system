function word_cloud(myWords) {

    // List of words
    // let myWords = [{word: "Running", size: "10"}, {word: "Surfing", size: "20"}, {
    //     word: "Climbing",
    //     size: "50"
    // }, {word: "Kiting", size: "30"}, {word: "Sailing", size: "20"}, {word: "Snowboarding", size: "60"}];

    // set the dimensions and margins of the graph
    let margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 450 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    let svg = d3.select("#word-cloud").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    // Word cloud features that are different from one word to the other must be here
    let layout = d3.layout.cloud()
        .size([width, height])
        .words(myWords.map(function (d) {
            return {text: d.word, size: d.size};
        }))
        .padding(5)        //space between words
        .rotate(function () {
            return ~~(Math.random() * 2) * 90;
        })
        .fontSize(function (d) {
            return d.size;
        })      // font size of words
        .on("end", draw);
    layout.start();

    // This function takes the output of 'layout' above and draw the words
    // Wordcloud features that are THE SAME from one word to the other can be here
    function draw(words) {
        svg
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) {
                return d.size;
            })
            .style("fill", function (d) {
                return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            })
            .attr("text-anchor", "middle")
            .style("font-family", "Impact")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) {
                return d.text;
            });
    }
}

word_cloud_words = [{'word': 'the', 'size': '50.0'}, {'word': 'a', 'size': '49.5'}, {'word': '.', 'size': '49.0'}, {'word': 'of', 'size': '48.5'}, {'word': 'in', 'size': '48.0'}, {'word': 'on', 'size': '47.5'}, {'word': 'and', 'size': '47.0'}, {'word': ',', 'size': '46.5'}, {'word': 'with', 'size': '46.0'}, {'word': 'to', 'size': '45.5'}, {'word': 'person', 'size': '45.0'}, {'word': 'at', 'size': '44.5'}, {'word': 'for', 'size': '44.0'}, {'word': 'during', 'size': '43.5'}, {'word': '-', 'size': '43.0'}, {'word': 'is', 'size': '42.5'}, {'word': 'background', 'size': '42.0'}, {'word': 'from', 'size': '41.5'}, {'word': 'an', 'size': '41.0'}, {'word': 'white', 'size': '40.5'}, {'word': 'this', 'size': '40.0'}, {'word': 'by', 'size': '39.5'}, {'word': ':', 'size': '39.0'}, {'word': 'actor', 'size': '38.5'}, {'word': 'artist', 'size': '38.0'}, {'word': 'as', 'size': '37.5'}, {'word': 'player', 'size': '37.0'}, {'word': "'s", 'size': '36.5'}, {'word': 'up', 'size': '36.0'}, {'word': 'view', 'size': '35.5'}, {'word': 'his', 'size': '35.0'}, {'word': 'illustration', 'size': '34.5'}, {'word': 'man', 'size': '34.0'}, {'word': 'football', 'size': '33.5'}, {'word': '!', 'size': '33.0'}, {'word': 'premiere', 'size': '32.5'}, {'word': 'team', 'size': '32.0'}, {'word': 'city', 'size': '31.5'}, {'word': 'her', 'size': '31.0'}, {'word': 'woman', 'size': '30.5'}, {'word': 'image', 'size': '30.0'}, {'word': 'that', 'size': '29.5'}, {'word': 'i', 'size': '29.0'}, {'word': 'against', 'size': '28.5'}, {'word': 'young', 'size': '28.0'}, {'word': 'day', 'size': '27.5'}, {'word': 'vector', 'size': '27.0'}, {'word': 'are', 'size': '26.5'}, {'word': 'you', 'size': '26.0'}, {'word': 'it', 'size': '25.5'}, {'word': 'stage', 'size': '25.0'}, {'word': 'over', 'size': '24.5'}, {'word': 'game', 'size': '24.0'}, {'word': 'black', 'size': '23.5'}, {'word': 'after', 'size': '23.0'}, {'word': 'out', 'size': '22.5'}, {'word': 'beach', 'size': '22.0'}, {'word': 'tree', 'size': '21.5'}, {'word': 'people', 'size': '21.0'}, {'word': 'was', 'size': '20.5'}, {'word': 'red', 'size': '20.0'}, {'word': 'girl', 'size': '19.5'}, {'word': 'their', 'size': '19.0'}, {'word': 'playing', 'size': '18.5'}, {'word': 'your', 'size': '18.0'}, {'word': 'attends', 'size': '17.5'}, {'word': 'night', 'size': '17.0'}, {'word': 'blue', 'size': '16.5'}, {'word': 'film', 'size': '16.0'}, {'word': 'water', 'size': '15.5'}, {'word': 'photo', 'size': '15.0'}, {'word': 'performs', 'size': '14.5'}, {'word': 'room', 'size': '14.0'}, {'word': 'house', 'size': '13.5'}, {'word': 'isolated', 'size': '13.0'}, {'word': 'show', 'size': '12.5'}, {'word': 'new', 'size': '12.0'}, {'word': 'festival', 'size': '11.5'}, {'word': 'beautiful', 'size': '11.0'}, {'word': 'old', 'size': '10.5'}, {'word': 'home', 'size': '10.0'}, {'word': 'into', 'size': '9.5'}, {'word': 'be', 'size': '9.0'}, {'word': 'through', 'size': '8.5'}, {'word': 'fashion', 'size': '8.0'}, {'word': 'match', 'size': '7.5'}, {'word': '#', 'size': '7.0'}, {'word': 'all', 'size': '6.5'}, {'word': 'looking', 'size': '6.0'}, {'word': 'car', 'size': '5.5'}, {'word': 'musical', 'size': '5.0'}, {'word': 'first', 'size': '4.5'}, {'word': 'portrait', 'size': '4.0'}, {'word': 'sky', 'size': '3.5'}, {'word': 'my', 'size': '3.0'}, {'word': 'like', 'size': '2.5'}, {'word': 'may', 'size': '2.0'}, {'word': 'sitting', 'size': '1.5'}, {'word': 'world', 'size': '1.0'}, {'word': 'sports', 'size': '0.5'}];

word_cloud(word_cloud_words);