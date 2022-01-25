
// IMPORT ALL DEPENDANCIES
const express = require("express")
const app = express();

// CONFIGURE MONGOOSE
require("./config/mongoose.config")

// CONFIG EXPRESS
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// ROUTES
console.log("server.js before routes")
require("./routes/jokes.routes")(app)


// LISTEN TO THE PORT
app.listen(8000,()=> console.log('listening on port: 8000'))