// 实现一个curry函数，将普通函数进行柯里化
// 注：函数柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
// sum(1)(2)(3) 返回结果是1,2,3之和
// let sumFn = curry(sum);
// console.log(sumFn(1)(2)(3)); //6
// console.log(sumFn(1)(2, 3)); //6
// 柯里化的作用：参数复用、提前返回和 延迟执行
function sum(a, b, c) {
    return a + b + c;
}
function curry(fn, args = []) {
    // 返回一个函数
    return function (...subArgs) {
        const rest = [...args, ...subArgs];
        // 判断当前已接收参数数量是否等于函数fn的所有参数数量
        if (rest.length < fn.length) { // 小于则继续返回一个 curry 函数
            return curry.call(this, fn, rest);
        } else { // 当参数接收足够时，执行该函数并返回结果
            return fn.apply(this, rest);
        }
    }
}

let sumFn11 = curry(sum);
console.log(sumFn11(1)(2)(3)); //6
console.log(sumFn11(1)(2, 3)); //6


let sumFn12 = curry(sum, [1]);
console.log(sumFn12(2)(3)); //6
console.log(sumFn12(2, 3)); //6

// curry2(sum) curry2(sum， 1) curry2(sum, [1])
function curry2(fn, args = []) {
    return (...subArgs) => {
        const rest = [].concat(args, subArgs);
        if (rest.length >= fn.length) {
            return fn.call(this, ...rest);
        } else {
            return curry.call(this, fn, rest);
        }
    }
}

let sumFn21 = curry2(sum);
console.log(sumFn21(1)(2)(3)); //6
console.log(sumFn21(1)(2, 3)); //6


let sumFn22 = curry2(sum, 1);
console.log(sumFn22(2)(3)); //6
console.log(sumFn22(2, 3)); //6


let sumFn23 = curry2(sum, [1]);
console.log(sumFn23(2)(3)); //6
console.log(sumFn23(2, 3)); //6