var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var cors = require('cors');

app.use(express.json())
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next()
})

app.get('/', async(req, res)=>{
    try {
        const { data } = await axios("https://www.kooapp.com/apiV1/users/handle/kanael/")
        console.log(data)

        return res.json(data)
    } catch (error) {
        console.error(error)   
    }

})

app.get('/consulta', async(req, res)=>{
    try {
        const { data } = await axios("https://www.kooapp.com/apiV1/users/9531a534-4a1e-4e07-aa23-7cdc01727c9b/followers?limit=2&offset=0")
        console.log(data)

        return res.json(data)
    } catch (error) {
        console.error(error)   
    }

})

app.listen(5500);
