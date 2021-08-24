const selected = document.querySelector(".selected");
const optionsBox = document.querySelector(".options-box");
const options = document.querySelectorAll(".option");
const newOption = document.querySelector(".new-option");
const newInput = document.querySelector(".new");
const defaultText = document.querySelector(".text");

selected.addEventListener("click", () => {
  optionsBox.classList.toggle("active");
});
options.forEach((e) => {
  e.addEventListener("click", () => {
    if (
      e.classList.contains("other-option") ||
      e.classList.contains("new-option")
    ) {
      newOption.style.display = "block";
    } else {
      
      defaultText.innerHTML = e.querySelector("label").innerHTML;
    }
  });
});

newInput.addEventListener("click", () => {
  selected.replaceWith(newInput);
  optionsBox.classList.remove("active");
});

//wiyhout input
const selected = document.querySelector(".selected");
const selectBox = document.querySelector(".select-box");
const optionsBox = document.querySelector(".options-box");
const options = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsBox.classList.toggle("active");
  let isActive = optionsBox.classList.contains("active");
  if (!isActive) {
    selected.style.border = "none";
  } else {
    selected.style.borderBottom = "1px solid #BCBCBC";
  }
});

options.forEach((e) => {
  e.addEventListener("click", () => {
    selected.innerHTML = e.querySelector("label").innerHTML;
  });
});

