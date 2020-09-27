const banner = document.querySelector('.banner');
window.addEventListener('scroll', ()=> {
    const value = 800 - window.scrollY;
    banner.style.clipPath = `circle(${value}px at center center)`
    console.log(value);
})