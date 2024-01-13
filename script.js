
function reveal() {
    var revealsRight = document.querySelectorAll(".reveal-right");
    var revealsLeft = document.querySelectorAll(".reveal-left");
    var revealsBottom = document.querySelectorAll(".reveal-bottom");

    for (var i = 0; i < revealsLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            revealsLeft[i].classList.add("active");
        } else {
            revealsLeft[i].classList.remove("active");

        }
    }
    for (var i = 0; i < revealsBottom.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsBottom[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            revealsBottom[i].classList.add("active");
        } else {
            revealsBottom[i].classList.remove("active");
        }
    }
    // for (var i = 0; i < revealsRight.length; i++) {
    //     var windowHeight = window.innerHeight;
    //     var elementTop = revealsRight[i].getBoundingClientRect().top;
    //     var elementVisible = 200;

    //     if (elementTop < windowHeight - elementVisible) {
    //         revealsRight[i].classList.add("active");
    //     } else {
    //         revealsRight[i].classList.remove("active");
    //     }
    // }

}

window.addEventListener("scroll", reveal);
