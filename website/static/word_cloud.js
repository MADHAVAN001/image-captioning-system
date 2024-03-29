function word_cloud(myWords, div_id) {

    // set the dimensions and margins of the graph
    let margin = {top: 10, right: 10, bottom: 10, left: 10},
        width = 450 - margin.left - margin.right,
        height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    let svg = d3.select(div_id).append("svg")
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

word_cloud_words = [{'word': 'the', 'size': '50.0'}, {'word': 'a', 'size': '49.5'}, {'word': 'of', 'size': '49.0'}, {'word': 'in', 'size': '48.5'}, {'word': 'on', 'size': '48.0'}, {'word': 'and', 'size': '47.5'}, {'word': 'with', 'size': '47.0'}, {'word': 'to', 'size': '46.5'}, {'word': 'person', 'size': '46.0'}, {'word': 'at', 'size': '45.5'}, {'word': 'for', 'size': '45.0'}, {'word': 'during', 'size': '44.5'}, {'word': 'is', 'size': '44.0'}, {'word': 'background', 'size': '43.5'}, {'word': 'from', 'size': '43.0'}, {'word': 'an', 'size': '42.5'}, {'word': 'white', 'size': '42.0'}, {'word': 'this', 'size': '41.5'}, {'word': 'by', 'size': '41.0'}, {'word': 'actor', 'size': '40.5'}, {'word': 'artist', 'size': '40.0'}, {'word': 'as', 'size': '39.5'}, {'word': 's', 'size': '39.0'}, {'word': 'player', 'size': '38.5'}, {'word': 'up', 'size': '38.0'}, {'word': 'view', 'size': '37.5'}, {'word': 'his', 'size': '37.0'}, {'word': 'illustration', 'size': '36.5'}, {'word': 'man', 'size': '36.0'}, {'word': 'football', 'size': '35.5'}, {'word': 'premiere', 'size': '35.0'}, {'word': 'team', 'size': '34.5'}, {'word': 'city', 'size': '34.0'}, {'word': 'her', 'size': '33.5'}, {'word': 'woman', 'size': '33.0'}, {'word': 'image', 'size': '32.5'}, {'word': 'that', 'size': '32.0'}, {'word': 'i', 'size': '31.5'}, {'word': 'against', 'size': '31.0'}, {'word': 'young', 'size': '30.5'}, {'word': 'day', 'size': '30.0'}, {'word': 'vector', 'size': '29.5'}, {'word': 'are', 'size': '29.0'}, {'word': 'you', 'size': '28.5'}, {'word': 'it', 'size': '28.0'}, {'word': 'stage', 'size': '27.5'}, {'word': 'over', 'size': '27.0'}, {'word': 'game', 'size': '26.5'}, {'word': 'black', 'size': '26.0'}, {'word': 'after', 'size': '25.5'}, {'word': 'out', 'size': '25.0'}, {'word': 'beach', 'size': '24.5'}, {'word': 'tree', 'size': '24.0'}, {'word': 'people', 'size': '23.5'}, {'word': 'was', 'size': '23.0'}, {'word': 'red', 'size': '22.5'}, {'word': 'girl', 'size': '22.0'}, {'word': 'their', 'size': '21.5'}, {'word': 'playing', 'size': '21.0'}, {'word': 'your', 'size': '20.5'}, {'word': 'attends', 'size': '20.0'}, {'word': 'night', 'size': '19.5'}, {'word': 'blue', 'size': '19.0'}, {'word': 'film', 'size': '18.5'}, {'word': 'water', 'size': '18.0'}, {'word': 'photo', 'size': '17.5'}, {'word': 'performs', 'size': '17.0'}, {'word': 'room', 'size': '16.5'}, {'word': 'house', 'size': '16.0'}, {'word': 'isolated', 'size': '15.5'}, {'word': 'show', 'size': '15.0'}, {'word': 'new', 'size': '14.5'}, {'word': 'festival', 'size': '14.0'}, {'word': 'beautiful', 'size': '13.5'}, {'word': 'old', 'size': '13.0'}, {'word': 'home', 'size': '12.5'}, {'word': 'into', 'size': '12.0'}, {'word': 'be', 'size': '11.5'}, {'word': 'through', 'size': '11.0'}, {'word': 'fashion', 'size': '10.5'}, {'word': 'match', 'size': '10.0'}, {'word': 'all', 'size': '9.5'}, {'word': 'looking', 'size': '9.0'}, {'word': 'car', 'size': '8.5'}, {'word': 'musical', 'size': '8.0'}, {'word': 'first', 'size': '7.5'}, {'word': 'portrait', 'size': '7.0'}, {'word': 'sky', 'size': '6.5'}, {'word': 'my', 'size': '6.0'}, {'word': 'like', 'size': '5.5'}, {'word': 'may', 'size': '5.0'}, {'word': 'sitting', 'size': '4.5'}, {'word': 'world', 'size': '4.0'}, {'word': 'sports', 'size': '3.5'}, {'word': 'front', 'size': '3.0'}, {'word': 'green', 'size': '2.5'}, {'word': 'rock', 'size': '2.0'}, {'word': 'close', 'size': '1.5'}, {'word': 'or', 'size': '1.0'}, {'word': 'event', 'size': '0.5'}];
word_cloud_words_nltk = [{'word': 'person', 'size': '50.0'}, {'word': 'background', 'size': '49.5'}, {'word': 'white', 'size': '49.0'}, {'word': 'actor', 'size': '48.5'}, {'word': 'artist', 'size': '48.0'}, {'word': 'player', 'size': '47.5'}, {'word': 'view', 'size': '47.0'}, {'word': 'illustration', 'size': '46.5'}, {'word': 'man', 'size': '46.0'}, {'word': 'football', 'size': '45.5'}, {'word': 'premiere', 'size': '45.0'}, {'word': 'team', 'size': '44.5'}, {'word': 'city', 'size': '44.0'}, {'word': 'woman', 'size': '43.5'}, {'word': 'image', 'size': '43.0'}, {'word': 'young', 'size': '42.5'}, {'word': 'day', 'size': '42.0'}, {'word': 'vector', 'size': '41.5'}, {'word': 'stage', 'size': '41.0'}, {'word': 'game', 'size': '40.5'}, {'word': 'black', 'size': '40.0'}, {'word': 'beach', 'size': '39.5'}, {'word': 'tree', 'size': '39.0'}, {'word': 'people', 'size': '38.5'}, {'word': 'red', 'size': '38.0'}, {'word': 'girl', 'size': '37.5'}, {'word': 'playing', 'size': '37.0'}, {'word': 'attends', 'size': '36.5'}, {'word': 'night', 'size': '36.0'}, {'word': 'blue', 'size': '35.5'}, {'word': 'film', 'size': '35.0'}, {'word': 'water', 'size': '34.5'}, {'word': 'photo', 'size': '34.0'}, {'word': 'performs', 'size': '33.5'}, {'word': 'room', 'size': '33.0'}, {'word': 'house', 'size': '32.5'}, {'word': 'isolated', 'size': '32.0'}, {'word': 'show', 'size': '31.5'}, {'word': 'new', 'size': '31.0'}, {'word': 'festival', 'size': '30.5'}, {'word': 'beautiful', 'size': '30.0'}, {'word': 'old', 'size': '29.5'}, {'word': 'home', 'size': '29.0'}, {'word': 'fashion', 'size': '28.5'}, {'word': 'match', 'size': '28.0'}, {'word': 'looking', 'size': '27.5'}, {'word': 'car', 'size': '27.0'}, {'word': 'musical', 'size': '26.5'}, {'word': 'first', 'size': '26.0'}, {'word': 'portrait', 'size': '25.5'}, {'word': 'sky', 'size': '25.0'}, {'word': 'like', 'size': '24.5'}, {'word': 'may', 'size': '24.0'}, {'word': 'sitting', 'size': '23.5'}, {'word': 'world', 'size': '23.0'}, {'word': 'sports', 'size': '22.5'}, {'word': 'front', 'size': '22.0'}, {'word': 'green', 'size': '21.5'}, {'word': 'rock', 'size': '21.0'}, {'word': 'close', 'size': '20.5'}, {'word': 'event', 'size': '20.0'}, {'word': 'ball', 'size': '19.5'}, {'word': 'model', 'size': '19.0'}, {'word': 'one', 'size': '18.5'}, {'word': 'style', 'size': '18.0'}, {'word': 'building', 'size': '17.5'}, {'word': 'road', 'size': '17.0'}, {'word': 'wedding', 'size': '16.5'}, {'word': 'hand', 'size': '16.0'}, {'word': 'contain', 'size': '15.5'}, {'word': 'time', 'size': '15.0'}, {'word': 'street', 'size': '14.5'}, {'word': 'flowers', 'size': '14.0'}, {'word': 'small', 'size': '13.5'}, {'word': 'little', 'size': '13.0'}, {'word': 'art', 'size': '12.5'}, {'word': 'instrument', 'size': '12.0'}, {'word': 'sunset', 'size': '11.5'}, {'word': 'dress', 'size': '11.0'}, {'word': 'pop', 'size': '10.5'}, {'word': 'sea', 'size': '10.0'}, {'word': 'trees', 'size': '9.5'}, {'word': 'country', 'size': '9.0'}, {'word': 'field', 'size': '8.5'}, {'word': 'pattern', 'size': '8.0'}, {'word': 'back', 'size': '7.5'}, {'word': 'dog', 'size': '7.0'}, {'word': 'look', 'size': '6.5'}, {'word': 'snow', 'size': '6.0'}, {'word': 'table', 'size': '5.5'}, {'word': 'set', 'size': '5.0'}, {'word': 'attend', 'size': '4.5'}, {'word': 'family', 'size': '4.0'}, {'word': 'river', 'size': '3.5'}, {'word': 'walking', 'size': '3.0'}, {'word': 'christmas', 'size': '2.5'}, {'word': 'business', 'size': '2.0'}, {'word': 'flag', 'size': '1.5'}, {'word': 'wall', 'size': '1.0'}, {'word': 'design', 'size': '0.5'}]
word_cloud(word_cloud_words, "#word-cloud");
word_cloud(word_cloud_words_nltk, "#word-cloud-nltk");