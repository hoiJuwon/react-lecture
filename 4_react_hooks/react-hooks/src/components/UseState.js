import React,{useState} from 'react';

function UseState()  {
	const [num, setNum] = useState(0);

	const onIncrease = () => {
		setNum(prevState => prevState + 1);
	}

	const onDecrease = () => {
		setNum(prevState => prevState -1);
	}
	return (
		<div>
			<h1>Practice UseState</h1>
			<h2>Counter : {num}</h2>
			<button onClick={onIncrease}>+</button>
			<button onClick={onDecrease}>-</button>
		</div>
	)
}

export default UseState;
