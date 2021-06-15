import * as React from 'react';
import {observer} from 'mobx-react-lite';

import ghettoIcon from 'assets/images/crimeMenu/ghettoIcon.svg';

import {regExp}   from 'utils/regExp';

import './GhettoTerritories.scss';

const GhettoTerritories = ({store, color}) => {
	const balance = React.useMemo(() =>
		`$ ${String(store.balance).replace(regExp.money, '$1 ')}`, [store.balance]);
	
	const [territories, setTerritories] = React.useState(0);
	
	React.useEffect(() => {
		let _territories = 0;
		
		const interval = setInterval(() => {
			if (_territories === store.territories) return clearInterval(interval);
			
			_territories++;
			setTerritories(_territories);
		}, 25);
		
		return () => clearInterval(interval);
	}, [store.territories]);
	
	return <div className="crime-menu-ghetto-territories">
		<div className="crime-menu-ghetto-territories-header">
			<img className="crime-menu-ghetto-territories-header__icon" src={ghettoIcon} alt="#"/>
			<div className="crime-menu-ghetto-territories-header__title">вЛиЯНиЕ ghettO</div>
		</div>
		<div className="crime-menu-ghetto-territories-content">
			<div
				className="crime-menu-ghetto-territories-content-fill"
				style={{background: `linear-gradient(to left, ${color}80, ${color}17)`, width: `${territories / 72 * 100}%`}}
			>
				<div className="crime-menu-ghetto-territories-content-fill__point"/>
			</div>
			<div className="crime-menu-ghetto-territories-content-info">
				<div className="crime-menu-ghetto-territories-content-info-percent">
					<div className="crime-menu-ghetto-territories-content-info-percent__title">{(territories / 72 * 100).toFixed(0)}%</div>
					<div className="crime-menu-ghetto-territories-content-info-percent__subtitle">захвачено территории</div>
				</div>
				<div className="crime-menu-ghetto-territories-content-info-stats">
					<div className="crime-menu-ghetto-territories-content-info-stats-players">
						<div className="crime-menu-ghetto-territories-content-info-stats-players__title">{store.players.length}</div>
						<div className="crime-menu-ghetto-territories-content-info-stats-players__subtitle">члена фракции</div>
					</div>
					<div className="crime-menu-ghetto-territories-content-info-stats-players">
						<div className="crime-menu-ghetto-territories-content-info-stats-players__title">{balance}</div>
						<div className="crime-menu-ghetto-territories-content-info-stats-players__subtitle">баланс фракции</div>
					</div>
				</div>
			</div>
		</div>
	</div>;
};

export default observer(GhettoTerritories);