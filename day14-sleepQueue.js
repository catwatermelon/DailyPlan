// 实现一个 new Queue 类
// new Queue()
// .task(1000,()=>console.log(1))
// .task(2000,()=>console.log(2))
// .task(3000,()=>console.log(3)).start();
// 实现一个Queue函数，调用start之后，1s后打印1，接着再过2s后打印2，然后再过3s后打印3

class Queue {
    constructor() {
        this.queue = [];
    }
    sleep(delay, callback) {
        return () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    callback();
                    resolve();
                }, delay);
            })
        }
    }
    task(delay, callback) {
        this.queue.push(this.sleep(delay, callback));
        return this;
    }
    start() {
        if (!this.queue || !this.queue.length) return;
        this.queue.shift()().then(() => {
            this.start();
        })
    }
}

new Queue()
    .task(1000, () => console.log(1))
    .task(2000, () => console.log(2))
    .task(3000, () => console.log(3)).start()