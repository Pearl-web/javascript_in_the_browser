(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


},{"./helpers":2}],2:[function(require,module,exports){


function backgroundColor() {
    let body = document.querySelector('body')
    body.style.backgroundColor = "pink";
    
  };
  
  function mouseOut() {
    let body = document.querySelector('body')
    body.style.backgroundColor = "white";
  };

  function mouseOver() {
    let heading = document.querySelector("h2")
    heading.innerHTML = "Welcome to our page!";
  };

  function keyPress(e) {
      const newPara = document.createElement("p");
      const node = document.createTextNode(e.key)
    
      newPara.appendChild(node);
    
      const element = document.getElementById("section");
      element.appendChild(newPara)
    };




    function dogPara() {
        let paraOne = document.getElementById('paraOne');
        paraOne.classList.toggle('styling')
      };

      function catPara() {
        let paraTwo= document.getElementById('paraTwo');
        paraTwo.classList.toggle('styling')
        
      };

      function fishPara() {
        let paraThree = document.getElementById('paraThree');
        paraThree.classList.toggle('styling')
      }

    module.exports = {backgroundColor, mouseOut, mouseOver, keyPress ,dogPara, catPara, fishPara}
},{}]},{},[1]);
