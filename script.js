const container = document.querySelector('.container');
const grid = document.querySelector('#grid');
const party = document.querySelector('#party');

let rainbow = false;
generateSquares();

grid.addEventListener('click', ()=>{
    let nsquares = parseInt(prompt("Enter the number of squares per side (1-100)"));
    if(Number.isNaN(nsquares) || nsquares > 100 ||
        nsquares <= 0){
        alert("Please enter an integer between 0 and 100.");
    }else{
        generateSquares(nsquares);
    }
});

party.addEventListener('click',()=>{
    rainbow=true;
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

            if(!rainbow){
                element.style.backgroundColor = "black";
            }else{
                color = "rgb(" + Math.floor(Math.random()*255) + 
                "," + Math.floor(Math.random()*255) + "," + 
                Math.floor(Math.random()*255) + ")";

                element.style.backgroundColor = color;
            }
        });
    });
}



