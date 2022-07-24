// 压缩字符串
// Input: 'aaaabbbccd'
// Output: 'a4b3c2d1', 代表a连续出现四次，b连续出现三次，c连续出现两次，d连续出现一次

// 但是面试官往往会继续深入：
// 扩展1：如果只出现一次，不编码数字，如 aaab -> a3b
// 扩展2：如果只出现两次，不进行编码，如 aabbb -> aab3
// 扩展3（解码冲突）：如果进行解码，碰到数字如何处理？

const encode = (str) => {
    const lens = str.length;
    if (lens === 0) return '';
    const result = [str[0], 1];

    for (let i = 1; i < lens; ++i) {
        const word = result.slice(-2)[0];
        if (str[i] === word) {
            result[result.length - 1]++;
        } else {
            result.push(str[i], 1);
        }
    }
    return result.join("");
}

const encode2 = (str) => {
    const lens = str.length;
    if (!lens) return '';
    let result = '', cnt = 1, curWord = str[0];
    for (let i = 1; i < lens; ++i) {
        if (str[i] === curWord) {
            cnt++;
        } else {
            result += curWord + cnt;
            curWord = str[i];
            cnt = 1;
        }
        if (i === lens - 1) {
            result += curWord + cnt;
        }
    }
    return result;
}
console.log(encode2('aaaabbbccddc'));

// 扩展1：如果只出现一次，不编码数字，如 aaab -> a3b
const encodeWithoutLess = (str, ignoreCnt = 0) => {
    const lens = str.length;
    if (lens === 0) return '';
    const result = [str[0], 1];

    for (let i = 1; i < lens; ++i) {
        const word = result.slice(-2)[0];
        if (str[i] === word) {
            result[result.length - 1]++;
        } else {
            result.push(str[i], 1);
        }
    }
    for (let i = 1; i < result.length; i += 2) {
        if (result[i] === ignoreCnt) {
            result[i] = '';
        }
    }
    return result.join("");
}

// console.log(encodeWithoutLess('aaaabbbeccddc', 2));
