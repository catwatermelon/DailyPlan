// 合并公共区间
// [[0, 1], [2, 5], [3, 7]] => [[0, 1], [2, 7]]
// 假设原数组按照每个数组的第一个元素大小排好序

const merge = (arrs) => {
    return arrs.reduce((f, c) => {
        if (f.length == 0) {
            f.push(c);
        } else if (f[f.length - 1][1] < c[0]) {
            f.push(c);
        } else {
            f[f.length - 1] = [f[f.length - 1][0], c[1]];
        }
        return f;
    }, [])
}
console.log(merge([[0, 1], [2, 5], [3, 7]]))