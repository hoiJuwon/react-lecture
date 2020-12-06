import React, {useState} from 'react';
import {Header, Main, Footer} from './components/index.js';
import styles from './styles/App.module.css'; 


function App() {
	const [items, setItems] = useState([
		{
			id : 0,
			content : 'Test',
			state : 'TODO'
		}
	]);
	const [createInput, setCreateInput] = useState('');

	const onToggle = (id) => {
		let itemslist = items;
		let targetItem = itemslist[id];

		if (targetItem.state === 'DONE') {
			itemslist[id].state = 'TODO';
		} else if (targetItem.state === 'TODO') {
			itemslist[id].state = 'DONE';
		}

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

	const onKeyPress = (e) => {
		if (e.key === 'Enter') {
			onCreate();
		}
	}
	
	return (
		<div className={styles.backg}>
		  <div className={styles.container}>
			  <Header className={styles.head}/>
			  <div className={styles.dashedline}></div>
			  <Main className={styles.main} items={items} onToggle={onToggle} onDelete={onDelete} />
			  <Footer className={styles.foot} onCreate={onCreate} createInput={createInput} onChange={onChange} onKeyPress={onKeyPress}/>
		  </div>
		</div>
	 );
}

export default App;
