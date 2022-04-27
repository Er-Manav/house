

var [m,n] = [6, 5]; 
  var matrix = Array(m).fill().map(()=>Array(n).fill('0'));
  matrix[0][0] = "House1";
  matrix[0][2] = "Restaurant";
  matrix[2][0] = "Hospital";
  matrix[2][1] = "Gym";
  matrix[3][4] = "House2";
  const arrHouse = [[0,0],[3,4]];

//   const directions = [
//   [-1, 0], //up
//   [0, 1], //right
//   [1, 0], //down
//   [0, -1]  //left
// ]

class Cell  {
  constructor(x, y, dist, prev) {
      this.x = x;
      this.y = y;
      this.dist = dist; //distance
      this.prev = prev; //parent cell in the path
  }

toString() {
  return "(" + this.x + ", " + this.y + ")";
}
}

class ShortestPathBetweenCellsBFS {
//BFS, Time O(n^2), Space O(n^2)
  shortestPath(matrix, start, end) {
  var sx = start[0]; 
      var sy = start[1];
  var dx = end[0];
      var dy = end[1];	
  //if start or end value is 0, return
  if (matrix[sx][sy] == '0' || matrix[dx][dy] == '0') {
    console.log("There is no path.");
    return;  
  }
  //initialize the cells 
    var m = matrix.length;
    var n = matrix[0].length;	    
    var cells = [];
    for (let i = 0; i < m; i++) {
          cells[i] = [];
        for (let j = 0; j < n; j++) {               
            if (matrix[i][j] != 'Gym') {
                cells[i][j] = new Cell(i, j, Number.MAX_VALUE, null);                   
            }
        }
    }
    //breadth first search
    var queue = [];       
    var src = cells[sx][sy];
    src.dist = 0;
    queue.push(src);
    var dest = null;
    var p;
    while ((p = queue.shift()) != null) {
      //find destination 
        if (p.x == dx && p.y == dy) { 
            dest = p;
            break;
        }      
        // moving up
        this.visit(cells, queue, p.x-1, p.y, p);    
          // moving left
        this.visit(cells, queue, p.x, p.y-1, p);     
        // moving down
        this.visit(cells, queue, p.x+1, p.y, p);             
        //moving right
        this.visit(cells, queue, p.x, p.y+1, p);
    }
    
    //compose the path if path exists
    if (dest == null) {
      console.log("there is no path.");
        return;
    } else {
        let path = [];
        p = dest;
        do {
            path.unshift(p);
        } while ((p = p.prev) != null);
        console.log(`${path}`);
    }
}

//function to update cell visiting status, Time O(1), Space O(1)
visit(cells, queue, x, y, parent) { 
  //out of boundary
    if (x < 0 || x >= cells.length || y < 0 || y >= cells[0].length || cells[x][y] == null) {
        return;
    }    
    //update distance, and previous node
    var dist = parent.dist + 1;
    var p = cells[x][y];
    if (dist < p.dist) {
        p.dist = dist;
        p.prev = parent;
        queue.push(p);
    }
}
}

myObj = new ShortestPathBetweenCellsBFS();  
let start = [0, 0];
let end = [4, 4];
myObj.shortestPath(matrix, start, end);

 