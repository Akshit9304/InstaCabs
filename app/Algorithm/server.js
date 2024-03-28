const express = require('express');
const { findShortestPath } = require('/Users/akshit/blender-git/blender/gocabs/app/Algorithm/findShortestPath.js');

const app = express();
const PORT = 3001;

// Define the adjacency list for the graph
const adjacencyList = {
    'A': [{ node: 'B', time: 5 }, { node: 'C', time: 7 }],
    'B': [{ node: 'A', time: 5 }, { node: 'D', time: 15 }, { node: 'E', time: 20 }],
    'C': [{ node: 'A', time: 7 }, { node: 'D', time: 5 }, { node: 'E', time: 35 }],
    'D': [{ node: 'B', time: 15 }, { node: 'C', time: 5 }, { node: 'F', time: 20 }],
    'E': [{ node: 'B', time: 20 }, { node: 'C', time: 35 }, { node: 'F', time: 10 }],
    'F': [{ node: 'D', time: 20 }, { node: 'E', time: 10 }],
};

// API endpoint for finding the shortest path and total time
app.get('/api/shortest-path', (req, res) => {
    const { start, end } = req.query;
    const { path, time } = findShortestPath(adjacencyList, start, end);
    res.json({ path, time });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
