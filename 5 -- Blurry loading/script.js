const open = document.getElementById("open")
const close = document.getElementById("close")
const container = document.getElementsByClassName("container")

open.addEventListener("click", () => [...container][0].classList.add("show-nav"))
close.addEventListener("click", () => [...container][0].classList.remove("show-nav"))


