const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('test213412!');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>');
});

app.listen(port, () => {
    console.log(`App listening to ${port}`);
}); 