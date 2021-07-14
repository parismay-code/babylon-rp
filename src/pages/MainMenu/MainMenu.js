import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';
import cn           from 'classnames';

import inventoryBg    from 'assets/images/mainMenu/inventoryBg.svg';
import questsBg       from 'assets/images/mainMenu/questsBg.svg';
import statsBg        from 'assets/images/mainMenu/statsBg.svg';
import achievementsBg from 'assets/images/mainMenu/achievementsBg.svg';
import shopBg         from 'assets/images/mainMenu/shopBg.svg';
import fractionBg     from 'assets/images/mainMenu/fractionBg.svg';
import jobBg          from 'assets/images/mainMenu/jobBg.svg';
import familyBg       from 'assets/images/mainMenu/familyBg.svg';
import businessBg     from 'assets/images/mainMenu/businessBg.svg';
import donateIcon     from 'assets/images/mainMenu/donateIcon.svg';
import timePlayedIcon from 'assets/images/mainMenu/timePlayedIcon.svg';
import deathsIcon     from 'assets/images/mainMenu/deathsIcon.svg';
import daysPlayedIcon from 'assets/images/mainMenu/daysPlayedIcon.svg';
import staticTower    from 'assets/images/mainMenu/staticTower.svg';
import reportBg       from 'assets/images/mainMenu/reportBg.svg';
import settingsBg     from 'assets/images/mainMenu/settingsBg.svg';
import money          from 'assets/images/hud/money.svg';
import bank           from 'assets/images/hud/bank.svg';

import {regExp} from 'utils/regExp';

import './MainMenu.scss';

const MainMenu = ({player, setComponent}) => {
	const options = React.useMemo(() => [
			{
				name: 'Статистика',
				description: 'Просматривайте свой успех и свою статистику за период игры',
				modifier: 'stats',
				background: statsBg,
				stat: null,
				event: 'openStats',
			},
			{
				name: 'Инвентарь',
				description: 'Храните у себя под рукой все то, что вам может понадобиться',
				modifier: 'inventory',
				background: inventoryBg,
				stat: null,
				event: 'openInventory',
			},
			{
				name: 'Задания',
				description: 'Выполняйте задания каждый день и получайте бонусы и подарки',
				modifier: 'quests',
				background: questsBg,
				stat: null,
				event: 'openQuests',
			},
			{
				name: 'Достижения',
				description: 'Ищите пасхалки, находите предметы, испытайте себя на прочность',
				modifier: 'achievements',
				background: achievementsBg,
				stat: null,
				event: () => setComponent('achievements'),
			},
			{
				name: 'Магазин',
				description: 'Лучшие предметы для вас собраны в одном магазине',
				modifier: 'shop',
				background: shopBg,
				stat: null,
				event: 'openShop',
			},
			{
				name: 'Организация',
				description: 'В данный момент вы не состоите ни в одной из организаций',
				modifier: 'fraction',
				background: fractionBg,
				stat: null,
				event: 'openFraction',
			},
			{
				name: 'Работа',
				description: 'В данный момент вы нигде не работаете',
				modifier: 'job',
				background: jobBg,
				stat: null,
				event: 'openJob',
			},
			{
				name: 'Семья',
				description: 'В данный момент вы не состоите в семье',
				modifier: 'family',
				background: familyBg,
				stat: null,
				event: 'openFamily',
			},
			{
				name: 'Бизнес',
				description: 'В данный момент у вас нет бизнеса',
				modifier: 'business',
				background: businessBg,
				stat: null,
				event: 'openBusiness',
			},
		], [setComponent]),
		cash = React.useMemo(() =>
			`$ ${String(player.playerState.money.cash).replace(regExp.money, '$1 ')}`, [player.playerState.money.cash]),
		card = React.useMemo(() =>
			`$ ${String(player.playerState.money.card).replace(regExp.money, '$1 ')}`, [player.playerState.money.card]),
		donate = React.useMemo(() =>
			String(player.playerState.donate).replace(regExp.money, '$1 '), [player.playerState.donate]);
	
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.classList.add('main-menu_active'), 100);
		
		return () => clearTimeout(timeout);
	}, []);
	
	const correctWord = React.useCallback((value) => {
		const lastSymbol = Number(String(value)[String(value).length - 1]);
		const preLastSymbol = Number(String(value)[String(value).length - 2]);
		const lastTwoSymbols = Number(String(lastSymbol) + String(preLastSymbol));
		
		if (lastTwoSymbols > 10 && lastTwoSymbols < 15) return 'дней';
		else if (lastSymbol === 1) return 'день';
		else if (lastSymbol > 1 && lastSymbol < 5) return 'дня';
		else return 'дней';
	}, []);
	
	return <div ref={screen} className={cn('main-menu', player.playerState.prime.status ? 'main-menu_prime' : null)}>
		<div className="main-menu-options">
			{options.map((el, key) => {
				return <div
					key={key}
					className={`main-menu-options-element main-menu-options-element_${el.modifier}`}
					onClick={() => {
						if (typeof el.event === 'string') EventManager.emitClient('mainMenu', el.event);
						else el.event();
					}}
				>
					<img className="main-menu-options-element__bg" src={el.background} alt="#"/>
					<div className="main-menu-options-element-top">
						<div className="main-menu-options-element-top__flag"/>
					</div>
					<div className="main-menu-options-element__title">{el.name}</div>
					<div className="main-menu-options-element__description">{el.description}</div>
				</div>;
			})}
		</div>
		<div className={cn('main-menu-info', player.playerState.prime.status ? 'main-menu-info_prime' : null)}>
			<div className="main-menu-info-before">
				<div className="main-menu-info-before__flag"/>
			</div>
			<div className="main-menu-info-after">
				<div className="main-menu-info-after__flag"/>
			</div>
			<div className="main-menu-info-cash">
				<img className="main-menu-info-cash__icon" src={money} alt="#"/>
				<div className="main-menu-info-cash-value">
					<div className="main-menu-info-cash-value__title">{cash}</div>
					<div className="main-menu-info-cash-value__subtitle">наличные</div>
				</div>
			</div>
			<div className="main-menu-info-card">
				<img className="main-menu-info-card__icon" src={bank} alt="#"/>
				<div className="main-menu-info-card-value">
					<div className="main-menu-info-card-value__title">{card}</div>
					<div className="main-menu-info-card-value__subtitle">в банке</div>
				</div>
			</div>
			<div className="main-menu-info-donate">
				<img className="main-menu-info-donate__icon" src={donateIcon} alt="#"/>
				<div className="main-menu-info-donate-value">
					<div className="main-menu-info-donate-value__title">{donate}</div>
					<div className="main-menu-info-donate-value__subtitle">babicOin</div>
				</div>
			</div>
			<div className="main-menu-info-nickname">
				<div className="main-menu-info-nickname__title">{player.playerState.nickname.split(' ')[0]}</div>
				<div className="main-menu-info-nickname__subtitle">{player.playerState.nickname.split(' ')[1]}</div>
			</div>
			<div
				className="main-menu-info-report"
				onClick={() => EventManager.emitClient('mainMenu', 'openReport')}
			>
				<img className="main-menu-info-report__bg" src={reportBg} alt="#"/>
				<div className="main-menu-info-report__title">Помощь</div>
			</div>
			<div
				className="main-menu-info-settings"
				onClick={() => EventManager.emitClient('mainMenu', 'openSettings')}
			>
				<img className="main-menu-info-settings__bg" src={settingsBg} alt="#"/>
				<div className="main-menu-info-settings__title">Настройки</div>
			</div>
			<div className="main-menu-info__middle-line"/>
		</div>
		<div className="main-menu-bottom">
			<div
				className={cn('main-menu-bottom-prime', player.playerState.prime.status ? 'main-menu-bottom-prime_prime' : null)}
				onClick={() => EventManager.emitServer('mainMenu', 'buyPrime')}
			>
				{player.playerState.prime.status ? <div className="main-menu-bottom-prime-days">
					<div className="main-menu-bottom-prime-days__title">{player.playerState.prime.days}</div>
					<div
						className="main-menu-bottom-prime-days__subtitle">{correctWord(player.playerState.prime.days)}</div>
				</div> : <div className="main-menu-bottom-prime__title">Купить Prime</div>}
				<div
					className="main-menu-bottom-prime-status"
					style={player.playerState.prime.status ? {
						color: '#ffffff',
						filter: 'drop-shadow(0 0 10px #C373F3)',
					} : null}
				>
					<div
						className="main-menu-bottom-prime-status__title">{player.playerState.prime.status ? 'Prime' : 'Standart'}</div>
					<div className="main-menu-bottom-prime-status__subtitle">Аккаунт</div>
				</div>
			</div>
			<div className="main-menu-bottom-hours">
				<img className="main-menu-bottom-hours__icon" src={timePlayedIcon} alt="#"/>
				<div className="main-menu-bottom-hours-value">
					<div className="main-menu-bottom-hours-value__title">{player.playerState.stats.timePlayed.weekly}</div>
					<div className="main-menu-bottom-hours-value__subtitle">Часов отыграно<br/>за неделю</div>
				</div>
			</div>
			<div className="main-menu-bottom-tower">
				<img className="main-menu-bottom-tower__image" src={staticTower} alt="#"/>
			</div>
			<div className="main-menu-bottom-deaths">
				<img className="main-menu-bottom-deaths__icon" src={deathsIcon} alt="#"/>
				<div className="main-menu-bottom-deaths-value">
					<div className="main-menu-bottom-deaths-value__title">{player.playerState.stats.deaths}</div>
					<div className="main-menu-bottom-deaths-value__subtitle">Смертей<br/>за всю игру</div>
				</div>
			</div>
			<div className="main-menu-bottom-days">
				<img className="main-menu-bottom-days__icon" src={daysPlayedIcon} alt="#"/>
				<div className="main-menu-bottom-days-value">
					<div className="main-menu-bottom-days-value__title">{player.playerState.stats.timePlayed.allDays}</div>
					<div className="main-menu-bottom-days-value__subtitle">Дней в игре</div>
				</div>
			</div>
		</div>
	</div>;
};

export default observer(MainMenu);