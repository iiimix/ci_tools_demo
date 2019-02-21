#ES6 、ECMAScript2015新特性
>ECMAScript2015也就是ES6，是2015年6月ECMA（欧洲计算机制造协会）发布的第6版javascript标准
而上一版本ES5则是2009年发布的标准规范


##1.块级作用域
>     let声明变量
> `let name = "";`

>       const常量声明

##2.结构
    1.数组结构赋值
    `[name, age, birthday] = ["wade",12, "9199"];`
    2.对象结构

##3.模板字符串
>使用let fullName = `My is ${name} and ${lastName}`拼接字符串

>标签模板
##4. String对象方法
>   startsWith

>   endsWith

>   includes

##5.默认参数
`function(name='wade',age='23')`

##6.    ...数据操作符
```
var arr = [1,2,3,4,5];
console.log(...arr); // 1,2,3,4,5
```

rest操作
```
function(name, ...values){
    console.log(...values); // 剩余参数数组
}
```
##7.函数的name属性
```
function walk(){}
console.log(walk.name); // walk
```

##8.箭头函数 =>
```
let name = name => "wade";
同
let name = function(name){
    return "wade";
}
```

##9.字面量对象
```
var obj = {
    name,
    age,
    sex
}
```

##10.对象新方法Object.is()

Object.is(NaN, NaN); // true
Object.is(+0, -0); // false

Object.assign(name, {},{});
同,同$.extends
name={};

##11.setPrototypeOf
改变原型链
Person.__prototype__ = Human;
实现继承

##12.class类定义
```
class Man extends Human{
    constructor(){
        super();
    }
}
```

get set static 

##13.新的数据结构Set/Map
```
// 非重复数据，存储任意对象
var set = new Set();
set.add("12");
set.has("12"); //true
set.size // 大小
set.delete("12"); // 删除数据
set.forEach(item => {
    console.log(item);
});
set.clear();
```
```
// key-value结构
var box = new Map();
box.set("name",value1);
box.set("age",age1);
box.size   // 大小
box.get("name");
box.delete("age");
box.has("name");
box.forEach((value, key) => {
    console.log(`${key} = ${value}`);
})
box.clear();
```

##14.Module模块定义
export default 
import name from "";
