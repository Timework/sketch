var container = document.querySelector("#container");
var numberOfDivs = 16

container.classList.add("container");

function grid(numberOfDivs){
    for (i = 0; i < Math.pow(numberOfDivs, 2); i++){
        var dimensions = 500 / numberOfDivs + "px"
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.height = dimensions
        square.style.width = dimensions
        square.style.background = "white";
        container.appendChild(square);
    }
    const shadeEffect = document.querySelectorAll("div.square");
    shadeEffect.forEach((shadeEffect) => {
        shadeEffect.addEventListener("mouseover",shading);
    })
    function shading(e) {
        e.target.style.background = "black";
    }
    document.getElementById("clear").addEventListener("click", clearGrid);
    function clearGrid() {
        document.querySelectorAll("div.square").forEach((reset) => {
            reset.style.background = "white";
        })
    }
    document.getElementById("random").addEventListener("click", randomGrid);
    function randomGrid() {
        document.querySelectorAll("div.square").forEach((color) => {
            clearGrid()
            color.addEventListener("mouseover", colorRandom);
            function colorRandom(e) {
                let r = Math.random() * 255
                let g = Math.random() * 255
                let b = Math.random() * 255
                e.target.style.background = `rgba(${r},${g},${b})`
            }})}
    document.getElementById("grayscale").addEventListener("click", shadingGrid);
    function shadingGrid() {
        clearGrid()
        document.querySelectorAll("div.square").forEach((gray) => {
            var grayItUp = 0
            gray.addEventListener("mouseover", grayColor);
            function grayColor(e) {
                grayItUp += .1
                e.target.style.background = `rgba(0,0,0,${grayItUp}`
                
            }

        })
    }


}
grid(numberOfDivs);

document.getElementById("newGrid").addEventListener("click", sizeGrid);
function sizeGrid() {
    howManyDivs = prompt("Dimensions of new grid.");
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    grid(howManyDivs);
}
