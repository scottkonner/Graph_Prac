const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, end) {
    const queue = [start]
    const visited = new Set(queue)

    while (queue.length) {
        let currentNode = queue.shift()
        if (currentNode === end) {
            return true
        }
        let neighborsArr = adjList[currentNode]
        neighborsArr.forEach(el => {
            if (!visited.has(el)) {
                queue.push(el)
                visited.add(el)
            }
        })
    }
    return false
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
