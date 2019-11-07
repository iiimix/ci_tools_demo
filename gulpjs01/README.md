## npm init -y

## 安装gulp-cli
```
npm install gulp-cli -g
npm install gulp -D
```

## 创建gulp配置文件：gulpfile.js
```
gulpfile.js
```

## 查看帮助文档
```
gulp --help
```


## 支持babel转化，安装 `gulp-babel @babel/core @babel/preset-env`
```
tnpm install --save-dev gulp-babel @babel/core @babel/preset-env
```

出现问题
```
 GulpUglifyError: unable to minify JavaScript
Caused by: SyntaxError: Name expected
```

原因是uglify插件不支持es6语法，需要添加babel/env支持

### 1. 使用.babelrc配置
```
{
  "presets": ["@babel/preset-env"]
}
```

### 2. 使用参数配置
```
...
.pipe(babel({
  presets: ["@babel/env"]
}))
...
```