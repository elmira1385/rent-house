import "./style.css";
const getSliders = document.getElementById("getSliders");
const showhideEl = document.querySelectorAll(".showhide");
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
  data.forEach((element)=>{
    getSliders.innerHTML+=`<div
            class="flex flex-col duration-300 w-[300px] gap-4 p-5 hover:scale-105 hover:bg-gray-100"
          >
            <img src="./src/imag/${element.image}" />
            <span class="text-one text-xl font-bold"
              >$ <span class="text-gray-500">47,04</span></span
            >
            <span class="text-two text-2xl font-bold">Aliva Pirva Jarden</span>
            <span class="text-gray-500 text-[12px]"
              >Jacarta garden city state,paulo gadung ,jakarta timur ,Diki
              jakarta</span
            >
          </div>`
  })
 
};
getSlider();
