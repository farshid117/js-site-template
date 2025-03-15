const hamburBtn = document.querySelector(".hamburger")
const navbarElm = document.querySelector(".navbar")

hamburBtn.addEventListener("click", (event) => {
    hamburBtn.classList.toggle("show")
})
navbarElm.addEventListener("click", (event) => {
    hamburBtn.classList.remove("show")
})