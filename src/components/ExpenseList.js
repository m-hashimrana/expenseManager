import React from 'react';

const ExpenseList = ({ user }) => {
	return (
		<div className='list-wrapper'>
			<div className='date-wrapper'>
				<span>{user?.entered_date}</span>
			</div>
			<h4>{user?.entered_title}</h4>
			<span>$ {user?.entered_amount}</span>
		</div>
	);
};

export default ExpenseList;
