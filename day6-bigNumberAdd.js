// 实现一个add方法完成两个大数相加
// function add(a ,b){
//     //...
// }

let a = "9007199254740991";
let b = "1234567899999999999";

function add(a, b) {
    // 取两个数字的最大长度
    const maxLength = Math.max(a.length, b.length);
    // 补0
    a = a.padStart(maxLength , 0);//"0009007199254740991"
    b = b.padStart(maxLength , 0);//"1234567899999999999"
    
    let carry = 0, sum = '';
    for(let i=maxLength-1; i>=0; i--) {
        let t = +a[i] + +b[i] + carry;
        carry = Math.floor(t/10);
        sum = t%10 + sum;
    }
    if(carry !== 0) sum = `${carry}` + sum;
    return sum;
}

console.log(add(a, b));