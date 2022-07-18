// 实现一个 EventEmitter，具有 on|off|emit|once 方法

class EventEmitter {
    constructor() {
        this.event = {};
    }

    on(type, callback) {
        if (!this.event[type]) {
            this.event[type] = [callback];
            return;
        }
        this.event[type].push(callback);
    }

    off(type, callback) {
        if (!this.event[type]) return;
        if(callback == void 0) { // 如果没有传 callback 的话，退订整个类型的事件
            delete this.event[type];
        } else {
            this.event[type] = this.event[type].filter(fn => fn !== callback);
        }
    }

    emit(type, ...args) {
        this.event[type] && this.event[type].forEach(cb => cb(...args));
    }

    once(type, callback) {
        if (!this.event[type]) return;

        const wrapFunc = (...args) => {
            callback(...args)
            this.off(type, wrapFunc);
        }
        this.on(type, wrapFunc);
    }
}

// 测试
const e1 = new EventEmitter()
const e1Callback1 = (name, sex) => {
    console.log(name, sex, 'evt1---callback1')
}
const e1Callback2 = (name, sex) => {
    console.log(name, sex, 'evt1---callback2')
}
const e1Callback3 = (name, sex) => {
    console.log(name, sex, 'evt1---callback3')
}

e1.on('evt1', e1Callback1)
e1.on('evt1', e1Callback2)
e1.once('evt1', e1Callback3)
e1.emit('evt1', 'CatWatermelon', 'boy')
console.log('------尝试删除e1Callback1------')
e1.off('evt1', e1Callback1)
e1.emit('evt1', 'CatWatermelon', 'boy')
