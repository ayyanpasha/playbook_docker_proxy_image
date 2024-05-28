import express, { Request, Response } from "express";
import httpProxy from 'http-proxy';

const app = express();
const ApiProxy = httpProxy.createProxyServer();

// Handle errors from the proxy
ApiProxy.on('error', (err: Error) => {
    console.error("Error occurred while proxying:", err);
});

// Proxy server routing to the target Server 2
app.all('/*', (req: Request, res: Response) => {
    console.log("Hey Ninja! Redirecting to Server2");
    const containerId = req.query.containerId;
    const port = req.query.port;
    const path = req.query.path;

    const url = `http://${containerId}:${port}/${path}`;
    ApiProxy.web(req, res, { target: url });
});

app.listen(80, () => {
    console.log("Server running at port 80");
});
