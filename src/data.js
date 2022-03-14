import Flag1 from './assets/icons/flag1.png';
import Flag2 from './assets/icons/flag2.png';
import Flag3 from './assets/icons/flag3.png';
import Wallet from './assets/icons/walletlink.png';
import Card from './assets/icons/cardlink.png';
import Dollar from './assets/icons/dollarsignlink.png';
import MobileMoney from './assets/icons/mobilemoney.png';
import Payment from './assets/icons/paymentlink.png';
import Transfer from './assets/icons/transferlink.png';
import Voucher from './assets/icons/voucherlink.png';


export const walletData = [
	{
        id: 1,
		title: 'Personal account',
		type: 'USD',
		flag: <img src={Flag1} alt='USA Flag' />,
		balance: "$10250.00",
        bg: "#FFF6E6"
	},
	{
        id: 2,
		title: 'EUR Wallet',
		type: 'EUR',
		flag: <img src={Flag2} alt='USA Flag' />,
		balance: "$4000.53",
        bg: "#FBF1F0"
	},
	{
        id: 3,
		title: 'School fees',
		type: 'GBP',
		flag: <img src={Flag3} alt='USA Flag' />,
		balance: "$50.00",
        bg: "#DDECEF"
	},
];

export const links = [
	{
        id: 1,
		title: 'Add new Wallet',
		img: <img src={Wallet} alt='wallet' />,
		url: "/#"
	},
	{
        id: 2,
		title: 'Add new Card',
		img: <img src={Card} alt='credit card' />,
		url: "/#"
	},
	{
        id: 3,
		title: 'Balance Exchange',
		img: <img src={Dollar} alt='Dollar' />,
		url: "#"
	},
	{
        id: 4,
		title: 'Transfer to Account',
		img: <img src={Transfer} alt='Make Transfer' />,
		url: "#"
	},
	{
        id: 5,
		title: 'Generate Voucher',
		img: <img src={Voucher} alt='Generate voucher' />,
		url: "#"
	},
	{
        id: 6,
		title: 'Mobile Money',
		img: <img src={MobileMoney} alt='Mobile money' />,
		url: "#"
	},
	{
        id: 7,
		title: 'Payment Link',
		img: <img src={Payment} alt='make payment' />,
		url: "#"
	},
];

// export const transactionData = {

// }
