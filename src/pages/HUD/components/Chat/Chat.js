import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import DefaultMessage    from './components/Messages/DefaultMessage';
import SystemMessage     from './components/Messages/SystemMessage';
import TryMessage        from './components/Messages/TryMessage';
import MeMessage         from './components/Messages/MeMessage';
import DoMessage         from './components/Messages/DoMessage';
import TradeMessage      from './components/Messages/TradeMessage';
import AdminChatMessage  from './components/Messages/AdminChatMessage';
import CrimeFracMessage  from './components/Messages/CrimeFracMessage';
import MafiaFracMessage  from './components/Messages/MafiaFracMessage';
import StateFracMessage  from './components/Messages/StateFracMessage';
import FamilyChatMessage from './components/Messages/FamilyChatMessage';
import JobChatMessage    from './components/Messages/JobChatMessage';
import DepartmentMessage from './components/Messages/DepartmentMessage';
import StateMessage      from './components/Messages/StateMessage';
import NewsMessage       from './components/Messages/NewsMessage';
import ChatInput         from './components/ChatInput';

import './Chat.scss';

const Chat = ({store, isCursorActive, isVisible}) => {
	const chat = React.useRef(null);
	
	React.useEffect(() => {
		EventManager.addHandler('chat', 'newMessage', obj => {
			store.fetchNewMessage(obj);
			
			chat.current.scrollTop = 1000000;
		});
	}, [chat, store]);
	
	return <div className="chat" style={isVisible ? {visibility: 'visible'} : {visibility: 'hidden'}}>
		<div ref={chat} className="chat__content">
			{store.messages.map((el, key) => {
				switch (el.type) {
					case 'default':
						return <DefaultMessage key={key} data={el}/>;
					case 'nrp':
						return <DefaultMessage key={key} data={el} nrp={true}/>;
					case 'system':
						return <SystemMessage key={key} data={el}/>;
					case 'try':
						return <TryMessage key={key} data={el}/>;
					case 'me':
						return <MeMessage key={key} data={el}/>;
					case 'do':
						return <DoMessage key={key} data={el}/>;
					case 'trade':
						return <TradeMessage key={key} data={el} isCursorActive={isCursorActive}/>;
					case 'fraction':
						switch (el.fraction.type) {
							case 'crime':
								return <CrimeFracMessage key={key} data={el}/>;
							case 'mafia':
								return <MafiaFracMessage key={key} data={el}/>;
							case 'state':
								return <StateFracMessage key={key} data={el}/>;
							default:
								return null;
						}
					case 'family':
						return <FamilyChatMessage key={key} data={el} familyIcon={store.familyIcon}/>;
					case 'job':
						return <JobChatMessage key={key} data={el}/>;
					case 'adminChat':
						return <AdminChatMessage key={key} data={el}/>;
					case 'department':
						return <DepartmentMessage key={key} data={el}/>;
					case 'state':
						return <StateMessage key={key} data={el}/>;
					case 'news':
						return <NewsMessage key={key} data={el}/>;
					default:
						return null;
				}
			})}
		</div>
		<ChatInput store={store} isCursorActive={isCursorActive}/>
	</div>;
};

export default observer(Chat);