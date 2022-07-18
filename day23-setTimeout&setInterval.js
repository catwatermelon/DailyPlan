// 实现 setTimeout 模拟 setInterval
const simulateSetInterval = (func, timeout) => {
    let timer = null
    const interval = () => {
        timer = setTimeout(() => {
            // timeout时间之后会执行真正的函数func
            func()
            // 同时再次调用interval本身，是不是有点setInterval的感觉啦
            interval()
        }, timeout)
    }
    // 开始执行 
    interval()
    // 返回用于关闭定时器的函数 
    return () => clearTimeout(timer)
}

const cancelSetInterval = simulateSetInterval(() => {
    console.log(1)
}, 300)

setTimeout(() => {
    cancelSetInterval()
    console.log('一秒之后关闭定时器')
}, 1000)


// 实现 setInterval 模拟 setTimeout
const simulateSetTimeout = (fn, delay) => {
    let timer = null;

    timer = setInterval(() => {
        fn();
        clearInterval(timer);
    }, delay);
    return () => clearInterval(timer)
}
const cancelSetTimeout = simulateSetTimeout(() => {
    console.log(1)
}, 1000)