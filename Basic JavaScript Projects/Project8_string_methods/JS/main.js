//concat() method
function full_Sentence() {
    var part_1 = "Soon I ";
    var part_2 = "will be ";
    var part_3 = "done this ";
    var part_4 = "amazing course.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

//slice() method
function slice_Method() {
    var Sentence = "You miss 100 percent of the shots you don't take.";
    var Section = Sentence.slice(9,12);
    document.getElementById("Slice").innerHTML = Section;
}

//toUppercase() method
function toUpperCase_Method() {
    var text = "today i had a really good day!";
    var result = text.toUpperCase();
    document.getElementById("uppercase").innerHTML = result;
}

//search() method
function search_Method() {
    var text = "Today I had a really good day!";
    var result = text.search("really");
    document.getElementById("search").innerHTML = result;
}

//number method
function string_Method() {
    var X = 336;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//toPrecision() method
function precision_Method() {
    var X = 64643.678786545387;
    document.getElementById("Precision").innerHTML = X.toPrecision(12);
}

//toFixed() method
function fixed_Method() {
    var X = 8775.785687
    document.getElementById("Fixed").innerHTML = X.toFixed(2);
}

//valueOf() method
function valueOf_Method() {
    var text = "Hello World!";
    var result = text.valueOf();
    document.getElementById("valueof").innerHTML = result;
}