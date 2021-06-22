import * as React from 'react';
import cn         from 'classnames';
import {observer} from 'mobx-react-lite';

import BankHeader      from './components/BankHeader';
import BankNav         from './components/BankNav';
import BankAccount     from './components/BankAccount';
import BankTopUpMobile from './components/BankTopUpMobile';
import BankFines       from './components/BankFines';
import BankTaxes       from './components/BankTaxes';
import BankOpenCard    from './components/BankOpenCard';
import BankWithdraw    from './components/BankWithdraw';
import BankTopUp       from './components/BankTopUp';
import BankTransfer    from './components/BankTransfer';
import BankLockCard    from './components/BankLockCard';
import BankChangePin   from './components/BankChangePin';
import BankBusiness    from './components/BankBusiness';
import BankCard        from 'components/BankCard';

import './Bank.scss';

const Bank = ({store, player}) => {
	const [currentPage, setPage] = React.useState(player.playerState.bank.type ? 'account' : 'open');
	
	const [cardType, setCardType] = React.useState(),
		[isNotifyVisible, setNotifyVisible] = React.useState(false),
		[isMainNotifyVisible, setMainNotifyVisible] = React.useState(false),
		[notifyText, setNotifyText] = React.useState(null),
		[eventTimeout, setEventTimeout] = React.useState(false);
	
	const screen = React.useRef(null);
	
	const cardShadow = React.useMemo(() => {
		switch (cardType) {
			case 'standard':
				return '#D5DCFF';
			case 'gold':
				return '#F4E86F';
			case 'premium':
				return '#FFFFFF70';
			default:
				return null;
		}
	}, [cardType]);
	
	React.useEffect(() => {
		window.alt.on('cef::bank:cardChoosed', bool => {
			setNotifyVisible(false);
			if (bool) window.alt.emit('client::bank:openCard', cardType);
		});
	}, [cardType]);
	
	React.useEffect(() => {
		if (eventTimeout) {
			const timeout = setTimeout(() => setEventTimeout(false), 5000);
			
			return () => clearTimeout(timeout);
		}
	}, [eventTimeout]);
	
	const sendNotify = React.useCallback((text, timeout) => {
			setNotifyText(text);
			setMainNotifyVisible(true);
			
			setTimeout(() => setMainNotifyVisible(false), timeout ? timeout : 3000);
		}, []),
		customEvent = React.useCallback(event => {
			if (eventTimeout) sendNotify('Слишком часто');
			else {
				event();
				setEventTimeout(true);
			}
		}, [sendNotify, eventTimeout]);
	
	React.useEffect(() => {
		window.alt.on('cef::bank:sendNotify', (text, timeout) => sendNotify(text, timeout));
	}, [sendNotify]);
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('bank_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <>
		<div ref={screen} className="bank">
			<BankHeader player={player} setPage={setPage} currentPage={currentPage} sendNotify={sendNotify}/>
			<div className="bank__inner">
				<BankNav player={player} setPage={setPage} currentPage={currentPage} sendNotify={sendNotify}/>
				{currentPage === 'account' && <BankAccount player={player} setPage={setPage}/>}
				{currentPage === 'fines' && <BankFines customEvent={customEvent} store={store}/>}
				{currentPage === 'taxes' && <BankTaxes
					customEvent={customEvent}
					player={player}
					noNav={player.playerState.houses.length > 0 ? player.playerState.business.length <= 0 : true}
				/>}
				{currentPage === 'business' && <BankBusiness player={player}/>}
				{currentPage === 'family' && <div>family</div>}
				{currentPage === 'organization' && <div>organization</div>}
				{currentPage === 'charity' && <div>charity</div>}
				{currentPage === 'mobile' && <BankTopUpMobile customEvent={customEvent} player={player}/>}
				{currentPage === 'withdraw' && <BankWithdraw customEvent={customEvent} store={store} player={player}/>}
				{currentPage === 'topUp' && <BankTopUp customEvent={customEvent} store={store} player={player}/>}
				{currentPage === 'transfer' && <BankTransfer customEvent={customEvent} store={store} player={player}/>}
				{currentPage === 'open' &&
				<BankOpenCard store={store} setCardType={setCardType} setNotifyVisible={setNotifyVisible}/>}
				{currentPage === 'lock' && <BankLockCard player={player}/>}
				{currentPage === 'changePin' && <BankChangePin player={player}/>}
			</div>
			<div className="bank__notify" style={isMainNotifyVisible ? {opacity: 1} : {opacity: 0}}>
				<span>{notifyText}</span>
			</div>
		</div>
		<div className={cn('bank-open-card-notify', isNotifyVisible ? 'bank-open-card-notify_active' : null)}>
			{isNotifyVisible ? <BankCard
				data={player}
				type={cardType}
				customStyles={
					{
						width: document.body.clientWidth <= 1000 || document.body.clientHeight <= 800 ? '200px' : '400px',
						filter: `drop-shadow(0 0 25px ${cardShadow})`,
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
					}
				}
			/> : null}
			<div className="bank-open-card-notify-choose">
				<div className="bank-open-card-notify-choose__title">Вы действительно хотите открыть
					счет <span>{cardType}</span> в банке?
				</div>
				<div className="bank-open-card-notify-choose-buttons">
					<div
						className="bank-open-card-notify-choose-buttons__element bank-open-card-notify-choose-buttons__element_no"
						onClick={() => {
							window.alt.emit('client::bank:openCardStatus', false);
							setNotifyVisible(false);
						}}
					>N
					</div>
					<div
						className="bank-open-card-notify-choose-buttons__element bank-open-card-notify-choose-buttons__element_yes"
						onClick={() => {
							window.alt.emit('client::bank:openCardStatus', false);
							window.alt.emit('client::bank:openCard', cardType);
							setNotifyVisible(false);
						}}
					>Y
					</div>
				</div>
			</div>
		</div>
		<div className="bank-exit">
			<div className="bank-exit__button">Esc</div>
			<span className="bank-exit__text">- выход</span>
		</div>
	</>;
};

export default observer(Bank);