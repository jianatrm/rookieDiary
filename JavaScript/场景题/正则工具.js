let reg = /\d{1,3}(?=(\d{3})+$)/g


let num = 1234567890;

console.log(String(num).replace(reg, '$&,'))

console.log((Array(3).join(0)+9).slice(-2))