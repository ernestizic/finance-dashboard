import React from 'react';

import { Link } from 'react-router-dom';
import TransactionChart from '../../components/Chart/TransactionChart';

import Dashboard from '../../components/Dashboard';
import Header from '../../components/Header';
import QuickLinks from '../../components/QuickLinks/QuickLinks';
import { walletData } from '../../data';

import { StyledDashboard, WalletGrid, Wallets } from './Dashboard.styled';

const DashboardScreen = () => {
	return (
		<Dashboard>
			<Header title='Welcome, Huss Smith' />
			<StyledDashboard>
				<Wallets>
					<header>
						<h4>Wallet (5)</h4>
						<Link to='/wallet'>Veiw all wallets</Link>
					</header>

					<WalletGrid>
						{walletData.length ? (
							walletData.map((wallet) => (
								<div
									className='card'
									key={wallet.id}
									style={{ background: `${wallet.bg}` }}
								>
									<div className='title'>
										<div className='wallet-title'>
											<h5>{wallet.title}</h5>
											<p>{wallet.type}</p>
										</div>
										<div className='country-flag'>{wallet.flag}</div>
									</div>
									<p className='wallet-bal'>{wallet.balance}</p>
								</div>
							))
						) : (
							<div className='empty'>No Wallet Found!</div>
						)}
					</WalletGrid>
				</Wallets>

				<QuickLinks />
				<TransactionChart />
			</StyledDashboard>
		</Dashboard>
	);
};

export default DashboardScreen;
