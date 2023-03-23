var express = require('express')
var cors = require('cors')

const fetch = (...args) => {
    import('node-fetch').then(({default:fetch}) => fetch(...args))
}
var bodyParser = require('body-parser')

const CLIENT_ID = '09af2d6d9ffc2387f4f2'
const ClIENT_SECRET = '211340a52c3a69b9f2384db296c3e392ab6c1495'


var app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(4000, function(){
    console.log("CORS server running on port 4000")
})