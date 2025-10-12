const express = require('express')
const app = express()
const ViewEngine = require('./config/viewEngine')
const WebRoute = require('./routes/web')
const bodyParser = require('body-parser')
const port = 3000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


ViewEngine(app)
app.use('/', WebRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})