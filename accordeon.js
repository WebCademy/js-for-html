const headers = document.querySelectorAll("[data-name='accordeon-title']");
console.log("headers", headers);

headers.forEach(function(item) {
    item.addEventListener("click", headerClick);
});

function headerClick() {
    console.log("Fired");
    console.log("item", this.nextElementSibling);
    this.nextElementSibling.classList.toggle("accordeon-body");
}
