// 实现一个 repeat 函数，根据传入的参数，间隔时间，打印次数，来输出log
// repeat(fn, interval, times) {
//     ...
// }
// const r = repeat(repeatPrint, 10, 10)

const repeat = (fn, interval, times) => {
    if (times <= 0) return;
    setTimeout(() => {
        fn();
        repeat(fn, interval, times - 1);
    }, interval * 1000);
}

const repeatPrint = () => console.log(new Date().toLocaleString());
const r = repeat(repeatPrint, 3, 3)