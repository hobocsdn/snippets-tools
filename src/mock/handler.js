/**
 * RE_KEY // 生成规则
        'name|min-max': value
        'name|count': value
        'name|min-max.dmin-dmax': value
        'name|min-max.dcount': value
        'name|count.dmin-dmax': value
        'name|count.dcount': value
        'name|+step': value
        处理数据模板定义。

        * Handler.array( options )
        * Handler.object( options )
        * Handler.number( options )
        * Handler.boolean( options )
        * Handler.string( options )
        * Handler.function( options )
        * Handler.regexp( options )
*/


import Util from './util.js'
import Constant from './Constant.js'
import Random from './random'

/**
 * 
 * @param {*} name 
 */
let parse = (name) => {
    name = name == undefined ? '' : (name + '')

    var parameters = (name || '').match(Constant.RE_KEY)

    var range = parameters && parameters[3] && parameters[3].match(Constant.RE_RANGE)
    var min = range && range[1] && parseInt(range[1], 10) // || 1
    var max = range && range[2] && parseInt(range[2], 10) // || 1
    // repeat || min-max || 1
    // var count = range ? !range[2] && parseInt(range[1], 10) || Random.integer(min, max) : 1
    var count = range ? !range[2] ? parseInt(range[1], 10) : Random.integer(min, max) : undefined

    var decimal = parameters && parameters[4] && parameters[4].match(Constant.RE_RANGE)
    var dmin = decimal && parseInt(decimal[1], 10) // || 0,
    var dmax = decimal && parseInt(decimal[2], 10) // || 0,
    // int || dmin-dmax || 0
    var dcount = decimal ? !decimal[2] && parseInt(decimal[1], 10) || Random.integer(dmin, dmax) : undefined

    var result = {
        // 0 template 1 name, 2 inc, 3 range, 4 decimal
        parameters: parameters,
        // 1 min, 2 max
        range: range,
        min: min,
        max: max,
        // min-max
        count: count,
        // 是否有 decimal
        decimal: decimal,
        dmin: dmin,
        dmax: dmax,
        // dmin-dimax
        dcount: dcount
    }

    for (var r in result) {
        if (result[r] != undefined) return result
    }

    return {}
}

// 从数组中随机选取一个元素，并返回。
let pick = (arr, min = 1, max = 1) => {
    if (Util.isArray(arr)) {
        return Random.shuffle(arr, min, max);
    }
}

class Handler {
    /**
     * 
     * @param {Object/String} template 
     * @param {string} name 
     * @param {Object} context 
     */
    static gen(template, name = "", context = {}) {
        if (!this.__handler) {
            this.__handler = new Handler;
        }
        context = {
            // 当前访问路径，只有属性名，不包括生成规则
            path: context.path || [Constant.GUID],
            templatePath: context.templatePath || [Constant.GUID++],
            // 最终属性值的上下文
            currentContext: context.currentContext,
            // 属性值模板的上下文
            templateCurrentContext: context.templateCurrentContext || template,
            // 最终值的根
            root: context.root || context.currentContext,
            // 模板的根
            templateRoot: context.templateRoot || context.templateCurrentContext || template
        }
        const instance = this.__handler;
        const type = Util.type(template);
        const rule = parse(name);

        const mockHandler = instance[type];
        if (mockHandler) {
            const data = mockHandler({
                type,
                name,
                template,
                rule,
                context
            });
            return data;
        }
        return template;
    }
    array(options) {
        console.log(options)
        let rule = options.rule;
        console.log(rule)

    }
    string(options) {
        const template = options.template;
        const count = options.rule.count || 0;
        let result = '';
        if (template) {
            result = new Array(count + 1).join(template);
        }
        return result;
    }
    number(options) {
        let result;
        let rule = options.rule;
        if (rule.decimal) {
            //float
        } else {
            //int
            result = rule.range && !rule.parameters[2] ? rule.count : options.template
        }
        return result
    }
    /**
     * 
     * @param {Object} options 
     *      {
     *          type:string/object/number,
     *          name:"",
     *          template:Object,
     *          rule:{}
     *          context:{}
     *      }
     */
    object(options) {
        let keys = [];
        let fnKeys = [];
        for (let key in options.template) {
            (typeof options.template[key] === 'function' ? fnKeys : keys).push(key)
        }
        keys = keys.concat(fnKeys)

        let result = {},
            inc;
        keys.forEach((key) => {
            let parsedKey = key.replace(Constant.RE_KEY, '$1')
            options.context.path.push(parsedKey)
            options.context.templatePath.push(key)
            result[parsedKey] = Handler.gen(options.template[key], key, {
                path: options.context.path,
                templatePath: options.context.templatePath,
                currentContext: result,
                templateCurrentContext: options.template,
                root: options.context.root || result,
                templateRoot: options.context.templateRoot || options.template
            })
            options.context.path.pop()
            options.context.templatePath.pop()

            inc = key.match(Constant.RE_KEY)
            if (inc && inc[2] && Util.type(options.template[key]) === 'number') {
                options.template[key] += parseInt(inc[2], 10)
            }
        });
        return result
    }

};

export default Handler;