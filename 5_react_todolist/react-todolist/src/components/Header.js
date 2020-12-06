import React, {useState, useEffect, useCallback} from 'react';
import styles from '../styles/Header.module.css';

function Header() {
	const [ today, setToday ] = useState({
		day: '',
		month: '',
		date: '', 
	})

	const [ time, setTime ] = useState('');

	const {day, month, date} = today;

	const updateTime = useCallback(() => {
		let time = new Date().toString().split(' ')[4] ;

		setTime(prevState =>  time )

	},[])

	// day, month, date 설정하기 
	useEffect(()=> {
		let dateObj = new Date().toString().split(' ');
		let day = dateObj[0];
		let month = dateObj[1];
		let date = dateObj[2];

		setToday({
				day,
				month,
				date
		})
	},[])

	// time 설정하기
	useEffect(() => {
		updateTime();

		let timerId = setInterval(() => {
			updateTime() ;
		}, 1000)

		return (() => {
			clearInterval(timerId);
		})

	})

	return (
		<div className={styles.wrapper}>
			<div className={styles.today_wrapper}>
				<div className={styles.month_date_wrapper}>
					<div className={styles.month}>{month}</div>
					<div>{date}</div>
				</div>
				<div className={styles.day}>{day}</div>
			</div>

			<div className={styles.time}>{time}</div>
		</div>
	);
}

export default Header;
