import React from 'react';
import Child from './Child';

function Parent() {
	// hooks 를 배우기 전이라 기본 자바스크립트 자료형으로 선언
	const people = [
		{
			firstname : '재증',
			lastname : '고'
		},
		{
			firstname : '서진',
			lastname : '안'
		},
		{
			firstname : '재영',
			lastname : '방'
		},
	]

	return (
		<div>
			{people.map((person) => {
				return (
					<Child firstname={person.firstname} lastname ={person.lastname}/>
				)
			})}
		</div>
	);
}

export default Parent;

