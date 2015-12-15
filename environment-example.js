var localIP = require('my-local-ip')();

module.exports = {
    "ip": localIP,
    "port": "8080",
    "host": "http://" + localIP + ":8080/"
}