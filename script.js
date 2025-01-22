function myFunction() {
  var color = document.body;
  var dropshadow = document.querySelector("fieldset");
  var switchstyle = document.querySelector(".colorswitch");
  var submitbutton = document.querySelector(".submit");
  color.classList.toggle("dark-mode");
  dropshadow.classList.toggle("light-field");
  switchstyle.classList.toggle("switchstylebutton");
  submitbutton.classList.toggle("switchstylebutton");
  var button = document.querySelector(".colorswitch");
  if (button.textContent === "dark mode") {
    button.textContent = " light mode";
  } else {
    button.textContent = "dark mode";
  }
}
