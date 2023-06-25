
const mainContainer = document.querySelector("#main-container");
const sizeButton = document.querySelector(".size-button");

sizeButton.addEventListener("click", () => {
    removeAllBoxes(mainContainer);
    let boxSizeString = prompt("What size would you like?");
    while ((boxSizeString > 100 || boxSizeString < 1 || typeof boxSizeString !== "number") && !(parseInt(boxSizeString) > 0 && parseInt(boxSizeString) < 101)) {
        if (boxSizeString > 100) {
            boxSizeString = prompt("Pick a size less than 100, please.");
            if (parseInt(boxSizeString) > 1 && parseInt(boxSizeString) < 101) {
                break;
            }
        }
        else if (boxSizeString < 1) {
            boxSizeString = prompt("Pick a size greater than 0, please.");
            if (parseInt(boxSizeString) > 1 && parseInt(boxSizeString) < 101) {
                break;
            }
    
        }
        else if (typeof boxSizeString !== "number") {
            boxSizeString = prompt("Pick a number, please.");
        }
    }
    boxSize = parseInt(boxSizeString);
    createGrid(boxSize);
    createEtch();
});

function createGrid (size) {
    for (let i = 0; i < size*size; i++) {
        let box = document.createElement("div");
        mainContainer.appendChild(box);
        box.classList.add("grid-square");
        box.style.width = `${672/size}px`;
        box.style.height = `${672/size}px`;
        console.log(box.style.maxWidth);
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

function removeAllBoxes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}