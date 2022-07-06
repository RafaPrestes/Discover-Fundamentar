const openModal = document.querySelector("#openModal")

const modalWrapper = document.querySelector(".modal-wrapper")

openModal.addEventListener("click", function () {
    modalWrapper.classList.remove ("invisible")
    document.body.style.backgroundColor = "rgb(146, 144, 144)"
})

document.addEventListener("keydown", function(event){
    const itsKey = event.key === "Escape"

    if (itsKey && !modalWrapper.classList.contains("invisible")) {
        modalWrapper.classList.add("invisible")
        document.body.style.backgroundColor = "white"
    }

})