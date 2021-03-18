const circle = require('./circle.js')
var s = 'Hello world'

//console.log("Dien tich hinh tron co r =4: " +circle.area(4));
// var r =4;
// console.log(`Dien tich hinh tron co r=${r} la: ${circle.area(r)}`)
// console.log(`\nChu vi hinh tron co r= ${r}la: ${circle.circumference(r)}`)
// console.log('dien tich chu nhat: '+circle.cvcn(70,40))

const fs = require('fs')
//Doc khong dong bo: Async
// fs.readFile('hello.txt','utf8',function(error,data){
//     if(error)
//         console.log('File khong truy cap duoc')
//     else{
//         console.log(data)
//     }
// })
// console.log('123')
//doc dong bo(Sync)
var content =fs.readFileSync('hello.txt','utf-8')
console.log('456')
console.log(content)