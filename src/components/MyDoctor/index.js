import React from 'react';
import { Link } from 'react-router-dom';
import './MyDoctor.css'

const MyDoctor = ({
	id,
	docPicture,
	speciality,
	link,
	status,
	fullName
                  }) => {
	id = '8764356';
	docPicture = require('../../icons/doctor-pic.jpg');
	speciality = 'Терапевт';
	fullName= 'Дяченко Олег Вікторович';
	return (
		<Link className="MyDoctor" to={`/doctor?id=${id}`}>
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