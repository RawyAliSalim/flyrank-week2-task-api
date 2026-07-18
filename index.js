// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// --- IN-MEMORY DATABASE ---
let tasks = [
  { id: 1, title: "Learn Express", done: true },
  { id: 2, title: "Build CRUD API", done: false },
  { id: 3, title: "Push to GitHub", done: true }
];

// --- ENDPOINTS ---

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    name: "Task API",
    version: "1.0",
    endpoints: ["/tasks"]
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

// 1. GET /tasks - Returns the whole list
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// 2. GET /tasks/:id - Returns a single task by ID
app.get('/tasks/:id', (req, res) => {
  // req.params.id comes in as a string, so we convert it to a number
  const taskId = parseInt(req.params.id); 
  
  // Find the task in our array
  const task = tasks.find(t => t.id === taskId);

  // If no task is found, return a 404 status code and an error message
  if (!task) {
    return res.status(404).json({ error: `Task ${taskId} not found` });
  }

  // Otherwise, return the found task
  res.json(task);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});