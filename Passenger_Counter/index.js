

var count = 0;  // A global variable that initializes the count variable
var countEl = document.getElementById("count-el");
countEl.innerText = count;
var saveEl = document.getElementById("save-el");

// An increment function incrementing the count when clicked.
function increment(){
    // console.log("The button was clicked. (debugging)");
    count++;
    countEl.textContent = count;
}


function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = count;
    // console.log(count);
}