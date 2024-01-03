const sliderContainer = document.querySelector(".sliderContainer");
const leftSlider = document.querySelector(".leftSlider");
const rightSlider = document.querySelector(".rightSlider");
const actionBtn = document.getElementsByClassName("actionBtn");
const downBtn = document.querySelector(".downBtn");
const upBtn = document.querySelector(".upBtn");

const rightLength = rightSlider.querySelectorAll("div").length;
const leftLength = leftSlider.querySelectorAll("div").length;

let activeSlideIndex = 0;

rightSlider.style.top = `-${(rightLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (btn) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (btn === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > rightLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (btn === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = rightLength - 1;
    }
  }
  leftSlider.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  rightSlider.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
