document.addEventListener("DOMContentLoaded", function () {
    let mainSlogan = document.querySelector(".main__slogan");
    mainSlogan.style.marginLeft = 0;
    let mainImage = document.querySelector(".main__image");
    mainImage.addEventListener("mouseover", function () {
        mainImage.style.height = '550px';
    })
    mainImage.addEventListener("mouseout", function () {
        mainImage.style.height = '500px';
    })
    let mainInfo = document.querySelector(".main__info");
    let mainAboutGame = document.querySelector(".main__about-game");
    let severalAboutGame = document.querySelectorAll(".about")
    document.addEventListener('scroll', function() {
        if (mainImage.getBoundingClientRect().top <= 0) {
            mainInfo.style.marginRight = 0;
        }
        if (mainAboutGame.getBoundingClientRect().top <= 200) {
            for (aboutGame of severalAboutGame) {
                aboutGame.style.opacity = 1;
            }
        }
    })
    let weaponText = document.querySelector(".weapon__text");
    let weaponList = document.querySelector(".weapon__list");
    weaponText.addEventListener("click", function () {
        weaponText.classList.toggle("active");
        weaponList.classList.toggle("active");
    })
    let footerButton = document.querySelector(".footer__button");
    footerButton.addEventListener("mouseover", function () {
        footerButton.classList.add("active");
    })
    footerButton.addEventListener("mouseout", function () {
        footerButton.classList.remove("active");
    })
})