let loginPage = document.querySelector(".login-container");
let regiPage = document.querySelector(".register-container")
let register = document.querySelector(".regi")

register.addEventListener("click", () => {
    loginPage.style.display = "none"
    regiPage.style.display = "block"
})