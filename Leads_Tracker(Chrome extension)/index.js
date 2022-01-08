// Variables 
let myLeads = [];  // An array to store the leads that you want to save using the extension
       // to access html elements
const inputEl = document.getElementById("input-el");  
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// to get leads from local storage if they were already there
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// To check if localstorage has leads or not and if it has then render those on the extension
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}


// Adding listener and fucntion to add current tab link that is opened by the user on his/her chrome browser
tabBtn.addEventListener("click", function(){ 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // console.log(tabs);
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})

// Adding listener and function to delete all the links
deleteBtn.addEventListener("click", function(){
    console.log("Clicked");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

// Adding listener and function to add links through text box
inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    console.log(localStorage.getItem("myLeads")); 
}) 

// A function that basically show out the leads
function render(leads){
    let listItems= "";
    for (let i = 0; i < leads.length; i++){
        listItems += "<li><a target='_blank' href=' " + leads[i] + "'>" + leads[i] + "</a></li>";
    }
    
    ulEl.innerHTML = listItems;
}
