const modalButtons = document.querySelectorAll("[data-modal-button]");

modalButtons.forEach(modalHandler);

function modalHandler(item) {
    item.addEventListener("click", openModal);
}

function openModal() {
    console.log(this.dataset.modalButton);
    const modalId = this.dataset.modalButton;
    const modal = document.getElementById(modalId);
    modal.classList.add("fade-block--visible");

    const btnClose = modal.querySelector("[data-modal-close]");
    console.log(btnClose);

    btnClose.addEventListener("click", function() {
        modal.classList.remove("fade-block--visible");
    });

    modal.addEventListener("click", function () {
        modal.classList.remove("fade-block--visible");
    });

    modal.querySelector('.modal-window').addEventListener('click', function(e){
        e.stopPropagation();
    })
}
