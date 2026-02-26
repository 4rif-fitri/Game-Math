let style = `
	<style>
body{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
.card-container{
	background-color: #fff;
	width: min(90vw,20rem);
	height: 20rem;
	border: 3px solid black;

	display: grid;
	grid-template-rows: repeat(4,1fr);
	border-radius: 14px;
}
.cart-item{
	display: flex;
	align-items: center;
	justify-content: center;
}
.cart-item > button{
	padding: 1rem 4rem;
	border: 3px solid black;
	text-decoration: none;
	border-radius: 14px;
	font-family: aaa, Arial, Helvetica, sans-serif;
}
.hijau{
	background-color: lightgreen;
}
.blue{
	background-color: lightskyblue;
}
.red{
	background-color: lightcoral;
}

	</style>
`

export {style}