const btn = document.querySelector("#button");
const content = document.querySelector("#content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("content-hidden")) {
        btn.textContent = "Закрыть блок";
    } else {
        btn.textContent = "Открыть блок";
    }

    content.classList.toggle("content-hidden");
}
