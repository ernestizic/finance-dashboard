import styled from 'styled-components';

export const StyledDashboard = styled.div`
	padding: 10px;
	background: #fff;
	max-width: 96%;
	border-radius: 10px;
	@media (max-width: 576px) {
		max-width: 98%;
		margin: auto;
	}
`;
export const Wallets = styled.div`
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		a {
			font-size: 13px;
			font-weight: bold;
		}
	}
`;

export const WalletGrid = styled.div`
	margin-top: 15px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem 1rem;
	@media (max-width: 576px) {
		overflow-x: scroll;
	}
	.card {
		padding: 15px;
		border-radius: 10px;
		@media (max-width: 576px) {
			padding: 7px 10px;
		}
		.wallet-bal {
			font-size: 20px;
			font-weight: bold;
		}
		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 20px;
			img {
				width: 50px;
				height: auto;
				border-radius: 50%;
			}
		}
	}
	.empty {
		text-align: center;
		padding: 40px;
	}
`;
