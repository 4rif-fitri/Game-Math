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
				<a href="">Back</a>
			</div>
		</div>
		<header>
			<a href="../index.html" class="btn-back btn">
				< Back Home</a>
					<div class="title">
						<center>
							<h1>Teknik Padan</h1>
							<p>teknik yang digunakan untuk cari dua nombor yang hasilnya 10</p>
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
					<H4 id="textMessage">Pilih Dua Nombor Yang Hasillya 10</H4>
				</article>
			</article>
			<article class="moniter-container">
				<article class="moniter-group">
					<div id="moniter1" class="item borderDash"></div>
					<div class="item">+</div>
					<div id="moniter2" class="item borderDash"></div>
					<div class="item">=</div>
					<div class="item">10</div>
				</article>
			</article>
			<article class="soalan-container">
				<div class="soalan-group">
					<div data-id="0" class="soalan-item">
						<span class="number">1</span>
						<!-- <span class="symbol">+</span> -->
					</div>
					<div data-id="1" class="soalan-item">
						<span class="number">1</span>
						<!-- <span class="symbol">+</span> -->
					</div>
					<div data-id="2" class="soalan-item">
						<span class="number">1</span>
						<!-- <span class="symbol">+</span> -->
					</div>
					<div data-id="3" class="soalan-item">
						<span class="number">1</span>
						<!-- <span class="symbol">+</span> -->
					</div>
					<div data-id="4" class="soalan-item">
						<span class="number">1</span>
						<!-- <span class="symbol">+</span> -->
					</div>
					<div data-id="5" class="soalan-item">
						<span class="number">1</span>
						<!-- <span class="symbol">+</span> -->
					</div>
				</div>
			</article>

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
export { template }