import React, {useState, useEffect} from 'react';
import styles from '../styles/Item.module.css';
import {BsCircle, BsTrash} from 'react-icons/bs';
import {AiFillCheckCircle} from 'react-icons/ai';

function Item({item, onDelete, onToggle, isDeleteMode}) {

	const [isDone, setIsDone]  = useState(false) ;

	const onToggleIsDone = () => {
		setIsDone(!isDone);
	}

	useEffect(() =>{
		if (item.state === 'DONE') {
			setIsDone(true) ;
		}
		console.log(item.length)
	},[])


	return (
			<div className={styles.item_wrapper} >
				{isDone ?
					<div className={styles.content_wrapper}>
						<div className={styles.item_id}>{item.id}</div>
						<div className={styles.content_done}>{item.content}</div>
					</div> : <div className={styles.content_wrapper}>
						<div className={styles.item_id}>{item.id}</div>
						<div className={styles.content} >{item.content}</div>
					</div>
				}
				{isDeleteMode ? 
					<>
						<BsTrash className={styles.checkBtn} onClick={() => onDelete(item.id)} />

					</>: 
					<>
						{isDone ?
							<>
								<AiFillCheckCircle className={styles.checkBtnAi} onClick={() => {
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

