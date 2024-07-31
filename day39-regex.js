// 正先行断言 (?=regex)

// "(T|t)he(?=\sfat)" => The fat cat sat on the mat. 匹配第一个The
// 除断言之外的表达式可以匹配两个the，加入断言后只匹配第一个The，因为其后边是  fat


// 负先行断言 (?!regex)

// "(T|t)he(?!\sfat)" => The fat cat sat on the mat. 匹配第二个the
// 筛选出不满足断言的


// 正后发断言 (?<=regex)

// "(?<=(T|t)he\s)(fat|mat)" => The fat cat sat on the mat. 匹配fat和mat
// 断言条件的位置在子正则之前


// 负后发断言 (?<!regex)

// "(?<!(T|t)he\s)(cat)" => The cat sat on cat. 匹配第二个cat



var str = 'The fat cat sat on the mat.'

const regex = /(?<!(T|t)he\s)(fat|cat)/
console.log(str.replace(regex, '---'))


// 金额千分位/(\d)(?=(\d{3})+((\.\d+)$))/g
// 这是一个复杂的正则表达式它的大致含义如下：
// (\d) ：匹配一个数字并将其捕获到分组 1 中。
// (?=(\d{3})+((\.\d+)$)) ：这是一个正向前瞻断言，它要求当前位置后面存在以下内容：
// (\d{3})+ ：一个或多个连续的三位数字。
// ((\.\d+)$) ：以一个点和至少一位数字结尾。

var str = '1234567.234';
const amontRegex = /(\d)(?=(\d{3})+((\.\d+)$))/g
console.log(str.replace(amontRegex, '$1,'));