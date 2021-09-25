let bg = document.getElementById("bg");
let manus = document.getElementById("manus");
let green = document.getElementById("green");

let text = document.getElementById("text");

window.addEventListener("scroll", function () {
    var value = window.scrollY;

    bg.style.top = value * 0.5 + "px";
    manus.style.left = -value * 0.9 + "px";
    text.style.left = -value * 1.5 + "px";
    text.style.top = value * 0.7 + "px";
});
