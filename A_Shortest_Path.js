const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

// returns length of shortest path from start to end,
// or false if there is no path
function aShortestPath(start, end) {
    const queue = [[start]]
    const visited = new Set(queue[0])

    while (queue.length) {
        let currentPath = queue.shift()
        let last = currentPath[currentPath.length - 1];
        if (last === end) {
            return currentPath;
        }

        let neighborsArr = adjList[last]

        neighborsArr.forEach(el => {
            if (!visited.has(el)) {
                let copyPath = currentPath.slice();
                // queue.push(el)
                // visited.add(el)
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
