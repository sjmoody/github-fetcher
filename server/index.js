const express = require('express')
const app = express()
const port = 3000
const db = ('./database')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/repos', (req, res) => {
  res.send("TODO: return repos")
})

app.post('/api/repos', (req, res) => {
  console.log(`Expect username: ${req.body}`)
  res.send("TODO: get repos from github and then save in database")

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})