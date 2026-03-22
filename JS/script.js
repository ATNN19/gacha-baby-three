const allImages = [
    "../IMG/Blindbox_Baby_Three_V3_Mini-2.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-3.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-4.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-5.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-6.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-7.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-8.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-9.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-10.jpg",
    "../IMG/Blindbox_Baby_Three_V3_Mini-12.jpg" 
];

let danhSachConLai = [...allImages];

function randomImage() {
    if (danhSachConLai.length === 0) {
        danhSachConLai = [...allImages];
    }

    let index1 = Math.floor(Math.random() * danhSachConLai.length);
    let image1 =danhSachConLai.splice(index1,1)[0];
    let index2 = Math.floor(Math.random() * danhSachConLai.length);
    let image2 = danhSachConLai.splice(index2,1)[0];

    return [image1, image2];
}

function nextRandom() {
    const [image1, image2] = randomImage();
    document.getElementById("image1").src = image1;
    document.getElementById("image2").src = image2;
}

document.addEventListener("DOMContentLoaded", function() {
    nextRandom();
});
