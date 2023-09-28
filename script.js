// offsetWidth - это ширина блока, включая все padding, border, но без margin.

// clientWidth - это ширина блока, включая padding, но без border, margin и без scroll. Если блоки инлайновые, то ширина блока будет равна 0.

// getBoundingClientRect().width - это ширина блока высчитывается по принципу clientWidth, но даёт дробное число.

// document.querySelector('.myDiv').offsetWidth
// document.querySelector('.myDiv').clientWidth
// document.querySelector('.myDiv').getBoundingClientRect().width

const slider = document.querySelector(".slider");
const sliderline = document.querySelector(".slider-line");
const sliderItems = document.querySelectorAll(".slider-item");

const bntLeft = document.querySelector(".bnt-left");
const bntRight = document.querySelector(".bnt-right");

let counnt = 0;

resetSize();

window.addEventListener("resize", resetSize);

bntLeft.addEventListener("click", () => {
    left();
});

bntRight.addEventListener("click", () => {
    right();
});

// --- functions ---

function getWidthSlider() {
    return slider.clientWidth;
}

function getWidthItem() {
    return getWidthSlider() / getCounntVisebleItem();
}

function getCounntItems() {
    return sliderItems.length;
}

function getMaxCounnt() {
    return getCounntItems() - getCounntVisebleItem();
}

function resetSize() {
    setWidthItems();
    mouveLine();
}

function setWidthItems() {
    const slideWidth = `${getWidthSlider() / getCounntVisebleItem()}px`;

    sliderItems.forEach((item) => {
        // mouve all slids and set size
        item.style.width = slideWidth;
    });
}

function getCounntVisebleItem() {
    let counntVisebleItem = 1;
    let width = getWidthSlider();

    switch (true) {
        case width >= 1440:
            counntVisebleItem = 4;
            break;
        case width >= 1024:
            counntVisebleItem = 4;
            break;
        case width >= 992:
            counntVisebleItem = 3;
            break;
        case width >= 768:
            counntVisebleItem = 3;
            break;
        case width >= 425:
            counntVisebleItem = 3;
            break;
        case width >= 375:
            counntVisebleItem = 2;
            break;
        case width >= 325:
            counntVisebleItem = 1;
            break;
    }

    return counntVisebleItem;
}

// --- mouve ---

function mouveLine() {
    //------- no break point mouve -----------

    console.log(`function mouveline : counnt = ${counnt}`);
    if (counnt < 0) {
        counnt = getMaxCounnt();
    }

    if (counnt > getMaxCounnt()) {
        counnt = 0;
    }

    //------- /no break point mouve -----------

    sliderline.style.transform = `translateX(-${getWidthItem() * counnt}px)`;
}

function left() {
    --counnt;
    mouveLine();
}

function right() {
    ++counnt;
    mouveLine();
}

// --- /mouve ---

// --- /functions ---
