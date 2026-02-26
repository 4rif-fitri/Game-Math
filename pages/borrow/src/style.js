let style = `

<style>

.popUpContainer,
.popUpContainer2 {
	display: none;
}
.popUpContainer2{
	display: flex;
	position: absolute;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	top: 0;left: 0;
	align-items: center;
	justify-content: center;
	display: none;
}
.popUpCard{
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
	grid-template-columns: repeat(3, 1fr);
}

.soalan-group {
	width: 100%;
	/* height: 30rem; */

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
}

.soalan-item {
	border: 1px solid rgba(0, 0, 0, 0.2);
	font-size: 1.5rem;
	aspect-ratio: 1 / 1;

	display: grid;
	place-content: center;
	position: relative;
}
#tanda{
	position: absolute;
	left: -5%;
	top: 50%;
	transform: translateY(-50%);
	background-color: #fff;
}
#tandaa{
		position: absolute;
			left: -110%;
			top: 50%;
			transform: translateY(-50%);
			z-index: 20;
				background-color: #fff;
}

.btn{
		padding: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 15px;
			border: 4px solid gold;
			background-color: #fff;
			display: inline-block;
}
.board{
	padding: 1rem;
	gap: 1rem;
}
.btn-soalan h2{
	color: lightcoral;
}
.btn-hint h2 {
	color: lightgreen;
}
.btn-score h2 {
	color: lightblue;
}
.soalan-container{
	margin-top: 10px;
	width: 100%;
	padding: 1rem;
	border-radius: 15px;
	border: 4px solid rgb(190, 190, 190);
	background-color: #fff;
	display: inline-block;
}
.message-container{
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
	border: 2px dashed rgba(0, 0, 0, 0.5);
}
.kuning {
	background-color: yellow;
}
.choise-container{

}
.choise-group{
	width: 100%;
	display: grid;
	grid-template-columns: repeat(6,1fr);
}
.choise-group{
	aspect-ratio: 1 / 1;
	height: 6rem;
	opacity: 0;
}
.choise-item{
	border: 3px solid gold;
	border-radius: 15px;
	margin: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	cursor: pointer;
}
.btn-container{
	width: 100%;
	height: auto;
}
.btn-group{
	display: grid;
	grid-template-columns: repeat(2,1fr);
}
.btn-group > button{
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
#reset{
	background-color: rgb(238, 103, 103);
}
#hint{
	background-color: rgb(97, 192, 224);
}
.title{
	width: 100%;
	background-color: #fff;
	padding: 0.5rem;
	margin-top: 1rem;
	border-radius: 15px;
	border: 3px solid rgb(255, 147, 98);
}
.boxSoalan{
	cursor: pointer;
}

</style>

`
export {style}