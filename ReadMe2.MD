
npm package.json 学习笔记

## package.json

https://docs.npmjs.com/files/package.json

### config

https://docs.npmjs.com/misc/config

### scripts

https://docs.npmjs.com/misc/scripts

### dependencies

https://docs.npmjs.com/files/package.json#dependencies 

### devdependencies

https://docs.npmjs.com/files/package.json#devdependencies

---

## 第三方源

### 淘宝npm镜像

搜索地址：http://npm.taobao.org/

registry地址：http://registry.npm.taobao.org/

### cnpmjs镜像

搜索地址：http://cnpmjs.org/

registry地址：http://r.cnpmjs.org/

### 使用

- 临时使用

> npm install express --registry https://registry.npm.taobao.org 

> npm install axios --save --registry=http://registry.npm.taobao.org

- 永久设置

> npm config set registry https://registry.npm.taobao.org
 
// 配置后可通过下面方式来验证是否成功
> npm config get registry

// 或
> npm info express

- 通过cnpm使用

> npm install -g cnpm --registry=https://registry.npm.taobao.org
 
// 使用
> cnpm install express


- 如果要发布自己的镜像需要修改回来

> npm config set registry https://registry.npmjs.org/

---


## npm 包缓存位置

> npm config get cache

---


