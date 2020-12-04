# React Hooks

## Hooks의 등장
- React 16.8 부터 Hooks 라는 기능이 등장하면서 함수형 컴포넌트에서도 상태 관리를 할 수 있게 되었다.
- Hooks 등장 이후 클래스형 컴포넌트가 아닌 함수형 컴포넌트가 표준으로 자리잡아가고 있다.

## useState
- useState hook은 초기값을 인자로 받고, 배열을 리턴한다.
- 배열의 첫번째 원소는 현재상태(prevState), 두번째 원소는 (Setter 함수)
- 배열 비구조화 할당을 이용해서 배열을 바로 분해한다.
```
const [state, setState] = useState(0);
```

- Setter 함수를 이용해서 업데이트를 진행하는데, 업데이트 하는 방법이 두가지가 있다.
	1. setState(state + 1);
	2. setState(state => state + 1);

- 1번의 방법은 기존의 state를 새로운 state + 1 의 값으로 대체 한다. 하지만 이는 다음과 같은 상황에서 문제가 생긴다.
```
setState(state + 1);
setState(state + 1);
setState(state + 1);
```
- 이러한 상황에서 의도는 1을 3번 더해서 총 3을 더하는 것이지만, 실제로 결과를 확인해보면 1만 더해져있을 것이다.
- 이는 setState 자체가 비동기적으로 동작하기 때문인데, 이러한 문제를 해결하여 확실한 이전의 상태를 가져와서 갱신을 하려면 함수형 업데이트를 활용해야한다.

```
setState(prevState => prevState + 1);
setState(prevState => prevState + 1);
setState(prevState => prevState + 1);
```
- 이러한 방식으로 작성할 경우 의도한대로 작성 할 수 있다.

- 상황에 맞게 적절한 방식으로 업데이트를 진행해야하는데, 웬만하면 비동기적인 코드는 파악이 힘드므로 함수형 업데이트로 진행하는 편이 좋다.

- useState 로 설정한 state 값이 변경되면, 해당 함수 컴포넌트가 다시 실행되지만(Virtual dom 을 다시 그린다.), useState 는 실행은 되지만 별다른일을 하지 않는다.( 상태값이 초기값으로 돌아가지 않는다.)
- 다시 실행된 후, jsx 부분에서 달라진 부분이 있다면 달라진 부분만 real dom 에서 재렌더링 한다. (diff algorithm)
- 그렇다면, useState 를 사용하는 함수 컴포넌트에서 선언한 함수들도 다시 생성된다는 뜻이다. (굳이 다시 생성될 필요가 없는데도 불구하고..)
- 해당 부분을 해결하기 위해서는 useCallback 훅을 사용해야한다!

#### useState 실습

	1. useState 를 통해서 Counter app 만들어보기 
	2. useState 를 통해서 input 값 관리하기
	3. useState 를 통해서 input 여러개 효율적으로 관리하기 (destructuring)

## useCallback 
- problem : useState 를 통해 선언된 state 는 값이 변경 되면, 함수 컴포넌트 전체가 다시 실행된다 (vdom 에 재렌더링) -> 함수 컴포넌트 내에 선언된 함수들도 다시 생성된다.
- solution : useCallback 을 통해서 다시 선언될 필요없는 함수를 캐싱해준다 !

```
const onClickBtn = useCallback(() => {
	// 함수 기능
}, [])
```
- useCallback 의 deps[] 를 통해서 캐싱하는 시점을 설정할 수 있다. (deps 에 넣은 state 값이 변할때 캐싱을 한다.)

#### useCallback 실습
	1. useState 실습에서 작성한 컴포넌트 내의 모든 함수들을 useCallback 훅을 통해서 리렌더링을 최소화 해보자 !

#### useMemo
- useCallback 이 함수 자체를 캐싱한다면, useMemo 는 값을 캐싱해준다.
- useMemo 를 활용하면 복잡한(비용이 높은) 함수의 결과 값을 캐싱하여, 컴포넌트가 재실행될때 다시 함수가 호출되어 연산하는 것을 막을 수 있다.
- useCallback 과 마찬가지로 deps 를 이용해서 값을 캐싱하는 시점을 설정 할 수 있다. 설정한 시점에 연산한 값을 캐싱해둔다고 생각하면 된다.

```
useMemo(() => calculateComplicateSomething(), []);
```

#### React.Memo -> 컴포넌트 렌더링 최적화
- react 는 부모 컴포넌트가 재실행되면, 자식 컴포넌트 또한 재실행된다.
- React.Memo 를 이용해서 부모 컴포넌트의 props 가 바뀌지 않았으면, 리렌더링을 최소화하여 렌더링 최적화를 할 수 있다.
```
export default React.Memo(Test);
```

## useEffect 
- 함수형 컴포넌트에서는 라이프사이클을 '특정 데이터'에 포커스를 맞춘다.

```
// componentDidMount && componentDidUpdate
useEffect(() => {
	console.log('컴포넌트가 렌더링 될때 실행되고, targetState가 변할때마다 실행됩니다.')
},[targetState]);

// componentDidUpdate && componentWillUnmount
useEffect(()=> {
	console.log('targetState 가 바뀌었다!') ;

	return (() => {
		console.log('targetState가 바뀔 예정입니다.');
	})
},[targetState])
```

- deps 를 비워두면, 컴포넌트가 렌더링 될때만 실행된다. (deps를 아예 넣지 않으면, 즉 빈배열을 넣지 않으면 컴포넌트가 업데이트 될때마다 실행된다)
- 마찬가지로 deps 가 비워진 상태에서의 cleanup 함수는 컴포넌트의 언마운트 시점에 호출된다.

- useEffect 내에서 특정 state나 props를 사용한다면, deps에 넣어주는 것이 규칙이다.
- 만약 넣어주지 않는다면, useEffect에 등록된 함수가 실행될때 가리키는 state나 props의 상태가 최신의 상태를 가리키지 않는다.
- useEffect 내부에서 호출하는 함수가 사용하는 state를 빼먹는 경우가 빈번한데, 내부에서 호출하는 함수가 아무런 state를 사용하지 않을때를 제외하고는 deps를 꼭챙겨줘야한다.

- 추천하는 useEffect 관련 글 : https://overreacted.io/a-complete-guide-to-useeffect/

- useEffect 를 이용한 api call 은 뒤에서 자세히 알아보자.


## useRef
- 실제 DOM 을 잡을 수 있는 hook으로 알려져있는데, useRef 를 이용하면 값이 변경되어도 리렌더링이 되지 않는 state 를 만들 수 있다.
- 리렌더링을 하더라해도 기존의 값이 유지된다. (실제 DOM 을 잡기 때문)
- useRef 로 만든 state 는 값을 변경할때 꼭 state.current 로 접근을 해줘야한다.

- useRef 와 useEffect를 활용하면, componentDidUpdate 시점을 잡을 수 있다.
```
const mountref = useRef(false) ;

useEffect(() => {
	if (mountRef.current) {
		console.log('component Update');
	} else {
		mountRef.current = true;
	}
})
```

## custom hooks
- react 에서는 hooks 에 여러 제약 조건이 있다. 
- hooks 는 함수 내부에서 선언 될 수 없으며, 조건문 안에 위치 할 수 없다. 
- 즉, hooks는 실행이 확실히 보장이 될때만 사용할 수 있다. ( react hooks에서 state를 저장하는 방식때문 함수 컴포넌트는 렌더링 되었는데 hooks 가 렌더링 되지 않을 경우 인덱스가 보장이 되지 않음)
- custom Hook 을 제작하여 함수 컴포넌트 바깥으로 뺀다면 이러한 불편함을 해소할 수 있다.

## hooks 최종 실습
- TODOLIST 만들기
