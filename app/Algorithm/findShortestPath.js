function findShortestPath(graph, start, end) {
    console.log('Adjacency List:', graph);
    console.log('Start Node:', start);
    console.log('End Node:', end);
    
    // Create an object to store the shortest distance from the start node to every other node
    let distances = {};
    let previous = {};

    // A set to keep track of all visited nodes
    let visited = new Set();

    // Get all the nodes of the graph
    let nodes = Object.keys(graph);
    console.log(nodes)

    // Initially, set the shortest distance to every node as Infinity
    for (let node of nodes) {
        distances[node] = Infinity;
        previous[node] = null;
    }
    
    // The distance from the start node to itself is 0
    distances[start] = 0;

    // Loop until all nodes are visited
    while (nodes.length) {
        // Sort nodes by distance and pick the closest unvisited node
        
        nodes.sort((a, b) => distances[a] - distances[b]);
        console.log(nodes)
        let closestNode = nodes.shift();
        console.log(nodes, closestNode)
        // If the shortest distance to the closest node is still Infinity, then remaining nodes are unreachable and we can break
        if (distances[closestNode] === Infinity) break;

        // Mark the chosen node as visited
        visited.add(closestNode);

        // For each neighboring node of the current node
        graph[closestNode].forEach((neighbor)=>{
            // console.log(neighbor)
            // If the neighbor hasn't been visited yet
            if (!visited.has(neighbor.node)) {
                // console.log("HI", distances[closestNode], neighbor)
                // Calculate tentative distance to the neighboring node
                let newDistance = distances[closestNode] + neighbor.time;
                // console.log(newDistance, distances[neighbor.node])
                // If the newly calculated distance is shorter than the previously known distance to this neighbor
                if (newDistance < distances[neighbor.node]) {
                    // console.log("HI ", neighbor.node, closestNode)
                    // Update the shortest distance to this neighbor
                    distances[neighbor.node] = newDistance;
                    previous[neighbor.node] = closestNode;
                }
            }
        })
    }
    // console.log(previous)
    let path = [end];
    let node = end;
    while (node !== start) {
        // console.log(node)
        node = previous[node];
        path.unshift(node);
    }

    return { path, time: distances[end] };
}


module.exports = { findShortestPath };
