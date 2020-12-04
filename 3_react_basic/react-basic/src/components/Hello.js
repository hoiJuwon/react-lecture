import React from 'react';

function Hello({children, name}) {
	return (
		<div>
			<div>{name}</div>
			<div>{children}</div>
		</div>
	)
}

Hello.defaultProps = {
	name : 'defaultname'
}

export default Hello;
