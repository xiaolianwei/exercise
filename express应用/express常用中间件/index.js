const express = require('express');
const path = require('path');

const app = express();
const staticRoot = path.resolve(__dirname, './public');

app.use(express.static(staticRoot))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/student', (req,res) => {
    console.log(req.body);
})

app.listen(9527, () => console.log('server listen on 9527'))