const express = require('express');
const server = express();
const FilmsRouter = require('./routes/film')
const NotFound = require('./middleware/notFound')
const ServerErrorsHandler = require('./middlewares/ServerErrorsHandler')

const HOST = process.env.HOST
const PORT = process.env.PORT


server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);
})
// Routes 
server.get('/', (req, res) => {
    res.send(`Server is up and running!`);
})

server.use('/movies', FilmsRouter)

// Gestire gli errori 404 
server.use(NotFound)
// gestire tutti gli errori 500
server.use(ServerErrorsHandler)