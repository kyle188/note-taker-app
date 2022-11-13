import express from 'express'
import database from './develop//db/db.json' assert {type: 'json'}
import fs from 'fs'
import path from 'path'
const app = express()
const PORT = 3000
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile( path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => {
    console.log("TEST")
})

const savedNotes = JSON.parse(database)

// API ROUTES
app.get('./develop/db/db.json', (req, res) => {
    res.json(savedNotes)
  })

  //HTML ROUTES
  app.get('/', (req, res) => {
    res.sendFile( path.join(__dirname, "public", "index.html") )
  })

  app.get('/notes', (req, res) => {
    res.sendFile( path.join(__dirname, "public", "notes.html"))
  })



app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})
