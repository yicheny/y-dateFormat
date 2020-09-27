const _ = require('lodash');

//dateFormat :: String -> Date -> String
const dateFormat = _.curry(function (f, d) {
    if (!_.isDate(d)) return '-';

    const strategy = {
        'YYYY-MM-DD': format_day,
        'HH:MM:SS': format_time,
        'YYYY-MM-DD HH:MM:SS': format_full,
        'YYYY': format_year_str4,
        'YYYYMM': format_month_str6,
        'YYYYMMDD': format_day_str8,
        // 'HHMMSS':format_time_str6,
        'YYYYMMDDHHMMSS': format_str14,
        'YYYY-W': format_week,
        'base-now': format_base_now
    }
    return strategy[f] ? strategy[f](d) : '-';
})

const DAY_MS = 24 * 3600 * 1000;
//format_weekNum :: Date -> num
function format_weekNum(d) {
    const start = new Date(d.getFullYear(), 0, 1 - new Date(d.getFullYear(), 0, 1).getDay());
    const span = (d - start) / DAY_MS;
    const number = Math.floor(span / 7);
    return number + 1;
}

//format_week :: Date -> 'YYYY-W周'
function format_week(d) {
    return `${d.getFullYear()}-${format_weekNum(d)}周`
}

//format_year_str4 :: Date -> 'YYYY'
function format_year_str4(d) {
    return `${d.getFullYear()}`;
}

//format_month_str6 :: Date -> 'YYYYMM'
function format_month_str6(d) {
    return `${d.getFullYear()}${add0(d.getMonth() + 1)}`;
}

//format_day_str8 :: Date -> 'YYYYMMDD'
function format_day_str8(d) {
    return `${d.getFullYear()}${add0(d.getMonth() + 1)}${add0(d.getDate())}`;
}

//format_time_str6 :: Date -> 'HHMMSS'
function format_time_str6(d) {
    return `${add0(d.getHours())}${add0(d.getMinutes())}${add0(d.getSeconds())}`
}

//format_str14 :: Date -> 'YYYYMMDDHHMMSS'
function format_str14(d) {
    return `${format_day_str8(d)}${format_time_str6(d)}`
}

//format_day :: Date -> 'YYYY-MM-DD'
function format_day(d) {
    return `${d.getFullYear()}-${add0(d.getMonth() + 1)}-${add0(d.getDate())}`;
}

//format_time :: Date -> 'HH:MM:SS'
function format_time(d) {
    return `${add0(d.getHours())}:${add0(d.getMinutes())}:${add0(d.getSeconds())}`
}

//format_full :: Date -> 'YYYY-MM-DD HH:MM:SS'
function format_full(d) {
    return `${format_day(d)} ${format_time(d)}`;
}

//add0 :: n -> ('0n' | n)
function add0(x) {
    return x < 10 ? `0${x}` : x;
}

//format_base_now :: Date -> String
function format_base_now(d) {
    const now = new Date();
    const now_ms = new Date(format_day(now)).getTime();
    const d_ms = new Date(format_day(d)).getTime();
    const offset = d_ms - now_ms;
    if (offset === 0) return `今天 ${format_time(d)}`;
    if (offset === -86400000) return `昨天 ${format_time(d)}`
    return format_full(d);
}
module.exports = dateFormat;
