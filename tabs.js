// Нашли все заголовки табов по data атрибуту
const tabsHeaders = document.querySelectorAll("[data-tab]");

// Для каждого заголовка запустили ф-ю tabsHandler
tabsHeaders.forEach(tabsHandler);

function tabsHandler(item, index) {
    console.log(index);
    console.log(item);
    // Для каждого заголовка по клику запускаем ф-ю tabsClick
    item.addEventListener("click", tabsClick);
}

function tabsClick() {
    console.log("Fired");
    console.log(this);
    console.dir(this.dataset.tab);

    // Находим название ID связанного блока с контентом
    const tabId = this.dataset.tab;

    // Находим по data атрибуту все блоки с контентом
    // и скрываем их
    document.querySelectorAll("[data-tab-content]").forEach(function(item) {
        item.classList.add("tab-content-hidden");
    });

    // По ID включаем нужный блок с контентом
    document.getElementById(tabId).classList.remove("tab-content-hidden");
}
