const { modelName } = require('../models/jokes.model')
const Joke = require('../models/jokes.model')

module.exports.findAllJokes = (request, response) => {
    Joke.find()
        .then(allJokes => response.json({ jokes: allJokes }))
        .catch(error => response.json({ message: 'Something went wrong', error: error }))
}

module.exports.findOneJoke = (request, response) => {
    Joke.findOne({ _id: request.params.id })
        .then()
        .catch(error => response.json({ message: 'Something went wrong', error: error }))
}

module.exports.createJoke = (request, response) => {
    Joke.create(request.body)
        .then(newJoke => response.json({ Joke: newJoke }))
        .catch(error => response.json({ message: 'Something went wrong', error: error }))

}

module.exports.updateJoke = (request, response) => {
    Joke.findOneAndUpdate(
        { _id: request.params.id },
        request.body,
        { new: true, runValidators: true }
    ).then(updatedJoke => response.json({ Joke: updatedJoke }))
        .catch(error => response.json({ message: 'Something went wrong', error: error }))
}

module.exports.deleteJoke = (request, response) => {
    Joke.deleteOne({ _id: request.params.id })
        .then(result => response.json({ result: result }))
        .catch(error => response.json({ message: 'Something went wrong', error: error }))
}