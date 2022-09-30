const container = document.querySelector('.container');
const btn = document.querySelector('button');
generateSquares();

btn.addEventListener('click', ()=>{
    let nsquares = prompt("Enter the number of squares per side");

    generateSquares(nsquares);
});



function generateSquares(number = 16){
    while(container.firstChild){  //Deletes existing squares
        container.removeChild(container.firstChild);
    }

    drawn = true;
    let size = 640 / number;
    sizeString = size + "px";

    for(let i=0;i<(number**2);i++){
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = sizeString;
        div.style.height = sizeString;
        container.appendChild(div);
    }

    addHover();

}

function addHover(){
    const square = document.querySelectorAll(".square");
    square.forEach(element => {
        element.addEventListener('mouseover', ()=>{
            element.classList.add('hovered');
        });
    });
}



