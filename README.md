# SimpleNodeProxy
 > 基于node的http请求代理服务器(自用 :p)
 
## 如何搞起?
首先你需要nodejs的环境 [点我](https://nodejs.org/en/)

npm安装依赖:

```shell
npm install
```
进入到根目录下:

```shell
node index.js [你需要代理的url]
```
例如:

```shell
node index.js http://test01.gitstars.cn
```
## 如何访问?

请将你的**静态资源(如html, css, js, xxx)** 放置到**webapp**目录下

然后访问:

例如: localhost:8000/app.html(服务器端口默认使用8000, 如果需要请在index.js文件中修改)

## LICENCE
MIT

