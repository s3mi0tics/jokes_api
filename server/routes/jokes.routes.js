const JokeController = require("../controllers/jokes.controller")

module.exports = app =>{
    console.log("server=>routes")
    // app.get("/", JokeController.index)
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    app.post("/api/jokes", JokeController.createJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
} 
