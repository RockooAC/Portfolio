"use strict";
const modal = document.querySelector(".popup");
const modalOne = document.querySelector(".popup-1");
const modalTwo = document.querySelector(".popup-2");
const modalThree = document.querySelector(".popup-3");
const modalFour = document.querySelector(".popup-4");
const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModalOne = document.querySelector(".cert__card-btn-1");
const btnOpenModalTwo = document.querySelector(".cert__card-btn-2");
const btnOpenModalThree = document.querySelector(".cert__card-btn-3");
const btnOpenModalFour = document.querySelector(".cert__card-btn-4");

function openModalOne() {
  modalOne.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function openModalTwo() {
  modalTwo.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function openModalThree() {
  modalThree.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function openModalFour() {
  modalFour.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modalOne.classList.add("hidden");
  modalTwo.classList.add("hidden");
  modalThree.classList.add("hidden");
  modalFour.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnOpenModalOne.addEventListener("click", openModalOne);
btnOpenModalTwo.addEventListener("click", openModalTwo);
btnOpenModalThree.addEventListener("click", openModalThree);
btnOpenModalFour.addEventListener("click", openModalFour);

// btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
