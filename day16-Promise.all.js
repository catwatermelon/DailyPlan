// 实现一个 Promise.all
Promise.all = (promises) => {
    const lens = promises.length;

    if(!lens) return [];
    const result = [];
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