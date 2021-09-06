/**
 * 返回一个随机的布尔值。
 *
 * @param {Number} min 
 * @param {Number} max 
 * @param {Number} cur 
 * @return {Boolean} 
 */
let boolean = (min, max, cur) => {
    if (cur !== undefined) {
        min = typeof min !== 'undefined' && !isNaN(min) ? parseInt(min, 10) : 1
        max = typeof max !== 'undefined' && !isNaN(max) ? parseInt(max, 10) : 1
        return Math.random() > 1.0 / (min + max) * min ? !cur : cur
    }

    return Math.random() >= 0.5
};
let boo = (min, max, cur) => {
    return boolean(min, max, cur)
};

/**
 * 返回一个[min,max]之间的随机的自然数（大于等于 0 的整数）
 *
 * @param {Number} min 区间下限
 * @param {Number} max 区间上限
 * @return {Number} 
 */
let natural = (min = 0, max = 9007199254740992) => {
    let nmax = Math.max(min, max);
    let nmin = Math.min(min, max);
    return Math.round(Math.random() * (nmax - nmin)) + nmin
}



/**
 * 返回一个随机的整数。
 *
 * @param {Number} min 区间下限
 * @param {Number} max 区间上限
 * @return {Number} 
 */
let integer = (min = -9007199254740992, max = 9007199254740992) => { // 2^53
    return Math.round(Math.random() * (max - min)) + min
}
let int = (min, max) => {
    return integer(min, max)
}

/**
 * 返回一个随机的浮点数。
 *
 * @param {Number} min 区间下限
 * @param {Number} max 区间上限
 * @param {Number} dmin 小数位个数下限
 * @param {Number} dmax 小数位个数上限
 * @return {Float} 
 */
let float = (min, max, dmin = 0, dmax = 17) => {
    dmin = Math.max(Math.min(dmin, 17), 0)
    dmax = Math.max(Math.min(dmax, 17), 0)
    let ret = [integer(min, max), '.']
    for (var i = 0, dcount = natural(dmin, dmax); i < dcount; i++) {
        // 最后一位不能为 0：如果最后一位为 0，会被 JS 引擎忽略掉。
        ret.push(
            (i < dcount - 1) ? character('number') : character('123456789')
        )
    }
    return parseFloat(ret.join(""), 10)
};


/**
 * 返回一个随机字符。
 *
 * @param {[alpha/upper/number/symbol/undefined]} pool 字符类型
 * @return {String}  
 */
let character = (pool = "all") => {
    var pools = {
        lower: 'abcdefghijklmnopqrstuvwxyz',
        upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        number: '0123456789',
        symbol: '!@#$%^&*()[]'
    }
    pools.alpha = pools.lower + pools.upper
    pools.all = pools.lower + pools.upper + pools.number + pools.symbol

    pool = pools[('' + pool).toLowerCase()] || pool
    return pool.charAt(natural(0, pool.length - 1))
}
let char = (pool) => {
    return character(pool)
}


/**
 * 返回一个随机字符串。
 *
 * @param {[alpha/upper/number/symbol/undefined]} pool 字符类型
 *  @param {Number} min 区间下限
 *  @param {Number} max 区间上限
 * @return {String}  
 */
let string = (pool, min, max) => {
    var len
    switch (arguments.length) {
        case 0: // ()
            len = natural(3, 7)
            break
        case 1: // ( length )
            len = pool
            pool = undefined
            break
        case 2:
            // ( pool, length )
            if (typeof arguments[0] === 'string') {
                len = min
            } else {
                // ( min, max )
                len = natural(pool, min)
                pool = undefined
            }
            break
        case 3:
            len = natural(min, max)
            break
    }

    var text = ''
    for (var i = 0; i < len; i++) {
        text += character(pool)
    }

    return text
}
let str = ( /*pool, min, max*/ ) => {
    return string.apply(this, arguments)
}

/**
 * 返回一个整型数组(等差数列)。
 *
 * @param {[alpha/upper/number/symbol/undefined]} pool 字符类型
 *  @param {Number} start 区间下限/基准值
 *  @param {Number} stop 区间上限
 *  @param {Number} step 公差
 * @return {Array}  
 */
let range = (start = 0, stop = 0, step = 1) => {

    start = +start
    stop = +stop
    step = +step

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while (idx < len) {
        range[idx++] = start;
        start += step;
    }

    return range;
}
/**
 * 打乱 发牌
 * 
 * @param {Array} arr 
 * @param {Number} min min<arr.length
 * @param {Number} max min<arr.length
 */
let shuffle = (arr = [], min, max) => {
    let old = arr.slice(0);
    let res = [],
        index;
    for (var i = 0; i < old.length; i++) {
        index = natural(0, old.length - 1);
        res.push(old[index]);
        old.splice(index, 1);
    }
    min = parseInt(min, 10);
    max = parseInt(max || min, 10);
    return res.slice(0, natural(min, max));
}

export default {
    boolean,
    boo,
    natural,
    integer,
    int,
    float,
    character,
    char,
    string,
    str,
    range,
    shuffle
}