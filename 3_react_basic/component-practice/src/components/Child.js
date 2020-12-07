import React from 'react';

function Child({firstname, lastname}) {
	return (
		<div>
			<div>
				제 이름은 {lastname}{firstname} 입니다.
			</div>
		</div>
	);
}

export default Child;

