import  React from 'react';
import './ProfileNavigation.css';
import { Link } from 'react-router-dom';

const ProfileNavigation = ({
	                           menu,
	id
                           }) => {

	menu = [
		{
			title: 'Сім\'я',
			id: 'family',
			link: '/profile/family'
		},
		{
			title: 'Записи на прийом',
			id: 'appointments',
			link: '/profile/appointments'
		},
		{
			title: 'Рекомендації',
			id: 'recommendations',
			link: '/profile/recommendations'
		},
		{
			title: 'Мед карта',
			id: 'med-card',
			link: '/profile/med-card'
		}
	]
	return (
		<div className="ProfileNavigation">
		<ul>
			{
				menu.map(v => {
					return (
						<li className={id === v.id ? 'active' : ''}>
							<Link to={v.link}>
								{v.title}
							</Link>
						</li>
					)
				})
			}
		</ul>
		</div>
	)
}

export default ProfileNavigation