 export default class Shape {
	constructor(width = "", height = "", radius = "") {
		if (this.constructor == Shape) {
			throw " No Object";
		}

		this.width = width;
		this.height = height;
		this.radius = radius;
	}

	 area() {
		throw "Method Not Implemented";
	}
   permeter() {
		throw "Method Not Implemented";
	}
}

//  inheritance ,, subClass [child], superClass(Parent Class)
export class Rect extends Shape {
	constructor(width, height) {
		super(width, height);
	}

	// override -- Polymorphism
	area() {
		console.log(`Area of rectangle = ${this.width * this.height}`);
	}
	permeter() {
		console.log(`permeter of rectangle = ${(this.width + this.height)*2}`);
	}
}

export class Square extends Shape{
constructor(width){
  super(width)
}
	// override -- Polymorphism
area(){
  console.log(`Area of square = ${this.width * this.width}`);
}
permeter(){
  console.log(`permeter of square = ${(this.width)*4}`);
}
} 
export class Circle extends Shape{
  constructor(radius){
    super(radius)
  }
	// override -- Polymorphism
  area(){
  console.log(`Area of circle = ${(3.14 )}`);
 }
 permeter(){
  console.log(`permeter of circle = ${(4)}`);
 }
}

