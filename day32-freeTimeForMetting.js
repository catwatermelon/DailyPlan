// 寻找合适开会的时间

// [start, end]含有0～24的整数，意味着当前时间段已经有安排。
// 以下是组员全员的安排表。
// [
//   [[13,15], [11,12], [10,13]], //成员1的安排
//   [[8, 9]], //成员2的安排
//   [[13, 18]] //成员3的安排
// ]
// 请实现一个findMeetingSlots()来查找全员都有空的时间段。

// 上述的例子的话，需要返回如下时间段：
// [[0,8],[9,10],[18,24]]

// 补充
// 传入的时间段并没有事先排序
// 即使是一个人的安排，也有可能出现时间段的重复

const plans = [
  [[13, 15], [11, 12], [10, 13]], //成员1的安排
  [[8, 9]], //成员2的安排
  [[13, 18], [14, 20], [21, 22]] //成员3的安排
]
const findMeetingSlots = (planTimes) => {
  const schedule = new Array(24).fill(0);
  planTimes.flat(1).forEach(item => {
    schedule.fill(1, item[0], item[1]);
  })
  let start = 0, end = 0, lens = schedule.length, result = [];
  while (end < lens) {
    if (schedule[start] === 1 && schedule[end] === 0) { // [1,0], reset start index, incre end
      start = end;
      end++;
      continue;
    }
    if (schedule[end] === 1) { // meet end tag
      if (schedule[start] === 0) { // [0, ..., 1]
        result.push([start, end]);
      }
      start = end; // [0, ..., 1] [1, ..., 1], update start index
    }
    end++;
  }
  if (end === lens && end - start >= 1) {
    result.push([start, end]);
  }
  return result;
}

console.log(findMeetingSlots(plans));
