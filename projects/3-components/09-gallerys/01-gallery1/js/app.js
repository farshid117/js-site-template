const images = document.querySelectorAll('.zoom-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// کلیک روی هر عکس -> باز شدن لایت‌باکس با افکت نرم
images.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImg.src = image.src;
        lightbox.classList.add('active');

        // اطمینان از اجرای Transition
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
    });
});

// بستن با دکمه ✖ یا کلیک بیرون از عکس
const closeLightbox = () => {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.classList.remove('active');
    }, 400); // صبر می‌کنیم تا transition تموم بشه
};

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
