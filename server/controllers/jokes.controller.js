// const { json } = require("express")
const Joke = require('../models/jokes.model')

// find all
module.exports.allJokes = (req, res) => {
    console.log("server=>controller")
    Joke.find()
        .then(allJokes =>{ 
            console.log("got all jokes")
            res.json({jokes: allJokes})
        })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

// find one
module.exports.oneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then(joke =>{ 
        console.log("got one joke")
        res.json({joke: joke})
    })
    .catch(err => res.json({message: "Something went wrong", error: err}))

}


// Create
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong", error: err}))
        // .catch(err => res.json(req.body))
}

// Update joke ( find one + create)
module.exports.updateJoke = (req, res) => {
   Joke.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    { new: true, runValidators: true})
    .then(joke =>{ 
        console.log("got one joke")
        res.json({joke: joke})
    })
        .catch(err => res.json({message: "Something went wrong", error: err}))
}


// delete a joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then(result =>{ 
        console.log("deleted one")
        res.json(result)
    })
    .catch(err => res.json({message: "Something went wrong", error: err}))

}