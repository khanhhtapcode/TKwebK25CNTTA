// dau x cua menu
const menuBar = document.querySelector(".menubar")
menuBar.addEventListener("click", function() {
        menuBar.classList.toggle("active")
        document.querySelector(".menu-items").classList.toggle('active')
    })
    // script khi cuon thanh me nu hien ra
const toP = document.querySelector(".top")
window.addEventListener("scroll", function() {
        const x = this.pageYOffset;
        if (x > 80) { toP.classList.add("active") } else { toP.classList.remove("active") }
    })
    // scripts menu hien tung muc
const menubarBtn = document.querySelector('.top i')
menubarBtn.addEventListener("click", function() {
    document.querySelector('.top ul').classList.toggle('active')
})

// menu 
// Lấy tất cả các liên kết trong menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        const targetId = this.getAttribute('href').substring(1); // Lấy id của phần cần cuộn tới
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Cuộn mượt
                block: 'start'
            });
        }
    });
});


document.querySelectorAll('.menu-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 20, // Điều chỉnh khoảng cách
            behavior: 'smooth'
        });
    });
});

// const menuTitle = document.querySelector(".menu-title");
// menuTitle.addEventListener('click', function(x){
//     if(x.target.classList.contains)
// })