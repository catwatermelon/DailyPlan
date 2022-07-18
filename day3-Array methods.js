// map
Array.prototype.myMap = (cb) => {
    if(typeof cb != 'function') throw new TypeError('must accept a function as parameter')
    let arr = [];
    console.log(this);
    for(let i=0, lens = this.length; i<lens; ++i) {
        arr.push(cb(this[i], i, this));
    }
    return arr;
};

let mapArr = [1,2,3,4,5];
let mapResult = mapArr.myMap(i=>i*2)
console.log(mapResult);

Array.prototype.myReduce = (cb, initialValue) => {
    if(typeof cb != 'function') throw new TypeError('must accept a function as parameter')
    let pre = initialValue, i = 0;
    if(typeof pre == void 0) { // 没有传初始值
        pre = this[0];
        i = 1;
    }
    while(i < this.length) {
        if(i in this) {
            pre = cb(pre, this[i], i, this);
        }
        i++;
    }
    return pre;
}

const sum = [1,2,3,4].myReduce((f, c) => f+c);
console.log(sum)