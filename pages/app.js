import { initSandBox } from "./sandBox/sandbox.js"
import { initMatching } from "./matching/matching.js"
import { initBorrow } from "./borrow/borrow.js"

import { temp } from "./src/template.js"
import { style } from "./src/style.js"

let choice
let elemantApp = document.getElementById("app")

let handleClick = (e) => {
	let elemant = e.target
	choice = elemant.textContent
	elemantApp.innerHTML = ``

	if (choice == "Matching"){
		initMatching()
	} else if (choice == "Borrow"){
		initBorrow()
	} else if (choice == "Sand Box"){
		initSandBox()
	}
	console.log(choice);
}

let app = () => {
	let template = temp
	template += style

	elemantApp.innerHTML = template

	document.querySelectorAll("#btn").forEach(btn => btn.addEventListener("click", handleClick))
}
document.addEventListener("DOMContentLoaded", () => app())
