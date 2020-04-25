import React from 'react';
import { Link } from 'react-router-dom';
import { doctors } from '../DoctorPage/doctors'
import './MyDoctor.css'

const MyDoctor = ({
	id
                  }) => {

	const doctor = doctors.filter(v => {
		return v.id == id
	})[0];

	const { docPicture, speciality, fullName } = doctor;
	return (
		<Link className="MyDoctor" to={`/doctor/${id}`}>
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
		</Link>
	)
};

export default MyDoctor;