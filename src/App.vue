<template>
  <div id="app">
            <header>
            <div class="header">
              <div class="logo">
                  <h1><span>!</span>task</h1>
                </div>
                <nav>
                  <div class="top-nav">
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
			<p>2018 !task We help to help</p>
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
  name: 'App'
}
</script>
