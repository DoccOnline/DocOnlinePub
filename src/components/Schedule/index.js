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
			doctorPic: require('../../icon-doctor.svg'),
			date: '16th of March',
			time: '2pm',
			remind: false,
			isInCalendar: false
		},
		{
			id: '321',
			doctorPic: require('../../icon-doctor.svg'),
			date: '17th of March',
			time: '4pm',
			remind: true,
			isInCalendar: true
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
					             isInCalendar={appointment.isInCalendar}/>
				)
			}
		</div>
	)
};

export default Schedule;