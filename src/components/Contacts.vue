<template>
<main>
		<div class="contacts" id="contacts">
			<div class="wrapper">
				<div class="contacts-logo">
					<h2>Контакты</h2>
					<p>Мы ждем ваших вопросов</p>
					<p>{{response}}</p>
				</div>
				<div class="contacts-box">		
				<div class="contacts-right">
					<form>
						<input v-model="name" class="input-contact"  type="text" placeholder="Введите ваше Имя">
						<input v-model="email" class="input-contact" type="text" required="Поле обязательно для заполнения" placeholder="Введите ваш E-mail">
						<textarea v-model="text" name="" id="" required="Поле обязательно для заполнения" placeholder="Введите сообщение"></textarea>
					
					</form><center>
						<button v-on:click="FeedBack()" class="contacts-button" type="button">Отправить </button>
		     	</center>
				</div>
				</div>
			</div>
		</div>
</main>
</template>

<script>
import axios from "axios"
export default {
  name: 'Contacts',
  data(){
	  return {
		  name:"",
		  email:"",
		  text:"",
		  response:""
	  }
  },
  methods:{
	  FeedBack(){
		  axios.post("http://task.pythonanywhere.com/feedback",{
			  name:this.name,
			  email:this.email,
			  text:this.text
		  }).then(res=>{
			  this.response = res.data.info
			  this.name = ""
			  this.email = ""
			  this.text = ""
		  }
			  
		  )
	  }
  }
}
</script>

