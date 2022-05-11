
const lodash = require('lodash');

var moment = require('moment');  
const setFormate = moment().format('MMMM Do YYYY, h:mm:ss a');
const date = moment().format('dddd');      
const set = moment().format("MMM Do YY");  


console.log(setFormate);
console.log(date);
console.log(set);

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
lodash.pull(array, 'a', 'c');
console.log(array);

let day = moment().startOf('day').fromNow();  
let endday = moment().endOf('day').fromNow();    
let start = moment().startOf('hour').fromNow();

console.log(day);
console.log(endday);
console.log(start);

let en = moment.locale();         // en
let a = moment().format('LT');   // 6:51 PM
let b = moment().format('LTS');  // 6:51:40 PM
let c = moment().format('L');    // 05/11/2022
let d = moment().format('l');    // 5/11/2022
let e = moment().format('LL');   // May 11, 2022
let f = moment().format('ll');   // May 11, 2022
let g = moment().format('LLL');  // May 11, 2022 6:51 PM
let h = moment().format('lll');  // May 11, 2022 6:51 PM
let i  = moment().format('LLLL'); // Wednesday, May 11, 2022 6:51 PM
let j = moment().format('llll');

console.group(en,a,b,c,d,e,f,g,h,i,j);