const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        require: [true, "you cant have a joke without a proper setup"],
        minLength:[10, 'your set up must be at least 3 characters... just joking it needs to be at least 10'],
    },
    punchline: {
        type: String,
        require: [true, "its all about the reveal- you cant have a joke without a punchline... or can you"],
        minLength: [3, "its not funny unless the punchline is at least 3 characters"]
    }
}, {timestamp: true})

const Joke = mongoose.model("Joke", JokeSchema)

module.exports = Joke