const filesystem = require('./filesystem');

const directoryName = 'build';

if(!filesystem.directoryExists(directoryName))
    filesystem.createDirectory(directoryName)
else
    filesystem.clearDirectory(directoryName);