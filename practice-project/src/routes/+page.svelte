<!-- Slideshow.svelte -->
<script>
	import { onMount } from 'svelte';

	let slideIndex = 1;
	let animate = false;

	function plusSlides(n) {
		showSlides((slideIndex += n));
		triggerAnimation();
	}

	function currentSlide(n) {
		showSlides((slideIndex = n));
		triggerAnimation();
	}

	function triggerAnimation() {
      animate = false; // Reset animation
      setTimeout(() => {
        animate = true; // Re-trigger animation
      }, 0);
    }

	function showSlides(n) {
		let i;
		const slides = document.getElementsByClassName('mySlides');
		const dots = document.getElementsByClassName('dot');

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' active', '');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].className += ' active';
	}

	onMount(() => {
		showSlides(slideIndex);
	});
</script>

<main>
	<div class="container-1-des">
		<div class="container-1 border-bottom">
			<div class="container-1-heading">
				<h1>Kyiv<br />LuxeBouquets®</h1>
				<p class="border-bottom">
					Discover Uniquely Crafted Bouquets and Gifts for Any Occasion: Spread Joy with Our Online
					Flower Delivery Service.
				</p>
			</div>
			<div class="container-1-bottom">
				<div class="container-1-left-image">
					<img src="./Images/img heroleft-img-1.png" alt="" srcset="" />
				</div>
				<div class="container-1-right-content border-left">
					<p>
						Experience the joy of giving with our modern floral studio. Order online and send fresh
						flowers, plants and gifts today.
					</p>
				</div>
			</div>
		</div>
		<div class="flower-container-des">
			<div class="flower-container">
				<div class="flower-container-left flower-container-content">
					<h3>Fresh Flowers</h3>
					<span>Shop now <i class="fa-solid fa-arrow-right-long"></i></span>
				</div>
				<div class="flower-container-right">
					<img src="./Images/card itemflower-2.png" alt="" srcset="" />
				</div>
			</div>

			<div class="flower-container">
				<div class="flower-container-left border-right border-top">
					<img src="./Images/card itemflower1.png" alt="" srcset="" />
				</div>
				<div class="flower-container-right flower-container-content">
					<h3>Dried Flowers</h3>
					<span><i class="fa-solid fa-arrow-left-long"></i> Shop now</span>
				</div>
			</div>
		</div>
	</div>

	<div class="flower-containers container-2">
		<div class="container-2-empty"></div>
		<div class="container-2-content">
			<div class="flower-container">
				<div class="flower-container-left flower-container-content">
					<h3>Live Plants</h3>
					<span>Shop now <i class="fa-solid fa-arrow-right-long"></i></span>
				</div>
				<div class="flower-container-right border-top">
					<img src="./Images/card itemflower3.png" alt="" srcset="" />
				</div>
			</div>

			<div class="flower-container">
				<div class="flower-container-left border-right border-top">
					<img src="./Images/card itemflower4.png" alt="" srcset="" />
				</div>
				<div class="flower-container-right flower-container-content">
					<h3>Aroma Candles</h3>
					<span><i class="fa-solid fa-arrow-left-long"></i> Shop now</span>
				</div>
			</div>

			<div class="flower-container">
				<div class="flower-container-left border-bottom flower-container-content">
					<h3>Fresheners</h3>
					<span>Shop now <i class="fa-solid fa-arrow-right-long"></i></span>
				</div>
				<div class="flower-container-right border-top">
					<img src="./Images/card itemflower5.png" alt="" srcset="" />
				</div>
			</div>
		</div>
	</div>

	<div class="container-3">
		<h2>About Us</h2>
		<div class="container-3-right">
			<div class="container-3-content border-top border-bottom">
				<span>our story</span>
				<h3>Kyiv LuxeBouquets</h3>
				<p>
					We are a modern local floral studio, which specializes in the design and delivery of
					unique bouquets. We have the best florists who carefully select each look, our studio
					cooperates directly with farms for growing different flowers, so we always have fresh
					flowers, which are collected by our florists in exquisite bouquets. We have a collection
					of fresh bouquets, collections of dried bouquets, house plants, as well as fragrant
					candles from luxury brands to create the perfect atmosphere. Make someone's day amazing by
					sending flowers, plants and gifts the same or next day. Ordering flowers online has never
					been easier.
				</p>
				<button>Learn More</button>
			</div>
		</div>
	</div>

	<div class="container-4">
		<h2>Why choose us ?</h2>
		<div class="container-4-right">
			<div class="container-4-content border-top border-bottom">
				<h3>Stylish bouquets by florists</h3>
				<p>
					At our floral studio, our professional florists craft the most elegant and stylish
					bouquets using only the freshest and highest quality materials available. We stay
					up-to-date with the latest floral design trends and offer unique arrangements that are
					sure to impress. Let us brighten up your day with our stunning bouquets and same-day
					delivery service.
				</p>
			</div>

			<div class="container-4-content border-bottom">
				<h3>On-time delivery</h3>
				<p>
					Never miss a moment with our on-time flower delivery service. Our couriers will deliver
					your bouquet personally, without boxes, to ensure it arrives in perfect condition. Trust
					us to deliver your thoughtful gift reliably.
				</p>
			</div>

			<div class="container-4-content border-bottom">
				<h3>Safe payment</h3>
				<p>
					You can feel secure when placing an order with us, as we use industry-standard security
					measures to protect your payment information. Your transaction will be safe and
					hassle-free, so you can shop with confidence.
				</p>
			</div>

			<div class="container-4-content border-bottom">
				<h3>Subscription by your needs</h3>
				<p>
					With our subscription service tailored to your specific needs, you can enjoy the
					convenience of having beautiful bouquets delivered straight to your door at regular
					intervals. Our flexible service is perfect for busy individuals or those who want to
					ensure they always have fresh flowers on hand. You'll save time and money with this
					hassle-free solution to your floral needs.
				</p>
			</div>
		</div>
	</div>

	<div class="container-5-des">
		<div class="container-5-left">
			<div class="container-6 border-bottom">
				<h2>To Contact Us</h2>
				<p>We will call you back</p>
				<div class="form-container">
					<input type="text" placeholder="+380 XX XXX XX XX" />
					<button>Book A Call</button>
				</div>
			</div>

			<div class="container-7">
				<div class="container-7-contact">
					<div class="container-7-heading border-bottom">
						<h3>Phone</h3>
					</div>
					<div class="container-7-content border-bottom">
						<p class="contact-number"><i class="fa-solid fa-phone"></i> +380980099777</p>
						<p class="contact-number"><i class="fa-solid fa-phone"></i> +380980099111</p>
					</div>
				</div>
				<div class="container-7-address">
					<div class="container-7-heading border-bottom">
						<h3>Address</h3>
					</div>
					<div class="container-7-content border-bottom">
						<p>Opening Hours: 8 To 11 P.M.</p>
						<p class="office-address">
							<i class="fa-solid fa-location-dot"></i> 15/4 Khreshchatyk Street, Kyiv
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="container-5-right">
			<div class="container-5 border-bottom">
				<div class="image-box">
					<img src="./Images/office-img.png" alt="" srcset="" />
				</div>
				<div class="social-wrapper">
					<h3>Follow Us</h3>
					<div class="social-icons">
						<i class="fa-brands fa-instagram"></i>
						<i class="fa-brands fa-pinterest"></i>
						<i class="fa-brands fa-facebook-f"></i>
						<i class="fa-brands fa-twitter"></i>
						<i class="fa-regular fa-paper-plane"></i>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container-8">
		<h2>Our Services</h2>

		<div class="container-8-des">
			<img
				src="./Images/imagelady-with-flower.png"
				alt=""
				srcset=""
				class="border-bottom border-top"
			/>

			<div class="container-8-content border-bottom">
				<span>service</span>
				<h2>Flower Subcriptions</h2>
				<p>
					Experience the convenience and savings of regular flower deliveries with our flexible
					subscription service - up to 30% more profitable than one-time purchases.
				</p>
				<button class="bordered-btn">Suscribe Now</button>
			</div>
		</div>
	</div>

	<div class="container-9 border-bottom border-top">
		<div class="container-9-content border-bottom">
			<span>service</span>
			<h2>Wedding & Event Decor</h2>
			<p>
				Let our team of expert florists and designers create stunning, on-trend floral décor for
				your special day. Trust us to bring your vision to life.
			</p>
			<button class="white-bordered-btn">Inquire Now</button>
		</div>
	</div>

	<div class="container-10 border-top">
		<div class="container-8-content">
			<img src="./Images/google logogoogle-logo.png" alt="" srcset="" /><br />
			<p class="review-text">Reviews</p>
			<h2>Our Clients say</h2>

			<!-- Slideshow container -->
			<div class="slideshow-container">
				<!-- Full-width slides/quotes -->
				<div class="mySlides" class:slide-enter={animate}>
					<p class="review">
						“aaa Ordered flowers online and they were the best bouquet! Impressed everyone around.
						Highly recommend this flower shop!”
					</p>
					<p>– Ronald Richards</p>
				</div>

				<div class="mySlides" class:slide-exit={animate}>
					<p class="review">
						“Ordered flowers online and they were the best bouquet! Impressed everyone around.
						Highly recommend this flower shop!”
					</p>
					<p>– Ronald Richards</p>
				</div>

				<!-- Next/prev buttons -->
				<a class="prev" on:click={() => plusSlides(-1)}>&#10094;</a>
				<a class="next" on:click={() => plusSlides(1)}>&#10095;</a>
			</div>

			<!-- Dots/bullets/indicators -->
			<div class="dot-container">
                <span class="dot" on:click={() => currentSlide(1)}></span>
                <span class="dot" on:click={() => currentSlide(2)}></span>
			</div>

			<button class="bordered-btn">Read Reviews</button>
		</div>
	</div>
</main>

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
	.container-1 {
		padding: 20px 15px;
	}
	.container-1-heading p {
		padding-bottom: 24px;
		font-size: 14px;
	}
	.container-1-bottom {
		display: flex;
		padding-bottom: 20px;
	}
	.container-1 img {
		width: 100%;
		height: 100%;
	}
	.container-1-bottom .container-1-left-image {
		width: 50%;
		padding: 0px 16px 0px 0px;
	}
	.container-1-bottom .container-1-right-content {
		width: 50%;
		padding: 0px 0px 0px 15px;
		display: flex;
		align-items: end;
	}
	.container-1 .container-1-right-content p {
		font-size: 11px;
	}
	.flower-container {
		display: flex;
	}
	.flower-container-left,
	.flower-container-right {
		width: 50%;
	}
	.flower-container img {
		width: 100%;
		height: 100%;
	}

	.flower-container-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.flower-container-content span {
		position: absolute;
		bottom: 15px;
	}
	.flower-container-content h3 {
		font-size: 25px;
		font-weight: 100;
		text-align: center;
		padding: 0px 10px;
	}

	.container-3 h2,
	.container-4 h2,
	.container-8 h2,
	.container-10 h2 {
		margin: 0px;
		padding: 40px 16px;
		font-size: 34px;
	}
	.container-8-content h2 {
		padding: 16px 0px 16px 0px;
	}
	.container-8-content p,
	.container-9-content p {
		margin-bottom: 64px;
	}
	.container-3-content,
	.container-4-content,
	.container-6,
	.container-7-content,
	.container-8-content {
		padding: 40px 16px;
	}
	.container-8-content {
		text-align: center;
	}
	.container-3-content p {
		padding-bottom: 20px;
	}
	.container-3-content span,
	.container-3-content button,
	.bordered-btn {
		text-transform: uppercase;
	}
	.container-3-content h3,
	.container-4-content h3,
	.container-5 h3,
	.container-7 h3 {
		font-size: 26px;
		font-weight: 100;
	}
	.container-7 h3 {
		margin: 0px;
		padding: 16px;
	}
	.container-4-content h3 {
		margin-top: 0px;
	}
	.container-5 h3 {
		margin: 0px;
		padding: 16px 16px 8px 16px;
	}
	.container-3-content button,
	.bordered-btn {
		width: 100%;
		padding: 15px 20px;
		background-color: white;
		border: 1.5px solid black;
		border-radius: 0px;
		font-weight: 600;
	}

	.white-bordered-btn {
		width: 100%;
		padding: 15px 20px;
		background-color: transparent;
		border: 1.5px solid white;
		border-radius: 0px;
		text-transform: uppercase;
		color: #fff;
	}

	.container-5 .image-box img {
		width: 100%;
		height: 30.7em;
	}
	.container-5 .social-icons {
		padding: 16px 8px 16px 16px;
		display: flex;
		gap: 20px;
	}
	.container-5 .social-icons i {
		font-size: 24px;
	}
	.container-6 h2 {
		font-size: 34px;
	}
	.container-6 p {
		font-size: 18px;
	}
	.container-6 input {
		border: 1px solid #888;
		width: -webkit-fill-available;
		border-radius: 0px;
		margin: 20px 0px;
		padding: 15px 20px;
	}
	.container-6 button {
		background: #000;
		color: #fff;
		border-radius: 0px;
		width: 100%;
		padding: 15px 20px;
		text-transform: uppercase;
	}
	.container-7 p.contact-number,
	.container-7 p.office-address {
		font-weight: 600;
	}
	.container-8 img {
		width: 100%;
	}

	.container-9 {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url(./Images/container-9-bg-image.png);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		color: #fff;
		padding: 40px 16px;
		text-align: center;
	}
	.container-9-content h2 {
		font-size: 34px;
		padding: 16px 0px;
		margin: 0px;
		font-weight: 400;
	}
	.container-10 img {
		display: inline;
		text-align: center;
	}
	.container-10 p.review {
		margin-bottom: 0px;
		font-size: 22px;
		font-style: italic;
	}
	.container-10 p.review-text {
		margin: 0px 0px 8px 0px;
	}
	.container-5-des {
		display: flex;
		flex-direction: column-reverse;
	}
	.container-5-left,
	.container-5-right {
		width: 100%;
	}

	@media (min-width: 376px) {
		.bordered-btn,
		.white-bordered-btn {
			width: auto;
		}
		.container-7,
		.social-wrapper {
			display: flex;
			text-align: center;
		}
		.container-7-contact,
		.container-7-address,
		.social-wrapper h3,
		.social-wrapper div {
			width: 50%;
		}
		.social-wrapper div {
			justify-content: center;
			border-left: 1.5px solid #000;
		}
		.container-7-contact {
			border-right: 1.5px solid #000;
		}
		.container-5 .image-box {
			display: flex;
		}
		h1 {
			font-size: 5.5vw;
		}
		h2 {
			font-size: 50px !important;
		}
		h3 {
			font-size: 38px !important;
		}
		.container-1 {
			padding: 80px;
		}
		.container-1-heading p {
			font-size: 18px;
		}
		.container-1 h1 {
			margin: 0px;
		}
		.container-1 .container-1-right-content p {
			font-size: 14px;
		}
		.container-1-bottom .container-1-left-image {
			padding-right: 24px;
		}
		.container-1-bottom .container-1-right-content {
			padding-left: 24px;
		}
		.container-1-bottom {
			padding: 0px;
		}
		.flower-container-content span {
			font-size: 16px;
			bottom: 24px;
		}
		.container-6 {
			padding: 80px !important;
		}
		.container-6 h2 {
			padding: 0px !important;
		}
		.form-container {
			display: flex;
			align-items: baseline;
			gap: 20px;
		}
		.form-container input {
			padding: 10px 20px;
			width: 50%;
		}
		.form-container button {
			padding: 10px 20px;
			width: 50%;
		}
		.container-8 h2:first-child,
		.container-3 h2,
		.container-4 h2 {
			padding: 80px !important;
		}
		.container-3-content,
		.container-4-content,
		.container-6,
		.container-7-content,
		.container-8-content {
			padding: 80px;
		}
		.container-7-content {
			min-height: 104px;
		}
		.container-7-content:nth-child(2) {
			text-wrap: nowrap;
		}
		.container-8 img {
			height: 30em;
		}
	}

	@media (min-width: 769px) {
		.container-1 {
			box-sizing: border-box;
			width: 50%;
			border-right: 1.5px solid #000;
		}
		.container-1-des {
			display: flex;
		}
		.flower-container-des {
			width: 50%;
		}
		.flower-containers.container-2 {
			display: flex;
			flex-direction: row-reverse;
		}
		.container-empty,
		.container-2-content {
			width: 50%;
			box-sizing: border-box;
		}
		.container-2-content {
			border-left: 1.5px solid #000;
		}
		.container-3 h2,
		.container-4 h2,
		.container-3-right,
		.container-4-right {
			width: 50%;
			box-sizing: border-box;
		}
		.container-3,
		.container-4 {
			display: flex;
		}
		.container-3 h2,
		.container-4 h2 {
			border-top: 1.5px solid #000;
			border-bottom: 1.5px solid #000;
			border-right: 1.5px solid #000;
		}
		.container-5-des {
			display: flex;
			flex-direction: row;
		}
		.container-5-left,
		.container-5-right {
			width: 50%;
		}
		.container-5 img {
			height: auto;
		}
		.container-5 h3,
		.container-5 .social-wrapper .social-icons {
			padding: 19px 16px !important;
			align-items: center;
		}
		.container-5 h3 {
			border-left: 1.5px solid #000;
		}
		.container-6 {
			padding: 50px !important;
		}
		.container-8 h2 {
			text-align: center;
		}
		.container-8-des {
			display: flex;
			border-top: 1.5px solid #000;
		}
	}
	@media (max-width: 768px) {
		.next,
		.prev {
			display: none !important;
		}
	}
	/* Slideshow container */
	.slideshow-container {
		position: relative;
	}

	/* Slides */
	.mySlides {
		display: none;
		text-align: center;
	}

	/* Next & previous buttons */
	.prev,
	.next {
		cursor: pointer;
		position: absolute;
		top: 50%;
		width: auto;
		margin-top: -30px;
		padding: 16px;
		color: #888;
		font-weight: bold;
		font-size: 20px;
		border-radius: 0 3px 3px 0;
		user-select: none;
	}

	/* Position the "next button" to the right */
	.next {
		position: absolute;
		right: -50px;
		border-radius: 3px 0 0 3px;
	}
	.prev {
		position: absolute;
		left: -50px;
		border-radius: 3px 0 0 3px;
	}

	/* On hover, add a black background color with a little bit see-through */
	.prev:hover,
	.next:hover {
		color: #333;
	}

	/* The dot/bullet/indicator container */
	.dot-container {
		text-align: center;
		padding: 20px;
	}

	/* The dots/bullets/indicators */
	.dot {
		cursor: pointer;
		height: 10px;
		width: 10px;
		margin: 0 2px;
		background-color: #bbb;
		border-radius: 50%;
		display: inline-block;
		transition: background-color 0.6s ease;
	}

	/* Add a background color to the active dot/circle */
	.active,
	.dot:hover {
		background-color: #717171;
	}
</style>
