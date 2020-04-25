import React from 'react';
import {Button, IconButton} from "@material-ui/core";
import AlarmIcon from "@material-ui/core/SvgIcon/SvgIcon";
import recico from '../../icons/Vectorreccom.svg'

import "./Recommendations.css"

const Recommendations = ({}) => {

	return (
		<div className="Recommendations">
			{
				[1,2,3].map(el => {
					return (
						<div className="rec-card">
							<div className="rec-wrap">
								<div className="inside">
									<img src={recico} alt=""/>
								</div>
							</div>
							<div className="rec-content">
								<p className="fm-name">Рекомендації</p>
								<p className='fm-part'>16 травня - 14:00</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
};

export default Recommendations