import express, { Request, Response, NextFunction } from "express";
import httpProxy from 'http-proxy';

const app = express();
const ApiProxy = httpProxy.createProxyServer();

// Proxy server routing to the target Server 2
app.all('/*', (req: Request, res: Response) => {
    console.log("Hey Ninja! Redirecting to Server2");
    const containerId = req.query.containerId;
    const port = req.query.port;
    const path = req.query.path;

    const url = `http://${containerId}:${port}/${path}`;
    
    ApiProxy.web(req, res, { target: url }, (err) => {
        console.error("Error occurred while proxying:", err);
        res.status(500).send('An error occurred while processing your request.');
    });
});

app.listen(3002, () => {
    console.log("Server running at port 80");
});
