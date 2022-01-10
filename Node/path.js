const path = require('path')

let filePath  = 'E:\\Website-pep\\Node\\1.txt'

let extName = path.extname(filePath) // print extension name
console.log(extName)

let fileName = path.basename(filePath) // print file name with extension
console.log(fileName)


console.log(__dirname) // Folder path
console.log(__filename) // Folder path