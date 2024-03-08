
const path = require('path')
const express = require('express')
const app = express()

// serve up production assets
app.use(express.static('client/build'));

// create api endpoints
app.get('/api/message', (req, res) => {
    res.json({message: "Hello from Express JS"})
});

// send everything else to the react app
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build', 'index.html')));

// if not in production use the port 5001
const PORT = process.env.PORT || 5001
console.log('Server started on port:',PORT)
app.listen(PORT)