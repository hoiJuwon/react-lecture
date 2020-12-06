import React,{useState} from 'react';
import Item from './Item.js';
import styles from '../styles/Main.module.css';

function Main({items, onToggle, onDelete}) {
	const [isDeleteMode, setIsDeleteMode] = useState(false);

	const onToggleDeleteMode = () => {
		setIsDeleteMode(true);
	}


	return (
		<div className={styles.wrapper}>
			<div onClick={onToggleDeleteMode} className={styles.deleteBtn}>delete</div>

			<div className={styles.todolist_wrapper}>
				{items && items.map((item) => {
					return(
						<Item item={item} onToggle={onToggle} onDelete={onDelete} isDeleteMode={isDeleteMode} />
					);
				})}

			</div>
		</div>
	);
}

export default Main;

