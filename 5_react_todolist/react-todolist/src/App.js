import React, {useState} from 'react';
import {Header, Main, Footer} from './components/index.js';
import styles from './styles/App.module.css'; 


function App() {
	const [items, setItems] = useState([
		{
			id : 0,
			content : 'Example',
			state : 'TODO'
		}
	]);
	const [createInput, setCreateInput] = useState('');

	const onToggle = (id) => {
		let itemslist = items;

		itemslist[id].state = 'DONE';

		setItems(itemslist);
		console.log(itemslist)
	}

	const onDelete = (id) => {
		let newItems = items.filter((item) => {
			if (item.id !== id) {
				return item;
			}
		})

		setItems(prevState => newItems);
	}

	const onCreate = () => {
		setCreateInput('')
		
		let nextId; 

		if (items.length === 0 ) {
			nextId = 1;
		} else {
			nextId = items[items.length - 1].id + 1;
		}
		let newItem = {
			id : nextId,
			content : createInput,
			state: 'TODO'
		}


		setItems([
			...items,
			newItem
		]);

		console.log(createInput)
	}

	const onChange = (e) => {
		setCreateInput(e.target.value);
	}
	
	return (
		<div className={styles.backg}>
		  <div className={styles.container}>
			  <Header className={styles.head}/>
			  <Main className={styles.main} items={items} onToggle={onToggle} onDelete={onDelete} />
			  <Footer className={styles.foot} onCreate={onCreate} createInput={createInput} onChange={onChange}/>
		  </div>
		</div>
	 );
}

export default App;