let colorInput = document.getElementById("colorPicker");
let colorInputText = document.getElementById("colorDisplay");
let colorDisplayBg = document.getElementById("colorDisplayBg");

let clearBtn = document.querySelector(".clearBtn");
let eraserBtn = document.querySelector(".eraserBtn");
let colorBtn = document.querySelector(".colorBtn");
let rainbowBtn = document.querySelector(".rainbowBtn");

let color = "#2d2d2d"

colorInput.addEventListener("input", function(){
    color = colorInput.value;
    colorInputText.innerHTML = colorInput.value;
    colorDisplayBg.style.background = `linear-gradient(0deg, rgba(0,0,0,1) 14%, rgba(6,6,6,1) 29%, ${color} 100%)`;
}, false);

clearBtn.addEventListener("click", function (){
    let canvas = document.querySelector(".canvas");
    let squares = canvas.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "#A7A7A7");
});

eraserBtn.addEventListener("click", function (){
    color = "#A7A7A7";
})

colorBtn.addEventListener("click", function (){
    color = colorInput.value;
})

rainbowBtn.addEventListener("click", function (){
    color = "random";
})

function populateCanvas(size) {
    let canvas = document.querySelector(".canvas");
    let squares = canvas.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "#A7A7A7";
        square.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        square.addEventListener("mouseover", colorSquare);
        canvas.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input){
    if (input >=2 && input <=40){
        populateCanvas(input);
    } else {
        console.log("error");
    }
}

function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

window.onload = () => {
    populateCanvas(16);
}