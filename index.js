
const container = document.getElementById("grid-container");
const div = document.createElement('div');
const slider = document.getElementById('size-ranges');

const setNumOfSquares = () => {
    for (let i = 0; i < slider.value; i++){
    container.innerHTML += '<div class="box"></div>' 
    }
}

slider.addEventListener("change", () => {
    container.innerHTML = ""
    setNumOfSquares();
})

setNumOfSquares();
