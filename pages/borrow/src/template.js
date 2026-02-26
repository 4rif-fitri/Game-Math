let template = `

	<section>
		<div class="popUpContainer" id="popUpContainer">
			<div class="popUpCard">
				<h2>Next Game</h2>
				<!-- <button id="back">Back</button> -->
				<!-- <button id="ulang">Ulang</button> -->
				<!-- <button id="next">Next</button> -->
			</div>
		</div>
		<div class="popUpContainer2">
			<div class="popUpCard">
				<h2>Tamat</h2>
				<buttom id="home">Back</buttom>
			</div>
		</div>
		<header>
				<button id="home" class="btn-back btn">< Back Home</button>
			<div class="title">
				<center>
					<h1>Teknik Pinjam</h1>
					<p>teknik yang digunakan untuk mudahkan numbor ke bentuk 10</p>
				</center>
			</div>
			<div class="board">
				<article class="btn btn-soalan">
					<span>
						<center>
						<p>Soalan</p>
							<h2 id="lavel">1/5</h2>
						</center>
					</span>
				</article>
				<article class="btn btn-hint">
					<span>
						<center>
							<p>Hint</p>
							<h2 id="hintCount">5</h2>
						</center>
					</span>
				</article>
				<article class="btn btn-score">
					<span>
						<center>
							<p>Score</p>
							<h2 id="score">0/3</h2>
						</center>
					</span>
				</article>
			</div>

		</header>
		<main>
			<article class="message-container">
				<article class="message-group">
					<H4 id="textMessage">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, repellat!	</H4>
				</article>
			</article>
			<article class="soalan-container">
				<div class="soalan-group">
					<p class="soalan-item boxSoalan">1</p>
					<p class="soalan-item boxSoalan">3
					</p>
					<p class="soalan-item">
						<span id="tandaa">&plus;</span>
					</p>
					<p class="soalan-item boxAction"></p>
					<p class="soalan-item boxAction"></p>
					<p class="soalan-item"></p>
					<p class="soalan-item boxSumAction"></p>
					<p class="soalan-item boxSumAction">
					</p>
					<p class="soalan-item boxSum">
						<span id="text"></span>
						<span id="tandaa">&plus;</span>
						<span id="tanda">=</span>
					</p>
				</div>
			</article>
			<div class="choise-container">
				<div class="choise-group">
					<div class="choise-item ">
					</div>
					<div class="choise-item ">
					</div>
					<div class="choise-item ">
					</div>
					<div class="choise-item ">
					</div>
					<div class="choise-item ">
					</div>
					<div class="choise-item ">
					</div>
				</div>
			</div>
			<article class="btn-container">
				<article class="btn-group">
					<button id="reset">Reset</button>
					<button id="hint">Hint</button>
					<!-- <button id="semak">Semak</button> -->
				</article>
			</article>
		</main>
		<footer>

		</footer>
	</section>

`
export {template}