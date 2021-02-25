collection_images = document.getElementsByClassName("collection_img");
for (let img of collection_images) {
    console.log(img.getAttribute("src"));
    img.addEventListener("click", function () {
        document.getElementsByClassName("viewport_img")[0].setAttribute("src", img.getAttribute("src"));
        document.getElementsByClassName("viewport_img")[0].setAttribute("alt", img.getAttribute("alt"));
        for (let img_1 of collection_images) {
            img_1.setAttribute("class", "collection_img");
        }
        img.setAttribute("class", "collection_img active_img");
    });
}
