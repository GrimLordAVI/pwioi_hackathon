const images = [
    public\images\description water.jpg,
    public\images\description water 2.jpg
];

let currentIndex = 0;

const imageFrame = document.getElementById('imageFrame');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to update the iframe source
function updateImage() {
    imageFrame.src = images[currentIndex];
}

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Initialize the first image
updateImage();