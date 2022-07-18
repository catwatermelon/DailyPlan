// 实现一个 Promise.all
// 如果传入的参数是一个空的可迭代对象，那么此promise对象回调完成(resolve),只有此情况，是同步执行的，其它都是异步返回的。
// 如果传入的参数不包含任何 promise，则返回一个异步完成.
// promises 中所有的promise都“完成”时或参数中不包含 promise 时回调完成。
// 如果参数中有一个promise失败，那么Promise.all返回的promise对象失败
// 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组

Promise.myAll = (promises) => {
    const lens = promises.length;
    const result = [];
    if(!lens) return Promise.resolve(result);

    let cnt = 0;
    return new Promise((resolve, reject) => {
        for(let i=0; i<lens; ++i) {
            // 使用Promise.resolve包装，兼容非Promise的情况
            Promise.resolve(promises[i]).then(res=>{
                result[i] = res; // Promise.all返回的数组顺序是和传入的顺序一样的
                cnt++;
                if(cnt == lens) {
                    resolve(result);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}

let p1 = Promise.resolve(1)
let p2 = 2
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 3)
})

let p4 = Promise.reject('出错啦')

Promise.myAll([p1, p2, p3]).then((res) => {
  console.log(res); // [ 1, 2, 3 ]
});

Promise.myAll([ p1, p2, p4 ]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err) // err 出错啦
})
