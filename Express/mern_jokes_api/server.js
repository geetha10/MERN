const express=require('express')
const app=express();
const PORT=8000;

app.use(express.json(), express.urlencoded({ extended: true }));

require('./server/config/mongoose.config')

const AllJokesAPIRoutes = require('./server/routes/jokes.routes')
AllJokesAPIRoutes(app);


app.listen(PORT, console.log(`>>>> Listening on port: ${PORT} <<<<`));