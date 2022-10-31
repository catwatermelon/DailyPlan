// 实现一个 JSONP 
// jsonp({
//     url: 'url',
//     data: {
//         key1: 'value1'
//     },
//     callback(data) {
//         // data 是服务端返回的数据  
//     }
// })

function objectToQuery(obj) {
    const arr = [];
    for (var i in obj) {
        arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
    }
    return arr.join('&');
}

const jsonp = ({ url, data, callback }) => {
    const head = document.querySelector('head');
    const fn = `jsonp_${Date.now()}`;
    const script = document.createElement('script');
    script.src = `${url}?${objectToQuery(data)}&callback=${fn}`;
    head.appendChild(script);

    // 清除
    window[fn] = (data) => {
        callback && callback(data);
        head.removeChild(script);
        delete window[fn];
    }

    // 异常处理
    script.onerror = function () {
        window[fn] = function () {
            callback && callback('something error hanppend!')
            head.removeChild(script);
            delete window[fn];
        }
    }
}