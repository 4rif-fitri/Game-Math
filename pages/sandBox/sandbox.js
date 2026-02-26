import { initBorrow } from "./logic/borrow.js";
import { initMatching } from "./logic/matching.js";
import { initNormal } from "./logic/normal.js";

import { style } from "./src/style.js"
import { temp } from "./src/template.js"

let updateTextMessage = (text) => {
	document.getElementById("textMessagee").textContent = text;
};

let reshuffleArray = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};
let addClass = (element, classs) => { element.classList.add(classs) };
let removeClass = (element, classs) => { element.classList.remove(classs) };
let addListerner = (element, event, func) => { element.addEventListener(event, func) };
let removeListerner = (element, event, func) => { element.removeEventListener(event, func) };


let ui = {
	boxSoalan: document.querySelectorAll(".boxSoalan"),
	btnsMethed: document.querySelectorAll(".option-action button"),
}

let array = {
	randomPoll: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	pollQuestion: [],

	numMethodpick: [],
}
let count = {
	pickNum: 0
}

let flag = {
	isPickMethod: false,
}
let stackGame = {
	idMethod: null,
	idNumber: null,
	pickMethod: null,

	elementPick: [],
}

let random = () => {
	let arr = [...array.randomPoll]
	for (let index = 0; index < 3; index++) {
		reshuffleArray(arr);
		array.pollQuestion[index] = arr[0];
		arr = arr.filter((num) => num !== arr[0]);
	}

	ui.boxSoalan.forEach((element, index) => {
		element.querySelector(".number").textContent = array.pollQuestion[index]
	})
}
let unPickMethod = () => {
	cencelSasaranMethod()
	ui.boxSoalan.forEach(box => removeListerner(box, "click", handlePickNumber))

	flag.isPickMethod = false
	stackGame.pickMethod = null
	stackGame.idMethod = null
}
let sasaranMethod = (elemant) => {
	ui.boxSoalan.forEach(element => {
		addClass(element, "borderDashTebal")
		addClass(element, "pilih")
	})
	addClass(elemant, "borderDashTebal")
}
let cencelSasaranMethod = () => {
	ui.boxSoalan.forEach(element => {
		removeClass(element, "borderDashTebal")
		removeClass(element, "pilih")
		removeClass(element, "kuning")
	})
	ui.btnsMethed.forEach(element => {
		removeClass(element, "borderDashTebal")
	})
	count.pickNum = 0
	stackGame.idNumber = null
	array.numMethodpick = []

}
let unPickNumber = (element) => {
	removeClass(element, "kuning")
	stackGame.idNumber = null
	count.pickNum--
	array.numMethodpick[0] = null
}

let handlePickNumber = (e) => {
	let element = e.target

	if (stackGame.idNumber == element.dataset.id) {
		unPickNumber(element)
		return
	}
	if (flag.isPickMethod) return
	addClass(element, "kuning")
	stackGame.idNumber = element.dataset.id

	if (array.numMethodpick[0] == null) {
		array.numMethodpick[0] = element.querySelector(".number").textContent
	} else {
		array.numMethodpick[1] = element.querySelector(".number").textContent
	}

	stackGame.elementPick[count.pickNum] = element
	count.pickNum++

	if (count.pickNum == 2) {
		let n1 = parseInt(array.numMethodpick[0])
		let n2 = parseInt(array.numMethodpick[1])
		let base
		let max, min
		if (n1 > n2) {
			max = n1
			min = n2
		} else {
			max = n2
			min = n1
		}
		if (max < 10) base = 10
		else if (max < 20) base = 20
		else if (max < 20) base = 20
		else if (max < 30) base = 30
		else if (max < 40) base = 40
		let pelangkap = base - max

		if (stackGame.pickMethod == "Tambah Biasa") {

			localStorage.setItem("normal", JSON.stringify({
				"array": array.numMethodpick,
				"base": n1 + n2 < 20 ? 10 : 20,
			}))

			initNormal()

			window.addEventListener("modulSelesai", (e) => {
				// console.log("Jawapan:", e.detail.ans);
				stackGame.elementPick[1].querySelector(".number").textContent = e.detail.ans
				stackGame.elementPick[0].remove()
				unPickMethod()
			});

		} else if (stackGame.pickMethod == "Borrow") {

			if (min > pelangkap) {
				localStorage.setItem("borrow", JSON.stringify({
					"array": array.numMethodpick,
					"base": n1 + n2 < 20 ? 10 : 20,
				}))

				initBorrow()

				window.addEventListener("modulSelesai", (e) => {
					// console.log("Jawapan:", e.detail.ans);
					stackGame.elementPick[1].querySelector(".number").textContent = e.detail.ans
					stackGame.elementPick[0].remove()
					unPickMethod()
				});

			} else {
				updateTextMessage(`upss Tak Boleh, ${max} perlukan ${pelangkap} untuk jadi ${base}`)
			}
			unPickMethod()

		} else if (stackGame.pickMethod == "Padan") {
			console.log(n1 + n2);
			let sum = n1 + n2
			if (sum % 5 == 0 && sum >= 5 && sum <= 30) {
				localStorage.setItem("padan", JSON.stringify({
					"array": array.numMethodpick,
				}))

				initMatching()
				
				window.addEventListener("modulSelesai", (e) => {
					// console.log("Jawapan:", e.detail.ans);
					stackGame.elementPick[1].querySelector(".number").textContent = e.detail.ans
					stackGame.elementPick[0].remove()
					unPickMethod()
				});

			} else {
				updateTextMessage(`upss ${max} dan ${min} dapat nombor tak mudah`)
			}
			unPickMethod()

		}
	}
}

let handleMethodPick = (e) => {
console.log(e);

	let elemant = e.target

	if (stackGame.idMethod == elemant.dataset.id) {
		unPickMethod(elemant)
		return
	}
	if (flag.isPickMethod) return
	stackGame.idMethod = elemant.dataset.id
	cencelSasaranMethod()
	sasaranMethod(elemant)

	stackGame.pickMethod = elemant.textContent

	if (stackGame.pickMethod == "Tambah Biasa") updateTextMessage(`teknik tambah bisas`)
	else if (stackGame.pickMethod == "Borrow") updateTextMessage(`teknik digunkan untuk permudahkan bantuk nombor kepada 10 or 20 or 30`)
	else if (stackGame.pickMethod == "Padan") updateTextMessage(`teknik untuk dapatkan dua nombor yang hasilnya nombor mudah`)

	ui.boxSoalan.forEach(box => addListerner(box, "click", handlePickNumber))
}

let renderGame = () => {
	let app =document.getElementById("app")
	let t = style
	t += temp
	app.insertAdjacentHTML("beforeend", t);
}

let initSandBox = () => {
	console.log("sand");
	renderGame()
	
	ui.boxSoalan = document.querySelectorAll(".boxSoalan")
	ui.btnsMethed = document.querySelectorAll(".option-action button")

	random()
	ui.btnsMethed.forEach(btn => btn.addEventListener("click", handleMethodPick))
}

export { initSandBox }