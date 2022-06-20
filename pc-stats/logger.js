const EventEmitter = require('events');
const fs = require('fs');
const fsPath = require('path');

const emitter = new EventEmitter();

emitter.on('log', (message) => {
    fs.appendFile(fsPath.join(__dirname, './log-stats.txt'), message ,err => {
        if (err) throw err;
    });
})

function log(message) {
    emitter.emit('log', message)
}

module.exports = log;