function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 10);
    } else clearTimeout(scrollAnimation);
}

function scrollAnimate() {
    var y = window.pageYOffset;
    if (y > 500) {
         document.getElementById("scrollTop").style.transform = "translateY(0px)";
         document.getElementById("scrollTop").style.opacity = "1";
    } else if (y <= 500 && y > 0) {

         document.getElementById("scrollTop").style.transform = "translateY(" + ((y - 500) / 3.33) + "px)";
         document.getElementById("scrollTop").style.opacity = (((0.002 / 1) * y));

         console.log(((y - 500) / 3.33));
    } else {
         document.getElementById("scrollTop").style.transform = "translateY(-150px)";
         document.getElementById("scrollTop").style.opacity = "0";
    }
}

