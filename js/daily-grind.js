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

function coffeeTemplate(coffee){

  return ` 
  <p>
    		 <img src="${coffee.pic}" alt=""${coffee.alt}"" id="coffee" />
            <strong class="feature">"${coffee.day}" Coffee Special:</strong> "${coffee.day}" daily coffee special is <strong class="feature">"${coffee.name}"</strong> "${coffee.desc}"</p>    
 `;
  
}

//today = 3;

switch(today){

    case 1:
        today = "Tuesday";

        coffee = {
        name: "Bubble Tea",
        pic: "images/bubble-tea.jpg",
        alt: "A picture of a bubble tea",
        color: "pink",
        day: "Monday",
        desc: 'I love me some bubble tea!'
    };
    
    break; 
    
    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
    break;
    
    default:
    today = "Day is unknown";

}




document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

console.log(coffee);
