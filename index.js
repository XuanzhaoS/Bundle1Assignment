const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!<br> This is Bundle 1 Assignment.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});