let generateButton = document.querySelector("#generate-svg");

generateButton.addEventListener("click", () => {
  let svgHolder = document.querySelector("#svg-holder");
  let numberOfElements = document.querySelector("#number-elements").value;

  while (svgHolder.firstChild) {
    svgHolder.removeChild(svgHolder.firstChild);
  }

  let svgElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svgElement.setAttribute("width", "600");
  svgElement.setAttribute("height", "300");

  background = document.createElementNS('http://www.w3.org/2000/svg', "rect");
  background.setAttribute("fill", "hsl(" + getRandomInt(360) + ", " + getRandomInt(100) + "%" + ", " + getRandomInt(100) + "%)"); 
  background.setAttribute("width", "600");
  background.setAttribute("height", "300");
  svgElement.appendChild(background);


  for (let i = 0; i < numberOfElements; i++) {
    if (Math.random() > 0.5) {
      appendRectangle();
    } else {
      appendCircle();
    }    
  }

  let image = document.createElement("img");
  image.setAttribute("alt", numberOfElements + " rectangles");
  let serializer = new XMLSerializer();
  let serializedSvg = serializer.serializeToString(svgElement);

  serializedSvg = '<?xml version="1.0" standalone="no"?>\r\n' + serializedSvg;
  image.setAttribute("src", "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(serializedSvg));
  svgHolder.appendChild(image);

});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function appendRectangle() {
  let width = getRandomInt(600);
  let height = getRandomInt(300);
  let x = getRandomInt(600 - width);
  let y = getRandomInt(300 - height);
  let hue = getRandomInt(360);
  let saturation = getRandomInt(100) + "%";
  let lightness = getRandomInt(100) + "%";
  let opacity = Math.random();

  let rect = document.createElementNS('http://www.w3.org/2000/svg', "rect");
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("fill", "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + opacity + ")" );    

  svgElement.appendChild(rect);
}

function appendCircle() {
  let r = getRandomInt(150);
  let cx = getRandomInt(600 - (r / 2));
  let cy = getRandomInt(300 - (r / 2));
  let hue = getRandomInt(360);
  let saturation = getRandomInt(100) + "%";
  let lightness = getRandomInt(100) + "%";
  let opacity = Math.random();

  let circle = document.createElementNS('http://www.w3.org/2000/svg', "circle");
  circle.setAttribute("r", r);
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("fill", "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + opacity + ")" ); 

  svgElement.appendChild(circle);
}