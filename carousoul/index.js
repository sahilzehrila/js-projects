// JavaScript for carousel functionality

let currentImageIndex = 0;
const images = document.querySelectorAll('.imageclass');
const totalImages = images.length;
const dots = document.querySelectorAll('.dot');

// Function to show a particular image
function showImage(index) {
    images[currentImageIndex].style.display = 'none';
    dots[currentImageIndex].classList.remove('active-dot');

    currentImageIndex = (index + totalImages) % totalImages;

    images[currentImageIndex].style.display = 'block';
    dots[currentImageIndex].classList.add('active-dot');
}

// Function to show the next or previous image
function showimg(n) {
    showImage(currentImageIndex + n);
}

// Show the first image and activate the first dot initially
showImage(0);


// Add event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});
