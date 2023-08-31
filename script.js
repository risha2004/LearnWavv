const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false,  startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id ===  "left" ? -firstCardWidth : firstCardWidth;
    })
})

const dragStart = () => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pagesX;
    startScrollLeft = carousel.ScrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;
    
    carousel.ScrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);