const questionBox = document.querySelectorAll(".question-box");

questionBox.forEach(function (question) {
  const showBtn = question.querySelector(".show-btn");
  console.log(showBtn);
  const body = question.querySelector(".body");
  const innerBody = question.querySelector(".inner-body");

  showBtn.addEventListener("click", function () {

    questionBox.forEach(function (item) {
      const itemBody = item.querySelector(".body");
      const itemInnerBody = item.querySelector(".inner-body");
      const itemBtn = item.querySelector(".show-btn");

      if (item === question) {
        console.log(true);
        itemBtn.classList.toggle("close");
        itemBtn.classList.toggle("show");
        itemBody.classList.toggle("hide");
        itemInnerBody.classList.toggle("hide");
      } else {
        itemBody.classList.add("hide");
        itemInnerBody.classList.add("hide");
        itemBtn.classList.add("show");
        itemBtn.classList.remove("close");
      }
    });
  });
});
