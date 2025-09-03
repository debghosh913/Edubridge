const express = require('express');
const app = express();
const http =require('http')
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRouter');
const authdMiddleware=require('./middleware/authMiddleware');
const friendRequestRoutes=require('./routes/friendRequestRouter')
const cors = require("cors");
// 1. Connect to MongoDB first
const {initSocket}= require('./sockets/index')
const server=http.createServer(app);
connectDB()
  .then(() => {
    // 2. Middleware setup
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(authdMiddleware)
    app.use('/api/users', userRoutes);
    // 3. Static file serving
    app.use('/uploads', express.static('uploads'));
    // 4. Routes
    app.use('/api/friendRequest',friendRequestRoutes)
    initSocket(server)
    // 5. Start server
    server.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });

