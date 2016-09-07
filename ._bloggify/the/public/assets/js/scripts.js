window.onload = function () {
    var $ = document.querySelector.bind(document);
    var $box = $(".full-box");
    var $terms = $("a[href='#terms']");
    var $closeBox = $(".close-box");

    $terms && ($terms.onclick = function (e) {
        $box.style.display = "block";
        e.preventDefault();
    });

    $closeBox && ($closeBox.onclick = function () {
        $box.style.display = "none";
    });
};
