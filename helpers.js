

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