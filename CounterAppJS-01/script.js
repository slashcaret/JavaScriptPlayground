const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click",(e)=>{
    //console.log(e.target.classList);
    if(e.target.classList.contains("add"))
    {
        count.textContent++;
        setColor(count.textContent);
        
    }
    if(e.target.classList.contains("subtract"))
    {
        count.textContent--;
        setColor(count.textContent);
    }
    if(e.target.classList.contains("reset"))
    {
        count.textContent = 0;
        setColor(count.textContent);
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