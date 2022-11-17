const path = require('path')
const fs = require('fs')
const dbPath = path.join(__dirname, '../db/db.json')

module.exports = (app) => {

app.get('/api/notes', (req, res) => {
  res.sendFile(dbPath)
})

app.post('/api/notes', (req, res) => {
  let newNote = fs.readFileSync('db/db.json')
  newNote = JSON.parse(newNote)
  res.json(newNote)
  let userNote = {
    title: req.body.title,
    text: req.body.text
  }
  newNote.push(userNote)
  fs.writeFileSync('db/db.json', JSON.stringify(newNote))
  res.json(newNote)
})

app.delete('/api/notes/:id', (req, res) => {
  let note = JSON.parse(fs.readFileSync('db/db.json'))
  let clearNotes = note.filter(item => item.id !== req.params.id)
  fs.writeFileSync('db/db.json', JSON.stringify(clearNotes))
  res.json(clearNotes)
  console.log('Delete route hit!')
})

}