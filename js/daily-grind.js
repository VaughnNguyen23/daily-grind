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

let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){

  return ` 
  <p>
    		<img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>   
 `;
  
}

//today = 3;

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);

switch(today){

    case 0:
        today = "Sunday";
        
        coffee = {
        name: "Caramel Latte",
        pic: "images/caramel-latte.jpg",
        alt: "A picture of Caramel latte",
        color: "Tan",
        day: "Sunday",
        desc: 'Enjoy a caramel latte good for energy or a sweet desert!',
    };
    
    break;

    case 1:
        today = "Monday";

        coffee = {
        name: "Cold Brew",
        pic: "images/cold-brew.jpg",
        alt: "A picture of cold brew",
        color: "blue",
        day: "Monday",
        desc: 'Start your week off energized!',
    };
    
    break;

    case 2:
        today = "Tuesday";

        coffee = {
        name: "Bubble Tea",
        pic: "images/bubble-tea.jpg",
        alt: "A picture of a bubble tea",
        color: "pink",
        day: "Tuesday",
        desc: 'Bobalicious bubble tea enjoyed as a sweet treat!',
    };
    
    break; 
    
    case 3:
        today = "Wednesday";
    
        coffee = {
        name: "Mocha",
        pic: "images/Mocha.jpg",
        alt: "A picture of Mocha coffee",
        color: "Brown",
        day: "Wednesday",
        desc: 'I love mocha delivers a sweet punch of energy!',
    };

    break;

    case 4:
        today = "Thursday";

        coffee = {
        name: "Drip",
        pic: "images/drip.jpg",
        alt: "A picture of drip coffee",
        color: "purple",
        day: "Thursday",
        desc: 'I love hand crafted drip coffee!',
        };
    
    break;

    case 5:
        today = "Friday";

        coffee = {
        name: "Frappaccino",
        pic: "images/frappaccino.jpg",
        alt: "A picture of frappaccino",
        color: "orange",
        day: "Friday",
        desc: 'I love frappaccino frosty and gets you through the day!',
    };
    
    break;

    case 6:
        today = "Saturday";

        coffee = {
        name: "Pumpkin Spice Latte",
        pic: "images/pumpkin-spice-latte.jpg",
        alt: "A picture of pumpkin spice latte",
        color: "green",
        day: "Saturday",
        desc: 'Comforting Pumpkin spice latte to kick back and relax!',
    };
    break;

    
    default:
    today = "Day is unknown";

}




document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);
