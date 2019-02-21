
// var name = require("./name.js");
// require("../style/style.css");

// 使用ES6标准导入  import
import name from "./name.js";
import '../style/style.css';

var appEle = document.getElementById("app");
var contentEle = appEle.firstElementChild;
var span = document.createElement("span");
span.textContent = "hola你好" + name;
var input = document.createElement("input");
input.value = 'I love China!';
contentEle.appendChild(span);
contentEle.appendChild(input);