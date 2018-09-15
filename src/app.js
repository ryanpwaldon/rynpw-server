require('dotenv').config()
const express = require('express')
const app = express()
const port = 8081

const db = require('./db/db')
const router = require('./router/router')
const middleware = require('./middleware/middleware')

db()
middleware(app)
app.use('/', router)

app.listen(process.env.PORT || port, () => console.log(`Server listening on port ${port}.`))
