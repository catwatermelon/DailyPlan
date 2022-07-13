// 实现一个LazyMan，可以按照以下方式调用:

// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

class LazyMan {
    constructor(name) {
        this.tasks = [];
        const task = () => {
            console.log(`Hi This is ${name}`);
            this.next();
        }
        this.tasks.push(task);
        setTimeout(() => {
            // 把 this.next() 放到调用栈清空之后执行
            this.next();
        }, 0);
    }
    next() {
        const task = this.tasks.shift();
        task && task();
    }
    eat(food) {
        const task = () => {
            console.log(`Eat ${food}`);
            this.next();
        }
        this.tasks.push(task);
        return this;
    }
    sleep(delay) { // 延迟下一个
        this._sleepWrapper(delay, false);
        return this;
    }
    sleepFirst(delay) { // 让第一个task进行延迟
        this._sleepWrapper(delay, true);
        return this;
    }
    _sleepWrapper(delay, isFirst) {
        const task = () => {
            setTimeout(() => {
                console.log(`Wake up after ${delay}`);
                this.next();
            }, delay * 1000);
        };
        if (isFirst) {
            this.tasks.unshift(task);
        } else {
            this.tasks.push(task);
        }
    }
}

// let lz = new LazyMan('Hank');
// let lz2 = new LazyMan('Hank').sleep(10).eat('dinner');
// let lz3 = new LazyMan('Hank').eat('dinner').eat('supper');
let lz4 = new LazyMan('Hank').eat('supper').sleepFirst(5);
