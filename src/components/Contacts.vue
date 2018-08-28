<template>
	<div class="contacts">
			<div class="wrapper">
				<div class="contacts-logo">
					<h2>Контакты</h2>
					<p>Мы ждем ваших вопросов</p>
				</div>
				<div class="contacts-box">
				<div class="contacts-left">
					<p class="mail">Почта</p>
					<p class="phone">8-800-555-35-35</p>
					<p class="adress">Проспект Вернадского</p>
				</div>
				<div class="contacts-right">
					<form action="#">
						<input class="input-contact"  type="text" value="Введите ваше Имя">
						<input  class="input-contact" type="text" value="Введите ваш E-mail">
						<textarea name="" id="">Введите сообщение</textarea>
						<input  class="contacts-button" type="button" value="Отправить">
					</form>
				</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

