// dau x cua menu
const menuBar = document.querySelector(".menubar")
menuBar.addEventListener("click", function () {
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle('active')
})
// script khi cuon thanh me nu hien ra
const toP = document.querySelector(".top")
window.addEventListener("scroll", function () {
    const x = this.pageYOffset;
    if (x > 80) { toP.classList.add("active") }
    else { toP.classList.remove("active") }
})
// scripts menu hien tung muc
const menubarBtn = document.querySelector('.top i')
menubarBtn.addEventListener("click", function (){
    document.querySelector('.top ul').classList.toggle('active')
})
