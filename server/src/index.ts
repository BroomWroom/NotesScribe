import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { boardRouter } from './routes/boards';
import { noteRouter } from './routes/notes';
import { stickerRouter } from './routes/stickers';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/user-account';

// Security: Disable Express fingerprinting header
app.disable('x-powered-by');

// Security: Standard HTTP security headers
app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

// CORS Configuration with environment variable support
const allowedOrigins = process.env.CORS_ORIGIN
    ? process.env.CORS_ORIGIN.split(',').map((o) => o.trim())
    : '*';

app.use(
    cors({
        origin: allowedOrigins === '*' ? '*' : allowedOrigins,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

// Body parsing with payload size limits to mitigate DoS
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API Routes
app.use('/api/boards', boardRouter);
app.use('/api/notes', noteRouter);
app.use('/api/stickers', stickerRouter);

// Health check endpoint (used by Docker HEALTHCHECK and AWS load balancers)
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        uptime: Math.floor(process.uptime()),
        timestamp: new Date().toISOString(),
        dbState: mongoose.connection.readyState,
    });
});

// Serve frontend static build in production
const clientDistPath = [
    path.resolve(__dirname, '../../client/dist'),
    path.resolve(__dirname, '../client/dist'),
    path.resolve(process.cwd(), '../client/dist'),
    path.resolve(process.cwd(), 'client/dist'),
].find((p) => fs.existsSync(p)) || path.resolve(__dirname, '../../client/dist');

app.use(express.static(clientDistPath));

// Fallback for React Single Page Application (SPA) routing (Express 5 compatible)
app.use((_req, res) => {
    res.sendFile(path.resolve(clientDistPath, 'index.html'));
});

// Start Express server listening on all network interfaces
const server = app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`ScribeNotes App listening on http://0.0.0.0:${PORT}`);
});

// Connect to MongoDB
mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB successfully!');
    })
    .catch((err) => {
        console.error('MongoDB Connection Error:', err);
    });