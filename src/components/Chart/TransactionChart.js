import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaCaretDown } from 'react-icons/fa';
import Chart from 'chart.js/auto';

import TotalTranac from "../../assets/icons/totaltr.png"
import Payin from "../../assets/icons/payin.png"
import Payout from "../../assets/icons/payout.png"
import { faker } from '@faker-js/faker';
import { StyledTransactionChart, TransactionChartHeader } from './TransactionChart.styled';

const TransactionChart = () => {

	// Line chart data
	const labels = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const linechartdata = {
		labels,
		datasets: [
			{
				type: 'line',
				label: "",
				borderColor: '#008AA8',
				data: labels.map(() => faker.datatype.number({ min: 10, max: 1000 })),
				tension: 0.3,
				fill: true,
				pointRadius: 0,
			},
		],
	};
	return (
		<StyledTransactionChart>
			<header>
				<div className='left-headers'>
					<h3>Activity</h3>
					<h5>Month </h5> <FaCaretDown/> 
				</div>
				<h5>View Transaction History</h5>
			</header>

			<section>
				<TransactionChartHeader>
					<div className='transaction-type'>
						<img src={TotalTranac} alt="total transactions" />
						<div className='text-amount'>
							<p>Total Transactions</p>
							<p><b>$88,600.00</b></p>
						</div>
					</div>
					<div className='transaction-type'>
						<img src={Payin} alt="pay in" />
						<div className='text-amount'>
							<p>Pay-in</p>
							<p><b>$4,600.00</b></p>
						</div>
					</div>
					<div className='transaction-type'>
						<img src={Payout} alt="pay out" />
						<div className='text-amount'>
							<p>Pay-out</p>
							<p><b>$72,600.00</b></p>
						</div>
					</div>
				</TransactionChartHeader>
			</section>
			<Line options={{}} data={linechartdata} />
		</StyledTransactionChart>
	);
};

export default TransactionChart;
