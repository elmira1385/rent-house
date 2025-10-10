import './style.css'
const showhideEl=document.querySelectorAll(".showhide")
showhideEl.forEach((card)=>{
    const contantEl=card.querySelector(".contant")
    card.addEventListener("click",()=>{
        card.classList.toggle("showhide")
        contantEl.classList.toggle("contant")

    })
})