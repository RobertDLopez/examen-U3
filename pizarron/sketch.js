let clickX
let clickY
let relX
let relY
let band = 1
let fig = 1

function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {
	//Funcion que establece el color
	setColor()

	//MENU
	if (mouseY > 125) {
		cursor(CROSS)
	}
	else{
		cursor(ARROW)
	}

	push()
	stroke('black')
	line(0, 125, width, 125)
	push()
	fill('gray')
	rect(0,0,width, 125)
	pop()
	line(125, 0, 125, 125)
	text('COLORES: ', 7, 15)
	text('FIGURAS: ', 170, 15)
	pop()


}

//Establecer el color de la figura (sin relleno)
function setColor(){
	let x
	x = document.getElementById('col').value
	stroke(x)
	noFill()

}

//Serie de funciones que eligent el tipo de figura con los botones del menu
function setRect(){
	fig = document.getElementById('rect').value
}
function setLine(){
	fig = document.getElementById('line').value
}
function setCircle(){
	fig = document.getElementById('circle').value

}

//funcion para pintar la figura con doble click
function doubleClicked(){
	if (band == 1 && mouseY> 125) {
		clickX = pmouseX
		clickY = pmouseY
		band = 0
	}
	else{
		if (mouseY> 125) {
			relX= pmouseX
			relY= pmouseY
			//rect(clickX, clickY, relX-clickX, relY-clickY)
			if (fig == 1) {
				rect(clickX, clickY, relX-clickX, relY-clickY)	
			}
			if (fig == 2) {
				DDA(clickX, clickY, relX, relY)
			}
			if (fig == 3) {
				if (relX>clickX) {
					Circulo(clickX, clickY, relX-clickX)
				}
				else{
					Circulo(clickX, clickY, -relX+clickX)
				}

			}
		}
			

		band= 1
	}

	//prueba de botones
	/*if (fig == 1) {
		alert('rect')
	}
	if (fig == 2) {
		alert('line')
	}
	if (fig == 3) {
		alert('circle')
	}*/

	  return false
}


//ALGORITMO DDA
function DDA(x1, y1, x2, y2)
{
	

	// Variables de inicio
	let deltaX;
	let deltaY;
	let steps;


	if (x1 > x2 && y1 > y2)
	{
		steps = x1;
		x1 = x2;
		x2 = steps;

		steps = y1;
		y1 = y2;
		y2 = steps;
	}


	// Calcula Delta para X y Y
	deltaX = Math.abs(x2 - x1);
	deltaY = Math.abs(y2 - y1);


	// Calcula los pasos necesario
	if (deltaX >= deltaY)
	{
		steps = deltaX;
	} else steps = deltaY;


	if ((x2 - x1) < 0) deltaX *= -1;
	if ((y2 - y1) < 0) deltaY *= -1;


	// Calcula la incrementacion para X y Y
	deltaX = deltaX / steps;
	deltaY = deltaY / steps;

	steps = Math.floor(steps);
	for (let i = 0; i != steps; i++)
	{
		point(x1, y1);

		x1 += deltaX;
		y1 += deltaY;
	}
	
}
//ALGRITMO DE CIRCULO
function Circulo(xC, yC, r){
	let x= 0
	let y= r
	let p = parseInt(5/4 - r)

	for (let i = x; i < y; i++) {
		if (p < 0) {
			x++
			p= p + 2*x +1
		} 
		else {
			x++
			y--
			p= p + 2*x + 1 - 2*y
		}
		point(x+xC, y+yC)
		point(y+xC, x+yC)
		point(y+xC, -x+yC)
		point(x+xC, -y+yC)
		point(-x+xC, -y+yC)
		point(-y+xC, -x+yC)
		point(-y+xC, x+yC)
		point(-x+xC, y+yC)
	}
}