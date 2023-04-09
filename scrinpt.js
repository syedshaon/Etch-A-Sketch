function ChangeDiv() {
  const userInput = prompt("Enter the number of divs for every column");
  const numberofDivs = userInput * userInput;
  let allDivs = "";

  for (let i = 0; i < numberofDivs; i++) {
    allDivs += "<div class='items'></div>";
  }

  currentDiv.innerHTML = allDivs;

  const divsHavingCss = document.querySelectorAll(".items");

  const height = (1000 / userInput).toString() + "px";

  //   document.getElementById("container").style.maxWidth = `${
  //     (1000 / Math.sqrt(numberofDivs)) * Math.sqrt(numberofDivs) +
  //     10 * Math.sqrt(numberofDivs)
  //   }px`;

  divsHavingCss.forEach((element) => {
    console.log(height);
    element.style.height = `${height}`;
    element.style.width = `${height}`;
    element.style.flexBasis = `${height}`;
    // .cssText = `height: 10px, width: 10px`;
  });

  colorDiv();
  //   changeBG();
}

const currentDiv = document.getElementById("container");

let allDivs = "";

for (let i = 0; i < 16; i++) {
  allDivs += "<div class='items'></div>";
}

currentDiv.innerHTML = allDivs;
function colorDiv() {
  const effectiveDiv = document.querySelectorAll(".items");

  effectiveDiv.forEach((element) => {
    element.addEventListener("mouseover", (e) => {
      //   element.classList.add("color");
      x = e.offsetX;
      y = e.offsetY;
      element.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
    });

    // element.addEventListener("mouseout", () => {
    //   element.classList.toggle("color");
    // });
  });
}

colorDiv();
function changeBG() {
  const mouseHoverDivs = document.querySelectorAll(".items");
  mouseHoverDivs.forEach((element) => {
    element.addEventListener("mousemove", function (e) {
      x = e.offsetX;
      y = e.offsetY;
      element.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
    });
    element.addEventListener("mouseout", () => {
      element.style.backgroundColor = `rgba(6, 37, 3, 0.274)`;
    });
  });
  document
    .querySelectoral(".items")
    .addEventListener("mousemove", function (e) {
      x = e.offsetX;
      y = e.offsetY;
      div.style.backgroundColor = `rgb(${x}, ${y}, ${x - y})`;
    });
}

// changeBG();
