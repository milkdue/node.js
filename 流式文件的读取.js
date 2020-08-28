/**
 * 
 * 简单文件的写入和读取都是一次性把所有要读取或写入的内容加入到内存中去
 * 
 * 创建一个可读流
 * fs.createReadStream(path[, options])
 *    - path:路径
 *    - options:配置对象
 *      flags <string> 参见文件系统 flag 的支持。 默认值: 'r'。
 *      encoding <string> 默认值: null。
 *      fd <integer> 默认值: null。
 *      mode <integer> 默认值: 0o666。
 *      autoClose <boolean> 默认值: true。
 *      emitClose <boolean> 默认值: false。
 *      start <integer>
 *      end <integer> 默认值: Infinity。 结束偏移量
 *      highWaterMark <integer> 默认值: 64 * 1024。 控制每次读取数据的大小(64kb)
 *      fs <Object> | <null> 默认值: null。
 */

let {createReadStream, createWriteStream} = require('fs');

//  创键一个可读流
let rs = createReadStream(__dirname+'/touxiang.jpg', {
    highWaterMark : 5 * 1024
});
let ws = createWriteStream('./touxiang2.jpg');
rs.on('open', function(){
    console.log('可读流打开了')
});
rs.on('close', function(){
    console.log('可读流关闭了');
    // 可读流关闭后关闭可写流
    ws.close();
});

ws.on('open', function(){
    console.log('可写流打开了')
});
ws.on('close', function(){
    console.log('可写流关闭了');
});
// 给可读流绑定一个data事件，就会触发可读流自动读取内容
rs.on('data', function(data){
    // buffer实例的length属性，是表示该buffer实例占用的内存空间大小
    console.log(data.length);
    ws.write(data);
});

// ws.close();在此处关闭了，主线程就关闭流，写入不进去