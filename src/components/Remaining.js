import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const rem = budget - totalExpenses;
	const alertType = (rem <= budget/2) ? (rem <= 1000 ? 'alert-danger' : 'alert-warning') : 'alert-success';
	//const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div className={`alert p-4 ${alertType}`}>
			<span>Remaining: &#8377; { rem }</span>
		</div>
	);
};

export default RemainingBudget;
