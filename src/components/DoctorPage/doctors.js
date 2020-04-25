import React from 'react';

export const doctors = [
	{
		id: 8764356,
		docPicture: require('../../icons/doctor-pic.jpg'),
		speciality: 'Терапевт',
		fullName: 'Дяченко Олег Вікторович',
		address: {
			name: 'Поліклініка №3',
			googleLocation: 'https://goo.gl/maps/XGfXwPwX8RZrgm2T6'
		},
		contactInfo: {
			skype: 'd.oleg',
			telegram: '@d.oleg',
			viber: '+380985678345',
			tel: '+380984576123'
		}
	},
	{
		id: 76456356,
		docPicture: require('../../icons/doctor-f.jpg'),
		speciality: 'Терапевт',
		fullName: 'Грекова Лариса Іванівнач',
		address: {
			name: 'Обласна лікарня',
			googleLocation: 'https://goo.gl/maps/XGfXwPwX8RZrgm2T6'
		},
		contactInfo: {
			skype: 'grecova',
			telegram: '@lara.grec',
			viber: '+380986543456',
			tel: '+380985656789'
		}
	}
]