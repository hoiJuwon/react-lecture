import React, {useState, useEffect} from 'react';
import styles from '../styles/Item.module.css';
import {BsCircle, BsCircleFill, BsTrash} from 'react-icons/bs';

function Item({item, onDelete, onToggle, isDeleteMode}) {

	const [isDone, setIsDone]  = useState(false) ;

	const onToggleIsDone = () => {
		setIsDone(!isDone);
	}

	useEffect(() =>{
		console.log('ffjdsalkfjsdlk')
		if (item.state === 'DONE') {
			setIsDone(true) ;
		}
		console.log(item.length)
	},[])


	return (
			<div className={styles.item_wrapper} >
				{isDone ?
					<>
						<div className={styles.content_done}>{item.content}</div>
					</> : <>
						<div className={styles.content} >{item.content}</div>
					</>
				}
				{isDeleteMode ? 
					<>
						<BsTrash className={styles.checkBtn} onClick={() => onDelete(item.id)} />

					</>: 
					<>
						{isDone ?
							<>
								<BsCircleFill className={styles.checkBtn} onClick={() => {
									onToggle(item.id);
									onToggleIsDone();
								}} />
							</> : <>
								<BsCircle className={styles.checkBtn} onClick={() => {
									onToggle(item.id);
									onToggleIsDone();
								}}/>
							</>
						}
					</>
				}
			</div>
		)
}

export default Item;

