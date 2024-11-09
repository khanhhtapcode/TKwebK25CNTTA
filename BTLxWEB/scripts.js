const menubarBtn = document.querySelector('.header-top i')
menubarBtn.addEventListener("click", function () {
    document.querySelector('.header-top ul').classList.toggle('active')
})
// logo = document.getElementById("logo");
//       logo.addEventListener("mouseover", function() {
//       logo.style.width = "50%";
//       logo.style.height = "100px";
//       });
//       logo.addEventListener("mouseout", function() {
//       logo.style.width = "100%";
//       logo.style.height = "200px";
//       });