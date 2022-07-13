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