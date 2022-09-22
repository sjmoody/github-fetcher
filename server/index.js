const express = require('express')
const app = express()
const port = 3000
const db = ('./database') //db.saveAll(repos)
const gh = ('./helpers/github.js') // gh.getReposByUsername

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/repos', (req, res) => {
  res.send("TODO: return repos")
})

app.post('/api/repos', (req, res) => {
  console.log(`Expect username: ${req.body}`)
  gh.getReposByUsername(req.body.username) // I expect a promise
  .then((repos) => {
    return db.saveAll(repos)
  })
  .then((results) => {
    res.send(results)
  })
  .catch(err => console.log(`Error: ${err}`))


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})