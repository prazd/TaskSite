<template>
  <div id="app">
	<header>
		<div class="header">
		    <nav>
			    <div class="top-nav" id="nav">
						<div class="container">
							<input id="toggle" type="checkbox">
							<label class="toggle-container" for="toggle">
							<span class="button button-toggle"></span>
							</label>
							<nav class="nav">
								<a class="nav-item" href="/#/">Главная</a>
								<a class="nav-item" href="/#/project">Проект</a>
								<a class="nav-item" href="/#/about">О нас</a>
								<a class="nav-item" href="/#/contacts">Обратная связь</a>
								<a class="nav-item" href="/#/ios">FAQ</a>
							</nav>
						</div>
			     </div>
		     </nav>
			 <div class="logo" id="logo2">
					<h1><span>!</span>task</h1>
				</div>
			 <nav id="two">
					<div class="top-nav" id="nav">
						<div class="containerTwo">
							<ul>
								<li><a href="/#/">Главная</a></li>
								<li><a href="/#/project">Проект</a></li>
								<li><a href="/#/about">О нас</a></li>
								<li><a href="/#/contacts">Обратная связь</a></li>
								<li><a href="/#/ios">FAQ</a></li>
							</ul>
				   </div>
				   </div>
				</nav>
		</div>
		</header>

<router-view/>
 	<footer>
		<div class="wrapper-footer">
			<p>2018 <strong><span>!</span>task</strong> We help to help</p>
			<div class="footer-nav">
			<ul>
                         <li><a href="/#/">Главная</a></li>
				         <li><a href="/#/about">О нас</a></li>
				         <li><a href="/#/project">Проект</a></li>
				         <li><a href="/#/contacts">Обратная связь</a></li>   
						 <li><a href="/#/ios">FAQ</a></li> 
			</ul>
			</div>
			<div class="footer-links">
				<ul>
					<li><a href="https://github.com/prazd/task"><i class="fab fa-github"></i></a></li>
				</ul>
			
			</div>
		</div>
	</footer>
  </div>
</template>