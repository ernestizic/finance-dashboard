import React from 'react';

import { NavLink } from 'react-router-dom';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { BsGridFill, BsCreditCardFill, BsTagFill } from 'react-icons/bs';
import { IoMdWallet } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';

import Logo from '../assets/icons/logo.png';
import WalletIcon from '../assets/icons/Wallet_fill.png';
import Star from '../assets/icons/star.png';
import Eye from '../assets/icons/eye.png';
import Speaker from '../assets/icons/speaker.png';

const Sidebar = ({forwardRef}) => {
	return (
		<div className='sidebar' ref={forwardRef}>
			<div className='logo'>
				<img src={Logo} alt='Geniopay logo' />
			</div>

			<div className='wallet-summary'>
				<div className='wallet-balance'>
					<div className='wallet-summary-icon'>
						<img src={WalletIcon} alt='wallet' />
					</div>
					<div className='wallet-bal'>
						<p>Wallet Balance</p>
						<p>
							<b>$15,001.00</b>
						</p>
						<img src={Eye} alt='eye' />
					</div>
				</div>
				<div className='wallet-balance'>
					<div className='wallet-summary-icon'>
						<img src={Star} alt='star' />
					</div>
					<div className='wallet-bal'>
						<p>Awarded points</p>
						<p>35</p>
					</div>
				</div>

				<div className='pay-buttons'>
					<button className='pay-in'>Pay-in</button>
					<button className='pay-out'>Pay-out</button>
				</div>
			</div>

			<nav>
				<ul>
					<li>
						<NavLink to='/'>
							<BsGridFill />
							<p>Dashboard</p>
						</NavLink>
					</li>
					<li>
						<NavLink to='/wallet'>
							<IoMdWallet />
							<p>Wallet</p>
						</NavLink>
					</li>
					<li>
						<NavLink to='/cards'>
							<BsCreditCardFill />
							<p>Cards</p>
						</NavLink>
					</li>
					<li>
						<NavLink to='/fx center'>
							<RiExchangeDollarFill />
							<p>FX Center</p>
						</NavLink>
					</li>
					<li>
						<NavLink to='/beneficiaries'>
							<FiUsers />
							<p>Beneficiaries</p>
						</NavLink>
					</li>
					<li>
						<NavLink to='/perks'>
							<BsTagFill />
							<p>Perks</p>
						</NavLink>
					</li>
				</ul>
			</nav>

			<section>
				<div className='invite-container'>
					<div className='text'>
						<img src={Speaker} alt='Refer and earn' />
						<div className='refer-and-earn'>
							<h5>Refer and earn</h5>
							<p>Use the below link to invite friends</p>
						</div>
					</div>
					<button>Invite friends</button>
				</div>
			</section>
		</div>
	);
};

export default Sidebar;
