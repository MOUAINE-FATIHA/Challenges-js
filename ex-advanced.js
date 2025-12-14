const inpt = prompt('saisir le graphe');
const start = parseInt(prompt('saisir le sommet de depart:'), 10);
const graph = JSON.parse(inpt);

function breadthFirstSearch(graph, start) {
  let alt = new Set();
  let arr = [start];
  let res = [];
  while (arr.length > 0) {
    let vertex = arr.shift();
    if (!alt.has(vertex)) {
      alt.add(vertex);
      res.push(vertex);

      let elem = graph[vertex] || [];
      for (let el of elem) {
        if (!alt.has(el)) {
          arr.push(el);
        }}
    }
  }
  console.log(`Breadth-first traversal starting from vertex ${start}: ${res.join(" , ")}`);
}
breadthFirstSearch(graph, start);