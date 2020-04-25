import React from 'react';
import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import './DoctorPage.css'

import telIcon from '../../icons/Vectorphone.svg';
import skypeIcon from '../../icons/Vectorskype.svg';
import viberIcon from '../../icons/Vectorviber.svg';
import telegramIcon from '../../icons/Vectortelegram.svg';
import {Button} from "@material-ui/core";

const DoctorPage = ({
	                    id,
	                    docPicture,
	                    speciality,
	                    link,
	                    status,
	                    fullName,
	                    contactInfo
                    }) => {
	id = '8764356';
	docPicture = require('../../icons/doctor-pic.jpg');
	speciality = 'Терапевт';
	fullName= 'Дяченко Олег Вікторович';
	contactInfo = {
		skype: 'd.oleg',
		telegram: '@d.oleg',
		viber: '+380985678345',
		tel: '+380984576123'
	}
	return (
		<div>
			<Navigation backArrow={true}
			            linkBack='profile'
									title="Ваш сімейний лікар"/>
			<div className="MyDoctor" >
				<h3>Ваш сімейний лікар</h3>
				<div className="content">
					<div className="doc-picture">
						<img src={docPicture} alt=""/>
					</div>
					<div className="container">
						<p>{fullName}</p>
						<div className="speciality">
							{speciality}
						</div>
					</div>
				</div>
			</div>

			<div className="Doc-additional-info">
			<a href='https://goo.gl/maps/xuMZBAGYxFrSN63x6'>Поліклініка №3</a>
				<p className='title'>Приймальні години</p>
				<p className="bold">пн - пт: 8.00-12.00</p>
				<div className="contact-info">
					<div className="row">
						<img src={skypeIcon} alt=""/>
						<a href={`skype:${contactInfo.skype}?call`}>
							{contactInfo.skype}
						</a>

					</div>
					<div className="row">
						<img src={viberIcon} alt=""/>
						<a href={`contact?number=${contactInfo.viber}?`}>
							{contactInfo.viber}
						</a>
					</div>
					<div className="row">
						<img src={telegramIcon} alt=""/>
						<a href={`https://t.me/${contactInfo.telegram}?`}>
							{contactInfo.telegram}
						</a>
					</div>
					<div className="row">
						<img src={telIcon} alt=""/>
						<a href={`tel:${contactInfo.tel}?`}>
							{contactInfo.tel}
						</a>
					</div>
				</div>

				<div className="button-container">
					<Link to="/chat">
					<Button variant="contained"
					        color="primary"
					        className="cta orange">
						Опишіть проблему
					</Button>
					</Link>
				</div>
			</div>
		</div>
	)
};

	export default DoctorPage