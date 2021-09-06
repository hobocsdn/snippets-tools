/**
 *  根据数据模板生成模拟数据。
 * Mock.mock( template )
 * Mock.mock( function() )
 * Mock.mock( rurl, template )
 * Mock.mock( rurl, function(options) )
 * Mock.mock( rurl, rtype, template )
 * Mock.mock( rurl, rtype, function(options) )
 * 
 */

import Handler from '../mock/handler.js'

let Mock = {
    mock(...args) {
        if (args.length === 1) {
            return Handler.gen(...args)
        }
    }
}
Mock.version = "1.0.0";


export default Mock;