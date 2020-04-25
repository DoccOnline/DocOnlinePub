import React from 'react';
import {doctors} from "../DoctorPage/doctors";

export const appointments = [
	{
		id: '123',
		doctor: doctors.filter(v => v.id == 76456356)[0],
		date: '16 Травня',
		time: '14:00',
		remind: false,
		isInCalendar: false,
		title: "Запис на аналізи",
		info: {
			address: {
				name: 'Поліклініка №3',
				googleLocation: 'https://goo.gl/maps/XGfXwPwX8RZrgm2T6'
			},
			room: '№317',
			test: 'Посилання на потрібні аналізи',
			additional: 'Рушник і бахіли',
			prepare: 'Не їсти і не пити'
		}
	},
	{
		id: '321',
		doctor: doctors.filter(v => v.id == 8764356)[0],
		date: '7 Травня',
		time: '16:00',
		remind: true,
		isInCalendar: true,
		title: "Запис до лікаря",
		info: {
			address: {
				name: 'Обласна лікарня',
				googleLocation: 'https://goo.gl/maps/XGfXwPwX8RZrgm2T6'
			},
			room: '№10',
			test: 'Посилання на потрібні аналізи',
			additional: 'Добре поїсти',
			prepare: 'Не їсти і не пити'
		}
	},
];