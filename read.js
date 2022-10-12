const fs = require('fs')
const read = function() {
    return fs.readfileSync('/note txt', 'utf8')
}
module.exports = read
