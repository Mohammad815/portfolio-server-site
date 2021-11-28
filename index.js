const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors())
const port = 4000

app.get('/', (req, res) => {
  res.download('Forhad.pdf')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})