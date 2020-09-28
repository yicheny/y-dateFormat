const assert = require('chai').assert;
const { timestampToDate, dateStringToDate, str14ToDate, num14ToDate, str8ToDate,num8ToDate } = require('../src/toDate.js');

describe('toDate', function () {
    it('测试timestampToDate', function () {
        //有效
        assert.instanceOf(timestampToDate(100), Date)
        assert.instanceOf(timestampToDate(0), Date)
        assert.instanceOf(timestampToDate(-100), Date)

        assert.isFunction(timestampToDate());

        //无效日期
        assert.strictEqual(timestampToDate(10000000000000000), null);
        assert.strictEqual(timestampToDate(''), null);
        assert.strictEqual(timestampToDate('a'), null);
        assert.strictEqual(timestampToDate(true), null);
        assert.strictEqual(timestampToDate(false), null);
        assert.strictEqual(timestampToDate(null), null);
        assert.strictEqual(timestampToDate(undefined), null);
        assert.strictEqual(timestampToDate([]), null);
        assert.strictEqual(timestampToDate({}), null);
    })

    it('测试dateStringToDate', function () {
        assert.instanceOf(dateStringToDate('2020-09-27T07:26:03.902+0000'), Date)
        assert.instanceOf(dateStringToDate('2020-09-11 11:11:11'), Date)

        assert.isFunction(dateStringToDate());

        assert.strictEqual(dateStringToDate('xxx'), null);
        assert.strictEqual(dateStringToDate(1), null);
        assert.strictEqual(dateStringToDate(false), null);
        assert.strictEqual(dateStringToDate(true), null);
        assert.strictEqual(dateStringToDate(null), null);
        assert.strictEqual(dateStringToDate(undefined), null);
        assert.strictEqual(dateStringToDate([]), null);
        assert.strictEqual(dateStringToDate({}), null);
    })

    it('测试str14ToDate', function () {
        assert.instanceOf(str14ToDate('20200101020202'), Date);
        assert.instanceOf(str14ToDate(20200101020202), Date);

        assert.isFunction(str14ToDate());

        assert.strictEqual(str14ToDate(''), null);
        assert.strictEqual(str14ToDate('a'), null);
        assert.strictEqual(str14ToDate(1), null);
        assert.strictEqual(str14ToDate(false), null);
        assert.strictEqual(str14ToDate(true), null);
        assert.strictEqual(str14ToDate(null), null);
        assert.strictEqual(str14ToDate(undefined), null);
    })

    it('测试num14ToDate', function () {
        assert.instanceOf(num14ToDate('20200101020202'), Date);
        assert.instanceOf(num14ToDate(20200101020202), Date);

        assert.isFunction(num14ToDate());

        assert.strictEqual(num14ToDate(''), null);
        assert.strictEqual(num14ToDate('a'), null);
        assert.strictEqual(num14ToDate(1), null);
        assert.strictEqual(num14ToDate(false), null);
        assert.strictEqual(num14ToDate(true), null);
        assert.strictEqual(num14ToDate(null), null);
        assert.strictEqual(num14ToDate(undefined), null);
    })

    it('测试str8ToDate', function () {
        assert.instanceOf(str8ToDate('20200101'), Date);
        assert.instanceOf(str8ToDate(20200101), Date);

        assert.isFunction(str8ToDate());

        assert.strictEqual(str8ToDate(''), null);
        assert.strictEqual(str8ToDate('a'), null);
        assert.strictEqual(str8ToDate(1), null);
        assert.strictEqual(str8ToDate(false), null);
        assert.strictEqual(str8ToDate(true), null);
        assert.strictEqual(str8ToDate(null), null);
        assert.strictEqual(str8ToDate(undefined), null);
    })

    it('测试num8ToDate', function () {
        assert.instanceOf(num8ToDate('20200101'), Date);
        assert.instanceOf(num8ToDate(20200101), Date);

        assert.isFunction(num8ToDate());

        assert.strictEqual(num8ToDate(''), null);
        assert.strictEqual(num8ToDate('a'), null);
        assert.strictEqual(num8ToDate(1), null);
        assert.strictEqual(num8ToDate(false), null);
        assert.strictEqual(num8ToDate(true), null);
        assert.strictEqual(num8ToDate(null), null);
        assert.strictEqual(num8ToDate(undefined), null);
    })
})