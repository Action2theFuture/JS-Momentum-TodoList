
const form = document.querySelector(".js-greetingform"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".greeting");

const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem("User", text);
}
function handleSubmit(e) {
  e.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `${text}'s To Do List`;
}

function loadName() {
  const currentUser = localStorage.getItem("User");
  if (currentUser === null) {
    askForName(currentUser);
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
