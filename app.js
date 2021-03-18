const circle = require('./circle.js')
var s = 'Hello world'

//console.log("Dien tich hinh tron co r =4: " +circle.area(4));
var r =4;
console.log(`Dien tich hinh tron co r=${r} la: ${circle.area(r)}`)
console.log(`\nChu vi hinh tron co r= ${r}la: ${circle.circumference(r)}`)


for(i=0;i<10;i++){
    console.log(s.toUpperCase());
}
