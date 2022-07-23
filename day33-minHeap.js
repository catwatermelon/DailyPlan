// 堆是一种特殊的 完全二叉树 ，完全二叉树意味着每个节点都有两个孩子节点。
// 最大堆：所有的节点都 大于等于≥ 它的子节点；
// 最小堆：所有的节点都 小于等于≤ 它的子节点。

// JS 通常用数组来表示堆。
// 左侧节点的位置是 2*index+1 。
// 右侧节点的位置是 2*index+2 。
// 父节点位置是 (index - 1) / 2 。

// 堆能够高效、快速地找出最大值和最小值，时间复杂度 O(1) 。
// 在开发中，有时候我们可能会想要找到一个数组中的最大或者最小元素，而堆，就可以找出第K个最大（小）元素。

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 交换位置
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    //获取父节点的位置
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // 获取左侧子节点的位置
    getLeftIndex(index) {
        return index * 2 + 1
    }

    // 获取右侧子节点的位置
    getRightIndex(index) {
        return index * 2 + 2;
    }

    // 进行上移操作
    shiftUp(index) {
        // 如果在堆的顶点处，则不进行上移操作，直接返回结果
        if (index === 0) return;
        // 获取父节点(即获取当前节点的父节点的值，且每个节点的父节点只有一个)
        const parentIndex = this.getParentIndex(index);
        // 判断如果堆的父节点如果大于子节点，则进行位置交换
        if (this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            // 交换完成之后，继续递归进行上移操作
            this.shiftUp(parentIndex);
        }
    }

    // 进行下移操作
    shiftDown(index) {
        // 获取左右侧子节点
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        // 对左侧结点进行交换
        if (this.heap[index] > this.heap[leftIndex]) {
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex);
        }
        // 对右侧结点进行交换
        if (this.heap[index] > this.heap[rightIndex]) {
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex);
        }
    }

    // 插入节点的值
    insert(value) {
        // 把新的值放到数组的最后一位
        const lens = this.heap.push(value);
        // 将值进行上移操作
        this.shiftUp(lens - 1);
    }

    // 删除堆顶操作
    pop() {
        // 将尾部的值赋值给堆顶
        this.heap[0] = this.heap.pop();
        // 进行下移操作
        this.shiftDown(0);
    }

    // 获取堆顶的值
    peek() {
        return this.heap[0];
    }

    // 获取堆的大小
    size() {
        return this.heap.length;
    }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
console.log(h); // MinHeap { heap: [ 2, 3 ] }
h.peek();
h.size();
console.log(h.peek()); // 2
console.log(h.size()); // 2
