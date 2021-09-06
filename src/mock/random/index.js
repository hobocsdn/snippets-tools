import basic from './basic.js'
let Random = {};
let extend = (...args) => {
    Object.assign(...args)
}
extend(Random, basic)
export default Random