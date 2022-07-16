// 防抖-类似7秒回城，7秒中如果再点回城，则重新等待7秒才能回城成功。
const debounce = (fn, delay = 300) => {
    let timer = null;
    return function(...args) {
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(this, args); // 改变this指向为调用debounce所指的对象
        }, delay);
    }
}

// 节流-类似使用技能，使用完CD冷却的时间中是不能再次使用的。
const throttle = (fn, delay) => {
    let beforeTime = 0;

    return function(...args) {
        const now = Date.now();
        if(now - beforeTime < delay) {
            return;
        }
        fn.apply(this, args);
        beforeTime = now;
    }
}