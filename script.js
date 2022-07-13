const submit = document.querySelector(".main__submit");
const checker = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const form = document.querySelector(".main__inputs");
const inputField = document.querySelector(".main__email");

submit.addEventListener("click", function (e) {
  let response = document.querySelector(".main__email").value;

  if (!response || !response.match(checker)) {
    form.classList.add("error");
    e.preventDefault();
    return;
  } else {
    form.classList.add("success");
    inputField.value = "";
    e.preventDefault();
    return;
  }
});

form.addEventListener("keydown", function () {
  form.classList.remove("error");
  form.classList.remove("success");
});
