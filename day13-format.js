// 实现一个千分位 format 函数
// 接收一个number，返回一个string
// function format(number) {
//     ...
// }
// console.log(format(12345.7890)); // 12,345.789,0
// console.log(format(0.12345678));// 0.123,456,78
// console.log(format(123456)); // 123,456

const format = (number) => {
    const [integer, decimal] = number.toString().split('.');
    const intLens = integer.length;
    let formatedInteger = '';
    for(let i=intLens-1; i>=0; i--) {
        formatedInteger = integer[i] + formatedInteger
        if((intLens - i) % 3 == 0 && i !== 0) { // 3位前面增加一个分割
            formatedInteger = ',' + formatedInteger;
        }
    }

    // 如果没有小数部分， 则直接返回整数部分
    if(decimal == void 0) return formatedInteger;

    const deciLens = decimal.length;
    let formatedDecimal = '';
    for(let i=0; i<deciLens; ++i) {
        formatedDecimal += decimal[i];
        if((i + 1) % 3 == 0 && i != deciLens - 1) {
            formatedDecimal += ','
        }
    }
    return `${formatedInteger}.${formatedDecimal}`;
}

console.log(format(12345.7890)); // 12,345.789,0
console.log(format(0.12345678));// 0.123,456,78
console.log(format(1234567)); // 123,456
