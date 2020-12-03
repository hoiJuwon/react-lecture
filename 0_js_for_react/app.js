// helloworld 
console.log('hello world')

/*
리액트 학습전 알아야하는 자바스크립트 기초

ch0. let vs var vs const 
ch1. basic language (iterator, conditional statements)
ch2. Arrow function  
ch3. The Spread & rest Operator
ch4. Objects and Object Destructuring
ch5. Array functions (map, filter, reduce)

*/

// ch0. let vs var vs const 

// let vs var 

// var의 변수 재선언 문제
var a = 'test' 
var a = 'test2'

console.log(a)

// var hoisting 문제
b = 'test'
var b
console.log(b)

// var 는 function scope vs let, const 는 block scope
function helloVar() {
	for(var i = 0; i<4; i++) {
		console.log(i,'inside for loop');
	}

	console.log(i, 'outside for loop');
}

helloVar();

function helloLet(){
	for(let j = 0; j < 4; j++)  {
		console.log(j,'inside for loop');
	}

	console.log(j, 'outside for loop') ;
}

helloLet();

// let vs const 
let let_name = 'juone';

const const_name = 'juone';

console.log(let_name, 'let'); 
console.log(const_name, 'const');

let_name = 'juwon';
console.log(let_name, 'let');

const_name = 'juwon';

// const 는 말그대로 constant, 상수를 뜻함. (불변성)
// console.log(const_name, 'const');

// const 로 선언된 객체
// 자바스크립트의 Object(객체) 는 Object 자체가 아니라 주소가 할당된다.
// 즉, 객체 내의 key value 값이 바뀌어도 const에 할당된 Object의 주소값은 불변이므로 문제없이 객체 내의 값을 바꿀수 있다.

const person = {
	'age' : 20, 
	'name' : 'Sam'
}

console.log(person.age);

person.age += 1;

console.log(person.age);

// ch1. basic language

// for loop

for(let i = 0 ; i < 5; i++) {
	console.log(i);
}

// if condition

let a = 'foo' ; 

if (a === 'foo') {
	console.log('a === foo');
} else {
	console.log('a != foo');
}

// ternary Operator (삼항연산자)

let isStudent = true; 

let price = isStudent ? '8,000원' : '20,000원';

console.log(price);


// ch2. Arrow function 
//
// 화살표 함수는 익명으로 작성해야한다.

const foo = () => {
	console.log('foo');
}

foo();

// 암묵적 리턴

const fooImplicitReturn = () => { console.log('foo') ; }
