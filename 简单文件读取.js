/**
 * fs.readFile(path[, options], callback)
 * 
 * --path:路径
 * --options：配置对象
 * --callback:回调
 *      -err:错误对象
 *      -data:读取的数据,以buffer数据返回，纯文本加toSting()
 */

 let fs = require('fs');
 fs.readFile(__dirname+'/头像.jpg', function(err, data){
     err ? console.log(err) : console.log(data);
     fs.writeFile('./touxiang.jpg', data, function(err){
         err ? console.log('失败了') : console.log('成功');
     })
 })