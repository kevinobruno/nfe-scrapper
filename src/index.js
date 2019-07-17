const kue = require('kue');
const server = require('./server');

server.listen(process.env.PORT || 3000);
kue.app.listen(process.env.KUE_UI_PORT || 12058);
