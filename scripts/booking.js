/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");
let full = document.getElementById("full");
let half = document.getElementById("half");
let clearButton = document.getElementById("clear-button");
let cost = document.getElementById("calculated-cost");

let halfDayCost = 20;
let fullDayCost = 35;
let dayCounter = 0;
let costPerDay = fullDayCost;
let fullCost = 0;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monday.onclick = function() {
    if (monday.classList.contains("clicked") == false) {
        dayCounter += 1;
    }
    monday.classList.add("clicked");
    calculateCost();
};

tuesday.onclick = function() {
    if (tuesday.classList.contains("clicked") == false) {
        dayCounter += 1;
    }
    tuesday.classList.add("clicked");
    calculateCost();
};

wednesday.onclick = function() {
    if (wednesday.classList.contains("clicked") == false) {
        dayCounter += 1;
    }
    wednesday.classList.add("clicked");
    calculateCost();
};

thursday.onclick = function() {
    if (thursday.classList.contains("clicked") == false) {
        dayCounter += 1;
    }
    thursday.classList.add("clicked");
    calculateCost();
};

friday.onclick = function() {
    if (friday.classList.contains("clicked") == false) {
        dayCounter += 1;
    }
    friday.classList.add("clicked");
    calculateCost();
};


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.onclick = function() {
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    dayCounter = 0;
    calculateCost();
};


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

half.onclick = function() {
    half.classList.add("clicked");
    full.classList.remove("clicked");
    costPerDay = halfDayCost;
    calculateCost();
};

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

full.onclick = function() {
    full.classList.add("clicked");
    half.classList.remove("clicked");
    costPerDay = fullDayCost;
    calculateCost();
};

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    fullCost = dayCounter * costPerDay;
    cost.innerHTML = fullCost;
}
