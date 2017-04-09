var canvas = document.getElementById("c").getContext("2d");
var grid = [];

for(var y = 0; y < 300; y++){
    grid.push([]);
    for(var x = 0; x < 300; x++){
        grid[y].push(0);

        if(Math.random() * 100 < 75){
            grid[y][x] = 1;
        }
    }
}

function getNeighbors(x, y){
    var i = 0;

    try{
        if(grid[y][x - 1] == 1) i++;
        if(grid[y][x + 1] == 1) i++;
        if(grid[y - 1][x] == 1) i++;
        if(grid[y + 1][x] == 1) i++;
        if(grid[y - 1][x - 1] == 1) i++;
        if(grid[y + 1][x + 1] == 1) i++;
        if(grid[y - 1][x + 1] == 1) i++;
        if(grid[y + 1][x - 1] == 1) i++;
         if(grid[y][x - 2] == 1) i++;
        if(grid[y][x + 2] == 1) i++;
        if(grid[y - 2][x] == 1) i++;
        if(grid[y + 2][x] == 1) i++;
    }catch(e){

    }

    return i;
}

setInterval(function(){
    canvas.clearRect(0, 0, 600, 600);
    
    for(var y = 0; y < 300; y++){
        for(var x = 0; x < 300; x++){
            if(grid[y][x] == 1){
                canvas.fillStyle = "black";
                canvas.fillRect(y * 2, x * 2, 2, 2);
            }
        }
    } 

    for(var y = 0; y < 300; y++){
        for(var x = 0; x < 300; x++){
            if(grid[y][x] == 1){
                if(getNeighbors(x, y) < 2) grid[y][x] = 0;
                else if(getNeighbors(x, y) > 2 && getNeighbors(x, y) < 3) grid[y][x] = 1;
                else if(getNeighbors(x, y) > 3) grid[y][x] = 0;
            }else{
                if(getNeighbors(x, y) == 3) grid[y][x] = 1;
            }
        }
    } 
}, 1/10);

