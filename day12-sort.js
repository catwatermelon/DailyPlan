// 1. 快排
// ① 选择一个基点（一般是最后一个元素）
// ② 然后遍历arr， 找出这个基点数的比它大的数组集合和比它小的数组集合
// ③ 递归此步骤
const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  let left = [], right = [], base = arr.slice(-1)[0];
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] >= base) {
      right.push(arr[i]);
    } else {
      left.push(arr[i])
    }
  }

  return quickSort(left).concat(base, quickSort(right))
}

let quickSortArr = [2, 3, 1, 5, 4, 6];
console.log('quickSort', quickSort(quickSortArr));

// 2. 选择排序
// ① 数组分为已排序区和未排序区
// ② 从未排序区域选出最小值，放入已排序区
// ③ 递归此步骤
function selectionSort(arr) {
  if (!arr) throw new Error('Must accept a Array');
  let minIndex, lens = arr.length;
  for (let i = 0; i < arr.length; i++) {
    minIndex = i;

    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

let selectionSortArr = [2, 3, 1, 5, 4, 6];
console.log('selectionSort', selectionSort(selectionSortArr));

// 3. 冒泡排序
// ① 比较相邻的元素，如果第一个比第二个大，就交换它们，
// ② 对每一个相邻元素做同样的工作，(1,2)(2,3)(3,4)...，一次遍历下去最后一个元素就是最大的
// ③ 重复这个步骤，除了最后一个（已排好序的）

function bubbleSort(arr) {
  if (!arr) throw new Error('Must accept a Array');
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
let bubbleSortArr = [2, 3, 1, 5, 4, 6];
console.log('bubbleSort', bubbleSort(bubbleSortArr));
