let style = `
	<style>
body{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
.card-container{
	width: min(90vw,20rem);
	height: 30rem;
	border: 3px solid black;
	aspect-ratio: 1/1;
	display: grid;
	grid-template-rows: repeat(5,1fr);
	border-radius: 14px;
}
.cart-item{
	display: flex;
	align-items: center;
	justify-content: center;
}
.cart-item > button{
	width: 15rem;
	padding: 1rem 4rem;
	border: 3px solid black;
	text-decoration: none;
	border-radius: 14px;
	font-family: aaa, Arial, Helvetica, sans-serif;
}
.Matching{
	background-color: lightskyblue;
}
.Borrow{
	background-color: lightgreen;
}
.SandBox{
	background-color: lightgoldenrodyellow;
}
.Quiz{
	background-color: yellow;
}
	</style>
`

export {style}