// 1. 快排
// ① 选择一个基点（一般是最后一个元素）
// ② 然后遍历arr， 找出这个基点数的比它大的数组集合和比它小的数组集合
// ③ 递归此步骤
const quickSort = (arr) => {
    if(arr.length < 2) return arr;
  
    let left = [], right = [], base = arr.slice(-1)[0];
    for(let i=0; i<arr.length - 1; ++i) {
      if(arr[i] >= base) {
        right.push(arr[i]);
      } else {
        left.push(arr[i])
      }
    }
  
    return quickSort(left).concat(base, quickSort(right))
  }
  
  let arr = [2,3,1,5,4,6];
  console.log(quickSort(arr));

// 2. 