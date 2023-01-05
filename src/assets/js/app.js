import gsap from "gsap";

const bar = document.querySelector(".loading__bar--inner");
const count_number = document.querySelector(".loading__counter--number");
let c = 0;
let barInterval = setInterval(() => {
  bar.style.width = c + "%";
  count_number.innerText = c + "%";

  c++;
  if (c === 101) {
    clearInterval(barInterval);
    gsap.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%",
    });
    gsap.to(".loading__text, .loading__counter", {
      duration: 0.5,
      opacity: 0,
    });
    gsap.to(".loading__box", {
      duration: 0.5,
      height: "500px",
      borderRadius: "50%",
    });
    // gsap.to(".loading__svg", {
    //   duration: 10,
    //   opacity: 1,
    //   rotate: "360deg",
    // });
    gsap.to(".loading__box", {
      delay: 2,
      border: "none",
    });
    gsap.to(".loading", {
      delay: 2,
      duration: 2,
      background: "transparent",
      opacity: 0.5,
      zIndex: 0,
    });
  }
}, 30);

///////////////question section
const questions = [...document.querySelectorAll(".question")];

questions.map((question) => {
  question.addEventListener("click", () => {
    let q_text = question.querySelector(".question__answare");
    let status = question.querySelector(".question__status");

    q_text.classList.toggle("open");
    status.classList.toggle("question__status_open");
  });
});
