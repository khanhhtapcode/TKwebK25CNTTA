document.addEventListener('DOMContentLoaded', () => {
    const zoomableImages = document.querySelectorAll('.zoomable');
    const overlay = document.querySelector('.overlay');
    const zoomedImage = document.getElementById('zoomed-image');

    zoomableImages.forEach(image => {
        image.addEventListener('click', () => {
            zoomedImage.src = image.src;
            overlay.classList.add('active');
        });
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay || event.target === zoomedImage) {
            overlay.classList.remove('active');
        }
    });
});


    const booking_btn = document.getElementById('booking_btn');
    const btn_close = document.getElementById('btn_close');
    const modal_container = document.getElementById('modal_container');

        booking_btn.addEventListener('click', () => {
            modal_container.classList.add('show');
        });

        btn_close.addEventListener('click', () => {
            modal_container.classList.remove('show');
        });
   

// Lấy các phần tử cần thiết
const xemThucDonBtns = document.querySelectorAll('#mien-nam.btn, #mien-nam2.btn, #mien-nam3.btn, #mien-nam4.btn');
const modals = {
    'mien-nam': document.getElementById('flipbook-modal'),
    'mien-nam2': document.getElementById('flipbook-modal2'),
    'mien-nam3': document.getElementById('flipbook-modal3'),
    'mien-nam4': document.getElementById('flipbook-modal4'),
};
const closeModalBtns = document.querySelectorAll('.close-modal'); // Lấy tất cả nút đóng

// Xử lý khi click vào các nút xem thực đơn
xemThucDonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.id; // Lấy id của nút
        const modal = modals[modalId]; // Tìm modal tương ứng
        if (modal) {
            modal.classList.add('show'); // Hiển thị modal
        }
    });
});

// Xử lý khi nhấn vào nút đóng trong từng modal
closeModalBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal'); // Lấy modal cha gần nhất
        if (modal) {
            modal.classList.remove('show'); // Ẩn modal
        }
    });
});

// Đóng modal khi click bên ngoài modal
window.addEventListener('click', (e) => {
    const openModals = document.querySelectorAll('.modal.show'); // Lấy tất cả các modal đang mở
    openModals.forEach(openModal => {
        if (e.target === openModal) {
            openModal.classList.remove('show'); // Ẩn modal
        }
    });
});



// Thêm sự kiện click cho các mục trong menu điều hướng
document.querySelectorAll('.header nav a').forEach(navItem => {
    navItem.addEventListener('click', (e) => {
        const targetHref = navItem.getAttribute('href');

        // Nếu href bắt đầu bằng "#", xử lý cuộn đến phần tử tương ứng
        if (targetHref.startsWith('#')) {
            e.preventDefault(); // Ngăn chặn hành vi mặc định
            const targetId = targetHref.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});


