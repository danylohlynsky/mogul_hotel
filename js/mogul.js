let slides = document.querySelectorAll('.slide-single');
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}
let step = 0;
let offset = 0;

function draw() {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    img.style.left = offset * 720 + 'px';
    document.querySelector('#slider').appendChild(img);
    if (step + 1 === slider.length) {
        step = 0;
    }
    else {
        step++;
    }
    offset = 1;
}

function left() {
    let slidesView = document.querySelectorAll('.slide-single');
    let offsetView = 0;
    for (let i = 0; i < slidesView.length; i++) {
        slidesView[i].style.left = offsetView * 720 - 720 + 'px';
        offsetView++;
    }
    setTimeout(function() {
        left();
        slidesView[0].remove();
        draw();
    }, 2500);
}

draw();
draw();
left();