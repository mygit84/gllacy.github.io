var open = document.querySelector(".modal-open");
var popup = document.querySelector(".modal-reverse");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector(".reverse");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

open.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", login.value);
  }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});
