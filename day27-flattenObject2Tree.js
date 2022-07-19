// 平铺属性的数据结构转换为树状数据结构
let entry = {
    "a.b.c.dd": "abcdd",
    "a.d.xx": "adxx",
    "a.e": "ae",
};

// 要求转换成如下对象
const output = {
    a: {
        b: {
            c: {
                dd: "abcdd",
            },
        },
        d: {
            xx: "adxx",
        },
        e: "ae",
    },
};

// 遍历
const flatten2tree = (obj) => {
    const result = {};
    for (let keyPathStr in obj) {
        let tempObj = result;
        const paths = keyPathStr.split('.');
        for (let i = 0; i < paths.length - 1; ++i) {
            const key = paths[i];
            if (tempObj[key] === void 0) {
                tempObj[key] = {}
            }
            tempObj = tempObj[paths[i]];
        }
        tempObj[paths[paths.length - 1]] = obj[keyPathStr];
    }
    return result;
}

console.log(JSON.stringify(flatten2tree(entry)));
