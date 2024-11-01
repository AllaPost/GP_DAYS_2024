document.addEventListener("DOMContentLoaded", () => {
  const headerModal = document.getElementById("header__modal");
  const headerMenu = document.getElementById("header__menu");
  const headerModalClose = document.getElementById("header__modal-close");

  if (!headerMenu || !headerModal || !headerModalClose) {
    return console.log("Элемент не найден headerModal или headerMenu, headerModalClose");
  }

  headerMenu.addEventListener("click", () => {
    headerModal.classList.toggle('header__modal-open')
  });

  headerModalClose.addEventListener("click", () => {
    headerModal.classList.toggle('header__modal-open')
  });
});
