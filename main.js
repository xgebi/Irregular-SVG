let generateButton = document.querySelector("#generate-svg");

generateButton.addEventListener("click", () => {
  let svgHolder = document.querySelector("#svg-holder");
  let numberOfElements = document.querySelector("#number-elements").value;

  while (svgHolder.firstChild) {
    svgHolder.removeChild(svgHolder.firstChild);
  }

  let svgElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
  //svg.setAttribute('xmlns:xlink','http://www.w3.org/1999/xlink');
  svgElement.setAttribute("width", "600");
  svgElement.setAttribute("height", "300");

  for (let i = 0; i < numberOfElements; i++) {
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
  
  //svgHolder.appendChild(svgElement);

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