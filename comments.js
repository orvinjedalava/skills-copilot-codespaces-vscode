// Create web server

// Import modules
import express, { json } from 'express';

// Create express app
const app = express();

// Add middleware
app.use(json());

// Define routes
app.get('/comments', (req, res) => {
  res.send('Get comments');
});

app.post('/comments', (req, res) => {
  res.send('Create comment');
});

app.put('/comments/:id', (req, res) => {
  res.send(`Update comment with id ${req.params.id}`);
});

app.delete('/comments/:id', (req, res) => {
  res.send(`Delete comment with id ${req.params.id}`);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});