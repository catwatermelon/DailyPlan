// Memoizes方法可以缓存某函数的计算结果。

/**
 * 缓存某函数的计算结果
 * @param {*} func
 */
function memorize(func) {
    const memorize = function (key) {
        // 否则用 参数 key（即 memoize 方法传入的第一个参数）当 key
        if (!memorize.cache.hasOwnProperty(key)) {
            memorize.cache[key] = func.apply(this, arguments)
        };
        return memorize.cache[key];
    };
    // cache 对象被当做 key-value 键值对缓存中间运算结果
    memorize.cache = {};
    return memorize;
}

const memorize2 = (fn) => {
    const cache = {};
    return function(key) {
        if(!cache.hasOwnProperty(key)) {
            cache[key] = fn.apply(this, arguments);
        }
        return cache[key];
    }
}

var times = 0;
var fibonacci = function (n) {
    times++;
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};
fibonacci(10);
console.log(times);  // 55


// 使用函数记忆
fibonacci = memorize(fibonacci);
fibonacci(10);
console.log(times);  // 11
