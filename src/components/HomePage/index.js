import React from 'react';
import { Link } from 'react-router-dom';
import {Button, IconButton } from "@material-ui/core";
import './HomePage.css'


const HomePage = ({}) => {
	return (
		<div className="HomePage">
			<div className="container">
				<div className="logo">
					DocOnline
				</div>
				<h3>Медицина в телефоні</h3>
				<Link to="/profile">
				<Button variant="contained"
				        color="primary"
				        className="cta purple"
				        >
					Go to Demo
				</Button>
				</Link>
			</div>
		</div>
	)
}

export default HomePage