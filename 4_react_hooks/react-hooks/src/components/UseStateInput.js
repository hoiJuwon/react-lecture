import React, { useState } from 'react';

function UseStateInput() {
	const [input, setInput] = useState('');

	const onChange = e => {
		setInput(input => e.target.value) ;
	}

	const onReset = () => {
		setInput(input => '')
	}

	return (
		<div>
			<input type='text' placeholder='input' onChange={onChange} value={input}/> 
			<button onClick={onReset} >reset</button>
		</div>
	);
}

export default UseStateInput;

