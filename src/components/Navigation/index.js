import React from 'react';
import './Navigation.css'


import arrow from '../../back.svg'

const Navigation = ({
	                    backArrow,
                    }) => {

	return (
		<div className="Navigation">
			{
				backArrow &&
				<a className="back-arrow" href='/profile'>
					<img src={arrow} alt=""/>
			  </a>
			}
		</div>
	)
};

export default Navigation;