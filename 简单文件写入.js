/**
 *  Node中的文件系统
 *      1. 在Node.js中有一个文件系统，就是对计算机中的文件增删改查等操作
 *      2. 在Node.js中的有一个文件系统fs，专门用于操作文件
 *  异步文件写入
 *      fs.writeFile(file, data[, options], callback)
 *      file：写入的文件路径+文件名
 *      data：写入的数据
 *      option:可选参数 配置对象
 *      callback:回调
 *          回调中参数：错误对象 无错误为空
 *  Node中有一个原则：错误优先
 *      encoding <string> | <null> 默认值: 'utf-8'。
 *      mode <integer> 默认值: 0o666。(八进制) = 0o222 + 0o444
 *          - 0o111:文件可被执行的权限 .exe .msc Node中几乎不用
 *          - 0o222：文件可被写入的权限
 *          - 0o444：文件可被读取的权限
 *      flag <string> 参见文件系统 flag 的支持。 默认值: 'w'  写入(会覆盖前面的文件)
 *          打开文件要执行的操作
 *          'a'  追加   
 * 
 */

let fs = require('fs');
fs.writeFile(__dirname+'/demo.txt', 'zhangsan lisi wangwu ',{mode : 0o666, flag : 'a'},(err) => {
    if(err){
        console.log('文件错误', err);
    }else{
        console.log('文件写入成功');
    }
});
// __dirname当前文件的当前目录