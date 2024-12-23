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
   