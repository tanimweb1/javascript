// let A=50, B=70, C=34, D=80, E=55;
// if (typeof A=="number"&&A>33){
//     console.table('pass')
// }
// else{
//     console.table('fail')
// }

// let a = '20', b=40;
// if(typeof b=='number'&& b>30){
//     console.log('pass')
// }
// else{
//     console.log('fail')
// }
// if(typeof a =='string' || a>10){
//     console.log('or')
// }
// else{
//     console.log('er')
// }

// if (a===b) {
//     console.table('a is number');

// }
// else{
//     console.table('a is string');
// }
// if(typeof a=='string'){
//     console.log(typeof a);
// }
// if (a < 16) {
//   console.log('a is les than 16');
// } else if (a > 16) {
//   console.log('a is greater than 16');
// } else {
//   console.log('a is equal to 16');
// }

// let A=50, B=70, C=34, D=80, E=55;
// switch (true) {
//     case (A>0 && B<32):
//         console.log('B is fail');
//         break;
//     case (C>33 && D<33):
//         console.log('C is pass');
//         break;
//     case (D>33 && E<33):
//         console.log('D is pass');
//         break;
// default:console.log('Your Result Not Fount');

// }

// for (let i=1 ; i<=21 ; i+=2) {
//     console.log (i);

// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
// 	let str = '';
// 	let count = 1;
// 	for (let j = 1; j <= 2 * n; ++j) {
// 		if (i + j >= n + 1 && (i >= j - n + 1)) {
// 			// Add a space after each number
// 			str += count.toString() + ' ';
// 			count++;
// 		} else {
// 			// Add two spaces for the gap
// 			str += ' ';
// 		}
// 	}

// 	console.log(str);
// }

// for(let i=0; i<5; i++){
// 	if(i%2 == 0){
// 		console.log(`${i} is an even Number`);
// 	}
// 	else{
// 		console.table(`${i} is an odd number`);
// 	}
// }

// let n = 10;
// for (let i = 1; i <= n; i++) {
// 	let str = "monowar     ";
// 	let space = '      ';
// 	console.log(space.repeat((n - i)) + str.repeat(i * 1 - 1));
// }

// function check(x,y){
// 	console.log ('Tolat Taka: ' + x*y);
// }
// check(444588,55454)

// function Name (x,y) {
// 	while(x<=y){
// 		var d=x/3;
// 		x++;
// 		console.log(d)

// 	}
// }
// Name(20,100)

// function check(x,y,z){
// 	if (x>=y && x<y) {
// 		console.log('x is larg')
// 	}
// 	else console.log('x is larg')

// 	if (x<=y && x>y){
// 		console.log ('y is odd')
// 	}
// 	else console.log('y is odd')
// }
// check(7,10,20)

// function check (x,y) {
// 	function checker(){
// 		if(x<y){
// 			return console.log('y is big');
// 		}
// 		else return console.log('x is big');
// 	}
// 	checker();
// 	if(x%2==0){
// 		return console.log('x is even');
// 	}
// 	else return console.log('x is odd');

// }
// check(10,20)

// function trcheck(x){
// 	(x%2==0)? console.log('even'):console.log('odd')
// }
// trcheck(3)

// let ternary =function trcheck(x){
// 	(x%2==0)? console.log('even'):console.log('odd')
// }
// ternary(3)

// let ternary =(x)=>{
// 	(x%2==0)? console.log('even'):console.log('odd')
// }
// ternary(3)

// let checkodd = (x, y) => {
// 	(x%2==0)? console.log('x is even'):console.log('x is odd')
// 	(y%2==0)? console.log('y is even'):console.log('y is odd')
// }
// checkodd(4,7)

// class Polygon {
//   constructor(x) {
//     this.name = "Hello world";
//   }
// }

// const poly1 = new Polygon();

// console.log(poly1.name);

// class WD {
//   constructor(name, expertise) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`Hello, my name is ${this.neme}` expert in ${this.expertise});
//   }
// }

// const otto = new Person("Otto");

// WD.introduce(); // Hello, my name is Otto

class Polygon {
  constructor(height, width, gap) {
    this.area = height / width;
    this.area1 = height * width;
    this.area2 = height + width - gap;
  }
}

console.log(new Polygon(100, 2).area);
console.log(new Polygon(55, 10).area1);
console.log(new Polygon(100, 88, 2).area2);

// class car {
//   constructor (parts){
//     this.star()
//   }
// }
// const tanim = [1, 4, 9, 16];
// const tanim1 = tanim.map((x)=>x*4)
// console.log(tanim1)

const Array = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'];
const Array1 = (Array.slice(2,8));
console.log(Array1)
console.log(Array.unshift(0, 2));
console.log(Array);
// p.style.fontSize = "50px";
