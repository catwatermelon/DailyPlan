/**
 * @description: (字节、滴滴)根据传入的姓名权重信息，返回随机的姓名（随机概率依据权重）
 * @param {Array} person
 * @returns {String} personName 姓名
 */
// var getPersonName = function (personValue) {
//     ...
// }

const person = [
    {
        name: '张三',
        weight: 1
    },
    {
        name: '李四',
        weight: 10
    },
    {
        name: '王五',
        weight: 100
    }
]

const getPersonName = (persons) => {
    // 计算总的权重，并标记区间
    const totalWeight = persons.reduce((pre, cur) => {
        cur.startW = pre;
        return cur.endW = cur.weight + pre
    }, 0)
    const num = Math.random() * totalWeight; // 获得一个 0 - totalWeight 的随机数
    let person = persons.find(item => item.startW < num && num <= item.endW);
    return person.name;
}

function getResult(count) {
    const res = {}
    for (let i = 0; i < count; i++) {
        const name = getPersonName(person)
        res[name] = res[name] ? res[name] + 1 : 1
    }
    return res;
}

console.log(getResult(100));
