/**
 * 浅拷贝
 */
const merge = (...args) => {
    Object.assign(...args);
};


const extend = () => {

}

const mixin = () => {

}

const reverse = (str) => {
    return str.split("").reverse().join("");
}

export default {
    merge,
    extend,
    mixin,
    reverse
}

// module.exports = {
//     merge,
//     extend,
//     mixin,
//     reverse
// }