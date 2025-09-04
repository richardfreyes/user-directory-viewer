import express from 'express';
import cors from 'cors';
import users from '../data/mock-data/users.json' with { type: 'json' };

const app = express();
const port = 3001;

app.use(cors());

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(port, () => {
  console.log(`Mock API server listening at http://localhost:${port}`);
});