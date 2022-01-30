const express = require('express')

const path = require('path')
const doorCounterRoutes = require('./routes/doorCounterRoutes')

const app = express()
const port = process.env.PORT || 5000

app.use('/api/counter',doorCounterRoutes)

app.use('/', express.static('../client/build'))
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname,"../client/build","index.html"))
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

