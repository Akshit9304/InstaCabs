function findShortestPath(adjacencyList, start, end) {
  console.log('Adjacency List:', adjacencyList);
  console.log('Start Node:', start);
  console.log('End Node:', end);



  const distances = {};
  const previous = {};
  const nodes = Object.keys(adjacencyList);

  nodes.forEach(node => {
      distances[node] = Infinity;
      previous[node] = null;
  });

  distances[start] = 0;
  const visited = [];

  while (visited.length < nodes.length) {
      const currentNode = nodes.reduce((minNode, node) => (
          (!visited.includes(node) && distances[node] < distances[minNode]) ? node : minNode
      ), null);

      visited.push(currentNode);

      adjacencyList[currentNode].forEach(neighbor => {
          const time = neighbor.time;
          const neighborNode = neighbor.node;
          if (time && distances[currentNode] + time < distances[neighborNode]) {
              distances[neighborNode] = distances[currentNode] + time;
              previous[neighborNode] = currentNode;
          }
      });
  }

  let path = [end];
  let node = end;
  while (node !== start) {
      node = previous[node];
      path.unshift(node);
  }

  return { path, time: distances[end] };
}

module.exports = { findShortestPath };
