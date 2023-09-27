// offsetWidth - это ширина блока, включая все padding, border, но без margin.

// clientWidth - это ширина блока, включая padding, но без border, margin и без scroll. Если блоки инлайновые, то ширина блока будет равна 0.

// getBoundingClientRect().width - это ширина блока высчитывается по принципу clientWidth, но даёт дробное число.

// document.querySelector('.myDiv').offsetWidth
// document.querySelector('.myDiv').clientWidth
// document.querySelector('.myDiv').getBoundingClientRect().width

const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider-item");

setWidthSlides();

window.addEventListener("resize", checkWidth);

function setWidthSlides() {
    console.log("checkWidth");
    const sliderWidgh = `${slider.clientWidth / 3}px`;

    // mouve all slids and set size
    sliderItems.forEach((item) => {
        item.style.width = sliderWidgh;
    });
}
