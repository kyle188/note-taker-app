const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static("public"))
app.use(express.json())
require('./routes/apiRoutes.js')(app)
require('./routes/viewRoutes.js')(app)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})