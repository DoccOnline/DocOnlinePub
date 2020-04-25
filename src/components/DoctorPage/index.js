import React from 'react';
import Navigation from "../Navigation";
import {Link} from "react-router-dom";
import './DoctorPage.css'
import { doctors } from './doctors'

import telIcon from '../../icons/Vectorphone.svg';
import skypeIcon from '../../icons/Vectorskype.svg';
import viberIcon from '../../icons/Vectorviber.svg';
import telegramIcon from '../../icons/Vectortelegram.svg';
import {Button} from "@material-ui/core";

const DoctorPage = ({
	                    id
                    }) => {

	const doctor = doctors.filter(v => {
		return v.id == id
	})[0];

	return (
		<div>
			<Navigation backArrow={true}
			            linkBack='profile'
									title='Лікар'/>
			<div className="MyDoctor" >
				<h3>Ваш сімейний лікар</h3>
				<div className="content">
					<div className="doc-picture">
						<img src={doctor.docPicture} alt=""/>
					</div>
					<div className="container">
						<p>{doctor.fullName}</p>
						<div className="speciality">
							{doctor.speciality}
						</div>
					</div>
				</div>
			</div>

			<div className="Doc-additional-info">
			<a href='https://goo.gl/maps/xuMZBAGYxFrSN63x6'>{doctor.address}</a>
				<p className='title'>Приймальні години</p>
				<p className="bold">пн - пт: 8.00-12.00</p>
				<div className="contact-info">
					<div className="row">
						<img src={skypeIcon} alt=""/>
						<a href={`skype:${doctor.contactInfo.skype}?call`}>
							{doctor.contactInfo.skype}
						</a>

					</div>
					<div className="row">
						<img src={viberIcon} alt=""/>
						<a href={`contact?number=${doctor.contactInfo.viber}?`}>
							{doctor.contactInfo.viber}
						</a>
					</div>
					<div className="row">
						<img src={telegramIcon} alt=""/>
						<a href={`https://t.me/${doctor.contactInfo.telegram}?`}>
							{doctor.contactInfo.telegram}
						</a>
					</div>
					<div className="row">
						<img src={telIcon} alt=""/>
						<a href={`tel:${doctor.contactInfo.tel}?`}>
							{doctor.contactInfo.tel}
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