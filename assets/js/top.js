document.addEventListener("DOMContentLoaded", function() {
    var mainCopies = document.querySelectorAll(".main_copy");
    var heartElement = document.querySelector("#heart_color");
    var heartHeight = heartElement.offsetHeight + 300;

    window.addEventListener("scroll", function() {
            var scrollPosition = window.scrollY || document.documentElement.scrollTop;

            mainCopies.forEach(function(mainCopy) {
            if (scrollPosition > heartHeight) {
            mainCopy.classList.add("is-absolute");
            } else {
            mainCopy.classList.remove("is-absolute");
            }
        });
    });
});

