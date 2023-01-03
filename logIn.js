const emailInput = document.getElementById("Email");
const passwordInput = document.getElementById("Password");
const logInButton = document.getElementById("logInButton");
const showPassword = document.getElementById("showPassword");
const rememberMe = document.getElementById("rememberMe");
const userInfo = { email: "", password: "", rememberMe: false ,name:"solmaz"};

emailInput.addEventListener("keydown", function () {
  if (passwordInput.value) {
    logInButton.style.opacity = "1";
  }
});
passwordInput.addEventListener("keydown", function () {
  if (emailInput.value) {
    logInButton.style.opacity = "1";
  }
});

showPassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
rememberMe.addEventListener("click", function () {
  userInfo.rememberMe = !userInfo.rememberMe;
});

logInButton.addEventListener("click", function () {
  event.preventDefault();
  userInfo.email = emailInput.value;
  userInfo.password = passwordInput.value;
  userInfo.rememberMe = userInfo.rememberMe;
  window.localStorage.setItem("uerInfo", JSON.stringify(userInfo));
});
