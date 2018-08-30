<template>
<main>
		<div class="contacts" id="contacts">
			<div class="wrapper">
				<div class="contacts-logo">
					<h2>Контакты</h2>
					<p>Мы ждем ваших вопросов</p>
				</div>
				<div class="contacts-box">
				<div class="contacts-left">
					<p class="mail">!task@gmail.com</p>
					<p class="phone">8-800-555-35-35</p>
					<p class="adress">Проспект Вернадского д.86</p>
				</div>
				<div class="contacts-right">
					<form action="#">
						<input class="input-contact"  type="text" placeholder="Введите ваше Имя">
						<input  class="input-contact" type="text" required="Поле обязательно для заполнения" placeholder="Введите ваш E-mail">
						<textarea name="" id="" required="Поле обязательно для заполнения" placeholder="Введите сообщение"></textarea>
						<button class="contacts-button" type="submit">Отправить </button>
					</form>
				</div>
				</div>
			</div>
		</div>
</main>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

