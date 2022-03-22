const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DATABASE="produts_db"

//middleware
app.use(express.json(), cors(), express.urlencoded({extended:true}));

// database connection
require('./config/mongoose.config')(DB);


app.listen(PORT, 
    ()=>{console.log(`-------! Listening on port:${PORT} !------`);})