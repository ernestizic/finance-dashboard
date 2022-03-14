import styled from 'styled-components';

export const StyledTransactionChart = styled.div`
	max-width: 90%;
	margin: 10px auto;
	@media (max-width: 576px) {
		max-width: 95%;
	}

	header {
		color: #008aa8;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.left-headers {
			display: flex;
			align-items: center;
			h3 {
				color: #000;
			}
			h5 {
				padding-left: 20px;
			}
		}
	}
`;

export const TransactionChartHeader = styled.div`
	margin: 20px 0;
	display: flex;
	float: right;
	@media (max-width: 576px) {
		max-width: 100%;
		float: none;
		overflow-x: scroll;
	}

    .transaction-type{
        /* border: 1px solid red; */
        margin: 10px;
        display: flex;
        align-items: center;
        .text-amount{
            font-size: 14px;
            padding-left: 10px;
        }
    }
`;
