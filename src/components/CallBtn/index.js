import React, {useEffect, useState} from 'react';
import './CallBtn.css'
import ring from '../../icons/Vectorring.svg'

const CallBtn = () => {
	const [scrolling, setScrolling] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScrolling(window.scrollY === 0);
		});
		return () => window.removeEventListener('scroll', () => {
			setScrolling(window.scrollY === 0);
		});
	}, []);
	const visible = scrolling ? '' : 'hide';

	return (
		<a href='tel:103' className={`CallBtn ${visible}`}>
			<div className="container">
				<div className="icons">
					<p className='number'>103</p>
					<img src={ring} alt=""/>
				</div>
			</div>
		</a>
	)
}

export default CallBtn