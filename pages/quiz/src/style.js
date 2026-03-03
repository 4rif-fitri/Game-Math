let style = 

`

<style>

.popUpContainer,
.popUpContainer2 {
	display: none;
}

.popUpContainer2 {
	display: flex;
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	top: 0;
	left: 0;
	align-items: center;
	justify-content: center;
	display: none;
}

.popUpCard {
	padding: 3rem;
	background-color: #fff;
}

section {
	margin: 0 auto;
	width: min(100vw, 30rem);
	position: relative;
	/* border: 1px solid black; */
	padding: 0.8rem;
	height: 100%;
}

.board {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
}

.soalan-group {
	width: 100%;
	/* height: 30rem; */

	display: grid;
	grid-template-columns: repeat(6, 1fr);
}

.soalan-item {
	border: 1px solid rgba(0, 0, 0, 0.2);
	font-size: 1.5rem;
	aspect-ratio: 1 / 1;

	display: grid;
	place-content: center;
	position: relative;
}

#tanda {
	position: absolute;
	left: -5%;
	top: 50%;
	transform: translateY(-50%);
	background-color: #fff;
}

#tandaa {
	position: absolute;
	left: -110%;
	top: 50%;
	transform: translateY(-50%);
	z-index: 20;
	background-color: #fff;
}

.btn {
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 15px;
	border: 4px solid gold;
	background-color: #fff;
	display: inline-block;
}

.board {
	padding: 1rem;
	gap: 1rem;
}

.btn-soalan h2 {
	color: lightcoral;
}

.btn-hint h2 {
	color: lightgreen;
}

.btn-score h2 {
	color: lightblue;
}

.soalan-container {
	margin: 0.5rem 0;
	width: 100%;
	padding: 1rem;
	border-radius: 15px;
	border: 4px solid rgb(190, 190, 190);
	background-color: #fff;
	display: flex;
	justify-content: center;
}

.message-container {
	margin: 0.5rem 0;
	text-align: center;
	font-size: 1rem;
	letter-spacing: 1px;
	width: 100%;
	padding: 1rem;
	border-radius: 15px;
	border: 4px solid rgb(255, 180, 126);
	background-color: #fff;
	display: inline-block;
}

.moniter-container {
	margin: 0.5rem 0;
	text-align: center;
	font-size: 1rem;
	letter-spacing: 1px;
	width: 100%;
	padding: 1rem;
	border-radius: 15px;
	border: 4px solid rgb(197, 197, 197);
	background-color: #fff;
	display: inline-block;

	place-content: center;
}

.moniter-group {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	height: 5rem;
}

.moniter-group>.item {
	/* border: 1px solid black; */
	height: inherit;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.pilih {
	background-color: lightgoldenrodyellow;
}

.betul {
	background-color: lightgreen;
}

.salah {
	background-color: lightcoral;
}

.borderDash {
	border: 2px dashed rgba(0, 0, 0, 0.5) !important;
}

.kuning {
	background-color: yellow;
}


.choise-group {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
}

.choise-group {
	aspect-ratio: 1 / 1;
	height: 6rem;
	opacity: 0;
}

.choise-item {
	border: 3px solid gold;
	border-radius: 15px;
	margin: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	cursor: pointer;
}

.btn-container {
	width: 100%;
	height: auto;
}

.btn-group {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
}

.btn-group>button {
	border: 3px solid white;
	border-radius: 15px;
	margin: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 1rem;
	font-family: aaa, sans-serif;
	color: #fff;
}

#GiveUp {
	background-color: rgb(238, 103, 103);
}

#hint {
	background-color: rgb(97, 192, 224);
}

.title {
	width: 100%;
	background-color: #fff;
	padding: 0.5rem;
	margin-top: 1rem;
	border-radius: 15px;
	border: 3px solid rgb(255, 147, 98);
}

.boxSoalan {
	cursor: pointer;
}

.soalan-item * {
	pointer-events: none;
}

#bar {
	width: 100%;
	height: 0.5rem;
	background-color: rgb(0, 119, 255);
	border-radius: 15px;
	/* opacity:0; */
	/* animation: bar 1s linear infinite; */
}
@keyframes bar {
	0%{
		width: 100%;
	}
	100%{
		width: 0%;
	}
}
/* desktop */
@media (min-width: 300px) {
	body {
		height: 100vh;
	}
}

.popup-giveup-container{
	position: absolute;
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 50;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	display: none;
}
.popup-giveup-content{
	padding: 1rem;
	width:95%;
	height: auto;
	background-color: #fff;
	border: 3px solid rgba(141, 173, 223);
	border-radius: 14px;
}
.grid-4{
	display: grid;
	grid-template-columns: repeat(4,1fr);
	gap: 10px;
	margin: 0.5rem 0;
}
.grid-3 {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin: 0.5rem 0;
		gap: 10px;
}
.btn-home{
	all: unset;
	border: 2px solid lightslategrey;
	border-radius: 14px;
	padding: 0.5rem 0;
	text-align: center;
	background-color: lightgray;
	margin: 0.5rem 0;
		width: 100%;
}
.overall{
	border-radius: 14px;
	padding: 0.5rem 0;
	text-align: center;
	width: 100%;
}
.good{
	border: 2px solid #37c874;
	background-color: rgba(135, 229, 175,0.7);
}
.notbad{
	border: 2px solid #bbc534;
		background-color: rgba(255, 253, 138, 0.863);
}
.bad{
	border: 2px solid #ff2e2e;
		background-color: rgba(255, 50, 50, 0.7);
}
.grid-4 > .result-box{
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.3rem;
	border-radius: 14px;
	height: 5rem;
	border: 3px solid #f1be5a;
	background-color: rgba(240, 223, 139,0.2);
}
.grid-3 >.result-box {
	text-align: center;
	height: 7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.3rem;
	border-radius: 14px;
		border: 3px solid #2f3cd3;
	background-color: rgba(131, 140, 241,0.3);
}
.result-box > article{
	display: grid;
	grid-template-rows: 1fr 1fr;
}
.result-box p{
	font-size: 11px;
}
.result-box{
	display: block;
}
.img{
	position: relative;
	border: 2px solid black;
	margin: 0.5rem;
}
.text{
	white-space: nowrap;
	border: 2px solid black;
	padding: 0.5rem 2em;
	background-color: #fff;
	position: absolute;
	left: 50%;
	bottom: 10px;
	transform: translateX(-50%);
}

</style>

`

export { style }