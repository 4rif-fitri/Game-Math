let template = `

	<section>
		<div class="popup-giveup-container" id="pop">
			<div class="popup-giveup-content">
				<center>
					<h2>Keputusan</h2>
				</center>
				<div class="result-container">
					<div class="grid-4">
						<div class="result-box">
							<article>
								<p>Soalan</p>
								<span id="bilQuestion">10</span>
							</article>
						</div>
						<div class="result-box">
							<article>
								<p>Masa</p>
								<span id="masa">10minit</span>
							</article>
						</div>
						<div class="result-box">
							<article>
								<p>Betul</p>
								<span id="betul">10</span>
							</article>
						</div>
						<div class="result-box">
							<article>
								<p>Salah</p>
								<span id="salah">10</span>
							</article>
						</div>
					</div>
					<div class="grid-3">
						<div class="result-box">
							<article>
								<p>Betul</p>
								<span id="ketepatan">20%</span>
							</article>
						</div>
						<div class="result-box">
							<article>
								<p>Salah</p>
								<span id="kadarSalah">80%</span>
							</article>
						</div>
						<div class="result-box">
							<article>
								<p>Masa purata setiap soalan</p>
								<span id="avgTimeQuestion">12 saat</span>
							</article>
						</div>
					</div>
				</div>
				<center class="img">
					<div class="text" id="text"></div>
					<img id="good" style="display: none;" height="30%" src="./images.jpg" alt="">
					<img id="notbad" style="display: none;" height="200rem" src="./8fa056b2db922feae203e193e9bffcc6.jpg" alt="">
					<img id="bad" style="display: none;" height="200rem" src="./sinirli-sigma.png" alt="">
				</center>
				<div class="result-box overall" id="overallElement">
					<p>Rating: <span id="overall">10</span></p>
				</div>
				<button class="btn-home" id="back">Back</button>
			</div>
		</div>
		<header>
			<button id="back" class="btn-back btn"> Back Home</button>
			<div class="title">
				<center>
					<h1>Quiz Game</h1>
					<p></p>
				</center>
			</div>
			<div class="board">
				<article class="btn btn-soalan">
					<span>
						<center>
							<p>Soalan</p>
							<h2 id="question">1</h2>
						</center>
					</span>
				</article>
				<article class="btn btn-time">
					<span>
						<center>
							<p>Masa</p>
							<h2 id="time">00:00</h2>
						</center>
					</span>
				</article>
				<article class="btn btn-score">
					<span>
						<center>
							<p>Betul</p>
							<h2 id="score">0</h2>
						</center>
					</span>
				</article>
				<article class="btn btn-wrong">
					<span>
						<center>
							<p>Salah</p>
							<h2 id="wrong">0</h2>
						</center>
					</span>
				</article>
			</div>
		</header>
		<main>
			<article class="message-container">
				<article class="message-group">
					<H4 id="textMessage">Berapa Hasil Dua Nombor Ini</H4>
				</article>
			</article>
			<article class="moniter-container">
				<article class="moniter-group">
					<div id="moniter1" class="item">9</div>
					<div class="item">+</div>
					<div id="moniter2" class="item">2</div>
					<div class="item">=</div>
					<div id="hasil" class="item kuning borderDash"></div>
				</article>
			</article>
			<div id="bar"></div>
			<article class="soalan-container">
				<div class="soalan-group">
					<div class="soalan-item">1</div>
					<div class="soalan-item">1</div>
					<div class="soalan-item">1</div>
					<div class="soalan-item">1</div>
					<div class="soalan-item">1</div>
					<div class="soalan-item">1</div>
				</div>
			</article>

			<article class="btn-container">
				<article class="btn-group">
					<button id="GiveUp">Give Up!</button>
				</article>
			</article>
		</main>
		<footer>

		</footer>
	</section>

`
export { template }

{/* <article class="moniter-group">
	<div id="moniter1" class="item borderDash"></div>
	<div class="item">+</div>
	<div id="moniter2" class="item borderDash"></div>
	<div class="item">=</div>
	<div class="item">10</div>
</article> */}