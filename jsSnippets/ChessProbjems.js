//  Chessboard -  find nearest places for a Horse

// Working code- 
//https://jsfiddle.net/shbn/j4y8ez92/54/

function drawLayout(possibilities=[],currPos){

	let content= "<div id='layout'>";
	for(let x=1; x<=8; x++){
  		let row ="<div class='row'>";
        for(let y=1; y<=8; y++){
            let className ="column";
            className += (possibilities.indexOf(x+"-"+y) > -1) ? " possible" : "";
            className +=  currPos[0] == x && currPos[1] == y ? " current" : "";          
            row += "<div class='"+className+"'>"+x+"-"+y+"</div>";
        }
     
     row += "</Div>"
     content += row ;
  
  }
  content +="</div>";
  
  var layout = document.createElement("Div");
  layout.innerHTML = content;
  document.body.appendChild(layout);  
}
function getPositions (currPos) {
		let currX = currPos[0],currY=currPos[1];
    let minX = currX - 2 < 1 ? 1 : (currX - 2);
    let maxX = currX + 2 > 8 ? 8 : (currX + 2);
    let minY = currY - 2 <1 ? 1: (currY - 2);
    let maxY = currY + 2 >8 ?8 :(currY + 2) ;
    let possibilities = [];

    for (let x = minX; x >= minX && x <= maxX; x++) {
      for (let y = minY; x >= minY && y <= maxY; y++) {
        let ydif = y > currY ? (y - currY) : (currY - y);
        let xdif = x > currX ? (x - currX) : (currX - x);       
        if ((ydif == 2 && xdif == 1) || (ydif == 1 && xdif == 2)){
            possibilities.push(x+"-"+y);
        }
      }

    }
    return(possibilities);
}; 


let currentPos = [5,5];
let possibilities = getPositions(currentPos);

drawLayout(possibilities,currentPos);

/* CSS

#layout{
    width:100px;
    height:100px;
  }
  body {
    color:'#000'
  }
  .column{
    width:50px;
    height:50px;
    float:left;
    display:inline;
    border:1px solid #ccc;
    text-align:center;
    padding-top:20px;
  }
  .column.possible{
    background-color:green;
  }
  .column.current{
    background-color:gray;
  }
  .row{
    width:450px;
    clear:both;
  }

  */