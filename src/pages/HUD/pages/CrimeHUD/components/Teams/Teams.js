import * as React from 'react';
import {observer} from 'mobx-react-lite';
import cn         from 'classnames';

import vagosIcon     from 'assets/images/hud/vagosIcon.svg';
import ballasIcon    from 'assets/images/hud/ballasIcon.svg';
import familiesIcon  from 'assets/images/hud/familiesIcon.svg';
import marabuntaIcon from 'assets/images/hud/marabuntaIcon.svg';
import scull         from 'assets/images/hud/scull.svg';

import './Teams.scss';

const Teams = ({store, isVisible}) => {
	const attackColor = React.useMemo(() => {
		switch (store.teams.attack.name) {
			case 'Vagos':
				return '#FFFF36';
			case 'Ballas':
				return '#FF00EE';
			case 'Families':
				return '#30FE3E';
			case 'Marabunta':
				return '#30CDFE';
			default:
				return null;
		}
	}, [store.teams.attack.name]);
	const defenceColor = React.useMemo(() => {
		switch (store.teams.defence.name) {
			case 'Vagos':
				return '#FFFF36';
			case 'Ballas':
				return '#FF00EE';
			case 'Families':
				return '#30FE3E';
			case 'Marabunta':
				return '#30CDFE';
			default:
				return null;
		}
	}, [store.teams.defence.name]);
	const attackIcon = React.useMemo(() => {
		switch (store.teams.attack.name) {
			case 'Vagos':
				return vagosIcon;
			case 'Ballas':
				return ballasIcon;
			case 'Families':
				return familiesIcon;
			case 'Marabunta':
				return marabuntaIcon;
			default:
				return null;
		}
	}, [store.teams.attack.name]);
	const defenceIcon = React.useMemo(() => {
		switch (store.teams.defence.name) {
			case 'Vagos':
				return vagosIcon;
			case 'Ballas':
				return ballasIcon;
			case 'Families':
				return familiesIcon;
			case 'Marabunta':
				return marabuntaIcon;
			default:
				return null;
		}
	}, [store.teams.defence.name]);
	
	return <div className={cn('crime-hud-teams', isVisible ? 'crime-hud-teams_visible' : null)}>
		<div className="crime-hud-teams-attack">
			<div className="crime-hud-teams-attack-header">
				<div className="crime-hud-teams-attack-header-content" style={{backgroundColor: attackColor}}>
					<div className="crime-hud-teams-attack-header-content-info">
						<div
							className="crime-hud-teams-attack-header-content-info__title">{store.teams.attack.name} team
						</div>
					</div>
				</div>
				<img className="crime-hud-teams-attack-header__icon" src={attackIcon} alt="#"/>
				<div className="crime-hud-teams-attack-header__alt">ALT</div>
				<div className="crime-hud-teams-attack-header__list">List</div>
			</div>
			<div className="crime-hud-teams-attack-list">
				{store.teams.attack.players.map((el, key) => {
					return <div key={key}
					            className={cn('crime-hud-teams-attack-list-element', el.isDead ? 'crime-hud-teams-attack-list-element_dead' : null)}>
						<div className="crime-hud-teams-attack-list-element-kills"
						     style={el.kills > 0 ? {opacity: 1} : {opacity: 0}}>
							<img className="crime-hud-teams-attack-list-element-kills__icon" src={scull} alt="#"/>
							<div className="crime-hud-teams-attack-list-element-kills__value">{el.kills}</div>
						</div>
						<div className="crime-hud-teams-attack-list-element__name">{el.nickname} [{el.id}]</div>
					</div>;
				})}
			</div>
		</div>
		<div className="crime-hud-teams-defence">
			<div className="crime-hud-teams-defence-header">
				<div className="crime-hud-teams-defence-header-content" style={{backgroundColor: defenceColor}}>
					<div className="crime-hud-teams-defence-header-content-info">
						<div
							className="crime-hud-teams-defence-header-content-info__title">{store.teams.defence.name} team
						</div>
					</div>
				</div>
				<img className="crime-hud-teams-defence-header__icon" src={defenceIcon} alt="#"/>
			</div>
			<div className="crime-hud-teams-defence-list">
				{store.teams.defence.players.map((el, key) => {
					return <div key={key}
					            className={cn('crime-hud-teams-defence-list-element', el.isDead ? 'crime-hud-teams-defence-list-element_dead' : null)}>
						<div className="crime-hud-teams-defence-list-element-kills"
						     style={el.kills > 0 ? {opacity: 1} : {opacity: 0}}>
							<img className="crime-hud-teams-defence-list-element-kills__icon" src={scull} alt="#"/>
							<div className="crime-hud-teams-defence-list-element-kills__value">{el.kills}</div>
						</div>
						<div className="crime-hud-teams-defence-list-element__name">{el.nickname} [{el.id}]</div>
					</div>;
				})}
			</div>
		</div>
	</div>;
};

export default observer(Teams);