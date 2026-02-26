let temp = `

		<section>
		<div class="popUpContainer2">
			<div class="popUpCard">
				<h2>Tamat</h2>
				<a href="">Back</a>
			</div>
		</div>

		<div class="pop-up-biasa-container" id="pop-up-borrow">
			<div class="biasa-group">
				<div class="card-header">
					<div class="card-header-text">
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div class="card-header-btn">
						<button id="borrow-close">X</button>
					</div>
				</div>
				<div class="card-body">
					<div class="card-body-group">
						<p class="card-item borrow-soalan">
							<span class="number"></span>
						</p>
						<p class="card-item borrow-soalan">
							<span class="number"></span>
							<span class="simbol">+</span>
						</p>
						<p class="card-item"></p>

						<p class="card-item borrow-action">
							<span class="number"></span>
						</p>
						<p class="card-item borrow-action">
							<span class="number"></span>
						</p>
						<p class="card-item"></p>
						<p class="card-item borrow-sum-action">
							<span class="number"></span>
						</p>
						<p class="card-item borrow-sum-action">
							<span class="number"></span>
							<span class="simbol">+</span>
						</p>
						<p class="card-item borrow-total">
							<span class="number"></span>
							<span class="simbol">=</span>
						</p>
					</div>
				</div>
				<div class="card-footer">
					<p class="borrow-choice-item">1</p>
					<p class="borrow-choice-item">1</p>
					<p class="borrow-choice-item">1</p>
					<p class="borrow-choice-item">1</p>
					<p class="borrow-choice-item">1</p>
					<p class="borrow-choice-item">1</p>
				</div>
				<article class="btn-container">
					<article class="btn-group">
						<button id="reset">Reset</button>
						<button id="hint">Hint</button>
					</article>
				</article>
			</div>
		</div>

		<div class="pop-up-biasa-container hide" id="pop-up-padan">
			<div class="biasa-group">
				<article class="message-padan-container">
					<article class="message-padan-group">
						<H4 id="textMessage">Pilih Dua Nombor Yang Hasillya <br>5 | 10 | 15 | 20 | 25 | 30</H4>
						<button id="close-padan">X</button>
					</article>
				</article>
				<article class="moniter-container">
					<article class="moniter-group">
						<div id="moniter1" class="item borderDash betul"></div>
						<div class="item">+</div>
						<div id="moniter2" class="item borderDash betul"></div>
						<div class="item">=</div>
						<div id="moniter3" class="item pilih borderDash"></div>
					</article>
				</article>
			<article class="padan-jwp-container">
				<div class="padan-jwp-group">
					<div data-id="0" class="soalan-item pilih" id="padan-item">
						<span class="number">5</span>
					</div>
					<div data-id="1" class="soalan-item pilih" id="padan-item">
						<span class="number">10</span>
					</div>
					<div data-id="2" class="soalan-item pilih" id="padan-item">
						<span class="number">15</span>
					</div>
					<div data-id="3" class="soalan-item pilih" id="padan-item">
						<span class="number">20</span>
					</div>
					<div data-id="4" class="soalan-item pilih" id="padan-item">
						<span class="number">25</span>
					</div>
					<div data-id="5" class="soalan-item pilih" id="padan-item">
						<span class="number">30</span>
					</div>
				</div>
			</article>
				<article class="btn-container">
					<article class="btn-group">
						<button id="reset" class="hiden">Reset</button>
						<button id="hint" class="padan-hint">Hint</button>
					</article>
				</article>
			</div>
		</div>

		<header>
			<button id="home" class="btn-back btn"> Back Home</button>
					<div class="title">
						<center>
							<h1>Sand Box</h1>
							<p>Selesaikan dan Guna Teknik Yang diberikan</p>
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
									<p>Step</p>
									<h2 id="score">0/3</h2>
								</center>
							</span>
						</article>
					</div>

		</header>
		<main>
			<article class="message-container">
				<article class="message-group">
					<h4 id="textMessagee">Good Luck</h4>
				</article>
			</article>
			<article class="soalan-container">
				<div class="soalan-group ">
					<p class="soalan-item boxSoalan" data-id="1">
						<span class="number">19</span>
					</p>
					<p class="soalan-item boxSoalan" data-id="2">
						<span class="number">12</span>
						<span class="simbol">+</span>
					</p>
					<p class="soalan-item boxSoalan" data-id="3">
						<span class="number">10</span>
						<span class="simbol">+</span>

					</p>
				</div>
			</article>

			<article class="option-action">
				<button data-id="1" id="padan">Matching</button>
				<button data-id="2" id="borrow">Borrow</button>
				<button data-id="3" id="biasa">Tambah Biasa</button>
			</article>


		</main>
		<footer>

		</footer>
	</section>


`

export {temp}