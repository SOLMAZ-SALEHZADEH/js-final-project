document.addEventListener("DOMContentLoaded", async () => {
setTimeout(() => {
    window.location.href="./onboardingPage3.html"
}, 3000);
})
let userInfo = JSON.parse(window.localStorage.getItem("uerInfo"));
userInfo && (window.location.href="./homePage1.html");