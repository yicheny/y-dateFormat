
## 介绍
toDate接受参数(一般是数字或字符串)将其转换为ES标准日期对象。

toDate返回值：
- 正常返回`Date`对象
- 异常返回`null`

提供了预置参数的一些API，有以下转换方法：
- `timestampToDate` : 参数是时间戳
- `dateStringToDate` : 参数是原生可以识别的日期字符形式
- `str14ToDate` : 14位字符串
- `num14ToDate` : 14位数字
- `str8ToDate` : 8位字符串
- `num8ToDate` : 8位数字

## 项目中使用
```js
import {toDate} from 'rootnet-core/dateFormat';//注意，不是format是dateFormat！

const { timestampToDate} = toDate;
timestampToDate(100)
```

## 实例演示

<!--RunCode-->

```js
const { timestampToDate, dateStringToDate, str14ToDate, num14ToDate, str8ToDate,num8ToDate } = toDate;

//推荐写法——优点是预置参数，写法简洁，而且函数名也有其规律，更容易看懂
console.log(timestampToDate(100));//时间戳
console.log(dateStringToDate('2020-10-10 11:11:11'));//dateString --原生可以识别的日期字符形式
console.log(str14ToDate('20201010111111'));
console.log(num14ToDate(20201010111111));
console.log(str8ToDate('20201010'));
console.log(num8ToDate(20201010));
```

<!--/RunCode-->

## 一些其他用法
```js
//其他写法
console.log(toDate.timestampToDate(100));//本质和上面是一样的，不过少了一步解构
console.log(toDate('timestamp',100));
console.log(toDate('timestamp')(100));
```
