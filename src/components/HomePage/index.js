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
				<div className="home-buttons">
					<Button variant="contained"
					        color="primary"
					        className="cta call"
					        href='tel:103'
					>
						Екстренний виклик
					</Button>
					<Link to="/profile">
						<Button variant="contained"
						        color="primary"
						        className="cta purple"
						>
							Вхід
						</Button>

					</Link>
				</div>
			</div>
		</div>
	)
}

export default HomePage