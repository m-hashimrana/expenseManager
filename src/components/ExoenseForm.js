import React, { useState } from 'react';
import ExpenseList from './ExpenseList';

const ExoenseForm = (props) => {
	const [userValue, setUser_value] = useState({
		entered_title: '',
		entered_amount: '',
		entered_date: '',
	});
	const changeHandlerTitle = (e) => {
		setUser_value((prevState) => {
			return {
				...prevState,
				entered_title: e.target.value,
			};
		});
	};
	const changeHandlerAmount = (e) => {
		setUser_value((prevState) => {
			return {
				...prevState,
				entered_amount: e.target.value,
			};
		});
	};
	const changeHandlerDate = (e) => {
		setUser_value((prevState) => {
			return {
				...prevState,
				entered_date: e.target.value,
			};
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const expenseData = {
			...userValue,
		};
		console.log('...', expenseData);
		props.onSaveForm(props.user);
		setUser_value({
			entered_title: '',
			entered_amount: '',
			entered_date: '',
		});
	};
	return (
		<>
			<div>
				<form onSubmit={handleSubmit}>
					<div className='inputs-wrapper'>
						<label>Title</label>
						<input
							value={userValue.entered_title}
							onChange={changeHandlerTitle}
							type='text'
							placeholder='enter title'
						/>
					</div>
					<div className='inputs-wrapper'>
						<label>Amount</label>
						<input
							value={userValue.entered_amount}
							onChange={changeHandlerAmount}
							type='number'
							min='0.01'
							step='0.01'
							placeholder='enter amount'
						/>
					</div>
					<div className='inputs-wrapper'>
						<label>Date</label>
						<input
							value={userValue.entered_date}
							onChange={changeHandlerDate}
							type='date'
							min='1-1-2000'
							max='1-1-2024'
						/>
					</div>
					<button type='submit'>add</button>
				</form>
			</div>
			<ExpenseList user={userValue} />
		</>
	);
};

export default ExoenseForm;
