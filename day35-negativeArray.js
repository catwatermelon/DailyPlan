// 实现一个负数索引
// arr[-1]返回数组的最后一个元素，arr[-2]返回数组的倒数第二个元素

const negativeArray = (arr) => {
    const negativeArr = new Proxy(arr, {
        get: (target, key, proxy) => {
            const lens = target.length;
            const relativeIndex = key % lens;
            return target[relativeIndex + lens]
        }
    })
    return negativeArr;
}

const arr = [1, 2, 3, 4, 5, 6];

const negativeArr = negativeArray(arr);
console.log(negativeArr[-10]);