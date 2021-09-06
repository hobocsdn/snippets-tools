export default {
    image() {

    },
    // 图片占位符
    dataImage: function (size, text) {
        var canvas
        if (typeof document !== 'undefined') {
            canvas = document.createElement('canvas')
        } else {
            /*
                https://github.com/Automattic/node-canvas
                    npm install canvas --save
                安装问题：
                * http://stackoverflow.com/questions/22953206/gulp-issues-with-cario-install-command-not-found-when-trying-to-installing-canva
                * https://github.com/Automattic/node-canvas/issues/415
                * https://github.com/Automattic/node-canvas/wiki/_pages

                PS：node-canvas 的安装过程实在是太繁琐了，所以不放入 package.json 的 dependencies。
             */
            var Canvas = module.require('canvas')
            canvas = new Canvas()
        }

        var ctx = canvas && canvas.getContext && canvas.getContext("2d")
        if (!canvas || !ctx) return ''

        if (!size) size = this.pick(this._adSize)
        text = text !== undefined ? text : size

        size = size.split('x')

        var width = parseInt(size[0], 10),
            height = parseInt(size[1], 10),
            background = this._brandColors[this.pick(this._brandNames())],
            foreground = '#FFF',
            text_height = 14,
            font = 'sans-serif';

        canvas.width = width
        canvas.height = height
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = background
        ctx.fillRect(0, 0, width, height)
        ctx.fillStyle = foreground
        ctx.font = 'bold ' + text_height + 'px ' + font
        ctx.fillText(text, (width / 2), (height / 2), width)
        return canvas.toDataURL('image/png')
    }
}