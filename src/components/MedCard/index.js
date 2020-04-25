import React from 'react';
import {Button, IconButton} from "@material-ui/core";
import AlarmIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {Link} from "react-router-dom";
import "./MedCard.css"

const MedCard = ({}) => {

	return (
		<div className="AppointmentInfo">
			<div className="table">
				<div className="row">
					<div className="col left">Щеплення</div>
					<div className="col right">
						<Link to='#'>
							Натисни щоб переглянути календар щеплень
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="col left">Група крові</div>
					<div className="col right">
						А+
					</div>
				</div>
				<div className="row">
					<div className="col left">ЕКГ</div>
					<span className="col right">
					<Link to='#'>
							Натисни щоб переглянути всі ресурси
						</Link>
					</span>
				</div>
				<div className="row">
					<div className="col left">Pентген знімки</div>
					<span className="col right">
					<Link to='#'>
							Натисни щоб переглянути всі ресурси
						</Link>
					</span>	</div>
				<div className="row">
					<div className="col left">Аналізи</div>
					<span className="col right">
						<Link to='#'>
							Натисни щоб переглянути всі ресурси
						</Link>
					</span>
				</div>
				<div className="row">
					<div className="col left">Заключення лікаря</div>
					<span className="col right">
							<Link to='#'>
							Натисни щоб переглянути всі ресурси
						</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default MedCard