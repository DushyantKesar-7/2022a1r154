// app.js

const express = require('express');
const { log } = require('./loggingMiddleware');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example Route
app.post('/api/some-endpoint', async (req, res) => {
    // Simulated error occurrence
    const errorOccurred = true;

    if (errorOccurred) {
        await log('backend', 'error', 'handler', 'Sample error message');
        return res.status(500).json({ message: 'Internal Server Error' });
    }

    res.json({ message: 'Data saved successfully!' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
