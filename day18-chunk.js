// 按一定长度分割数组
// 实现 chunk(arr: any[], size: number);

const chunk = (arr, size = 0) => {
    if(size <= 0) return [];

    return arr.reduce((total, cur, index) => {
        if(index % size == 0) {
            total.push([cur]);
        } else {
            const last = total.pop() || [];
            total.push(last.concat(cur));
        }
        return total;
    }, []);
}

const chunk2 = (arr, size = 0) => {
    if(size <= 0) return [];

    const res = [];
    for(let i=0; i<arr.length; i+=size) {
        res.push(arr.slice(i, i+size));
    }
    return res;
}

console.log(chunk2([1,2,3,4,5], 1));
console.log(chunk2([1,2,3,4,5], 2));
console.log(chunk2([1,2,3,4,5], 3));
console.log(chunk2([1,2,3,4,5], 4));
console.log(chunk2([1,2,3,4,5], 5));