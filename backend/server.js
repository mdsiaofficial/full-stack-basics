
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
app.get('/', (req, res) => {
  res.send('Hi')
})

// work here:
app.get('/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: 'Fun 1', comment: 'Comment here...' },
    { id: 2, title: 'Fun 2', comment: 'Comment here...' },
    { id: 3, title: 'Fun 3', comment: 'Comment here...' },
    { id: 4, title: 'Fun 4', comment: 'Comment here...' },
    { id: 5, title: 'Fun 5', comment: 'Comment here...' },
    { id: 6, title: 'Fun 6', comment: 'Comment here...' },
    { id: 7, title: 'Fun 7', comment: 'Comment here...' },
    { id: 8, title: 'Fun 8', comment: 'Comment here...' },
    { id: 9, title: 'Fun 9', comment: 'Comment here...' },
    { id: 10, title: 'Fun 10', comment: 'Comment here...' },
    { id: 11, title: 'Fun 11', comment: 'Comment here...' },
    { id: 12, title: 'Fun 12', comment: 'Comment here...' },
    { id: 13, title: 'Fun 13', comment: 'Comment here...' },
    { id: 14, title: 'Fun 14', comment: 'Comment here...' },
    { id: 15, title: 'Fun 15', comment: 'Comment here...' },
  ]

  res.send(jokes)

})


// Server starts here...
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})


