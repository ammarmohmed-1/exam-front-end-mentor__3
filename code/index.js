//alert("ammar")

var toggle_open = document.getElementById("toggle_open");
var toggle_close = document.getElementById("toggle_close");

//addEventListener
toggle_open.addEventListener("click",function() {
    navbar.className = "navbar_block"
});
toggle_close.addEventListener("click",function() {
    navbar.className = "navbar_none"
});

//if(toggle.addEventListener("click" , )){}