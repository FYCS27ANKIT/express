const httpDemo = require('./httpDemo.js');

httpDemo.server.listen(2000, () => {
    console.log("server is running");
})