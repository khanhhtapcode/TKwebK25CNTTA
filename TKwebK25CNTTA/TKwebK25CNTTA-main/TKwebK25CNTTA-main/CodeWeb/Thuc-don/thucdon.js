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
    const openModal = document.querySelector('.modal.show');
    if (openModal && e.target === openModal) {
        openModal.classList.remove('show');
    }
});

// Xử lý modal đặt bàn 
const thucdon_btn = document.getElementById('thucdon-btn');
const thucdon_close = document.getElementById('thucdon-close');
const modal_container = document.getElementById('modal_container');

thucdon_btn.addEventListener('click', () => {
    modal_container.classList.add('show');
});

thucdon_close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});
