const express = require('express');
const mongoose = require('mongoose');

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

app.use(express.static(__dirname + '/dist/AtlasMovie'));
app.use(express.json());



app.get('/api/movies', (req, res) => {
    
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express server started listening at ${PORT} port.`));
