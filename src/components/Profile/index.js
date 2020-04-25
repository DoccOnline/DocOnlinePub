import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './Profile.css'

import userPic from '../../icons/profilepic.jpg'
import Schedule from "../Schedule";
import MyDoctor from '../MyDoctor'
import ProfileNavigation from "../ProfileNavigation"
import Family from '../Family'
import MedCard from '../MedCard'
import Recommendations from '../Recommendations'
import CallBtn from '../CallBtn'
import { appointments } from '../Appointment/appointments'

const Profile = ({
	userInfo,
	id
}) => {
	userInfo = {
		picture: userPic,
		fullName: 'Діденко Оксана Володимирівна'
	}

	const changableBlock = (id) => {
		if (id === 'appointments') {
			return <Schedule appointments={appointments}/>
		} else if (id === 'family') {
			return <Family />
		} else if (id === 'med-card') {
			return <MedCard />
		} else if (id === 'recommendations') {
			return <Recommendations />
		}
	}

	return (
		<div className="Profile-page">
			<div className="Profile-header">
				<h3>Ваш профіль</h3>
				<div className="personal-info">
					<div className="profile-pic">
						<img src={userInfo.picture} alt=""/>
					</div>
					<div className="panel">
						<p>{userInfo.fullName}</p>
						<Link to="/edit" className="edit">
							<svg width="20px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M16.775 3.89531L20.5333 8.12344C20.6917 8.30156 20.6917 8.59219 20.5333 8.77031L11.4333 19.0078L7.56667 19.4906C7.05 19.5562 6.6125 19.0641 6.67083 18.4828L7.1 14.1328L16.2 3.89531C16.3583 3.71719 16.6167 3.71719 16.775 3.89531ZM23.525 2.82187L21.4917 0.534375C20.8583 -0.178125 19.8292 -0.178125 19.1917 0.534375L17.7167 2.19375C17.5583 2.37187 17.5583 2.6625 17.7167 2.84062L21.475 7.06875C21.6333 7.24687 21.8917 7.24687 22.05 7.06875L23.525 5.40937C24.1583 4.69219 24.1583 3.53437 23.525 2.82187ZM16 16.2234V20.9953H2.66667V5.99531H12.2417C12.375 5.99531 12.5 5.93437 12.5958 5.83125L14.2625 3.95625C14.5792 3.6 14.3542 2.99531 13.9083 2.99531H2C0.895833 2.99531 0 4.00312 0 5.24531V21.7453C0 22.9875 0.895833 23.9953 2 23.9953H16.6667C17.7708 23.9953 18.6667 22.9875 18.6667 21.7453V14.3484C18.6667 13.8469 18.1292 13.5984 17.8125 13.95L16.1458 15.825C16.0542 15.9328 16 16.0734 16 16.2234Z" fill="#828282"/>
							</svg>
							<p>Редагувати</p>
						</Link>
					</div>
				</div>
			</div>
			<ProfileNavigation id={id}/>
			<div className="Profile-wrapper">
				{
					(id === 'appointments') &&
					<div className="button-container">
						<h3 className='h3-soft'>Пройти тест на імовірність зараження COVID-19</h3>
						<Link to="/chat">
							<Button variant="contained"
							        color="primary"
							        className="cta orange big-bttn"
							>
								Розпочати
							</Button>
						</Link>
					</div>
				}

				{changableBlock(id)}
			</div>
			{
				(id === 'appointments') &&
				<MyDoctor id={8764356} pageId={id}/>
			}
			<CallBtn/>
		</div>
	)
};

export default Profile