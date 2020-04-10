const express = require('express')
const graphHTTP = require('express-graphql')
const schema = require('./schema.js')
const cors = require('cors')

const app = express()


// Allow cross-origin

app.use(cors());

app.use(
  '/graphql',
  graphHTTP({
    schema,
    graphiql: true
  })
)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
