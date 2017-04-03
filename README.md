### 编写常用工具集合


task=>
1. 熟练使用 ES6完成工具开发
2. 按照书写规范编写代码
- 函数编写
```
// === 添加注释 ==
/**
* 函数功能
*
* @param {Node} element 需要移除的元素
* @param {Object} options 相关的逻辑配置
* @param {boolean} options.removeEventListeners 是否同时将所有注册在元素上的事件移除
* @return {Object}
*/

```


### 基本功能
1. 对象、字符串、数字类型基本处理
2. 日志输出
3. 功能测试
4.

### 扩展工具
1. 时间格式化 字符串的常见应用场景(驼峰转换)
2. 随机数生成
3. 颜色生成器
4. 二维码生成器
5. 表单生成器
6. 位置随机生成
7. 动画
8. 窗口基本操作
9. 表单验证功能




### web 基础
#### web事件


// 鼠标事件:
mouseup、mousedown、mousemove、mouseover、mouseleave、mouseenter、click

//拖拽事件触发顺序:
mouseup、(mousemove)、mousedown、click
click触发前提(当一个mousedown和一个mouseup都在这个元素上被检测到的时候发生)

- 区分拖拽事件与单纯点击事件
1. mousedown-mousemove-mouseup:拖拽事件；
2. mousedown-mouseup：点击事件

#### 位置属性
/*
target:
    {
        client / clientY：// 触摸点相对于浏览器窗口viewport的位置
        pageX / pageY：// 触摸点相对于页面的位置
        screenX /screenY：// 触摸点相对于屏幕的位置

    }
元素占位:ele.getComputeStyle()
*/
