const box = document.querySelector('.box');
const box2 = document.querySelector('.box2');

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const rotation = scrollY* 0.5;
    box.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`
    box2.style.transform = `translate(-50%, -50%) rotate(-${rotation}deg)`;   
})









