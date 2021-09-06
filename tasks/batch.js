const fs = require("fs");
const path = require('path')

var fileDirectory = "";
let list = fs.readdirSync(fileDirectory)
if (fs.existsSync(fileDirectory)) {
    list.forEach(item => {
        const source = path.join(fileDirectory, item)
        const target = path.join(fileDirectory, item.split(".")[0])
        fs.renameSync(source, target);
    })
} else {
    console.log(fileDirectory + "  Not Found!");
}
console.log(list);