<template>
    <main class="back">
<div class="project" id="project">
			<div class="wrapper">
				<link rel="shortcut icon" href="static/img/icon.png" type="image/png">
					<h2>FAQ</h2>
					<p>1. В приложении есть два способа регистрации: Как волонтер("Хочу помочь") и как человек с ограниченными возможностями.("Нужна помощь")</p>
					<div class="faq-img">
						<img src="static/img/invUp.jpg" width="300" height="500">
						<img src="static/img/main.jpg" width="300" height="500">
						<img src="static/img/volUp.jpg" width="300" height="500">
					</div> 
					<p>2. После регистрации и успешной авторизации, человек может оказывать/получать помощь. Так выглядит классический сценарий:</p>
					<p>Человек с ограниченными возможностями попал в беду. Он достает телефон, открывает приложение и после логина он увидит свое местоположение на карте. Для того, чтобы получить помощь ему нужно нажать на большую кнопку снизу.</p>
					<p>После этого он увидит точки на карте (Волонтеры которые могут ему помочь), а также окошко с номером сверху экрана.После этого ему достаточно нажать на точку и позвонить волонтеру, которому нужно сообщить всплывший номер.
						Затем волонтер вбивает указанный номер у себя в поле, и видит местоположение человека попавшего в беду.На обоих сторонах можно наблюдать, насколько близко находятсяд друг к другу участники</p>
					<p>Ниже представлены видео, в которых показана работа приложения(MVP версия), с различными сценариями (когда человек не смог оказать помощь - экстренное завершение, а также удачая версия помощи)</p>
					<video src="static/img/invInitNeedHelp.mov" controls="controls" height="600"></video>
					<video src="static/img/volAfterCallConnected.mov" controls="controls" height="600"></video>
					<video src="static/img/stopHelpGoodReview.mov" controls="controls" height="600"></video>
					<video src="static/img/invProperEndSessionAndExit.mov" controls="controls"  height="600"></video>
					<video src="static/img/invRecoverySession.mov" controls="controls"height="600"></video>
					<p>В дальнейшем планируется добавить чат, возможность строить путь от точки A до точки B(от человека нуждающегося в помощи, до оказывающего помощь), а также учитывать отзывы людей о волонтерах(количество оценок "Хорошо" или "Плохо") и выделять людей с высоким рейтингом.</p>
				</div>
		</div>

</main>
</template>

<script>
export default {
  name: 'IOS',
}
</script>
<style>
.up{
margin-left: 500px;
}
</style>
