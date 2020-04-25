import React from 'react';
import Navigation from '../Navigation'
import {
	Link
} from "react-router-dom";

import "./AppointmentInfo.css"

const AppointmentInfo = ({
                         }) => {
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
							<Link to='/'>
								Грекова Лариса Іванівна
							</Link>
						</div>
					</div>
					<div className="row">
						<div className="col left">Адреса</div>
						<div className="col right"><a
							href="https://goo.gl/maps/XGfXwPwX8RZrgm2T6">City Clinical Hospital #2</a></div>
					</div>
					<div className="row">
						<div className="col left">Номер кабінету</div>
						<div className="col right">№317</div>
					</div>
					<div className="row">
						<div className="col left">Дата і Час</div>
						<span className="col right">25.04.20  18:30</span>
					</div>
					<div className="row">
						<div className="col left">Аналізи</div>
						<span className="col right">Ще не перевірені</span>
					</div>
					<div className="row">
						<div className="col left">Додатки</div>
						<span className="col right">Рушник і бахіли</span>
					</div>
					<div className="row">
						<div className="col left">Підготовка</div>
						<span className="col right">Не їсти і не пити</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export default AppointmentInfo