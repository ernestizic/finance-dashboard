import styled from 'styled-components';

export const QuickLinksContainer = styled.div`
	/* border: 1px solid red; */
	padding: 30px 0;
	p {
		color: #94a3b8;
		font-size: 14px;
	}
`;

export const LinksContainer = styled.div`
	overflow: scroll;
	display: flex;
	text-align: center;
	a {
		background: #ffffff;
		border: 1px solid #f1f5f9;
        border-radius: 10px;
		margin: 20px 10px;
		padding: 14px 12px;
		max-width: 95px;
		@media (max-width: 576px) {
			min-width: 95px;
		}
        &:hover{
            background: #2b899d;
            color: #fff;
        }
	}
`;
