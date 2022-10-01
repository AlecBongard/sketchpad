const container = document.querySelector('.container');
const party = document.querySelector('#party');
const pen = document.querySelector('#pen');
const clear = document.querySelector('#clear');
const slide = document.querySelector('#slide');
const sizeDisp = document.querySelector('.sizeDisp');

let color = "black";
let size = 16;
sizeDisp.textContent = sizeDisp.textContent = size + "x" + size;

slide.addEventListener('change', ()=>{
    generateSquares(size);
});

slide.addEventListener('input', ()=>{
    size = slide.value;
    sizeDisp.textContent = size + "x" + size;
});

pen.addEventListener('input', ()=>{
    color = pen.value;
});

clear.addEventListener('click', ()=>{
    generateSquares(size);
});



let rainbow = false;
generateSquares();


party.addEventListener('click',()=>{
    rainbow ? rainbow = false : rainbow = true;
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
                element.style.backgroundColor = color;
            }else{
                color = "rgb(" + Math.floor(Math.random()*255) + 
                "," + Math.floor(Math.random()*255) + "," + 
                Math.floor(Math.random()*255) + ")";

                element.style.backgroundColor = color;
            }
        });
    });
}



