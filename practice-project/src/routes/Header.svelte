<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const menuIcon = document.getElementById('menuIcon');
		const menu = document.getElementById('menu');
		const menuClose = document.getElementById('menuClose');

		menuIcon.addEventListener('click', () => {
			menu.style.display = 'flex';
			menuIcon.classList.add('open');
		});

		menuClose.addEventListener('click', () => {
			menu.style.display = 'none';
			menuIcon.classList.remove('open');
		});
	});
</script>

<header>
	<nav class="mobile-navigation-bar border-bottom">
		<ul class="left-nav-items border-right">
			<div class="menu-icon" id="menuIcon">
				<div class="bar"></div>
				<div class="bar"></div>
				<div class="bar"></div>
			</div>

			<div class="menu" id="menu">
				<div class="menu-close" id="menuClose">✖</div>
				<nav>
					<ul>
						<li><a href="/checkout">Shop</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="/product">Cart</a></li>
						<li><a href="#">Sign In</a></li>
					</ul>
				</nav>
			</div>
		</ul>
		<ul class="right-nav-items border-left">
			<a class="no-underline" href="/product"><i class="fa-solid fa-bag-shopping"></i></a>
		</ul>
	</nav>
	<nav class="desktop-navigation-bar border-bottom">
		<ul class="left-nav-items border-right">
			<li class="border-right"><a href="/checkout">Shop</a></li>
			<li><a href="">Contact</a></li>
		</ul>
		<ul class="right-nav-items border-left">
			<li><a href="">Sign In</a></li>
			<li class="border-left"><a href="./product">Cart</a></li>
		</ul>
	</nav>
</header>

<style>
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 1.5px solid black;
		font-family: 'Gilroy-Regular', sans-serif;
	}
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

	.mobile-navigation-bar {
		display: flex;
		justify-content: space-between;
	}
	.mobile-navigation-bar ul {
		text-align: center;
		margin: 0px;
		padding: 12px;
	}
	.mobile-navigation-bar ul i {
		font-size: 24px;
	}
	.desktop-navigation-bar {
		display: none;
	}

	.menu-icon {
		position: static;
		top: 15px;
		right: 15px;
		width: 30px;
		cursor: pointer;
		z-index: 1000;
	}

	.bar {
		width: 100%;
		height: 4px;
		background-color: black;
		margin: 6px 0;
		transition: 0.4s;
	}

	.menu {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: white;
		justify-content: center;
		align-items: center;
		text-align: center;
		z-index: 999;
	}

	.menu nav ul {
		list-style: none;
		padding: 0;
	}

	.menu nav ul li {
		margin: 20px 0;
	}

	.menu nav ul li a {
		text-decoration: none;
		color: black;
		font-size: 24px;
	}

	.menu-close {
		position: absolute;
		top: 5px;
		left: 18px;
		font-size: 30px;
		cursor: pointer;
		z-index: 1001;
		color: #000;
	}
	.open .bar:nth-child(1) {
		transform: rotate(-45deg) translate(-5px, 6px);
	}
	.open .bar:nth-child(2) {
		opacity: 0;
	}
	.open .bar:nth-child(3) {
		transform: rotate(45deg) translate(-5px, -6px);
	}
	@media (min-width: 376px) {
		.mobile-navigation-bar {
			display: flex;
		}
		.desktop-navigation-bar {
			display: none;
		}
		.mobile-navigation-bar ul {
			padding: 16px;
		}
	}
	@media (min-width: 769px) {
		.mobile-navigation-bar {
			display: none !important;
		}
		.desktop-navigation-bar {
			display: flex;
			justify-content: space-between;
		}
		.desktop-navigation-bar ul {
			display: flex;
			list-style: none;
			margin: 0px;
			padding: 0px;
		}
		.desktop-navigation-bar ul li {
			padding: 24px 30px;
			text-align: center;
		}
		.desktop-navigation-bar ul li a {
			font-size: 16px;
			color: #000;
			text-decoration: none;
		}
	}
</style>
