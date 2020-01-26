var container = document.querySelector("#container");
var numberOfDivs = 16
var dimensions = 500/numberOfDivs + "px"

container.classList.add("container");

function grid(numberOfDivs){
    for (i = 0; i < Math.pow(numberOfDivs, 2); i++){
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.height = dimensions
        square.style.width = dimensions
        square.textContent = "test"
        container.appendChild(square);
    }
}
console.log(grid(numberOfDivs))