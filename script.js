"use strict";

console.log(`hi mom 👩`);

const faqItem = document.querySelectorAll(".faq-item");
const faqQuestion = document.querySelectorAll(".faq-question");
const faqArrow = document.querySelectorAll(".faq-arrow");
const faqAnswer = document.querySelectorAll(".faq-answer");

for (let i = 0; i < faqItem.length; i++) {
  faqItem[i].addEventListener("click", function () {
    // check if the clicked answer is already visible
    if (faqItem[i].nextElementSibling.classList.contains("hidden")) {
      // hide all answers
      faqAnswer.forEach((item) => {
        item.classList.add("hidden");
      });
      // delete bold text
      faqQuestion.forEach((item) => {
        item.classList.remove("fw-700");
      });

      // display answer
      faqItem[i].nextElementSibling.classList.toggle("hidden");
      // make qustion text bold
      faqQuestion[i].classList.toggle("fw-700");
      // rotate question arrow
      faqArrow[i].classList.toggle("faq-arrow-flip");
    } else {
      // hide the answer
      faqItem[i].nextElementSibling.classList.add("hidden");
      // rotate question arrow
      faqArrow[i].classList.remove("faq-arrow-flip");
    }
  });
}
