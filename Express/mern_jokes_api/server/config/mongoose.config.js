const mongoose=require('mongoose')
const DATABASE="jokes_DB"

mongoose.connect('mongodb://localhost/'+DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(error => console.log('Something went wrong when connecting to the database ', error));