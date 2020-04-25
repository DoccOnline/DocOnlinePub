import React from 'react';
import Navigation from '../Navigation'
import {
	Link
} from "react-router-dom";
import { appointments } from '../Appointment/appointments'

import "./AppointmentInfo.css"
import {doctors} from "../DoctorPage/doctors";

const AppointmentInfo = ({
	id
                         }) => {

	const appointment = appointments.filter(v => {
		return v.id == id
	})[0];

	return (
		<div>
		<Navigation backArrow={true}
		            linkBack='profile'
								title='Інформація для візиту'/>
			<div className="AppointmentInfo">
				<div className="table">
					<div className="row">
						<div className="col left">Лікар</div>
						<div className="col right">
							<Link to={`/doctor/${appointment.doctor.id}`}>
								{appointment.doctor.fullName}
							</Link>
						</div>
					</div>
					<div className="row">
						<div className="col left">Адреса</div>
						<div className="col right"><a
							href={appointment.info.address.googleLocation}>
							{appointment.info.address.name}
						</a>
						</div>
					</div>
					<div className="row">
						<div className="col left">Номер кабінету</div>
						<div className="col right">{appointment.info.room}</div>
					</div>
					<div className="row">
						<div className="col left">Дата і Час</div>
						<span className="col right">{appointment.date} - {appointment.time}</span>
					</div>
					<div className="row">
						<div className="col left">Аналізи</div>
						<span className="col right">{appointment.info.test}</span>
					</div>
					<div className="row">
						<div className="col left">Додатки</div>
						<span className="col right">{appointment.info.additional}</span>
					</div>
					<div className="row">
						<div className="col left">Підготовка</div>
						<span className="col right">{appointment.info.prepare}</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export default AppointmentInfo