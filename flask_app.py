from flask import Flask, render_template, json, jsonify
from flask import request
import vk_api
import os

app = Flask(__name__,
            static_folder = "./dist/static",
            template_folder = "./dist")
@app.route('/')
def Index():
    return render_template("index.html")

@app.route('/soon')
def Soon():
    return render_template("soon/index.html")

@app.route("/feedback", methods=["POST"])
def FeedBack():
    print(request.is_json)
    data = request.get_json()
    print(data)
    name = data["name"]
    email = data["email"]
    text = data["text"]
    if len(name) == 0 or len(email) == 0 or len(text) == 0:
        return jsonify(info="Заполните пожалуйста все поля")
    else:
            vk = vk_api.VkApi(login="",password="")
            vk.auth()
            vk.method('messages.send',{'chat_id':84,'message':"Имя:"+name+"\n"+"Почта:"+email+"\n"+"Сообщение:"+text})
            return  jsonify(info="Спасибо большое!\nМы обязательно с Вами свяжемся)")
app.run(host="0.0.0.0")