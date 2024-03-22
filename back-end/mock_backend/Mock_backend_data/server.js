const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Mock budget data
const budgetData = [
  { month: 'January', amount: 2000 },
  { month: 'February', amount: 2500 },
  { month: 'March', amount: 1800 },
  { month: 'April', amount: 3000 },
  { month: 'May', amount: 3500 },
  { month: 'June', amount: 4000 }
];

// Route to serve budget data
app.get('/budget', (req, res) => {
  res.json(budgetData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
