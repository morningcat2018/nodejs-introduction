


# NodeJs 入门笔记

本机环境：
```
MacOsX Mojave 10.14.6
NodeJs v10.11.0
npm 6.10.3
```

## 1. 安装

下载地址:

https://nodejs.org/en/download/

安装完成后：

> node -v

> npm -v

> which node
```
/Users/{$myUserName}/.nvm/versions/node/v10.11.0/bin/node
```

## 2. 创建工程

新建一个目录：my-project

进入目录下执行命令：`npm init`

输入一些关键性信息后会自动生成一个文件：`package.json`
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "demo",
  "main": "index.js",
  "scripts": {
    "index": "node index.js"
  },
  "keywords": [
    "demo"
  ],
  "author": "morningcat",
  "license": "ISC"
}
```
这个文件的内容就是管理这个工程的配置；

如果本工程需要引入一些第三方的包，比如 `express`，可以执行：`npm install express --save`

执行完成后，会有两个变化：
1. `package.json` 文件中的内容增加；
2. 生成`package-lock.json`文件和`node_modules`目录；

详细说明：
```
1. package.json 新增内容为：

"dependencies": {
    "express": "^4.17.1"
}

表示增加工程依赖配置；

2. package-lock.json 文件

此文件的作用之一是帮助工程锁定node工程依赖外部包的版本，防止因为包的升级影响与第三方包的兼容性，导致程序出错；

3. node_modules 目录

此目录中保存的是本工程所依赖的第三方包内容
```

当修改 `package.json` 文件中关于依赖的配置，包含升级包的版本、增加依赖包等；
可以手动执行 `npm install` 使配置生效；

例如，当前在 package.json 增加关于 mysql 依赖的配置：
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "demo",
  "main": "index.js",
  "scripts": {
    "index": "node index.js"
  },
  "keywords": [
    "demo"
  ],
  "author": "morningcat",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "mysql": "^2.17.1"
  }
}
```
然后手动执行：
> npm install

此时查找 node_modules 目录，会发现已引入关于 mysql 的依赖包；

## 编写node代码

接下来可以结合 vs code 编辑器协助开发；请自行安装（https://code.visualstudio.com/）；

打开 VS Code 软件，打开 my-project 目录；

新建目录 src (表示源码路径)

新建文件 app.js

```js
'use strict';

var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodejs'
});

connection.connect();

app.get('/', function (req, res) {
    connection.query('insert into test values(null,\'nodejs\')', function(err, rows, fields) {
            if (err) throw err;
            console.log('rows: ', rows);
            console.log('fields: ', fields);
        });
    res.send('Hello World!');
});

app.listen(30000, function () {
    console.log('127.0.0.1:30000');
});

// connection.end();
```

运行方式1，进入 src 目录下，执行以下命令：
> node src/app.js

运行方式2，在 package.json 中增加配置：
```
  "scripts": {
    "index": "node index.js",
    "runAppJs": "node src/app.js"
  },
```
在当前工程 根目录下 ，即 package.json 同等级目录，执行命令：
> npm run runAppJs

## 参考资料

http://www.expressjs.com.cn/

https://www.liaoxuefeng.com/wiki/1022910821149312/1023025933764960

