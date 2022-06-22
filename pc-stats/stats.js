const os = require('os');
const log = require('./logger');

setInterval(() => {
    const size = 1024;
    const date = new Date();

    const {freemem, totalmem, platform, release} = os;

    const mem = parseInt(freemem() / size / size);
    const total = parseInt(totalmem() / size / size);
    const persent = parseInt(mem / total * 100);

    const stats = {
        date: `${date}`,
        system: `SYS: ${platform}`,
        release: `RELEASE: ${release}`,
        free: `${mem} MB`,
        total: `${total} MB`,
        persent: `${persent}%`,
    }

    console.clear();
    console.log('======PC STATS======');
    console.table(stats);

    
    log(`${JSON.stringify(stats, null, 2)}\n`);

}, 1000);

