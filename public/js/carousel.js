const carousel = document.querySelector(".carousel1"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper1 i");


let isDragStart = false, isDragging  = false, prevPageX, prevScrollLeft, positionDiff;
let firstImgWidth = firstImg.clientWidth + 14;
let scrollWidth = carousel.scrollWidth+ - carousel.clientWidth;


const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}


arrowIcons.forEach(icon => {
      icon.addEventListener("click", () =>{
        // if clicked icon ids left reduce width valve from the carsoul scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms

    });
     
});
const autoside = () => {

    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff)// making positindiff value to position
    let firstImgWidth = firstImg.clientWidth + 14;
    let vaIDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) {
        return console.scrollLeft += positionDiff > firstImgWidth / 3 ? vaIDifference : -positionDiff;
    }
    console.scrollLeft -= positionDiff > firstImgWidth / 3 ? vaIDifference : -positionDiff;
    

}


const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
    
}


const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true
    carousel.classList.add("dragging")
    positionDiff = (e.pageX  || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoside();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);


carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);