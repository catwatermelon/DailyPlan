// 1. 数组扁平化
const flatten = (arr) => {
    return arr.reduce((f, c) => {
        return f.concat(Array.isArray(c) ? flatten(c) : c);
    }, []);
}

const flatten2 = (arr) => {
    return arr.reduce((f, c) => {
        return Array.isArray(c) ? [...f, ...flatten(c)] : [...f, c];
    }, []);
}

const flatten3 = (arr) => {
    while(arr.some(item=>Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

// 2. 原生flat，可指定深度
const flat = (arr, depth) => {
    if(!Array.isArray(arr) || depth <= 0) return arr;

    return arr.reduce((f, c) => {
        return f.concat(flat(c, depth - 1));
    }, [])
}
function _flat(arr, depth) {
    if(!Array.isArray(arr) || depth <= 0) {
        return arr;
    }
    return arr.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
        return prev.concat(_flat(cur, depth - 1))
        } else {
        return prev.concat(cur);
        }
    }, []);
}
let arr = [1, [2, [3, 4, 5]]];
let arr2 = [1,2,3,4,[2,3,[4,5,6,[7,8],112,[192]]],5,6,7,8];
console.log(flatten3(arr2));
