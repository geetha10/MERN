const mongoose = require('mongoose');

module.exports = (DB) => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then( () => console.log(`🦄🦄🦄 connected to ${DB} db `))
        .catch( err => console.log(`⚠⚠⚠ cannot connect to ${DB}`, err))

}

mongoose.connect("mongodb://localhost/"+DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));