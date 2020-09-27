const assert = require('chai').assert;
const dateFormat = require('../src/dateFormat.js');

const mockDate = new Date('2020-10-10 11:11:11');
const mockDate2 = new Date('1888-01-01 13:01:33');
const mockDate3 = new Date('2888-1-3 1:1:3');

describe('dateFormat', function () {
    it('不传或只传一个参数，结果是函数', function () {
        assert.isFunction(dateFormat());
        assert.isFunction(dateFormat(''))
        assert.isFunction(dateFormat('abc'))
        assert.isFunction(dateFormat(1))
        assert.isFunction(dateFormat(null))
        assert.isFunction(dateFormat(undefined))
        assert.isFunction(dateFormat(true))
        assert.isFunction(dateFormat(false))
        assert.isFunction(dateFormat({}))
        assert.isFunction(dateFormat([]))
        assert.isFunction(dateFormat(mockDate))
    })

    it('参数f必须是指定字符串，否则返回值是-', function () {
        assert.strictEqual('-', dateFormat('', mockDate));
        assert.strictEqual('-', dateFormat('abc', mockDate));
        assert.strictEqual('-', dateFormat(123, mockDate));
        assert.strictEqual('-', dateFormat([], mockDate));
        assert.strictEqual('-', dateFormat({}, mockDate));
        assert.strictEqual('-', dateFormat(mockDate, mockDate));
        assert.strictEqual('-', dateFormat(null, mockDate));
        assert.strictEqual('-', dateFormat(undefined, mockDate));
        assert.strictEqual('-', dateFormat(true, mockDate));
        assert.strictEqual('-', dateFormat(false, mockDate));
        assert.strictEqual('2020-10-10 11:11:11', dateFormat('YYYY-MM-DD HH:MM:SS', mockDate));
        assert.strictEqual('2020-10-10', dateFormat('YYYY-MM-DD', mockDate));
        assert.strictEqual('11:11:11', dateFormat('HH:MM:SS', mockDate));
    })

    it('参数d必须是日期类型，否则返回值是-', function () {
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', ''));
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', 'abc'));
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', 1));
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', null));
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', undefined));
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', true));
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', false));
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', []));
        assert.strictEqual('-', dateFormat('YYYY-MM-DD HH:MM:SS', {}));
        assert.strictEqual('2020-10-10 11:11:11', dateFormat('YYYY-MM-DD HH:MM:SS', mockDate));
    })

    it('测试YYYY-MM-DD HH:MM:SS', function () {
        assert.strictEqual('2020-10-10 11:11:11', dateFormat('YYYY-MM-DD HH:MM:SS', mockDate));
        assert.strictEqual('1888-01-01 13:01:33', dateFormat('YYYY-MM-DD HH:MM:SS', mockDate2));
        assert.strictEqual('2888-01-03 01:01:03', dateFormat('YYYY-MM-DD HH:MM:SS', mockDate3));
    })

    it('测试YYYY-MM-DD HH:MM:SS柯里化用法', function () {
        const format = dateFormat('YYYY-MM-DD HH:MM:SS');
        assert.strictEqual('2020-10-10 11:11:11', format(mockDate))
        assert.strictEqual('1888-01-01 13:01:33', format(mockDate2))
        assert.strictEqual('2888-01-03 01:01:03', format(mockDate3))
    })

    it('测试YYYY-MM-DD', function () {
        assert.strictEqual('2020-10-10', dateFormat('YYYY-MM-DD', mockDate));
        assert.strictEqual('1888-01-01', dateFormat('YYYY-MM-DD', mockDate2));
        assert.strictEqual('2888-01-03', dateFormat('YYYY-MM-DD', mockDate3));
    })

    it('测试YYYY-MM-DD柯里化用法', function () {
        const format = dateFormat('YYYY-MM-DD');
        assert.strictEqual('2020-10-10', format(mockDate));
        assert.strictEqual('1888-01-01', format(mockDate2));
        assert.strictEqual('2888-01-03', format(mockDate3));
    })

    it('测试HH:MM:SS', function () {
        assert.strictEqual('11:11:11', dateFormat('HH:MM:SS', mockDate));
        assert.strictEqual('13:01:33', dateFormat('HH:MM:SS', mockDate2));
        assert.strictEqual('01:01:03', dateFormat('HH:MM:SS', mockDate3));
    })

    it('测试HH:MM:SS柯里化用法', function () {
        const format = dateFormat('HH:MM:SS');
        assert.strictEqual('11:11:11', format(mockDate));
        assert.strictEqual('13:01:33', format(mockDate2));
        assert.strictEqual('01:01:03', format(mockDate3));
    })

    it('测试YYYY', function () {
        const format = dateFormat('YYYY');
        assert.strictEqual('2020', format(mockDate));
        assert.strictEqual('1888', format(mockDate2));
        assert.strictEqual('2888', format(mockDate3));
    })

    it('测试YYYYMM', function () {
        const format = dateFormat('YYYYMM');
        assert.strictEqual('202010', format(mockDate));
        assert.strictEqual('188801', format(mockDate2));
        assert.strictEqual('288801', format(mockDate3));
    })

    it('测试YYYYMMDD', function () {
        const format = dateFormat('YYYYMMDD');
        assert.strictEqual('20201010', format(mockDate));
        assert.strictEqual('18880101', format(mockDate2));
        assert.strictEqual('28880103', format(mockDate3));
    })

    it('测试YYYYMMDDHHMMSS', function () {
        const format = dateFormat('YYYYMMDDHHMMSS');
        assert.strictEqual('20201010111111', format(mockDate));
        assert.strictEqual('18880101130133', format(mockDate2));
        assert.strictEqual('28880103010103', format(mockDate3));
    })

    it('测试YYYY-W', function () {
        const format = dateFormat('YYYY-W');
        assert.strictEqual('2020-41周', format(mockDate));
        assert.strictEqual('1888-1周', format(mockDate2));
        assert.strictEqual('2888-1周', format(mockDate3));
    })

    it('测试base-now', function () {
        const format = dateFormat('base-now');  
        const timeFormat = dateFormat('HH:MM:SS');
        const now = new Date();
        const yesterday = new Date(now.getTime() - 86400000);
        assert.strictEqual('2020-10-10 11:11:11', format(mockDate));
        assert.strictEqual('1888-01-01 13:01:33', format(mockDate2));
        assert.strictEqual('2888-01-03 01:01:03', format(mockDate3));
        assert.strictEqual(`今天 ${timeFormat(now)}`, format(now));
        assert.strictEqual(`昨天 ${timeFormat(yesterday)}`, format(yesterday));
    })
})