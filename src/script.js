const hamOpenButton = document.querySelector(".header_div_open")
const hamCloseButton = document.querySelector(".header_div_close")
const hamButtons = document.querySelector(".header_div")
const headerDiv2 = document.querySelector('.header_div2')

const headerDiv2UlLisA = document.querySelectorAll('.header_div2_ul_lis_a')

function openCloseMenu(){
    hamOpenButton.classList.toggle('hidden')
    hamCloseButton.classList.toggle('hidden')
    console.log('prova')

    if(hamOpenButton.classList.contains('hidden')){
        headerDiv2.classList.add('opacity-100', 'scale-100')
        headerDiv2.classList.remove('opacity-0', 'scale-95', 'pointer-events-none')
        hamButtons.classList.add('bg-[#A94E4E]')
        hamButtons.classList.remove('bg-[#FDE59F]')
    } else {
        headerDiv2.classList.remove('opacity-100', 'scale-100')
        headerDiv2.classList.add('opacity-0', 'scale-95', 'pointer-events-none')
        hamButtons.classList.remove('bg-[#A94E4E]')
        hamButtons.classList.add('bg-[#FDE59F]')
    }
}

hamButtons.addEventListener('click', (event) => {
    openCloseMenu();
})

// headerDiv2UlLis.addEventListener('click', (event) => {
//     openCloseMenu();
// })

headerDiv2UlLisA.forEach(button => {
  button.addEventListener("click", () => {
    console.log('ciaooo')
    openCloseMenu();
  });
});
