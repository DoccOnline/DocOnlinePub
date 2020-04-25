import React from 'react';
import './Navigation.css'
import { Link } from 'react-router-dom';


import arrow from '../../icons/back.svg'

const Navigation = ({
	                    backArrow,
											linkBack,
											title
                    }) => {

	return (
		<div className="Navigation">
			{
				backArrow &&
				<Link className="back-arrow" to={`/${linkBack}/appointments`}>
					<img src={arrow} alt=""/>
			  </Link>
			}
			<h3>{title}</h3>
		</div>
	)
};

export default Navigation;