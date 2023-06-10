import Express from "express";


const expressServer = Express();

expressServer.use("/", Express.static("./resources/"));
expressServer.listen(80);