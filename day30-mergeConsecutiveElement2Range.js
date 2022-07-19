// 实现一个函数，判断一组数字是否连续。当出现连续数字的时候以‘-’输出
// 腾讯面试题目
// 如： const arr = [2, 3, 4, 7, 8, 9, 10, 13, 15]
// 期望结果：["2-4", "7-10", 13, 15]

const merge = (arr) => {
    const lens = arr.length;
    if (lens == 1) return [arr[0]];
    const result = []
    let prev = 0, next = 1;
    while (prev < lens) {
        const diffIndex = next - prev;
        if (arr[prev] + diffIndex === arr[next]) { // 连续
            next++;
        } else { // 不连续
            if (diffIndex === 1) { // 单个
                result.push(arr[prev]);
            } else {
                result.push(`${arr[prev]}-${arr[next - 1]}`)
            }
            prev = next;
            next++;
        }
    }
    return result;
}
const arr = [2, 3, 4, 7, 8, 9, 10, 13, 15]
console.log(merge(arr))
