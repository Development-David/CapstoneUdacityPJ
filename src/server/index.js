var path = require('path')
const express = require('express')
const bodyParser = require("body-parser");
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const axios = require('axios')
dotenv.config();

const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})
console.log(`Your API key is ${process.env.GEONAMES_USERNAME}`);
// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/geo', async function (req, res) {
    const URL = req.body.BASE_URL
    // console.log(body.BASE_URL)
    response = await axios.post(encodeURI(URL +`&username=${process.env.GEONAMES_USERNAME}`))
    try {
        const result = JSON.stringify(response.data.geonames)
        console.log(result)
        res.send(result)
      }
      catch (error) {
        console.log('error', error)
      }
})
app.post('/weather', async function (req, res) {
  const URL = req.body.BASE_URL
  // console.log(body.BASE_URL)
  response = await axios.post(encodeURI(URL +`&key=${process.env.WEATHERBIT_API_KEY}`))
  try {
      const result = JSON.stringify(response.data)
      console.log(result)
      res.send(result)
    }
    catch (error) {
      // console.log('error', error)
    }
})
app.post('/pixa', async function (req, res) {
  const URL = req.body.BASE_URL
  console.log(URL +`&key=${process.env.PIXABAY_API_KEY}`)
  response = await axios.post(encodeURI(URL +`&key=${process.env.PIXABAY_API_KEY}`))
  try {
      const result = JSON.stringify(response.data)
      // console.log(result)
      res.send(result)
    }
    catch (error) {
      console.log('error', error)
    }
})