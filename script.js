const container = document.querySelector('.container');
const party = document.querySelector('#party');
const pen = document.querySelector('#pen');
const clear = document.querySelector('#clear');
const slide = document.querySelector('#slide');
const sizeDisp = document.querySelector('.sizeDisp');
const bgColor = document.querySelector('#bgcolor');

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

bgcolor.addEventListener('input', ()=>{
    generateSquares(size, bgcolor.value)
});


party.addEventListener('click',()=>{
    if(rainbow){
        rainbow = false;
        party.style.backgroundColor = "white";
        party.style.color = "black";
    }else{
        rainbow = true;
        party.style.backgroundColor = "black";
        party.style.color = "white";
    }
});



function generateSquares(number = 16, bg = "white"){
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
        div.style.backgroundColor = bg;
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

                party.style.backgroundColor = color;

                element.style.backgroundColor = color;
            }
        });
    });
}



