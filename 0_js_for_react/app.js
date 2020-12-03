// helloworld 
console.log('hello world')

/*
리액트 학습전 알아야하는 자바스크립트 기초

ch0. let vs var vs const 
ch1. basic language (iterator, conditional statements)
ch2. Arrow function  
ch3. The Spread & rest Operator
ch4. Objects and Object Destructuring
ch5. Array functions (map, filter)

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


// ch3. The Spread & rest Operator

// Spread 연산자를 통해서 배열, 문자열, 객체등의 요소를 분해해서 개별 요소로 가져올 수 있다.
// 리액트에서는 불변성을 지키는 목적으로 배열 복사를 할때 많이 사용한다.
const zoo = ['cat' , 'dog', 'elephant', 'lion']

const addAnimal = (zoo, animal) => {
	let zooArr = [...zoo, animal];

	return zooArr;
}

addAnimal(zoo, 'eagle');

const arr = ['a', 'b', 'c']
console.log(arr);

console.log(...arr);

const arr2 = [1,2,3]
const arr3 = [...arr, ...arr2]

console.log(arr3)

// 객체 spread

const obj1 = { a: 1, b:2}
const obj2 = {c:3}

const obj3 = {...obj1, ...obj2}

// rest operator

// 나머지 arguments 들을 배열로 묶어주는 파라미터 역할을 한다.

const add = (a, b, ...rest) => {
	console.log(a)
	console.log(b)
	console.log(rest)
}

add(5,3,4,4,4,4,5)


// ch4. Objects and Object Destructuring


// 파이썬 딕셔너리랑 사용법은 일치

const js_obj = {
	key : 'value'
}

// destructuring은 변수의 depth 가 너무 깊어질때 많이 활용
const abc = {
	a : 1, 
	b : 2, 
	c : 3
}

const {a,b,c} = abc;

console.log(a, b, c)

// ch5. Array Functions(map, filter)
//
// forEach와 map 의 차이는 return 이다 !

const animals = ['lion', 'eagle']

animals.forEach(animal => {
	console.log(animal)
})

// map 의 목적은 매핑이다, 포인트는 새로운 배열을 리턴한다는 점! 목적을 생각해두고 사용하자

const cuteAnimals = animals.map((animal) => {
	return 'cute' + animal
})

// reduce 초기값 없이
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6

// reduce 초기값 있
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
});
// 1 2 1
// 3 3 2
result; // 6 

// reduce 를 이용해서 모든 array function 이 구현 가능함
// 자주 사용하는 array function -> map, filter, find, findIndex, includes, every 

// reduce 를 이용해서 map 과 같은 기능 구현
result = oneTwoThree.reduce((acc, cur) => {
  acc.push(cur % 2 ? '홀수' : '짝수');
  return acc;
}, []);
result; // ['홀수', '짝수', '홀수']

// reduce 를 이용해서 filter와 같은 기능 구현
result = oneTwoThree.reduce((acc, cur) => {
  if (cur % 2) acc.push(cur);
  return acc;
}, []);
result; // [1, 3]
