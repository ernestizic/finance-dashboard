import React from 'react';
import { Link } from 'react-router-dom';
import { LinksContainer, QuickLinksContainer } from './QuickLinks.styled';
import { links } from '../../data';

const QuickLinks = () => {
	return (
		<QuickLinksContainer>
			<h3>Quick Links</h3>
			<p>Your frequently used actions for easy access.</p>

			<LinksContainer>
				{links &&
					links.map((link) => (
						<Link to={`${link.url}`} key={link.id}>
							{link.img}
							<h5>{link.title}</h5>
						</Link>
					))}
			</LinksContainer>
		</QuickLinksContainer>
	);
};

export default QuickLinks;
