let countEl = document.getElementById("count-el");
let count = parseInt(countEl.innerText); // Get the initial count value from the element

let cont=0;
console.log(countEl);

function increment() {
    count = count +1;
    countEl.innerText = count;
}

function decrement(){
   
    count=count-1;
    countEl.innerText=count;
}
function reset(){
    count=0;
    countEl.innerText=count;
}
let saveEl = document.getElementById("save-el")
function save() {
    console.log(count)
    let countStr = count + " - "
    saveEl.innerText += countStr
  
    console.log(count)
    countEl.innerText=0;
    count=0;
}

// 1. Grab the save-el paragrah and store it in a variable called saveEl




