import React from 'react';
import {Button, IconButton } from "@material-ui/core";
import AlarmIcon from '@material-ui/icons/Alarm';

import "./Appointment.css"

const Appointment = ({
	id,
	doctorPic,
	date,
	time,
	remind,
	isInCalendar
	}) => {

	doctorPic = doctorPic || require('../../icon-doctor.svg');
	return (
		<a className="appointment" key={id} href={`/appointment?id=${id}`}>
			<div className="appointment-bubble">
				<div className="doc-picture">
					<img src={doctorPic} alt=""/>
				</div>
				<div className="appointment-content">
					<p>U have an appointment</p>
					<h3>{date} - {time}</h3>
					<Button variant="outlined"
					        color="primary"
					        className="cta blue"
					        size="small"
					        onClick={() => console.log('Open google calendar')}>
						Add to calendar
					</Button>
					<IconButton color="secondary"
					            className="reminder"
					            aria-label="add an alarm"
					            onClick={() => console.log('Set a reminder')}>
						<AlarmIcon />
					</IconButton>
				</div>
			</div>
		</a>
	)
};

export default Appointment;