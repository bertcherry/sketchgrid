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