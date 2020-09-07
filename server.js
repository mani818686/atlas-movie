const express = require('express');
const mongoose = require('mongoose');
const Movie = require('./backend/models/movie');
const cors=require('cors');

// ----- DB Connection -----
const dbOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, auto_reconnect: true };
mongoose.connect("mongodb+srv://bz:bz@cluster0-li9qp.mongodb.net/sample_mflix?retryWrites=true&w=majority", dbOptions);
mongoose.connection.on('connected', function () {
    console.log("Connected to DB");
});
mongoose.connection.on('error', function (err) {
    console.log("Error while connecting to DB: " + err);
});


const app = express();
app.use(cors());

app.use(express.static(__dirname + '/dist/AtlasMovie'));
app.use(express.json());



app.get('/api/movies', (req, res) => {
    let cond = {};
    if(req.query.year){
        cond.year = +req.query.year;  // {year: 2000} parseInt
    }
    let options = {skip:0, limit:12};
    Movie.find(cond,null,options,function(err,result)
    {
        res.json(result);
    })
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express server started listening at ${PORT} port.`));
