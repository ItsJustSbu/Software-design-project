const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/' , (req, res)=>{
    res.send('Hello World');
})

app.listen(80, ()=>{
    console.log('Server started on port 80');
});
