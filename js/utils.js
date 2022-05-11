let $ = function (selector , node = document) {
  return node.querySelector(selector);
}

let createElement = function(tagName, className, text) {
  
  let element = document.createElement(tagName);

  if(className) {
    element.setAttribute("class" , className);
  };

  if(text) {
    element.textContent = text;
  };

  return element ;
}

let createElementA = function(tagname, href, text) {
  let element = document.createElement(tagname);
  element.href = href;
  element.textContent = text;
  return element;
};

let clearList = function(){
  elInputName.value = null
  elInputSurname.value =null
  elInputTel.value = null
};

let borderColors = function() {
  elInputName.style.borderColor = "black";
  elInputTel.style.borderColor = "black";
  elInputSurname.style.borderColor = "black";
  elInputTel.style.borderColor = "black";
  elInputRelation.style.borderColor = "black"
}

