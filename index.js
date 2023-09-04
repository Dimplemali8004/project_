const swiperWrapper = document.querySelector(".swiperWrapper");
const premiumCollection2 = document.querySelector(".premiumCollection2");

const arrowBtns = document.querySelectorAll(".swiper  i");
const arrowBtn = document.querySelectorAll(".swiper-container i")

const firstCardWidth = swiperWrapper.querySelector(".swiper-slide").offsetWidth;
const firstCard2Width = premiumCollection2.querySelector(".swiper-slide1").offsetWidth1;

let isDragging = false, startX, startScrollLeft;
let isDragging1 = false, startY, startScrollLeft1;



arrowBtns.forEach(btn => { 
    btn.addEventListener("click", () => {
        swiperWrapper.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        
    });
});

arrowBtn.forEach(btn1 => {
    btn1.addEventListener("click", () => {
        premiumCollection2.scrollLeft += btn1.id === "left" ? -firstCard2Width : firstCard2Width;
    
    });
});


 
const dragStart = (e) => {
    isDragging = true;
    isDragging1 = true;
    swiperWrapper.classList.add("dragging");
    premiumCollection2.classList.add("dragging1");
    startX = e.pageX;
    startY = e.pageY;
    startScrollLeft = swiperWrapper.scrollLeft;
    startScrollLeft1 = premiumCollection2.scrollLeft1;
}


const dragging = (e) => {
    if(!isDragging) return;
    if(!isDragging1) return;
    swiperWrapper.scrollLeft = startScrollLeft - (e.pageX - startX);
    premiumCollection2.scrollLeft1 = startScrollLeft1 - (e.pageY - startY);

}


const dragStop = () => {
    isDragging = false;
    isDragging1 = false;
    swiperWrapper.classList.remove("dragging");
    premiumCollection2.classList.remove("dragging1");
}



swiperWrapper.addEventListener("mousedown", dragStart);
swiperWrapper.addEventListener("mousemove", dragging);


premiumCollection2.addEventListener("mousedown", dragStart);
premiumCollection2.addEventListener("mousemove", dragging);


document.addEventListener("mouseup", dragStop);
document.addEventListener("mouseup", dragStop)