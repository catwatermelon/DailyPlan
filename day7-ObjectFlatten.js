// 实现一个对象的 flatten 方法

// const obj = {
//    a: {
//            b: 1,
//            c: 2,
//            d: {e: 5}
//        },
//     b: [1, 3, {a: 2, b: 3}],
//     c: 3
//    }

//    flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }

function isObject(val) {
    return typeof val === "object" && val !== null;
}
const flatten = (obj) => {
    if (!isObject(obj)) return new TypeError('must accept an Object');
    const res = {}
    const dfs = (target, prefix) => {
        if (isObject(target)) {
            for (let key in target) {
                let suffix = Array.isArray(target) ? `[${key}]` : (prefix && '.') + key;
                dfs(target[key], prefix + suffix);
            }
        } else {
            res[prefix] = target;
        }

    }
    dfs(obj, '');
    return res;
}

const obj = {
    a: {
        b: 1,
        c: 2,
        d: { e: 5 }
    },
    b: [1, 3, { a: 2, b: 3 }],
    c: 3
}

console.log(flatten(obj));