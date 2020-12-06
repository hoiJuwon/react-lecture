import React from 'react';
import styles from '../styles/Footer.module.css';

function Footer({onCreate, createInput, onChange}) {
	return (
		<div className={styles.wrapper}>
			<input type='text' onChange={onChange} name='createInput' placeholder='create todo' value={createInput} /> 
			<button onClick={onCreate}>create todo</button>
		</div>
	);
}

export default Footer;

