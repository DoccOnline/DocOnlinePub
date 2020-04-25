import React from 'react';
import {Button, IconButton } from "@material-ui/core";
import AlarmIcon from '@material-ui/icons/Alarm';
import { Link } from 'react-router-dom';

import "./Appointment.css"

const Appointment = ({
	id,
	doctorPic,
	date,
	time,
	remind,
	isInCalendar,
	title
	}) => {

	doctorPic = doctorPic || require('../../icons/icon-doctor.svg');
	return (
		<Link className="appointment" key={id} to={`/appointment?id=${id}`}>
			<div className="appointment-bubble">
				<div className="doc-picture">
					<img src={doctorPic} alt=""/>
				</div>
				<div className="appointment-content">
					<p>{title}</p>
					<h3>{date} - {time}</h3>
					<Button variant="outlined"
					        color="primary"
					        className="cta blue"
					        size="small"
					        onClick={() => console.log('Open google calendar')}>
						Додати в календар
					</Button>
					<IconButton color="secondary"
					            className="reminder"
					            aria-label="Нагадати"
					            onClick={() => console.log('Set a reminder')}>
						<AlarmIcon />
					</IconButton>
				</div>
			</div>
		</Link>
	)
};

export default Appointment;