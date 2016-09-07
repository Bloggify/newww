(function () {
    var contentImages = document.querySelectorAll(".markdown img");

    function handleImg(img) {
        imagesLoaded(img, function () {
            img.setAttribute("class", "loaded");
        });
    }

    for (var i = 0; i < contentImages.length; ++i) {
        handleImg(contentImages[i]);
    }
})();
