// LRU 的实现
// least recently usd(最近最少使用页面置换算法

// 1. Map 实现
class LRUCache {
    constructor(capacity = 10) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    put(key, value) {
        // 已经存在的情况下，更新其位置到”最新“即可
        // 先删除，后插入
        if(this.cache.has(key)) {
            this.cache.delete(key);
        } else {
            // 插入数据前先判断，size是否符合capacity
            // 已经>=capacity，需要把最开始插入的数据删除掉
            // keys()方法得到一个可遍历对象,执行next()拿到一个形如{ value: 'xxx', done: false }的对象
            if(this.cache.size >= this.capacity) {
                this.cache.delete(this.cache.keys().next().value);
            }
        }
        this.cache.set(key, value);
    }

    get(key) {
        if(this.cache.has(key)) {
            const value = this.cache.get(key);
            // 更新位置
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return -1;
    }
}

// 2. 对象 + 数组
const removeKeys = (arr, key) => {
    const index = arr.indexOf(key);
    index > -1 && arr.splice(index, 1);
}
class LRUCache2 {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = {};
        this.keys = []
    }

    put(key, value) {
        if(this.cache[key]) {
            // 存在的时候更新值
            this.cache[key] = value;
            // 更新位置
            removeKeys(this.keys, key);
            this.keys.push(key);
        } else {
            this.keys.push(key);
            this.cache[key] = value;
            if(this.keys.length > this.capacity) {
                const delKey = this.keys[0];
                this.cache[delKey] = null;
                removeKeys(this.keys, delKey);
            }
        }
    }

    get(key) {
        if(this.cache[key]) {
            // 更新新鲜度
            removeKeys(this.keys, key);
            this.keys.push(key);
            return this.cache[key];
        }
        return -1;
    }
}

const lRUCache = new LRUCache2(2)

console.log(lRUCache.put(1, 1)) // 缓存是 {1=1}
console.log(lRUCache.put(2, 2)) // 缓存是 {1=1, 2=2}
console.log(lRUCache.get(1))    // 返回 1
console.log(lRUCache.put(3, 3)) // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache.get(2))    // 返回 -1 (未找到)
console.log(lRUCache.put(4, 4)) // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache.get(1) )   // 返回 -1 (未找到)
console.log(lRUCache.get(3))    // 返回 3
console.log(lRUCache.get(4) )   // 返回 4