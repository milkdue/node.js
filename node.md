# Node.js

## Node.js的特点

1. 异步的非阻塞的I/O(I/O线程池)
2. 特别适合I/O密集型应用
3. 事件循环机制
4. 单线程(成也单线程，败也单线程，单线程的东西要想实现异步，必须有自己的事件循环机制)
5. 跨平台
6. 回调函数嵌套太多
7. 单线程处理不好CPU密集型任务

## Node中的函数的特点

1. Node中任何一个模块(js文件)都被一个外层函数所包裹
2. 使用arguments.callee.toString()在node中输出那个外层函数(在浏览器中不使用toString())
3. 用于支持模块化语法
4. 隐藏服务器内部实现

## Node中的global

### 浏览器中的js的组成

1. BOM---------------------window浏览器对象模型
2. DOM---------------------document文档对象模型
3. ES规范

### Node中js的组成

1. ES规范
2. global全局变量(替代了window)
3. 在Node中禁止函数的this指向global,而是指向了一个空对象

## global上的一些常用属性

- clearImmediate------清空立即执行函数
- clearTimeout--------清空延迟定时器
- clearInterval-------清空循环定时器
- setImmediate--------设置立即执行函数
- setTimeout----------设置延迟定时器
- setInterval---------设置循环定时器
- process.nextTick()--用于设置立即执行函数(vip---在任意阶段优先执行)

## Node中的事件循环模型

1. timer(定时器阶段)
   1. 计时阶段
   2. 执行定时器的回调
2. pending callbacks(系统阶段)
3. idle,prepare(准备阶段)
4. poll(轮询阶段，核心)
   1. 如果回调队列有待执行的回调，从回调队列中取出回调函数，同步执行，直到回调队列为空，或者达到系统最大限度
   2. 如果回调队列为空，如果有设置过setImmediate,进入下一个check阶段，目的：为了执行setImmediate所设置的回调，如果没有设置过，停留在此阶段，等待回调插入回调队列。若定时器到时间了，进入下一个check阶段，为了回到第一阶段
5. check(专门用于执行setTmmediate所设置的回调)
6. close callbacks(关闭回调阶段)

## npm常用命令

### packge

- 包结构
  - 包实际上就是一个压缩文件，解压以后还原为目录。符合CommonJS规范的目录
  - 包结构
    - package.json  描述文件
    - bin   可执行二进制文件
    - lib   js代码
    - doc   文档
    - test  单元测试

### npm命令

- npm init(普通文件夹变成包)
- npm search xxxx(搜索： npm search jquery 基本不用)
- npm install xxxx --save 或 npm i xxx -S 或 npm i xxx(安装xxx)
- npm install xxxx --save-dev 或 npm i xxxx -D 安装包并将该包写入到devDependencies(开发依赖)
- npm i xxx -g(全局安装，一般来说，带有指令集的包要进行全局安装，例如browserify,babel等，全局安装的包，其指令到处可用，如果该包不带指令，无需全局安装)
- npm i xxx@yyy(安装xxx包的yyy版本)
- npm i(安装package.json中声明的所有包)
- npm remove xxxx(移除npm包)
- npm view xxxx versions(查看远程npm仓库xxx包的所有版本信息)
- npm view xxx version(查看远程npm仓库xxx包的最新版本信息)
- npm aduit fix(检测项目依赖的一些问题，并且尝试着修复)
- npm ls xxx(查看我们所安装的xxxx包的版本)

### 版本号的问题

- ^3.x.x：锁定大版本，以后安装包的时候，保证包是3.x.x版本，x默认取最新的
- ~ 3.1.x:锁定小版本，以后安装时，保证包的版本是3.1.x，x默认是最新的
- 3.1.1：完整版本

### cnpm

- 地址：```https://registry.npm.taobao.org```

#### 使用方法

##### 第一种(不推荐)

- ```npm install -g cnpm --registry=https://registry.npm.taobao.org,以后安装直接采用cnpm替代npm```

##### 第二种(推荐)

- npm config set registry.npm.taobao.org
- 查看是否更改成功：npm config get registry

### 安装yarn

- npm init yarn -g
