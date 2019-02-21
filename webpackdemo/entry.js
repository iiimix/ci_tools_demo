
// require("./name")和下列效果一样的
var name = require("./name.js");

// 使用webpack的loader样式加载器
require("style-loader!css-loader!./style.css");

document.getElementById("app").innerHTML = "hello webpack demo " + name;