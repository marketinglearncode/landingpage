const fs = require('fs')

const removeFile = (path) => {
    fs.unlinkSync(path);
}

const directoryExists = (path) => {
    return fs.existsSync(path);
}

const clearDirectory = (path) => {
    
    if(!directoryExists(path)) return;

    let lista = fs.readdirSync(path);

    lista.forEach((file) => {
        removeFile(`${path}/${file}`);
    })
}

const createDirectory = (directoryName) => {
    fs.mkdirSync(directoryName);
}

module.exports = {
    removeFile,
    directoryExists,
    clearDirectory,
    createDirectory
}