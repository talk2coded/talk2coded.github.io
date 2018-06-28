//Select color input
 
 let colorInput = document.getElementById('input[type=color]');

 //Select size input
 let submit1 = document.getElementById('sizePicker');
 // When size is submitted by the user , call makeGrid()

 submit1.addEventListener('click', function(e) {
 	e.preventDefault();
 	makeGrid();
 });

 function makeGrid() { 
 	let gridRow = document.getElementsByTagName('tr');
 	while (gridRow[0]) {
 		gridRow[0].parentNode.removeChild(gridRow[0]);
 	}
 	let pixelCanvas = document.getElementById('pixelCanvas');
 	let gridHeight = document.getElementById('inputHeight').value;
 	let gridWidth = document.getElementById('inputWeight').value;

 	for (let row = 1; row <= gridHeight; row++) {
 		let tr = document.createElement('tr');

 		pixelCanvas.appendChild (tr);
 		  for (let col = 1; col <= gridWidth; col++) {
 		  	let td = document.createElement('td');

 		  	pixelCanvas.lastChild.appendChild(td);
 		  }
 	}

 	$('td').click(function() {
 		let color = $('#colorPicker').val();
 		if ($(this).attr('style')) {
 			$(this).removeAttr('style');
 		}else {
 			$(this).attr('style', 'background-color:' + color);
 		}
 	});
 }