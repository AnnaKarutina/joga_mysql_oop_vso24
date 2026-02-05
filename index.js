const express = require('express')
const app = express()
app.use(express.json())

const articleRoutes = require('./routes/article')
app.use('/', articleRoutes)

app.listen(3025, () => {
    console.log('App listening on port 3025')
})