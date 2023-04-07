function handleScroll()
{
    let currerntPostion = window.scrollY;
    console.log(currerntPostion);
    var element = document.querySelector("h1");
    var movePosition = 
    element.style.transform = `translateY(${currerntPostion+100}px)`;
    element.style.transition="1s";
}
window.addEventListener('scroll',handleScroll);
