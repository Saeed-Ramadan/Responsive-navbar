let icon = document.querySelector("#icon");
let list = document.querySelector("#list")

icon.onclick = function () {
    list.classList.add('show');
}
icon.mouseup = function () {
    list.classList.remove('show');
}