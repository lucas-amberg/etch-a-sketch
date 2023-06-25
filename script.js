
const mainContainer = document.querySelector("#main-container");
const sizeButton = document.querySelector(".size-button");
const clearButton = document.querySelector(".clear-button");
const rainbowButton = document.querySelector(".rainbow-button");

let rainbowToggle = false;

rainbowButton.addEventListener("click", () => {
    if (rainbowToggle === false) {
        rainbowToggle = true;
    }
    else {
        rainbowToggle = false;
    }
});

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

clearButton.addEventListener("click", () => {
    const gridBoxFilled = document.querySelectorAll(".grid-square");

    gridBoxFilled.forEach(function(e) {
        e.style.backgroundColor = "";
    });
});

function createGrid (size) {
    for (let i = 0; i < size*size; i++) {
        let box = document.createElement("div");
        mainContainer.appendChild(box);
        box.classList.add("grid-square");
        box.style.width = `${540/size}px`;
        box.style.height = `${540/size}px`;
        console.log(box.style.maxWidth);
    }
}

function createEtch() {
    const gridBox = document.querySelectorAll(".grid-square");

    gridBox.forEach(function(e) {
        
        e.addEventListener("mouseover", () => {
            let randomColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
            if (rainbowToggle === false) {
                e.style.backgroundColor = `#223322`;
            }
            else {
                e.style.backgroundColor = randomColor;
            }
            
        });
        
    });
}

function removeAllBoxes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

