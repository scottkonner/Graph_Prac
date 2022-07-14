const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}
// that takes two nodes as arguments and will traverse the given graph breadth-first, returning true if there is a path from the first node to the second, and false if there is not.
function breadthFirstSearch(start, end) {
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
console.log(breadthFirstSearch(1, 3)); // -> true
console.log("Second Test:");
console.log(breadthFirstSearch(4, 1)); // -> true
console.log("Third Test:");
console.log(breadthFirstSearch(6, 1)); // -> false
console.log("Fourth Test:");
console.log(breadthFirstSearch(1, 1));
