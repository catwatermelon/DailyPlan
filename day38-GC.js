// 添加原生事件如果不移除为什么会内存泄露？

var button = document.getElementById('button');
function onClick(event) {
button.innerHTML = 'text';
}
button.addEventListener('click', onClick);

// 给元素button添加了一个事件处理器onClick, 而处理器里面使用了button的引用。而老版本的 IE 是无法检测 DOM 节点与 JavaScript 代码之间的循环引用，因此会导致内存泄漏。
// 如今，现代的浏览器（包括 IE 和 Microsoft Edge）使用了更先进的垃圾回收算法，已经可以正确检测和处理循环引用了。换言之，回收节点内存时，不必非要调用 removeEventListener 了。


