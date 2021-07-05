import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import cn           from 'classnames';
import EventManager from 'utils/eventManager';

import play from 'assets/images/startScreen/play.svg';

import {regExp} from 'utils/regExp';

import './StartScreen.scss';

const StartScreen = ({player}) => {
	const [news, setNews] = React.useState(''),
		[updates, setUpdates] = React.useState({
			url: '',
			text: '',
			date: '',
		}),
		[weeklyBonus, setWeeklyBonus] = React.useState(0);
	
	const _weeklyBonus = React.useMemo(() =>
		`$ ${String(weeklyBonus).replace(regExp.money, '$1 ')}`, [weeklyBonus]);
	
	const validDays = React.useCallback((value, type) => {
		let _value = value;
		let isMinutes = true;
		
		if (type === 'hours' && value > 60) {
			isMinutes = false;
			_value = (value / 60).toFixed();
			
			console.log(_value);
		}
		
		const lastSymbol = Number(String(_value)[String(_value).length - 1]);
		const preLastSymbol = Number(String(_value)[String(_value).length - 2]);
		const lastTwoSymbols = Number(String(lastSymbol) + String(preLastSymbol));
		
		if (type === 'days') {
			if (lastTwoSymbols > 10 && lastTwoSymbols < 15) return 'дней';
			else if (lastSymbol === 1) return 'день';
			else if (lastSymbol > 1 && lastSymbol < 5) return 'дня';
			else return 'дней';
		} else if (type === 'score') {
			if (lastTwoSymbols > 10 && lastTwoSymbols < 15) return 'babycoins';
			else if (lastSymbol === 1) return 'babycoin';
			else if (lastSymbol > 1 && lastSymbol < 5) return 'babycoins';
			else return 'babycoins';
		} else if (type === 'hours') {
			if (isMinutes) {
				if (lastTwoSymbols > 10 && lastTwoSymbols < 15) return 'минут';
				else if (lastSymbol === 1) return 'минута';
				else if (lastSymbol > 1 && lastSymbol < 5) return 'минуты';
				else return 'минут';
			} else {
				if (lastTwoSymbols > 10 && lastTwoSymbols < 15) return 'часов';
				else if (lastSymbol === 1) return 'час';
				else if (lastSymbol > 1 && lastSymbol < 5) return 'часа';
				else return 'часов';
			}
		}
	}, []);
	
	React.useEffect(() => {
		EventManager.addHandler('startScreen', 'setNews', json => setNews(json));
		EventManager.addHandler('startScreen', 'setUpdates', obj => setUpdates(obj));
		EventManager.addHandler('startScreen', 'setWeeklyBonus', value => setWeeklyBonus(value));
		
		EventManager.stopAddingHandlers('startScreen');
		
		return () => EventManager.removeTargetHandlers('startScreen');
	}, []);
	
	return <div className={cn('start-screen', player.playerState.prime.status ? 'start-screen_prime' : null)}>
		<div className="start-screen-bonuses">
			<div className="start-screen-bonuses__title">
				ДОБРО ПОЖаЛОВаТЬ На⦁сЕРВЕР BABYLON
			</div>
			<div className="start-screen-bonuses-weekly">
				<div className="start-screen-bonuses-weekly__value">{_weeklyBonus}</div>
				<div className="start-screen-bonuses-weekly__title">Еженедельный бонус</div>
				<div className="start-screen-bonuses-weekly__description">
					Отыграв 80 часов Вы получите уведомление о зачислении еженедельного бонуса на Ваш банковски счет
				</div>
			</div>
			<div className="start-screen-bonuses-daily">
				<div className="start-screen-bonuses-daily-list">
					{player.playerState.bonuses.map((el, key) => {
						const day = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
						
						return <div
							key={key}
							className={cn('start-screen-bonuses-daily-list-element',
								el.status ? 'start-screen-bonuses-daily-list-element_active' : null,
								player.playerState.bonuses.findIndex(el => !el.status) === key ?
									'start-screen-bonuses-daily-list-element_current' : null)}
							style={key === 6 ? {height: '100%'} : null}
						>
							<div className="start-screen-bonuses-daily-list-element__dollar">$</div>
							<div className="start-screen-bonuses-daily-list-element__value">{el.value}</div>
							<div
								className="start-screen-bonuses-daily-list-element__day"
								style={key === 6 ? {fontSize: '1.2rem'} : null}
							>{day[key]}</div>
						</div>;
					})}
				</div>
				<div
					className="start-screen-bonuses-daily__withdraw"
					onClick={() => {
						EventManager.emitServer('startScreen', 'withdrawDailyBonus');
					}}
				>
					Забрать ежедневный бонус
				</div>
			</div>
		</div>
		<div className="start-screen-stats">
			<div className={cn('start-screen-stats-prime',
				player.playerState.prime.status ? 'start-screen-stats-prime_active' : null)}>
				<div className="start-screen-stats-prime-status">
					<div className="start-screen-stats-prime-status__left-stick"/>
					<div className="start-screen-stats-prime-status__right-stick"/>
					<div className="start-screen-stats-prime-status__title">
						{player.playerState.prime.status ? 'PRIME' : 'STANDART'}
					</div>
					<div className="start-screen-stats-prime-status__subtitle">Аккаунт</div>
				</div>
				{!player.playerState.prime.status ? <div
						className="start-screen-stats-prime__buy"
						onClick={() => EventManager.emitServer('startScreen', 'buyPrime')}
					>
						Купить PRIME
					</div> :
					<div className="start-screen-stats-prime-info">
						<div className="start-screen-stats-prime-info__value">{player.playerState.prime.days}</div>
						<div
							className="start-screen-stats-prime-info__title">{validDays(player.playerState.prime.days, 'days')} Prime
						</div>
					</div>}
			</div>
			<div className="start-screen-stats-element">
				<div className="start-screen-stats-element__right-stick"/>
				<div className="start-screen-stats-element__value">{player.playerState.level}</div>
				<div className="start-screen-stats-element__title">Уровень</div>
			</div>
			<div className="start-screen-stats-element">
				<div className="start-screen-stats-element__right-stick"/>
				<div className="start-screen-stats-element__value">{player.playerState.donate}</div>
				<div className="start-screen-stats-element__title">{validDays(player.playerState.donate, 'score')}</div>
			</div>
			<div className="start-screen-stats-element">
				<div className="start-screen-stats-element__right-stick"/>
				<div className="start-screen-stats-element__value">
					{player.playerState.timePlayed.all > 60 ?
						(player.playerState.timePlayed.all / 60).toFixed() : player.playerState.timePlayed.all}
				</div>
				<div
					className="start-screen-stats-element__title">{validDays(player.playerState.timePlayed, 'hours')} отыграно
				</div>
			</div>
		</div>
		<div className="start-screen-media">
			<div className="start-screen-media-news">
				<div className="start-screen-media-news__title">Новости</div>
				<div className="start-screen-media-news__img"/>
				<div className="start-screen-media-news__text">{news && JSON.parse(news)}</div>
			</div>
			<div className="start-screen-media-update">
				<div className="start-screen-media-update-header">
					<div className="start-screen-media-update-header-title">
						<div className="start-screen-media-update-header-title__text">Обновления</div>
						<div className="start-screen-media-update-header-title__date">{updates.date}</div>
					</div>
					<a className="start-screen-media-update-header-link" href={updates.url} target="_blank"
					   rel="noreferrer">
						<img className="start-screen-media-update-header-link__icon" src={play} alt="#"/>
						<div className="start-screen-media-update-header-link__title">смотреть видео</div>
					</a>
				</div>
				<div className="start-screen-media-update__img"/>
				<div className="start-screen-media-update__text">{updates.text && JSON.parse(updates.text)}</div>
			</div>
		</div>
		<div className="start-screen-quests">
			<div className="start-screen-quests-main">
				<div className="start-screen-quests-main__title">Задания</div>
				{player.quests.map((el, key) => {
					return <div key={key} className="start-screen-quests-main-element">
						<div className="start-screen-quests-main-element__title">{el.name}</div>
						<div className="start-screen-quests-main-element__text">{el.description}</div>
					</div>;
				})}
			</div>
			<div className="start-screen-quests-bottom">
				<div className="start-screen-quests-bottom-description">
					Соблюдайте правила нашего сервера<br/><br/>
					Приятной игры!<br/><br/>
					<a className="start-screen-quests-bottom-description__link" href="" target="_blank"
					   rel="noreferrer">
						Ссылка на форум
					</a>
				</div>
				<div
					className="start-screen-quests-bottom__play"
					onClick={() => EventManager.emitServer('startScreen', 'start')}
				>
					Играть
				</div>
			</div>
		</div>
	</div>;
};

export default observer(StartScreen);