

const generateRandomColor = ()=>{
    const maxNo = 0xFFFFFF;//16777215
    const randHexNo = Math.floor(Math.random() * maxNo).toString(16); //toString(16) converts no to hexadecimal
    //console.log(randHexNo);
    const randClr = randHexNo.padStart(6,0);
    return `#${randClr.toUpperCase()}`;
};
const setBgColor = ()=>{
    let color = generateRandomColor();
    clrText.textContent = color;
    counterDiv.style.backgroundColor = color;
    counterDiv.style.boxShadow = `1px 2px 10px 4px ${color}`;
    body.style.backgroundColor = color;
};

document.addEventListener("DOMContentLoaded", setBgColor);


const body = document.querySelector("body");
const container = document.querySelector(".container");
const counterDiv = document.querySelector(".counter-div");
const clrText = document.querySelector(".clrText");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click",(e)=>{
    //console.log(e.target.classList);
    if(e.target.classList.contains("refreshClr"))
    {
        setBgColor(); 
    }
    if(e.target.classList.contains("copy"))
    {
        let copiedText = clrText.textContent;
        navigator.clipboard.writeText(copiedText.toString());
        alert("Copied!");

    }
   
});

const setColor = (textIn) =>{
        if(textIn>0)
        {
            count.style.color ="#82b74b";
        }
        if(textIn<0)
        {
            count.style.color ="tomato";
        }
        if(textIn==0)
        {
            count.style.color ="white";
        }
};