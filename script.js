
const mainContainer = document.querySelector("#main-container");
const sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener("click", () => {
    let boxSize = parseInt(prompt("What size would you like?"));
    createGrid(boxSize);
    createEtch();
    resizeMainContainer(boxSize);
});

function createGrid (size) {
    for (let i = 0; i < size*size; i++) {
        let box = document.createElement("div");
        mainContainer.appendChild(box);
        box.classList.add("grid-square");
    }
}

function createEtch() {
    const gridBox = document.querySelectorAll(".grid-square");

    gridBox.forEach(function(e) {
        e.addEventListener("mouseover", () => {
            e.classList.add("grid-square-filled");
        });
    });
}

function resizeMainContainer(size) {
    document.getElementById('main-container').style.maxWidth = `${size*10}px`;
}