/*

name - the name of the coffee
pic - picture of the coffee
color - the color associated with the coffee
alt - the alt tag identifying the coffee
day - the day of the week
desc - a description of the coffee

*/

let myDate = new Date();

let today = myDate.getDay();

//today = 3;

switch(today){

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
    break;
    
    default:
    today = "Day is unknown";

}



let coffee = {
    name: "Bubble Tea",
    pic: "images/bubble-tea.jpg",
    alt: "A picture of a bubble tea",
    color: "pink",
    day: "Wednesday",
    desc: 'I love me some bubble tea!'
}

console.log(coffee);
