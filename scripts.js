//Create a grid of empty divs with initial value of 16x16 in sketchContainer
let width = 16;
const sketchContainer = document.querySelector(".sketch-container");

function createGrid() {
    for (i = 0; i < width; i++) {
        const sketchRow = document.createElement("div");
        sketchRow.classList.add("sketch-row");
        sketchContainer.appendChild(sketchRow);     
        for (n = 0; n < width; n++) {
            const sketchBox = document.createElement("div");
            sketchBox.classList.add("sketch-box");
            sketchBox.setAttribute("style", "background-color: rgba(0,0,0,0)");
            sketchRow.appendChild(sketchBox);
        }
    }
    //Add event listener to each box to paint on hover
    hoverEffect();
}

//Clear button clears all sketchBox colors back to 0
function clearSketch() {
    const sketchBoxes = document.querySelectorAll(".sketch-box");
    sketchBoxes.forEach((sketchBox) => {
        sketchBox.setAttribute("style", "background-color: rgba(0,0,0,0)");
    });
}

const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", clearSketch);

//Grid size slider regenerates grid with new size
let slider = document.getElementById("grid-size");
slider.oninput = changeGrid();
function changeGrid() {
    const sketchRows = document.querySelectorAll(".sketch-row");
    sketchRows.forEach((sketchRow) => {
        sketchContainer.removeChild(sketchRow);
    });  
    width = slider.value;
    createGrid();
}

const buttonGrid = document.querySelector("#grid-size");
buttonGrid.addEventListener("click", changeGrid);


//Hover effect paints increasing alpha on sketchBox each hover
function hoverEffect() {
    const sketchBoxes = document.querySelectorAll(".sketch-box");
    sketchBoxes.forEach((sketchBox) => {
        sketchBox.addEventListener("mouseover", handleBoxMouseover);
    });
}

function handleBoxMouseover(e) {
    let boxColor = e.target.style.backgroundColor;
    //cut alpha channel from RGBA code and increment .1
    let alpha = boxColor.substr(13);
    alpha = alpha.slice(0, -1);
    console.log(alpha);
    alpha = Number(alpha);
    //only increment to .9 to avoid looping back to 0
    if (alpha < .9) {
        alpha = (alpha + .1);
        console.log(alpha);
    }
    e.target.setAttribute("style", `background-color: rgba(0, 0, 0, ${alpha})`);
    console.log(e.target.style.backgroundColor);
}

createGrid();