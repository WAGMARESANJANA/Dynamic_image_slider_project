let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let thumbnails = document.querySelectorAll(".thumbnail");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    slides.forEach(slide => slide.classList.remove("active"));
    thumbnails.forEach(thumb => thumb.style.border = "2px solid transparent");

    slides[slideIndex - 1].classList.add("active");
    thumbnails[slideIndex - 1].style.border = "2px solid blue";
}
