// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
// server/server.js
// ... previous code ...

const questionRoutes = require('./routes/questions');
app.use('/api/questions', questionRoutes);

// ... rest of the code ...


// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/interviewPrepDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Basic route
app.get('/', (req, res) => res.send('Hello World!'));

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
