import React from 'react';
import Kommunicate from "./Komm";
import Navigation from '../Navigation'
import './Chat.css'

const Chat = ({}) => {
	return (
		<div>
			<Navigation backArrow={true}
			            linkBack='profile'
			            title="Чат з лікарем"/>
			<Kommunicate/>
		</div>
	)
}

export default Chat