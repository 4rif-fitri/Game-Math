let arrayPoll = [1, 2, 3, 4, 5];
let lineArray = [];

let items = document.querySelectorAll("#padan-item");
let moniter3 = document.getElementById("moniter3")

let idElement = 0;
let isPickBoth = false;
let isPickFirst = false;

let lastId = null

let count = {
	hint: 5,
	currentQuestion: 1,
	totalQuestion: 3,
	currentScore: 0,
	totalScore: 3,
}
let flag = {
	isPickHint: false,
	isPickReset: false
}

let element1 = null
let element2 = null;
let number1 = 0
let number2 = 0;
let sum = 0;


let reshuffleArray = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};
let push = (arr, poll) => {
	for (let index = 0; index < 3; index++) {
		arr[index] = poll[index];
	}
	let count = 0;
	for (let index = 3; index < 6; index++) {
		arr[index] = 10 - arr[count];
		count++;
	}
	return arr;
};
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

let displayMoniter = (num, id) => {
	console.log(document.getElementById("moniter1").textContent);

	if (lastId == id) {
		document.getElementById("moniter1").textContent = ""
		document.getElementById("moniter2").textContent = ""
		lastId = null
		return
	}

	if (document.getElementById("moniter1").textContent == "") {
		document.getElementById("moniter1").textContent = num
	} else {
		document.getElementById("moniter2").textContent = num
	}
	lastId = id
}

let unSelect = (elementt) => {
	removeClass(elementt, "pilih");
	element1 = null;
	number1 = 0;
	idElement = null;
	isPickFirst = false;
};

let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let checkChoice = async () => {
	if (number1 == 0 || number2 == 0) return;

	if (number1 + number2 == 10) {
		// console.log("betul");

		addClass(element1, "betul");
		addClass(element2, "betul");

		removeListerner(element1, "click", handlePickBox);
		removeListerner(element2, "click", handlePickBox);

		addClass(document.getElementById("moniter1"), "betul")
		addClass(document.getElementById("moniter2"), "betul")

		await delay(500);
		sum = number1 + number2;

		element2.querySelector(".number").textContent = sum;
		element1.remove();

		document.querySelectorAll(".soalan-item").forEach((itm) => removeClass(itm, "borderDash"));

		removeClass(document.getElementById("moniter1"), "betul")
		removeClass(document.getElementById("moniter2"), "betul")

		coutWin();
	} else {
		// console.log("salah");
		removeClass(element1, "pilih");
		removeClass(element2, "pilih");

		addClass(element1, "salah");
		addClass(element2, "salah");

		addClass(document.getElementById("moniter1"), "salah")
		addClass(document.getElementById("moniter2"), "salah")

		await delay(500);

		removeClass(element1, "salah");
		removeClass(element2, "salah");

		removeClass(document.getElementById("moniter1"), "salah")
		removeClass(document.getElementById("moniter2"), "salah")

	}

	isPickBoth = false;
	isPickFirst = false;
	element1 = element2 = null;
	number1 = number2 = 0;

	flag.isPickHint = flag.isPickReset = false;

	document.getElementById("moniter1").textContent = null
	document.getElementById("moniter2").textContent = null
};

let handlePickBox = (e) => {
	if (isPickBoth) return

	e.stopPropagation();

	let elementt = e.target
	displayMoniter(parseInt(elementt.textContent), elementt.dataset.id)


	if (elementt.dataset.id === idElement) {
		unSelect(elementt);
		return;
	}

	idElement = elementt.dataset.id;

	if (isPickFirst == false) {
		element1 = elementt;
		addClass(element1, "pilih");
		number1 = parseInt(element1.querySelector(".number").textContent);
		isPickFirst = true;

	} else if (isPickFirst == true) {
		element2 = elementt;
		addClass(element2, "pilih");
		number2 = parseInt(element2.querySelector(".number").textContent);
		isPickBoth = true;
		flag.isPickHint = flag.isPickReset = true;
		checkChoice();

	}
	flag.isPickHint = false
};

let randomSoalan = () => {
	reshuffleArray(arrayPoll);
	push(lineArray, arrayPoll);
	reshuffleArray(lineArray);
	reshuffleArray(lineArray);

	for (let index = 0; index < items.length; index++) {
		items[index].dataset.number = lineArray[index];
		items[index].querySelector(".number").textContent = lineArray[index];
	}
}

let render = () => {
	removeClass(document.getElementById("pop-up-padan"), "hide")
	document.getElementById("moniter1").textContent = number1
	document.getElementById("moniter2").textContent = number2
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
		await delay(1500)
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
	newReset()
	window.dispatchEvent(new CustomEvent("modulSelesai", {
		detail: {
			method: "borrow",
			ans: (number1 + number2),
			status: "complete"
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

let newHint = () => {
	count = 0
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

let y = []

let initMatching = () => {
	let data = JSON.parse(localStorage.getItem("padan"))
	items = document.querySelectorAll("#padan-item");
	popUpContainer2 = document.querySelector(".popUpContainer2");
	moniter3 = document.getElementById("moniter3")

	randomSoalan()
	number1 = parseInt(data.array[0])
	number2 = parseInt(data.array[1])
	sum = number1 + number2

	render()

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
	// addListerner(document.getElementById("reset"), "click", HandleReset);
	addListerner(document.querySelector(".padan-hint"), "click", newHint);
	addListerner(document.getElementById("close-padan"), "click", newReset)
}
export { initMatching }