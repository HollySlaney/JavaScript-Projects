//ternary operation
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Holly = new Vehicle("Subaru", "WRX STI", 2014, "white");
var Maddison = new Vehicle("Jeep", "Wrangler", 2024, "pink");
var Emma = new Vehicle("Ford", "F-350", 2019, "ruby red");

//function to display results of constructor
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Holly drives a " + Holly.Vehicle_Color + " colored " + Holly.Vehicle_Model +
    " manufactured in " + Holly.Vehicle_Year;
}

//Nested function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 6;
        function Plus_two() {Starting_point += 2;}
        Plus_two();
        return Starting_point;
    }
}