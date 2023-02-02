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
    e.target.setAttribute("style", "background-color: rgba(0,0,0,1)");
}