<template>
  <div id="app">
 	<header>
		<div class="header">
			<div class="logo">
			    <h1><span>!</span>task</h1>
		    </div>
		    <nav>
			    <div class="top-nav" id="nav">
				     <a href="#" id="title" class="icon" v-on:click="Menu()"><p>&#9776;</p></a>
                    <ul>
                        <li><router-link to="/">Главная</router-link></li>
                        <li><router-link to="/project">Проект</router-link></li>
                        <li><router-link to="/about">О нас</router-link></li>
                        <li><router-link to="/contacts">Контакты</router-link></li>
                      </ul>
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
				         <!-- <li><a href="#maine">Главная</a></li> -->
                 <li><a href="/#/">Главная</a></li>
				         <li><a href="/#/about">О нас</a></li>
				         <li><a href="/#/project">Проект</a></li>
				         <li><a href="/#/contacts">Контакты</a></li>   
			</ul>
			</div>
			<div class="footer-links">
				<ul>
					<li><a href="#"><i class="fab fa-vk"></i></a></li>
					<li><a href="#"><i class="fab fa-telegram"></i></a></li>
					<li><a href="#"><i class="fab fa-github"></i></a></li>
					<li><a href="#"><i class="fab fa-facebook-square"></i></a></li>
				</ul>
			
			</div>
		</div>
	</footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    Menu(){
     var menuElem = document.getElementById('nav');
    var titleElem = menuElem.querySelector('.icon');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };
    }
  }
}
</script>
