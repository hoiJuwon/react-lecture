import React from 'react';
import styles from '../styles/Footer.module.css';
import {BsPlusCircleFill} from 'react-icons/bs';

function Footer({onCreate, createInput, onChange, onKeyPress}) {
	return (
		<div className={styles.wrapper}>
			<input className={styles.create_input} type='text' onChange={onChange} name='createInput' placeholder='Todo' value={createInput} onKeyPress={onKeyPress}/> 
			<BsPlusCircleFill className={styles.add_btn} onClick={onCreate} />
		</div>
	);
}

export default Footer;

