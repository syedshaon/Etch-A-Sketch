function takeUserInput() {
  userInput = prompt("Please enter a number between 1 and 100");
  if (userInput < 1 || userInput > 100) {
    takeUserInput();
  }
  return userInput;
}

function ChangeDiv() {
  let userInput = prompt("Enter the number of divs for every column");

  if (userInput < 1 || userInput > 100) {
    userInput = takeUserInput();
  }
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
      x = Math.floor(Math.sqrt(e.clientX / innerWidth) * 230);
      y = Math.floor(Math.sqrt(e.clientY / innerWidth) * 230);
      element.style.backgroundColor = `rgb( 255, ${x}, ${y})`;
      console.log(x, y);
    });

    // element.addEventListener("mouseout", () => {
    //   element.classList.toggle("color");
    // });
  });
}

colorDiv();
