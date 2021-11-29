const express = require('express')
const cors = require("cors")

const app = express()
require('dotenv').config()
const { MongoClient } = require('mongodb');
const ObjectId = require("mongodb").ObjectId;

const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ns6st.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
  try{
      await client.connect();
      console.log('database mia connected  successfuflly')
  }
  finally{
      // await client.close();
  }
}
run().catch(console.dir)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cv', (req, res) => {
  res.download('Forhad.pdf')
})

app.listen(port, () => {
  console.log(`listening at ${port}`)
})