// 实现一个set函数，不用关心属性存在与否
// const obj = {
//     a: {
//       b: {
//         c: [1,2,3]
//       }
//     }
//   }

//   set(obj, 'a.b.c', 'BFE')
//   console.log(obj.a.b.c) // "BFE"
//   set(obj, 'a.b.c.0', 'BFE')
//   console.log(obj.a.b.c[0]) // "BFE"


//   set(obj, ['a', 'b', 'c', '2'], 'BFE')
//   console.log(obj.a.b.c[2]) // "BFE"


//   // valid digits treated as array elements
//   set(obj, 'a.b.c[3]', 'BFE')
//   console.log(obj.a.b.c[3]) // "BFE"

//   set(obj, 'a.c.d[0]', 'BFE')
//   console.log(obj.a.c.d[0]) // "BFE"

//   set(obj, 'a.b.c[1]', 'BFE')
//   console.log(obj.a.b.c[1]) // "BFE"


//   // invalid digits treated as property string
//   set(obj, 'a.c.d.01', 'BFE')
//   console.log(obj.a.c.d['01']) // "BFE"

function set(obj, path, value) {
    path = Array.isArray(path) ? path : path.replace('[', '.').replace(']', '').split('.');
    src = obj;
    path.forEach((key, index, array) => {
        if (index == path.length - 1) {
            src[key] = value;
        } else {
            if (!src.hasOwnProperty(key)) { // if the key doesn't exist on object
                const next = array[index + 1];
                src[key] = String(Number(next)) === next ? [] : {}; // create a new object if next is item in array is not a number
            }
            src = src[key];
        }
    })
}
 
const obj = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    }
}
set(obj, 'a.b.c', 'BFE')
console.log(obj.a.b.c) // "BFE"

set(obj, 'a.b.c.0', 'BFE')
console.log(obj.a.b.c[0]) // "BFE"

set(obj, 'a.b.c[1]', 'BFE')
console.log(obj.a.b.c[1]) // "BFE"

set(obj, ['a', 'b', 'c', '2'], 'BFE')
console.log(obj.a.b.c[2]) // "BFE"

set(obj, 'a.b.c[3]', 'BFE')
console.log(obj.a.b.c[3]) // "BFE"

set(obj, 'a.c.d[0]', 'BFE')
console.log(obj.a.c.d[0]) // "BFE"

set(obj, 'a.c.d.01', 'BFE')
console.log(obj.a.c.d['01']) // "BFE"