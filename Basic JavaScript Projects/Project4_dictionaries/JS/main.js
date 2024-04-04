//dictionary
function my_Dictionary() {
    var Car = {
        Make:"Subaru",
        Color:"White",
        Year:"2014",
        Fuel:"Gasoline",
        Mileage:135000
    };
    //removes color key before it is displayed
    delete Car.Color;
    document.getElementById("Dictionary").innerHTML = Car.Color;
}
