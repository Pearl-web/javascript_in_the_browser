const helpers = require("./helpers");


function initBindings(){

  let h1 = document.querySelector('h1')
  let h2 = document.querySelector("h2")
  let html = document.querySelector('html')
  let dog = document.getElementById('dog')
  let cat =document.getElementById('cat')
  let fish = document.getElementById('fish')



h1.addEventListener("click", helpers.backgroundColor);

h1.addEventListener("mouseout", helpers.mouseOut);

h2.addEventListener("mouseover", helpers.mouseOver);

html.addEventListener("keypress", helpers.keyPress)

dog.addEventListener("click", helpers.dogPara);



cat.addEventListener("click", helpers.catPara);


fish.addEventListener("click", helpers.fishPara);


}


initBindings();


  


// function keyPress(e) {
//   const newPara = document.createElement("p");
//   const node = document.createTextNode(e.key)

//   newPara.appendChild(node);

//   const element = document.getElementById("section");
//   element.appendChild(newPara)
// }
// written out the long way 

// a default event object is passed to the function 

//To properly handle an event we’d want to know more about what’s happened. Not just a “click” or a “keydown”, but what were the pointer coordinates? Which key was pressed? And so on.

//  You can they get information about this event object e.type, e.key etc

//Toggling - below

