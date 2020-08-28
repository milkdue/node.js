/*
* 1.Node中任何一个模块（js文件）都被一个外层函数所包裹
*   function (exports, require, module, __filename, __dirname) {}
*       exports：用于支持CommonJs模块化规范的暴露语法
*       require：用于支持CommonJs模块化规范的引入语法
*       module：用于支持CommonJs模块化规范的暴露语法
*       __filename：当前运行文件的绝对路径
*       __dirname：当前运行文件所在文件夹的绝对路径
*
* 2.为什么要设计这个外层函数（这个外层函数有什么作用？）
*     1).用于支持模块化语法
*     2).隐藏服务器内部实现(从作用域角度去看)
*
* */

//想瞧一瞧那个外层函数，外层函数到底接收了什么参数？
//console.log(arguments.callee.toString()) //输出外层函数

//如何在一个函数体里，输出函数本身？
/*function demo() {
  console.log(arguments.callee.toString()) //输出demo函数
}*/

// c:\code\node\node_function.js
console.log(__filename);

// c:\code\node
console.log(__dirname);

setImmediate(() => {
  console.log('setImmediate');
});

setTimeout(() => console.log('setTimeout'));
process.nextTick(() => console.log('process'));
console.log('主线程');
