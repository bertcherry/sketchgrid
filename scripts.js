//Create a grid of empty divs with initial value of 16x16 in sketchContainer
let width = 16;
function createGrid() {
    const sketchContainer = document.querySelector(".sketch-container");
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
}

createGrid();

//Hover effect paints increasing alpha on sketchBox each hover
const sketchBoxes = document.querySelectorAll(".sketch-box");
sketchBoxes.forEach((sketchBox) => {
    sketchBox.addEventListener("mouseover", handleBoxMouseover);
});

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

//Clear button clears all sketchBox colors back to 0
function clearSketch() {
    sketchBoxes.forEach((sketchBox) => {
        sketchBox.setAttribute("style", "background-color: rgba(0,0,0,0)");
    });
}

const buttonClear = document.querySelector("#clear");
buttonClear.addEventListener("click", clearSketch);