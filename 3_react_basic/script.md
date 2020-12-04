# Component 구조 알아보기 

- 리액트 컴포넌트는 함수형 / 클래스형이 있는데, 현재는 함수형이 표준이 되어가고 있음. 
- 학습하기도 훨씬 쉽다. (함수형으로 입문한 후에 클래스형도 스스로 살펴보면 좋음)

- 리액트의 컴포넌트는 쉽게 생각하면 트리를 떠올리면 된다. (폴더구조와 일치함)


## index.js 와 App.js 를 살펴보면서 기본적인 컴포넌트의 구조를 살펴보자
- 일단은 전체적인 틀만 보면서 익숙해지자 ! 
- 상단에서는 import 를 통해 외부 파일을 불러오고 있고, 함수 부분이 있으며, 맨 아래에서는 해당 함수 컴포넌트를 export 하고 있다.
- index.js 에서 App.js 를 import 하고 있고, App.js 에서는 함수 App 을 export 하고 있다.
- 컴포넌트는 불러와서 얼마든지 사용가능하다. (여러번 사용가능함)
- 이렇듯 컴포넌트는 export 와 import 를 통해서 계층을 만들고, 구조를 만든다고 생각하면 된다.
- 사용자 정의 컴포넌트는 꼭 대문자로 작성해야한다.

## 리액트는 SPA 다 !
- public/index.html 을 살펴보면, <div id='root'></div> 를 확인할 수 있다. 
- 그리고 index.js 를 보면, render 함수를 통해 실제 DOM 인 root를 두번째 인자로 던지는 것을 확인 할 수 있다.
- 이는 즉 App 컴포넌트를 실제 돔에 내부에 렌더링 되도록 하는 것이다. 
- 그렇다면, render 함수는 내부적으로 사용자 정의 컴포넌트를 받고, 해당 컴포넌트(virtual dom) 을 diff 알고리즘을 통해서 업데이트 할 것을 알 수 있다.
- render 함수 내부에서 vdom 을 실제 dom 에 append 하는 과정이 있을 것을 예측 할 수 있다. 


## JSX
- 컴포넌트 구조를 조금더 자세히 살펴보면, function 안에 html 과 비슷한 부분이 있는 걸 알 수 있다.
- 해당 부분은 html 처럼 보이지만, 실제로는 자바스크립트이다. 
- 해당 부분은 jsx 라고 불리는데, jsx 로 작성된 부분은 babel 을 통해서 javascript 로 컴파일 된다.

- return <div>App.js</div> -> React.createElement('div', null, 'App.js') ;
- 조금만 더 자세히 설명하자면, jsx로 짜진 구조는 React.createElement 를 재귀 호출하면서 실제 구조를 만든다.
- createElement 함수를 통해서 jsx 구조가 자바스크립트 object 형태로 변환되고, 이를 render 함수를 통해서 화면에 그린다고 생각하면 된다.

## jsx 기본 문법 규칙들
- 상단에는 하나의 태그로 꼭 감싸줘야한다. (Fragment 사용 가능 <></>)
- JSX 안에서 자바스크립트를 사용할때는 {} 로 감싸서 사용한다.
- <div>{name}</div>
- style 을 먹일때는 css 의 class 가 아닌 className 을 사용해야한다.
- 주석은 {/* 주석은 이렇게 작성 */} 꼭 중괄호로 감싸줘야한다.


## Props / State 
- Props 는 부모 컴포넌트로부터 물려받는 속성
- 부모 컴포넌트에서 props 를 내려주면, 자식 컴포넌트에서 받는 구조
- 부모 컴포넌트에서 전달하는 props 값이 바뀌면 자식 컴포넌트에서 자동으로 업데이트 된다.

```

// App.js
import Hello from './Hello.js';

function App() {
	return (
		<Hello name='react'/>
	);
}

export default App;

// Hello.js 

function Hello(props) { 
	return ( 
		<div>안녕하세요 {props.name}</div>
	);
}

export default Hello;

```

### multi props with destructuring

``` 
//App.js

import Hello from './Hello.js';

function App() {
	return (
		<Hello firstname='react' lastname='js' />
	)
}

export default App;

// Hello.js

function Hello({firstname, lastname}) {
	return (
		<div>{firstname} {lastname}</div>
	)
}

export default Hello;
```

### defaultProps : props를 아무 지정하지 않으면 사용되는 값을 정의 할 수 있다.

```
Hello.defaultProps = {
	name : '이름없음'
}
```

### props.children

- 컴포넌트 태그 사이의 값을 사용할 수 있다. 말그대로 부모 컴포넌트에서 자식 컴포넌트를 사용할때 사이에 넣은 자식들을 말함.

```
// Parent.js

import Child from './Child.js'

function Parent() {
	return (
		<Child>
			<div>1</div>
			<div>2</div>
		</Child>
	)
}

export default Parent;

// Child.js

function Child({children}) {
	return (
		{ children }
	)
}

export default Child;
```
