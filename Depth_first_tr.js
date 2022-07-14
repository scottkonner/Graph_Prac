const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

  function printDepthFirst(start) {
    let stack = []
    const visited = new Set()
    visited.add(start)
    stack.push(start)


    while (stack.length) {
        let currentNode = stack.pop()
        console.log(currentNode)
        let neighborsArr = adjList[currentNode]
        neighborsArr.forEach(element => {
            if (!visited.has(element)) {
                stack.push(element)
            }
            visited.add(element)
        });
    }
}

  console.log("First Test:")
  printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                      // One possible solution:  3, 4, 6, 5, 1, 2
  console.log("Second Test:")
  printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                      // One possible solution:  6, 4, 5, 2, 1, 3
  console.log("Third Test:")
  printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                      // One possible solution:  4, 6, 5, 2, 1, 3
