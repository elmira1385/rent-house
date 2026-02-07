import "./style.css";
const getSliders = document.getElementById("getSlides");
const showhideEl = document.querySelectorAll(".showhide");
const backEl=document.getElementById("back")
const nextEl=document.getElementById("next")
const addNumberEl1=document.getElementById("addNumber1")
const addNumberEl2=document.getElementById("addNumber2")
const addNumberEl3=document.getElementById("addNumber3")

showhideEl.forEach((card) => {
  const contantEl = card.querySelector(".contant");
  card.addEventListener("click", () => {
    card.classList.toggle("showhide");
    contantEl.classList.toggle("contant");
  });
});

const getSlider = async () => {
  const respond = await fetch(
    "https://675ec6a21f7ad24269969bf9.mockapi.io/real-state/real-state"
  );
  const data = await respond.json();
  console.log(data);

  data.forEach((slide)=>{
    getSliders.innerHTML+=`<div
            class="flex flex-col duration-300 min-w-[300px] gap-4 p-5 hover:scale-105 hover:bg-gray-100"
          >
            <img src="/imag/${slide.image}" />
            <span class="text-one text-xl font-bold"
              >$ <span class="text-gray-500">${slide.price}</span></span
            >
            <span class="text-two text-2xl font-bold">${slide.name}</span>
            <span class="text-gray-500 text-[12px]"
              >${slide.adress}</span
            >
          </div>`
  })
 
};
getSlider();

let move=0
nextEl.addEventListener("click",()=>{
  move+=150
  getSliders.scrollTo({left:move,behavior:"smooth" })
})


backEl.addEventListener("click",()=>{
  move-=150
  getSliders.scrollTo({left:move,behavior:"smooth" })
})

let count1=8892
const startAdd1=setInterval(() => {
  count1++
  addNumberEl1.textContent=count1
  if(count1>=9000){
    clearInterval(startAdd1)
  }
},1);

let count2=1892
const startAdd2=setInterval(() => {
  count2++
  addNumberEl2.textContent=count2
  if(count2>=2000){
    clearInterval(startAdd2)
  }
},1);

let count3=0
const startAdd3=setInterval(() => {
  count3++
  addNumberEl3.textContent=count3
  if(count3>=28){
    clearInterval(startAdd3)
  }
},1);