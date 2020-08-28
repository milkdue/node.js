// 实例了buffer
// DeprecationWarning: Buffer() is deprecated due to security and 
// usability issues. Please use the Buffer.alloc(), 
// Buffer.allocUnsafe(), or Buffer.from() methods instead.
// let buf = new Buffer(10);//--性能差：1. 在堆中开辟空间 2. 清理
// console.log(buf);
// 创建一个buffer对象 性能比构造函数强一点 ----- 1. 在堆中开辟空间(这块空间没人用)
let buf2 = Buffer.alloc(10);
console.log(buf2);
// 效率最高----1. 直接开辟 残留着其他数据
let buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
// allocUnsafe()buffer不为空,且大于1
// 输出的是十六进制，存储的是二进制
// 将数据存入一个buffer实例
let buf4 = Buffer.from('hello');
console.log(buf4);
console.log(buf4.toString());
// 用户可以存储媒体文件