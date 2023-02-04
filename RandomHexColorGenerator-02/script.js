

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

const btnCopy = document.querySelector(".copy");

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
        //alert("Copied!");
        e.target.classList.add("active");

        setTimeout(() => {
            e.target.classList.remove("active");
        }, 1500);

        //new approach ---start
        // e.target.style.setProperty("--check-display","block");
        // setTimeout(() => {
        //     e.target.style.setProperty("--check-display","none");
        // }, 1500);
        //new approach ---end

        // let styles = window.getComputedStyle(e.target,':before')
        // styles['display'] = "block";

    }
   
});

