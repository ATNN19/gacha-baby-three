const allImages = [
    "IMG/Blindbox_Baby_Three_V3_Mini-2.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-3.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-4.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-5.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-6.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-7.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-8.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-9.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-10.jpg",
    "IMG/Blindbox_Baby_Three_V3_Mini-12.jpg"
];

let danhSachConLai = [...allImages];

function randomImage() {
    if (danhSachConLai.length < 2) {
        danhSachConLai = [...allImages];
    }

    const shuffled = danhSachConLai.sort(() => 0.5 - Math.random());
    const [image1, image2] = shuffled.splice(0,2);
    danhSachConLai = shuffled;
    return [image1, image2];
}

function nextRandom() {
    const [image1, image2] = randomImage();
    const img1 = document.getElementById("image1");
    const img2 = document.getElementById("image2");

    // fade effect
    img1.style.opacity = 0;
    img2.style.opacity = 0;

    setTimeout(() => {
        img1.src = image1;
        img2.src = image2;
        img1.style.opacity = 1;
        img2.style.opacity = 1;
    }, 200);
}

document.addEventListener("DOMContentLoaded", function() {
    nextRandom();
});
