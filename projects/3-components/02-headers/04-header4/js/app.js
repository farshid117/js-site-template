const burgerBtn = document.querySelector(".burger")
const navgationHeader = document.querySelector(".navgation_header")

burgerBtn.addEventListener("click", (event) => {
    navgationHeader.classList.toggle("show")
})

window.addEventListener("scroll", () => {
    if(window.innerWidth > 577){
        if (window.scrollY > 100) {
            navgationHeader.classList.add("fixed-nav")
        } else {
            navgationHeader.classList.remove("fixed-nav")
        } 
    }
})