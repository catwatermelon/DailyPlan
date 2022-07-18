// 实现一个 instanceof 函数
// MDN: instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象原型链中的任何位置
// 换句话说，如果A instanceof B，那么 A 必须是一个对象，而 B 必须是一个合法的 JavaScript 函数。在这两个条件都满足的情况下：
// 判断 B 的 prototype 属性指向的原型对象(B.prototype)是否在对象 A 的原型链上。
// 如果在，则为 true；如果不在，则为 false。

// 1. 遍历
const myInstanceof = (left, right) => {
    // 左边参数是普通值则直接返回false
    if(typeof left !== 'object' && left !== null) return false;
    if(typeof right !== 'function') throw new Error('right must be function!');
    let L = Object.getPrototypeOf(left);
    const R = right.prototype;

    while(L) {
        if(L === R) return true;
        L = Object.getPrototypeOf(L);
    }
    return false;
}

// 2. 递归
const myInstanceof2 = (left, right) => {
    // 左边参数是普通值则直接返回false
    if(typeof left !== 'object' && left !== null) return false;
    if(typeof right !== 'function') throw new Error('right must be function!');

    let L = Object.getPrototypeOf(left);
    const R = right.prototype;

    if(L === null) return false;
    else if(L === R) return true;
    return myInstanceof2(L, right);
}

console.log(myInstanceof2('777', String)); // false
console.log(myInstanceof2(new String('777'), String)); // true
