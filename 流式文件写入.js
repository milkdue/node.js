/**
 * 
 * 流式文件写入
 *  触发水的流动，创建一个流(文件流)(可读流，可写流)
 *  fs.createWriteStream(path[,options])
 *      -path：路径
 *      -option:配置对象，可选
 *          -flags : 
 *          -encoding
 *          -fd : 文件统一标识符,linux下的文件标识符
 *          -mode 
 *          -autoClose ： 自动关闭文件，默认值：true
 *          -emitClose ： 强制关闭文件,默认值： false
 *          -start : 写入文件的起始位置
 * 简单文件写入
 * 
 * 只要用到了流，就必须监测流的状态
 */
let fs = require('fs');
// 创建可写流
let ws = fs.createWriteStream(__dirname+'/demo1.txt');
// 使用可写流写入数据
ws.write('zhangsan\n');
// 检测流的状态  只要用到了流，就必须监测流的状态
ws.on('open', function(){
    console.log('可写流打开了');
});
ws.on('close', function(){
    console.log('可写流关闭了');
});
ws.write('lisi\n');
ws.write('wangwu\n');
// 关闭流
// 在8版本中使用end关
ws.close();
