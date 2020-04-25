import React from 'react';
import {Button} from "@material-ui/core";
import Appointment from "../Appointment";
import "./Schedule.css"

const Schedule = ({
										appointments
                  }) => {
	return (
		<div className="schedule">
			{
				appointments.map(appointment =>
					<Appointment id={appointment.id}
					             doctorPic={appointment.doctor.docPicture}
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