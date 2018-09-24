<template>
<div>
<main>
	<div class="about">
			<div class="wrapper">
				<h2 id="about">О нас</h2>
				<div class="about-us">
					<div class="about-us-left">
						<p>Команда состоит из победителей и призеров олимпиады ИТ-планета, которая и дала толчок для развития проекта. Вместе мы стараемся делать мир лучше, для чего и работаем над приложениями которые будут помогать волонтерам и нуждающемся, найти друг друга. Ранее уже был продемонстрирован и опробован в действии Telegram-бот который связывал волонтеров и инвалидов находящихся в одном районе, но так как бот не сможет воплотить все необходимые возможности, было принято решение разработать приложения под несколько наиболее распространенных платформ. В данный момент наш проект находится в стадии разработки самих приложений.</p>
					</div>
					<div class="about-us-right">
						<img src="static/img/about.jpg" alt="">
					</div>
				</div>	
				</div>

				<div class="about-person">
					<h2>Разработчики</h2>
					<div class="wrapper">
				    <div class="persons">
					
					<div class="person">
						<img src="static/img/ser.jpg" alt="">
						<h3>Чернецов Сергей</h3>
						<p>Front-End разработчик<p> 
							(HTML, CSS, Python)</p>
					</div>
					   <div class="person">
                   <img src="static/img/lexa.jpg" alt="">
                    <h3>Праздников Алексей</h3> 
                     <p>Junior Full-stack разработчик<p>
                         Back-End (Golang, Python, Node.js)<p>
                         Front-End (JS, Vue.js)
                    </p>
                    </div>	
					
					<div class="person">
						<img src="static/img/serR.jpg" alt="">
						<h3>Коробин Сергей</h3>
						<p>iOS Разработчик<p> 
							(Swift, JS)</p>
					</div>
				<br><br><br><br>
              
					<br><br><br><br>
						<div class="person Tonya">
						<img src="static/img/tony.jpg" alt="">
						<h3>Алаева Антонина</h3>
						<p>Designer, организатор</p>
					</div>
						<div class="person Ilya">
						<img src="static/img/ilya.png" alt="">
						<h3>Илья Несин</h3>
						<p>Android Разработчик (JAVA)</p>
					</div>
				</div>
				
				</div>
			</div>
		</div>
	</main>
</div>
</template>
<script>
export default {
  name: 'AboutUs',
}
</script>
<style>
.Tonya{
	margin-left: -480px;
}
.Ilya{
	margin-left:-480px;
}

@media screen and (min-width:300px) and (max-width: 1000px){
.Tonya{
	margin-left: 0px;
	margin-top:-170px;
}	
.Ilya{
	margin-left: 0px;
}
}
</style>
