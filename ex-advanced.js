const inputGraph = prompt("Entrez le graphe");
let graph;
try {
  graph = JSON.parse(inputGraph);
} catch (e) {
  console.log("Erreur : format JSON invalide.");
}


function breadthFirstSearch(graph, start) {
  if (!graph.hasOwnProperty(start)) {
    console.log("Erreur : le sommet de départ n'existe pas dans le graphe.");
    return;
  }

  const visited = new Set();
  const queue = [start];
  const result = [];

  while (queue.length > 0) {
    const vertex = queue.shift();

    if (!visited.has(vertex)) {
      visited.add(vertex);
      result.push(vertex);

      const neighbors = graph[vertex] || [];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  console.log("Breadth-first traversal from vertex ${start} :", result.join(", "));
}
if (graph) {
  const startNode = prompt("Entrez le sommet de départ :");
}