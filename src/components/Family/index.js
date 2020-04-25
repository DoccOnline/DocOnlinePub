import React from 'react';
import { Button } from '@material-ui/core';
import "./Family.css"
import fmpic from '../../icons/Rectanglefm.png'
import baby from '../../icons/baby.jpg'

const Family = ({}) => {

	return (
		<div className="Family">
			<div className='Family-member'>
				<img src={fmpic} alt=""/>
				<div className='fm-info'>
					<p className='fm-name'>Діденко Олег Сергійович</p>
					<p className='fm-part'>чоловік</p>
				</div>
				<span className='arrow'>

				</span>
			</div>
			<div className='Family-member'>
				<img src={baby} className='baby' alt=""/>
				<div className='fm-info'>
					<p className='fm-name'>Діденко Юра Олегович</p>
					<p className='fm-part'>син</p>
				</div>
				<span className='arrow'>

				</span>
			</div>
			<Button variant="contained"
			        color="primary"
			        className="cta light-blue">
				Додати родича
			</Button>
		</div>
	)
}

export default Family