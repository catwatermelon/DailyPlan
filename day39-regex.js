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