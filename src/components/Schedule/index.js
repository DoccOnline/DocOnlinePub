import React from 'react';
import {Button} from "@material-ui/core";
import Appointment from "../Appointment";
import "./Schedule.css"

const Schedule = ({
	appointments
                  }) => {

	appointments = [
		{
			id: '123',
			doctorPic: require('../../icons/icon-doctor.svg'),
			date: '16 Травня',
			time: '14:00',
			remind: false,
			isInCalendar: false,
			title: "Запис на аналізи"
		},
		{
			id: '321',
			doctorPic: require('../../icons/doctor-f.jpg'),
			date: '7 Травня',
			time: '16:00',
			remind: true,
			isInCalendar: true,
			title: "Запис до лікаря"
		},
	];
	return (
		<div className="schedule">
			{
				appointments.map(appointment =>
					<Appointment id={appointment.id}
					             doctorPic={appointment.doctorPic}
					             date={appointment.date}
					             time={appointment.time}
					             remind={appointment.remind}
					             isInCalendar={appointment.isInCalendar}
					             title={appointment.title}/>
				)
			}
		</div>
	)
};

export default Schedule;