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

document.querySelectorAll('.menu-nav a').forEach(navItem => {
    navItem.addEventListener('click', () => {
        // Lấy id phần cần hiển thị từ liên kết menu
        const targetId = navItem.getAttribute('href').substring(1);
        
        // Ẩn tất cả các mục food-items
        document.querySelectorAll('.food-items').forEach(item => {
            item.classList.remove('active');
        });

        // Hiển thị mục được chọn
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.classList.add('active');
        }
    });
});

// Optional: Set the default visible section to 'lunch'
document.getElementById('lunch').classList.add('active');
// Chat bot
 
//add event chatbot                         
 function toggleChat() {
        var chatContainer = document.getElementById("chatContainer");
        if (chatContainer.classList.contains("hidden")) {
            chatContainer.classList.remove("hidden");
            chatContainer.style.transform = "scale(1)";
            chatContainer.style.opacity = "1";
        } else {
            chatContainer.style.transform = "scale(0.9)";
            chatContainer.style.opacity = "0";
            setTimeout(function() {
                chatContainer.classList.add("hidden");
            }, 300);
        }
    }


    document.addEventListener("DOMContentLoaded", function() {
        // Function to hide a section by its ID
        function hideSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'none';
            }
        }

        // Example: Hide "Bữa Trưa", "Khai Vị", and "Đồ Uống" sections
        hideSection('lunch');
        hideSection('appetizer');
        hideSection('drinks');
    });

