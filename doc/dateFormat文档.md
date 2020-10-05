
## 介绍
dateFormat方法接受两个参数:
- `format`： 指定返回的形式`{String}`
- `date`： 原生日期对象`{Date}`

目前支持以下`format`：（具体返回形式详见下面的实例演示）
- `'YYYY-MM-DD'`
- `'HH:MM:SS'`
- `'YYYY-MM-DD HH:MM:SS'`
- `'YYYY'`
- `'YYYYMM'`
- `'YYYYMMDD'`
- `'YYYYMMDDHHMMSS'`
- `'YYYY-W'`
- `'base-now'`

## 实例演示
<!--RunCode-->

```js
const now = new Date();

console.log(dateFormat('YYYY-MM-DD',now));
console.log(dateFormat('HH:MM:SS',now));
console.log(dateFormat('YYYY-MM-DD HH:MM:SS',now));
console.log(dateFormat('YYYY',now));
console.log(dateFormat('YYYYMM',now));
console.log(dateFormat('YYYYMMDD',now));
console.log(dateFormat('YYYYMMDDHHMMSS',now));
console.log(dateFormat('YYYY-W',now));
console.log(dateFormat('base-now',now));
```

<!--/RunCode-->

## 关于预置参数
`dateFormat`考虑到之前的转换函数起名有些随意，很难通过名称看出这个函数的转换意图【参数和返回值都很难确定】，所以使用`dateFormat`它的`format`参数很关键，我们期望通过`format`来表达意图。

`dateFormat`只接受标准日期对象作为日期参数，如果不是，可以借助`toDate`方法得到标准日期对象

`dateFormat`的`format`很关键，因为我们通过`format`判断返回的字符串形式。考虑到可读性并没有提供内置参数，提供和`toDate`类似的API。

不过实际上`dateFormat`是支持内置化的参数的，你可以这么用：
```js
const format_year_str4 = dateFormat('YYYY');//这个变量名是可以随意命名的，比如format_year_str4

console.log(format_year_str4(date1));
console.log(format_year_str4(date2));
console.log(format_year_str4(date3));
console.log(format_year_str4(date4));
```
虽然从写法上来说这种写法更简洁一些，而且修改的时候可能会更方便一些，但是从可读性会有所下降，因此并不推荐。

没有内置化参数的主要原因是没有想到合适的描述含义的函数名称，为了可读性考虑，所以没有添加。