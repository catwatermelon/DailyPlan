// 实现一个curry函数，将普通函数进行柯里化
// 注：函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
// sum(1)(2)(3) 返回结果是1,2,3之和
// console.log(sumFn(1)(2)(3)); //6
// console.log(sumFn(1)(2, 3)); //6

function sum(a,b,c) {
    return a+b+c;
}
function curry(fn, args = []) {
    // 返回一个函数
    return function(...subArgs) {
        const rest = [...args, ...subArgs];
        // 判断当前已接收参数数量是否等于函数fn的所有参数数量
        if(rest.length < fn.length) { // 小于则继续返回一个 curry 函数
            return curry.call(this, fn, rest);
        } else { // 当参数接收足够时，执行该函数并返回结果
            return fn.apply(this, rest);
        }
    }
}

let sumFn = curry(sum);
console.log(sumFn(1)(2)(3)); //6
console.log(sumFn(1)(2, 3)); //6
