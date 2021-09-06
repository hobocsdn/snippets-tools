/*处理 时间函数*/

let isDate = (date) => {
    return date instanceof Date || Object.prototype.toString.call(date) === '[object Date]';
};
const patternLetters = {
    yyyy: 'getFullYear',
    yy: (date) => {
        return ('' + date.getFullYear()).slice(2)
    },
    y: 'yy',

    MM: (date) => {
        let m = date.getMonth() + 1
        return m < 10 ? '0' + m : m
    },
    M: (date) => {
        return date.getMonth() + 1
    },

    dd: (date) => {
        let d = date.getDate()
        return d < 10 ? '0' + d : d
    },
    d: 'getDate',

    HH: (date) => {
        let h = date.getHours()
        return h < 10 ? '0' + h : h
    },
    H: 'getHours',
    hh: (date) => {
        let h = date.getHours() % 12
        return h < 10 ? '0' + h : h
    },
    h: (date) => {
        return date.getHours() % 12
    },

    mm: (date) => {
        let m = date.getMinutes()
        return m < 10 ? '0' + m : m
    },
    m: 'getMinutes',

    ss: (date) => {
        let s = date.getSeconds()
        return s < 10 ? '0' + s : s
    },
    s: 'getSeconds',

    SS: (date) => {
        var ms = date.getMilliseconds()
        return ms < 10 && '00' + ms || ms < 100 && '0' + ms || ms
    },
    S: 'getMilliseconds',

    A: (date) => {
        return date.getHours() < 12 ? 'AM' : 'PM'
    },
    a: (date) => {
        return date.getHours() < 12 ? 'am' : 'pm'
    },
    T: 'getTime'
}

const _rformat = new RegExp((function () {
    var re = []
    for (var i in patternLetters) re.push(i)
    return '(' + re.join('|') + ')'
})(), 'g')

const defaultInvalidDate = 'Invalid date';

class Moment {
    /**
     * 
     * @param {*} date 
     * @param {*} format 
     */
    constructor(date, format) {
        if (isDate(date)) {
            this._d = date;
            this._f = format;
        } else {
            this._d = new Date(date)
        }
    }
    format(format = "yyyy-MM-dd HH:mm:ss") {
        let date = this._d;
        if (!isDate(date)) {
            return defaultInvalidDate;
        }
        return format.replace(_rformat, function creatNewSubString($0, flag) {
            return typeof patternLetters[flag] === 'function' ? patternLetters[flag](date) :
                patternLetters[flag] in patternLetters ? creatNewSubString($0, patternLetters[flag]) :
                date[patternLetters[flag]]()
        })
    }
    date(format = "yyyy-MM-dd") {
        return this.format(format);
    }
    time(format = "HH:mm:ss") {
        return this.format(format);
    }
    datetime(format = "yyyy-MM-dd HH:mm:ss") {
        return this.format(format);
    }
    now(unit = '', format = "yyyy-MM-dd HH:mm:ss") {
        // 返回当前的日期和时间字符串。
        if (arguments.length === 1) {
            // now(format)
            if (!/year|month|day|hour|minute|second|week/.test(unit)) {
                format = unit
                unit = ''
            }
        }
        unit = unit.toLowerCase()
        var date = new Date()
        switch (unit) {
            case 'year':
                date.setMonth(0)
            case 'month':
                date.setDate(1)
            case 'week':
            case 'day':
                date.setHours(0)
            case 'hour':
                date.setMinutes(0)
            case 'minute':
                date.setSeconds(0)
            case 'second':
                date.setMilliseconds(0)
        }
        switch (unit) {
            case 'week':
                date.setDate(date.getDate() - date.getDay())
        }

        return this.format(date, format)
    }
    toDate(date) {
        return new Date(this.valueOf());
    }
    valueOf() {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }
}
// let extend = (...args) => {
//     Object.assign(...args)
// }
let monent = (...args) => {
    return new Moment(...args);
}
export default monent