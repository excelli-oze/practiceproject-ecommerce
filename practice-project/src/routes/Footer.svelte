<footer>
	<div class="footer-container border-top">
		<div class="footer-container-upper2">
			<div class="footer-container-content">
				<p>
					Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day,
					Christmas...<br />Reminds you 7 days before. No spam or sharing your address
				</p>
				<input type="text" placeholder="Your Mail" />
				<button>Remind</button>
			</div>

			<div class="footer-container-content border-top">
				<h5 class="footer-content-heading">Contact Us</h5>
				<p class="footer-subtitle">Address</p>
				<p class="footer-content">15/4 Khreshchatyk Street, Kyiv</p>

				<p class="footer-subtitle">Phone</p>
				<p class="footer-content">+380980099777</p>

				<p class="footer-subtitle">General Enquiry:</p>
				<p class="footer-content">Kiev.Florist.Studio@gmail.com</p>

				<h5 class="footer-content-heading">Follow Us</h5>
				<div class="social-icons">
					<i class="fa-brands fa-instagram"></i>
					<i class="fa-brands fa-pinterest"></i>
					<i class="fa-brands fa-facebook-f"></i>
					<i class="fa-brands fa-twitter"></i>
					<i class="fa-regular fa-paper-plane"></i>
				</div>
			</div>
		</div>
		<div class="footer-container-lower2">
			<div class="footer-container-content border-top footer-container-2">
				<h5 class="footer-content-heading">Shop</h5>
				<p class="">All Products</p>
				<p class="">Fresh Flowers</p>
				<p class="">Dried Flowers</p>
				<p class="">Live Plants</p>
				<p class="">Designer Vases</p>
				<p class="">Aroma Candles</p>
				<p class="">Freshener Diffuser</p>
				<h5 class="footer-content-heading">Service</h5>
				<p class="">Flower Subcription</p>
				<p class="">Wedding & Event Decor</p>
			</div>

			<div class="footer-container-content border-top footer-container-2">
				<h5 class="footer-content-heading">About Us</h5>
				<p class="">Our story</p>
				<p class="">Blog</p>
				<p class="">Shipping & returns</p>
				<p class="">Terms & conditions</p>
				<p class="">Privacy policy</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.border-top {
		border-top: 1.5px solid black;
	}
	.border-bottom {
		border-bottom: 1.5px solid black;
	}
	.border-left {
		border-left: 1.5px solid black;
	}
	.border-right {
		border-right: 1.5px solid black;
	}
	.footer-container-content {
		padding: 40px 16px;
	}
	.footer-container input {
		border: 1px solid #888;
		width: -webkit-fill-available;
		border-radius: 0px;
		margin: 20px 0px;
		padding: 10px 20px;
	}
	.footer-container button {
		background: #000;
		color: #fff;
		border-radius: 0px;
		width: 100%;
		padding: 10px 20px;
		text-transform: uppercase;
	}
	.footer-container-content p {
		margin: 0px;
	}
	.footer-container-content h5 {
		font-size: 18px;
		color: #424245;
		margin: 16px 0px;
	}
	.footer-container-content p.footer-subtitle {
		font-size: 14px;
		color: #808080;
		margin: 8px 0px;
	}
	.footer-container-content p.footer-content {
		margin: 8px 0px 16px 0px;
		font-size: 14px;
	}
	.footer-container-content .social-icons {
		display: flex;
		gap: 25px;
	}
	.footer-container-content .social-icons i {
		font-size: 24px;
	}
	.footer-container-2 p {
		margin: 8px 0px;
		font-size: 14px;
	}
	.footer-container {
		display: block;
	}

	@media (min-width: 376px) {
		.footer-container-upper2,
		.footer-container-lower2 {
			display: flex;
		}
		.footer-container-upper2 div,
		.footer-container-lower2 div {
			width: 50%;
			border-right: 1.5px solid #000;
		}
		.footer-container-content {
			padding: 40px;
		}
	}

	@media (min-width: 769px) {
		.footer-container {
			display: flex;
		}
		.footer-container div {
			width: 50%;
		}
	}

	footer * {
		box-sizing: border-box;
	}
</style>
