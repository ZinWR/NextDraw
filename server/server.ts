declare var require: any

const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

import { Server } from 'socket.io';

const io = new Server(server, {
    cors: {
        origin: '*',
    }
});


io.on('connection', (socket) => {
    socket.on('draw-line', ({ prevPoint, currentPoint, color }: DrawLine) => {
        socket.broadcast.emit('draw-line', { prevPoint, currentPoint, color });
    })
});