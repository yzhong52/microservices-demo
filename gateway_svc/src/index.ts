import express from 'express';

const app = express();
const port = 8080;

app.get('/api/v1/hey', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Listening on port ${port}!`));