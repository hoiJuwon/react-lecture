import React, { useState} from 'react';

function UseStateInputMultiple() {
	const [input, setInput ] = useState({
		name: '', 
		nickname: '',
	})

	const {name, nickname} = input;

	const onChange = (e) => {
		const {name, value} = e.target;

		setInput(prevInput => {
			return {
				...prevInput,
				[name] : value
			}
		})
	}

	return (
		<div>
			name : {name}
			<br/>
			nickname : {nickname}
			<br/>
			<input type='text' name='name' placeholder='name' value={name} onChange={onChange}/>
			<input type='text' name='nickname' placeholder='nickname' value={nickname} onChange={onChange}/>
		</div>
	);
}

export default UseStateInputMultiple;

