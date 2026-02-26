let reshuffleArray = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};
let textNumberQuestion = () => {
	if (Math.random() > 0.5) {
		ui.boxsSoalan[0].querySelector(".number").textContent = flow.max;
		ui.boxsSoalan[1].querySelector(".number").textContent = flow.min;
	} else {
		ui.boxsSoalan[0].querySelector(".number").textContent = flow.min;
		ui.boxsSoalan[1].querySelector(".number").textContent = flow.max;
	}
};
let textNumberChoice = (items) => {
	let count = 0;
	items.forEach((item) => {
		addClass(item, "pilih");

		if (flag.isStepAnswer || flag.isStepSum) {
			item.textContent = `${stateGame.arrayChoice[count]}`;
		} else {
			if (flag.isPickMax) {
				item.textContent = `+${stateGame.arrayChoice[count]}`;
			} else {
				item.textContent = `-${stateGame.arrayChoice[count]}`;
			}
		}

		count++;
	});
};

let addClass = (element, classs) => { element.classList.add(classs) };
let removeClass = (element, classs) => { element.classList.remove(classs) };
let addListerner = (element, event, func) => { element.addEventListener(event, func) };
let removeListerner = (element, event, func) => { element.removeEventListener(event, func) };

let updateTextMessage = (text) => {
	document.getElementById("textMessage").textContent = text;
};

let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let flow = {
	max: null,
	min: null,
	borrow: null,
	actionMax: null,
	actionMin: null,
	hasilActionMax: null,
	hasilActionMin: null,
	jumlah: null,
};


let ui = {
	boxsSoalan: document.querySelectorAll(".borrow-soalan"),
	boxsAction: document.querySelectorAll(".borrow-action"),
	boxSum: document.querySelector(".borrow-total"),
	boxSumAction: document.querySelectorAll(".borrow-sum-action"),
	choiseItems: document.querySelectorAll(".borrow-choice-item"),
	choiseGroup: document.querySelector(".card-footer"),
}


let stateGame = {
	base: 10,
	number1: 0,
	number2: 0,
	boxSelected: null,
	arrayPoll: [6, 7, 8, 9],
	arrayBase10Poll: [1, 2, 3, 4, 5, 6, 7, 8, 9],
	arrayChoice: [],
	pointer: null,
	statusGame: "",
}

let flag = {
	isChoise: false,
	isPickMax: true,
	isStepAnswer: false,
	isStepSum: false,
	isDonePickBigger: false,
	isPickHint: false
};
let count = {
	hint: 5,
	currentQuestion: 1,
	totalQuestion: 5,
	currentScore: 0,
	totalScore: 6,
}
let step = {
	actionMax: false,
	actionMin: false,
	sumBorrowMax: false,
	sumBorrowMin: false,
	Total: false,
};

let tamat = () => {
	document.querySelector(".popUpContainer2").style.display = "flex";
};

let nextQuestion = () => {

	if (count.currentQuestion - 1 == count.totalQuestion) {
		tamat()

	} else {

		count.currentScore = 0
		console.log("win");

		randomInit();
		ramalan();
		textNumberQuestion();
		// next()
		reset()
	}
}



let updateStatus = () => {
	document.getElementById("lavel").textContent = `${count.currentQuestion}/${count.totalQuestion}`
	document.getElementById("hintCount").textContent = `${count.hint}`;
	document.getElementById("score").textContent = `${count.currentScore}/${count.totalScore}`;
	document.getElementById("hint").textContent = `(${count.hint}) Hint`
};



let randomInit = (arr) => {
	stateGame.number1 = parseInt(arr.array[0])
	stateGame.number2 = parseInt(arr.array[1])

	// let arr = stateGame.arrayPoll
	// reshuffleArray(arr);
	// stateGame.number1 = arr[0];
	// arr = arr.filter((num) => num !== stateGame.number1);
	// reshuffleArray(arr);
	// stateGame.number2 = arr[0];
};

let ramalan = () => {
	if (stateGame.number1 > stateGame.number2) {
		flow.max = stateGame.number1;
		flow.min = stateGame.number2;
	} else {
		flow.max = stateGame.number2;
		flow.min = stateGame.number1;
	}

	flow.borrow = stateGame.base - flow.max;

	flow.actionMax = `+${flow.borrow}`;
	flow.actionMin = `-${flow.borrow}`;

	flow.hasilActionMax = flow.max + flow.borrow;
	flow.hasilActionMin = flow.min - flow.borrow;

	flow.jumlah = flow.max + flow.min;

};



let pollTextSum = () => {
	let picked = flow.jumlah;
	stateGame.arrayChoice[0] = picked;
	stateGame.arrayChoice[1] = picked + 1;
	stateGame.arrayChoice[2] = picked - 1;
	stateGame.arrayChoice[3] = picked + 2;
	stateGame.arrayChoice[4] = picked - 2;
	stateGame.arrayChoice[5] = picked + 3;

	reshuffleArray(stateGame.arrayChoice);
	reshuffleArray(stateGame.arrayChoice);
	reshuffleArray(stateGame.arrayChoice);
};

let pollTextSumBorrow = () => {
	let picked
	if (flag.isPickMax) {
		picked = flow.hasilActionMax;
	} else {
		picked = flow.hasilActionMin;
	}
	stateGame.arrayChoice[0] = picked;
	stateGame.arrayChoice[1] = picked + 1;
	stateGame.arrayChoice[2] = picked - 1;
	stateGame.arrayChoice[3] = picked + 2;
	stateGame.arrayChoice[4] = picked - 2;
	stateGame.arrayChoice[5] = picked + 3;

	reshuffleArray(stateGame.arrayChoice);
	reshuffleArray(stateGame.arrayChoice);
	reshuffleArray(stateGame.arrayChoice);
};

let pollTextAction = () => {

	let available = [...stateGame.arrayBase10Poll];
	let picked = flow.borrow;
	stateGame.arrayChoice[0] = picked;
	available = available.filter((num) => num != picked);

	for (let index = 1; index < 6; index++) {
		stateGame.arrayChoice[index] = available[0];
		let chosen = available[0];
		available = available.filter((num) => num != chosen);

	}
	// console.log({available});
	// console.log({stateGame.arrayChoice});

	reshuffleArray(stateGame.arrayChoice);
	reshuffleArray(stateGame.arrayChoice);
	reshuffleArray(stateGame.arrayChoice);
};

let back = () => {
	console.log("back");

	window.dispatchEvent(new CustomEvent("modulSelesai", {
		detail: {
			method: "borrow",
			ans: flow.jumlah,
			status: "complete"
		}
	}));

	document.getElementById("pop-up-borrow").style.display = "none";
	reset();
}


let handleTotal = async (e) => {
	if (flag.isChoise) return;

	let element = e.target;
	addClass(element, "kuning");
	addClass(stateGame.boxSelected, "kuning");

	stateGame.boxSelected.querySelector(".number").textContent = element.textContent;

	await delay(500);
	flag.isChoise = true;

	removeClass(element, "kuning");
	removeClass(stateGame.boxSelected, "kuning");

	if (stateGame.boxSelected.querySelector(".number").textContent == flow.jumlah) {
		clearHint();
		updateTextMessage("Tahniahh!");

		addClass(element, "betul");
		addClass(stateGame.boxSelected, "betul");
		await delay(2000);
		removeClass(element, "betul");
		removeClass(stateGame.boxSelected, "borderDash");

		count.currentScore++;
		updateStatus();
		count.currentQuestion++;

		ui.choiseItems.forEach((item) =>
			removeListerner(item, "click", handleTotal),
		);

		if (count.currentScore == count.totalScore) {
			flag.isChoise = false;
			// nextQuestion();
			back()
		}

	} else {
		addClass(element, "salah");
		addClass(stateGame.boxSelected, "salah");
		await delay(500);
		removeClass(stateGame.boxSelected, "salah");
		removeClass(element, "salah");
		stateGame.boxSelected.querySelector(".number").textContent = ``;

	}
	flag.isChoise = false;

};

let handleSumBorrow = async (e) => {
	if (flag.isChoise) return;
	flag.isChoise = true;

	let element = e.target;
	addClass(element, "kuning");
	addClass(stateGame.boxSelected, "kuning");

	stateGame.boxSelected.querySelector(".number").textContent = element.textContent;

	await delay(500);

	removeClass(element, "kuning");
	removeClass(stateGame.boxSelected, "kuning");

	console.log(stateGame.boxSelected);


	if (flag.isPickMax) {
		if (stateGame.boxSelected.querySelector(".number").textContent == flow.hasilActionMax) {
			clearHint();

			addClass(element, "betul");
			addClass(stateGame.boxSelected, "betul");
			await delay(500);
			removeClass(element, "betul");
			removeClass(stateGame.boxSelected, "borderDash");
			flag.isPickMax = false;
			ui.choiseItems.forEach((item) => removeListerner(item, "click", handleSumBorrow));

			step.sumBorrowMin = true;

			count.currentScore++;
			updateStatus();

			initSumBorrow();

		} else {
			addClass(element, "salah");
			addClass(stateGame.boxSelected, "salah");
			await delay(500);
			removeClass(element, "salah");
			removeClass(stateGame.boxSelected, "salah");

			stateGame.boxSelected.querySelector(".number").textContent = ``;

		}

	} else {
		console.log(stateGame.boxSelected.textContent);
		console.log(flow.hasilActionMin);


		if (stateGame.boxSelected.querySelector(".number").textContent == flow.hasilActionMin) {
			clearHint();

			addClass(element, "betul");
			addClass(stateGame.boxSelected, "betul");
			await delay(500);
			ui.choiseItems.forEach((item) => removeListerner(item, "click", handleSumBorrow));
			removeClass(element, "betul");
			removeClass(stateGame.boxSelected, "borderDash");
			flag.isPickMax = true;
			flag.isStepAnswer = false;
			flag.isStepSum = true;

			step.Total = true

			count.currentScore++;
			updateStatus();

			initTotal();

		} else {
			addClass(stateGame.boxSelected, "salah");
			addClass(element, "salah");
			await delay(500);
			removeClass(stateGame.boxSelected, "salah");
			removeClass(element, "salah");
			stateGame.boxSelected.querySelector(".number").textContent = ``;

		}
	}

	flag.isChoise = false;
};

let handleAction = async (e) => {
	if (flag.isChoise) return;
	flag.isChoise = true;

	let element = e.target;
	addClass(element, "kuning");
	addClass(stateGame.boxSelected, "kuning");

	stateGame.boxSelected.querySelector(".number").textContent = element.textContent;

	await delay(500);

	if (stateGame.boxSelected.querySelector(".number").textContent == flow.actionMax || stateGame.boxSelected.querySelector(".number").textContent == flow.actionMin) {
		clearHint();

		removeClass(stateGame.boxSelected, "kuning");
		removeClass(element, "kuning");
		addClass(stateGame.boxSelected, "betul");
		addClass(element, "betul");
		ui.choiseItems.forEach((item) => removeListerner(item, "click", handleAction));

		await delay(500);
		removeClass(stateGame.boxSelected, "borderDash");
		removeClass(element, "betul");

		count.currentScore++;
		updateStatus();

		if (flag.isPickMax) {
			flag.isPickMax = false;
			step.actionMin = true;

			initAction();

		} else {
			stateGame.boxSelected = null;
			flag.isStepAnswer = true;
			flag.isPickMax = true;
			step.sumBorrowMax = true

			initSumBorrow();
		}
		flag.isChoise = false;

	} else {
		console.log("max salah");
		removeClass(stateGame.boxSelected, "kuning");
		removeClass(element, "kuning");
		addClass(stateGame.boxSelected, "salah");
		addClass(element, "salah");

		await delay(500);
		removeClass(stateGame.boxSelected, "salah");
		removeClass(element, "salah");
		stateGame.boxSelected.querySelector(".number").textContent = ``;
		flag.isChoise = false;
	}
};

let handleChooseBigger = async (e) => {
	if (flag.isChoise) return;
	flag.isChoise = true;

	let element = e.target;
	addClass(element, "kuning");
	await delay(500);

	if (flow.max == element.querySelector(".number").textContent) {
		// updateTextMessage("Betulll");
		await delay(500);

		removeClass(element, "kuning");
		addClass(element, "betul");

		removeClass(ui.boxsSoalan[0], "pilih");
		removeClass(ui.boxsSoalan[1], "pilih");
		removeClass(ui.boxsSoalan[0], "borderDash");
		removeClass(ui.boxsSoalan[1], "borderDash");

		ui.boxsSoalan.forEach((box) => removeListerner(box, "click", handleChooseBigger));
		flag.isDonePickBigger = true

		step.actionMax = true;

		count.currentScore++
		updateStatus()

		ui.choiseGroup.style.opacity = 1
		initAction();

	} else {
		removeClass(element, "kuning");
		addClass(element, "salah");
		await delay(500);
		removeClass(element, "salah");
		updateTextMessage("Upsss Salah");
		await delay(1000);
		updateTextMessage("Pilih Nombor Ynag Paling Besar");


	}

	flag.isChoise = false;
};



let initTotal = () => {
	updateTextMessage(`Berapa Hasil ${flow.hasilActionMax} + ${flow.hasilActionMin}`);
	stateGame.boxSelected = ui.boxSum
	addClass(stateGame.boxSelected, "pilih");
	addClass(stateGame.boxSelected, "borderDash");

	pollTextSum();
	textNumberChoice(ui.choiseItems);

	ui.choiseItems.forEach((item) => addListerner(item, "click", handleTotal));
};

let initSumBorrow = () => {
	if (flag.isPickMax) updateTextMessage(`Berapa Hasil ${flow.max} + ${flow.borrow}`);
	else updateTextMessage(`Berapa Hasil ${flow.min} - ${flow.borrow}`)

	if (flag.isPickMax) {
		if (
			parseInt(ui.boxsSoalan[0].textContent) >
			parseInt(ui.boxsSoalan[1].textContent)
		) {
			stateGame.pointer = 0;
		} else {
			stateGame.pointer = 1;
		}
	} else {
		if (
			parseInt(ui.boxsSoalan[0].textContent) <
			parseInt(ui.boxsSoalan[1].textContent)
		) {
			stateGame.pointer = 0;
		} else {
			stateGame.pointer = 1;
		}
	}

	stateGame.boxSelected = ui.boxSumAction[stateGame.pointer];
	addClass(stateGame.boxSelected, "pilih");
	addClass(stateGame.boxSelected, "borderDash");

	pollTextSumBorrow();
	textNumberChoice(ui.choiseItems);

	ui.choiseItems.forEach((item) => addListerner(item, "click", handleSumBorrow));
};

let initAction = () => {
	if (flag.isPickMax) updateTextMessage(`${flow.max} Tambah Berapa Dapat 10`);
	else updateTextMessage(`Apabila Kawan Sebelah Tambah ${flow.borrow} di disini kene Tolak ${flow.borrow}`);

	if (
		parseInt(ui.boxsSoalan[0].querySelector(".number").textContent) >
		parseInt(ui.boxsSoalan[1].querySelector(".number").textContent)
	) {
		if (flag.isPickMax) {
			addClass(ui.boxsAction[0], "pilih");
			addClass(ui.boxsAction[0], "borderDash");
			stateGame.boxSelected = ui.boxsAction[0];
		} else {
			addClass(ui.boxsAction[1], "pilih");
			addClass(ui.boxsAction[1], "borderDash");
			stateGame.boxSelected = ui.boxsAction[1];
		}
	} else {
		if (flag.isPickMax) {
			addClass(ui.boxsAction[1], "pilih");
			addClass(ui.boxsAction[1], "borderDash");
			stateGame.boxSelected = ui.boxsAction[1];
		} else {
			addClass(ui.boxsAction[0], "pilih");
			addClass(ui.boxsAction[0], "borderDash");
			stateGame.boxSelected = ui.boxsAction[0];
		}
	}

	ui.choiseGroup.style.opacity = 1

	pollTextAction();
	textNumberChoice(ui.choiseItems);

	ui.choiseItems.forEach((item) => addListerner(item, "click", handleAction));
}

let initChooseBigger = () => {
	updateTextMessage("Pilih Nombor Ynag Paling Besar")
	ui.boxsSoalan.forEach((box) => {
		addClass(box, "pilih");
		addClass(box, "borderDash");
		addListerner(box, "click", handleChooseBigger);
	});
};

let hint = () => {
	if (!flag.isDonePickBigger || count.hint == 0 || flag.isPickHint || flag.isChoise) return
	flag.isPickHint = true
	count.hint--
	console.log("hint");
	updateStatus()
	let predict

	if (step.Total) {
		//actionMax
		predict = flow.jumlah;

	} else if (step.sumBorrowMin) {
		//actionMin
		predict = flow.hasilActionMin;

	} else if (step.sumBorrowMax) {
		//sumBorrowMax
		predict = flow.hasilActionMax;

	} else if (step.actionMin || step.actionMax) {
		predict = flow.borrow

	}
	console.log({ predict });

	let pick = []
	let available = [...stateGame.arrayChoice]
	available = available.filter((num) => num != predict);

	pick.push(predict)

	for (let index = 0; index < 2; index++) {
		let randomIndex = Math.floor(Math.random() * available.length);
		let randomValue = available[randomIndex];
		available = available.filter((num) => num != randomValue);
		pick.push(randomValue);
	}

	ui.choiseItems.forEach(elemet => {
		let num = Math.abs(elemet.textContent);
		if (num == pick[0] || num == pick[1] || num == pick[2]) {
			addClass(elemet, "kuning");
		}
	})


}

let clearHint = () => {
	flag.isPickHint = false;
	ui.choiseItems.forEach(element => {
		removeClass(element, "kuning")
	})
}

let reset = () => {

	if (flag.isChoise) return
	ui.choiseGroup.style.opacity = 0;

	ui.boxsSoalan.forEach(box => {
		box.classList.contains("betul") ? removeClass(box, "betul") : ""
		box.classList.contains("salah") ? removeClass(box, "salah") : ""
		box.classList.contains("pilih") ? removeClass(box, "pilih") : ""
		box.classList.contains("borderDash") ? removeClass(box, "borderDash") : ""
	})

	ui.boxsAction.forEach(box => {
		box.classList.contains("betul") ? removeClass(box, "betul") : ""
		box.classList.contains("salah") ? removeClass(box, "salah") : ""
		box.classList.contains("pilih") ? removeClass(box, "pilih") : ""
		box.classList.contains("borderDash") ? removeClass(box, "borderDash") : ""
		box.querySelector(".number").textContent = ``
	})

	console.log(ui.boxSumAction);

	ui.boxSumAction.forEach(box => {
		box.classList.contains("betul") ? removeClass(box, "betul") : ""
		box.classList.contains("salah") ? removeClass(box, "salah") : ""
		box.classList.contains("pilih") ? removeClass(box, "pilih") : ""
		box.classList.contains("borderDash") ? removeClass(box, "borderDash") : ""
		box.querySelector(".number").textContent = ``
	})

	ui.boxSum.classList.contains("betul") ? removeClass(ui.boxSum, "betul") : ""
	ui.boxSum.classList.contains("salah") ? removeClass(ui.boxSum, "salah") : ""
	ui.boxSum.classList.contains("pilih") ? removeClass(ui.boxSum, "pilih") : ""
	ui.boxSum.classList.contains("borderDash") ? removeClass(ui.boxSum, "borderDash") : ""
	ui.boxSum.querySelector(".number").textContent = ``;

	ui.boxsSoalan.forEach(box => {
		addClass(box, "pilih")
		addClass(box, "borderDash");
	})

	console.log(stateGame.boxSelected);

	stateGame.number1 = stateGame.number2 = 0;
	// stateGame.boxSelected = null
	stateGame.arrayChoice = []

	flag.isChoise = false
	flag.isPickMax = true
	flag.isStepAnswer = false;
	flag.isStepSum = false;
	flag.isDonePickBigger = false;
	flag.isPickHint = false;

	count.currentScore = 0,

		step.actionMax = false
	step.actionMin = false;
	step.sumBorrowMax = false;
	step.sumBorrowMin = false;
	step.Total = false;

	stateGame.pointer = null

	ui.boxsSoalan.forEach((box) => removeListerner(box, "click", handleChooseBigger));
	ui.choiseItems.forEach((item) => removeListerner(item, "click", handleAction));
	ui.choiseItems.forEach((item) => removeListerner(item, "click", handleSumBorrow));
	ui.choiseItems.forEach((item) => removeListerner(item, "click", handleTotal));

	updateStatus();
	initChooseBigger()
}

let btnClose = () => {
	document.getElementById("pop-up-borrow").style.display = "none"
	reset()
}

let initBorrow = () => {
	ui.boxsSoalan = document.querySelectorAll(".borrow-soalan")
	ui.boxsAction = document.querySelectorAll(".borrow-action")
	ui.boxSum = document.querySelector(".borrow-total")
	ui.boxSumAction = document.querySelectorAll(".borrow-sum-action")
	ui.choiseItems = document.querySelectorAll(".borrow-choice-item")
	ui.choiseGroup = document.querySelector(".card-footer")


	document.getElementById("pop-up-borrow").style.display = "flex"
	let data = JSON.parse(localStorage.getItem("borrow"))
	stateGame.base = data.base

	console.log(data);

	updateStatus()
	randomInit(data);
	ramalan();

	console.log(flow);


	textNumberQuestion();
	initChooseBigger();

	addListerner(document.getElementById("hint"), "click", hint);
	addListerner(document.getElementById("reset"), "click", reset);
	addListerner(document.getElementById("borrow-close"), "click", btnClose);
}
export {initBorrow}