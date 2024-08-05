// ① 实现一个 Ajax
// ② 在实现的 Ajax 基础上实现调用所有请求，等到所有请求结果返回之后，再返回结果。
// ③ 在实现的 Ajax 基础上实现请求顺序调用，第一个调用成功之后，再调用第二个，以此类推


// AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。
// readyState: 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
// 0: 请求未初始化
// 1: 服务器连接已建立
// 2: 请求已接收
// 3: 请求处理中
// 4: 请求已完成，且响应已就绪


// ① 实现一个 Ajax
class HttpRequest {
    constructor() {
        if (window.XMLHttpRequest) {
            this.http = new XMLHttpRequest();
        } else {
            this.http = new ActiveXObject('Microsoft.XMLHTTP');
        }
    }
    request(method, url, data) {
        return new Promise((resolve, reject) => {
            this.http.open(method, url, true); // true表示异步
            data && this.http.send(this._format(data));
            this.http.onreadystatechange = function () {
                if (this.http.readyState === 4) {
                    if (this.http.status >= 200 && this.http.status < 300) {
                        resolve(this.http.responseText);
                    } else {
                        reject(new Error(this.http.responseText));
                    }
                }
            }
        })
    }
    _format(obj) {
        obj &&= Object(obj);
        return Object.entries(obj).reduce((f, c, i) => {
            const currentParamStr = `${c[0]}=${c[1]}`;
            return i == 0 ? f + currentParamStr : `&${f}${currentParamStr}`;
        }, '')
    }

    // ② 在实现的 Ajax 基础上实现调用所有请求，等到所有请求结果返回之后，再返回结果。
    requestAllSettle(requests) { // Promise.allSettle
        return new Promise((resolve, reject) => {
            const result = [];
            let cnt = 0;
            const processData = (data, index) => {
                result[index] = data;
                cnt++;
                if (cnt == requests.lenth) {
                    resolve(result);
                }
            }
            requests.forEach((r, i) => {
                if(r instanceof Promise) {
                    r.then((res) => {
                        processData(res, i);
                    }).catch(err => {
                        processData(err, i);
                    })
                } else {
                    processData(r, i);
                }
            })
        })
    }

    // ③ 在实现的 Ajax 基础上实现请求顺序调用，第一个调用成功之后，再调用第二个，以此类推
    queueRequest(requests) {
        return new Promise((resolve) => {
            const result = [];
            const start = () => {
                if(!requests || !requests.length) return resolve(result);
                requests.shift().then(res=>{
                    result.push(res);
                }).catch(err=>{
                    result.push(err);
                }).finally(() => {
                    start();
                });
            }
            start();
        })
    }
}