let items = document.querySelectorAll("#padan-item");
let moniter3 = document.getElementById("moniter3")
let flag = {
	isPickHint: false,
	isPickReset: false
}
let number1 = 0
let number2 = 0;
let sum = 0;
let countHint

let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let addClass = (element, classs) => {
	element.classList.add(classs);
};
let removeClass = (element, classs) => {
	element.classList.remove(classs);
};
let addListerner = (element, event, func) => {
	element.addEventListener(event, func);
};
let removeListerner = (element, event, func) => {
	element.removeEventListener(event, func);
};

let reshuffleArray = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

let render = () => {
	removeClass(document.getElementById("pop-up-padan"), "hide")
	document.getElementById("moniter1").textContent = number1
	document.getElementById("moniter2").textContent = number2
}

let updateMessage = (text) => {
	document.getElementById("textMessage").textContent = text
}

let handleSum = async (e) => {
	if (flag.isPick) return
	flag.isPick = true
	let element = e.target

	addClass(element, "kuning")
	addClass(moniter3, "kuning")

	moniter3.textContent = element.querySelector(".number").textContent

	await delay(500)

	let numberpick = parseInt(moniter3.textContent)

	removeClass(element, "kuning")
	removeClass(moniter3, "kuning")

	if (numberpick == (number1 + number2)) {
		addClass(element, "betul")
		addClass(moniter3, "betul")
		await delay(1000)
		back()
	} else {
		addClass(element, "salah")
		addClass(moniter3, "salah")
		await delay(500)
		removeClass(element, "salah")
		removeClass(moniter3, "salah")
		removeClass(element, "borderDash")

		moniter3.textContent = ""
	}
	flag.isPick = false
}

let back = () => {
	items.forEach(item => removeListerner(item, "click", handleSum))
	newReset()
	window.dispatchEvent(new CustomEvent("modulSelesai", {
		detail: {
			method: "borrow",
			ans: (number1 + number2),
			status: "complete",
			hint: countHint
		}
	}));
}

let newReset = () => {
	document.getElementById("pop-up-padan").style.display = "none"
	items.forEach(element => {
		element.classList.contains("betul") ? removeClass(element, "betul") : ""
		element.classList.contains("salah") ? removeClass(element, "salah") : ""
		element.classList.contains("kuning") ? removeClass(element, "kuning") : ""
		element.classList.contains("borderDash") ? removeClass(element, "borderDash") : ""
	})
	removeClass(moniter3, "betul")
	removeClass(moniter3, "salah")
	removeClass(moniter3, "kuning")
	moniter3.textContent = ``
	
}

let cencal = () => {
	newReset()
	window.dispatchEvent(new CustomEvent("modulCancel", {
		detail: {
			method: "borrow",
			status: "not complete",
			hint: countHint
		}
	}));
}

let newHint = () => {
	if (countHint == 0) return
	countHint--
	console.log(countHint);
	
	document.querySelector(".padan-hint").textContent = `(${countHint}) Hint`
	let count = 0
	items.forEach(element => {
		if (count == 3) return

		if (parseInt(element.querySelector(".number").textContent) == (number1 + number2)) {
			addClass(element, "borderDash")
			count++
		} else if (Math.random() < 0.5) {
			addClass(element, "borderDash")
			count++
		}
	})
}



let initNormal = () => {
	
	
	let data = JSON.parse(localStorage.getItem("normal"))
	
	number1 = parseInt(data.array[0])
	number2 = parseInt(data.array[1])
	sum = number1 + number2
	
	countHint = data.hint
	
	render()
	updateMessage("Berapa Hasilnya")
	document.getElementById("pop-up-padan").style.display = "flex"
	moniter3 = document.getElementById("moniter3")
	items = document.querySelectorAll("#padan-item");
	document.querySelector(".padan-hint").textContent = `(${countHint}) Hint`

	let y = []
	y[0] = sum
	for (let index = 1; index < 6; index++) {
		let factor
		if (index == 2) factor = -5
		else if (index == 3) factor = +5
		else if (index == 1) factor = (Math.random < 0.5) ? 15 : -15;
		else if (index == 4) factor = -10
		else if (index == 5) factor = +10
		y[index] = sum + factor
	}
	reshuffleArray(y)
	reshuffleArray(y)
	reshuffleArray(y)
	items.forEach((element, index) => element.querySelector(".number").textContent = y[index])


	items.forEach((item) => addListerner(item, "click", handleSum));
	addListerner(document.querySelector(".padan-hint"), "click", newHint);
	addListerner(document.getElementById("close-padan"), "click", cencal)
}
export { initNormal }