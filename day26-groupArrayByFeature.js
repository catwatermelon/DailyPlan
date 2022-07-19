// 数组分组,将传入的数据按指定特征进行分组。
// 输入: 数组值，函数或者属性
// 输出: 对象
//      key: 数组所有元素经过处理后的值
//      value: 相同key的数组元素集合
/**
   groupBy([6.1, 4.2, 6.3], Math.floor);
   // { 4: [4.2], 6: [6.1, 6.3] }
   groupBy(['one', 'two', 'three'], 'length');
   // { 3: ['one', 'two'], 5: ['three'] }
*/

const groupBy = (arr, feature) => {
    return arr.reduce((f, c) => {
        const key = typeof feature === 'function' ? feature(c) : c[feature];
        if (!f[key]) f[key] = [];
        f[key].push(c);
        return f;
    }, {});
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(['one', 'two', 'three'], 'length'));