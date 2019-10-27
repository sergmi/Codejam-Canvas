let item_first,	item_last,
canvas = document.getElementById("draw"),
ctx = canvas.getContext("2d"),
c = [["CCCCCA"]],
matrix = [];

let matrix_first_list_item = document.getElementById("first_matrix");
matrix_first_list_item.addEventListener("click", reloadMatrixListItem, false);
let matrix_second_list_item = document.getElementById("second_matrix");
matrix_second_list_item.addEventListener("click", reloadMatrixListItem, false);
let matrix_third_list_item = document.getElementById("third_matrix");
matrix_third_list_item.addEventListener("click", reloadMatrixListItem, false);

function drawMatrix(){
	let num_column = matrix[0].length,
	num_row = matrix.length,
	scale_column = canvas.width / num_column,
	scale_row = canvas.height / num_row;
	
	if(typeof(matrix[0][0])==="string"){item_first = "#", item_last = "";}
	else if(typeof(matrix[0][0][0])==="number"){item_first = "rgba(", item_last = ")";}
	
	for (let r = 0; r < num_row; r++){
		for (let c = 0; c < num_column; c++){
			ctx.fillStyle = item_first + matrix[r][c] + item_last;
			ctx.fillRect(c*scale_column,r*scale_row,scale_column,scale_row);
		}
	}
}

function copyMatrix(x){
	matrix = [];
	x.forEach(function(s,i,m){
		matrix[i] = [];
		x[i].forEach(function(t,k,n){
			matrix[i][k] = t;
		})
	})
}

function reloadMatrixListItem(){
	let matrix_list_item = document.getElementsByClassName("checked-matrix-list-item")[0];
	if(matrix_list_item){matrix_list_item.className = "";}
	let temp = event.currentTarget.id;
	if(temp === "first_matrix"){copyMatrix(a); drawMatrix();}
	else if(temp === "second_matrix"){copyMatrix(b); drawMatrix();}
	else if(temp === "third_matrix"){drawImage();}
	document.getElementById(temp).className = "checked-matrix-list-item";
	temp = null;
}

function drawImage(){
	let image = new Image();
	image.src = "img/image.png";
	image.onload = function(){
		ctx.drawImage(image,0,0,512,512);
	}
}

copyMatrix(c);
drawMatrix();