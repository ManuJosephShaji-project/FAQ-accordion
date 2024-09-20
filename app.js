// Changing the back garound image

function changeBackGround() {
    let img = document.getElementById("img-hero");

    if (window.matchMedia("(max-width: 700px)").matches) {
        img.src = "./assets/images/background-pattern-mobile.svg";

    } else {
        img.src = "./assets/images/background-pattern-desktop.svg"
    }
}

window.addEventListener("resize", changeBackGround);

changeBackGround();

//show the answer

const answers = document.querySelectorAll(".ans");
const iconPlus = document.querySelectorAll(".icon-plus");
const answerContent1 = document.querySelector(".answer-content1");
const answerContent2 = document.querySelector(".answer-content2");
const answerContent3 = document.querySelector(".answer-content3")
const answerContent4 = document.querySelector(".answer-content4")

iconPlus.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const clicks = e.currentTarget.classList;
        if (clicks.contains("ans1")) {
            answerContent1.classList.toggle("show-answer");
        } else if (clicks.contains("ans2")) {
            answerContent2.classList.toggle("show-answer");
        } else if (clicks.contains("ans3")) {
            answerContent3.classList.toggle("show-answer");
        } else {
            answerContent4.classList.toggle("show-answer");
        }
    });
});


iconPlus.forEach((icon) => {
    icon.addEventListener('click', function () {
      // Check if the current image is the 'plus' icon, toggle to 'minus'
      if (icon.src.includes('icon-plus.svg')) {
        icon.src = './assets/images/icon-minus.svg';
        icon.alt = 'icon-minus';
      } else {
        // If it's 'minus', change back to 'plus'
        icon.src = './assets/images/icon-plus.svg';
        icon.alt = 'icon-plus';
      }
    });
  });

