const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
    console.log(`Requesting from ${process.env.APP_NAME || 'no provided environment'}`);
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
    console.log(`Requesting from ${process.env.APP_NAME || 'no provided environment'}`);
})
