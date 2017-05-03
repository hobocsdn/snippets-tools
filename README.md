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
```
target:
    {
        client / clientY：// 触摸点相对于浏览器窗口viewport的位置
        pageX / pageY：// 触摸点相对于页面的位置
        screenX /screenY：// 触摸点相对于屏幕的位置
    }
元素占位:ele.getComputeStyle()
```



### 日志模块文档说明
基于浏览器端的console的日志记录组件。支持如下特性：
1. 日志级别设置；
2. 异常提交到服务器；
3. 提交环境信息；
4. 日志Tag过滤器


**配置(config)参数说明**
- level:输出日志级别Level ,日志级别，error(4)、warn(3)、info(2)、log(1)、debug(0),级别越高，输出的日志越少。比如：当前级别如果是warn，则只输出error、warn的日志.默认值：debug;
- tagFilter:进行日志筛选,正则表达式字符串.使用者可以通过在console控制台通过 log4web.config({tagFilter:"usersmodule"}) 配置值输出"usersmodule"tag的日志
- postContextInfo:是否提交环境数据
- postUrl:异常信息提交的服务器地址


**上报数据统计(postData)**
- browser.浏览器描述信息。返回字符串，格式：" Chrome,39.0.2171.95",逗号前表示浏览器类型，逗号后表示浏览器版号.
- os.操作系统字符串。
- referrer.document.referrer信息.
- url.当前页面的url.
- resolution.屏幕分辨率信息.返回格式："1920*1080",(window.screen对象获取）.
- name.异常名称。
- message.异常message。
- stack.异常调用堆栈字符串
