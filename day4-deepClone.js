// 数组和对象的深克隆，解决循环引用

const deepClone = (target, cache = new Map()) => {
  const isObject = (obj) => typeof obj === 'object' && obj !== null

  if (isObject(target)) {
    // 解决循环引用（返回已克隆对象）
    if(cache.has(target)) {
        return cache.get(target);
    }

    let cloneTarget = Array.isArray(target) ? [] : {}

    cache.set(target, cloneTarget)

    for (const key in target) {
      const value = target[ key ] 
      cloneTarget[ key ] = isObject(value) ? deepClone(value, cache) : value
    }
    return cloneTarget
  } else {
    return target
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: {
      child: 'child'
  },
  field4: [2, 4, 8],
  f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
};

target.target = target;

console.time();
const result = deepClone(target);
console.log(result)
console.timeEnd();

