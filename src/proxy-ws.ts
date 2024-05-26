import WebSocket from 'ws';
import http from 'http';

const server = http.createServer();

// Create a WebSocket server
const wss = new WebSocket.Server({ noServer: true });

server.on('upgrade', (request: http.IncomingMessage, socket: any, head: Buffer) => {
    // Extract the target WebSocket URL from the request
    const targetUrl = request.url!.slice(1); // Extract the target URL from the request path
    // Forward the WebSocket connection to the target WebSocket server
    wss.handleUpgrade(request, socket, head, (ws) => {
        const targetWs = new WebSocket(`ws://${targetUrl}`);
        targetWs.on('open', () => {
            // Forward messages from the original WebSocket client to the target WebSocket server
            ws.on('message', (message) => {
                targetWs.send(message.toString());
            });
            // Forward messages from the target WebSocket server to the original WebSocket client
            targetWs.on('message', (message) => {
                ws.send(message.toString());
            });
        });
        targetWs.on('close', () => {
            ws.close();
        });
        targetWs.on('error', (error) => {
            console.error(error);
            ws.close();
        });
    });
});

// Start the HTTP server
server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
