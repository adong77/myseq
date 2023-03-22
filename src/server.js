function startServer() {
    const express = require('express');
    // const path = require('path');

    const app = express();

    // app.get("/", (req,res) => {
    //     res.send("This is a web page!");
    // });

    // const staticFilesPath = path.join(__dirname, "public");
    // console.log("dir:", staticFilesPath);

    app.use("/", express.static('build'));

    const port = 8080; //设置端口
    app.listen(port, () => {
        console.log(`Web server listening on port: ${port}!`);
    });

};

module.exports = startServer;
