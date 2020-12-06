import React, {useState, useEffect} from 'react';
import styles from '../styles/Main.module.css';

function Main({items, onToggle, onDelete}) {
	const [isDeleteMode, setIsDeleteMode] = useState(false);

	const onToggleDeleteMode = () => {
		setIsDeleteMode(true);
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.deleteBtn}>delete</div>

			<div className={styles.todolist_wrapper}>
				{items && items.map((item) => {
					return (
						<div className={styles.item_wrapper} key={item.id}>
							<div className={styles.content} >{item.content}</div>
							{isDeleteMode ? 
								<>
									<div onClick={() => onDelete(item.id)}>삭제 버튼</div>

								</>: <>
									<div onClick={() => onToggle(item.id)}>완료 버튼</div>

							</>}
						</div>
					)
				})}

			</div>
		</div>
	);
}

export default Main;

