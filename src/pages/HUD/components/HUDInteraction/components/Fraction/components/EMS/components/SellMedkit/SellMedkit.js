import * as React from 'react';

import arrow from 'assets/images/hud/interactionArrow.svg';

import './SellMedkit.scss';

const SellMedkit = ({currentOption, prevOption, targetPlayerData, medKitCost}) => {
	const toggleStyles = React.useMemo(() => {
		if (currentOption === 'sellMed' && !prevOption)
			return {visibility: 'visible', width: '100%', height: '100%'};
		else if (currentOption === 'sellMed' && prevOption)
			return {
				visibility: 'visible',
				width: '100%',
				height: '100%',
				transition: 'visibility 0s .5s, width 0s .5s, height 0s .5s',
			};
		else
			return {
				visibility: 'hidden',
				width: 0,
				height: 0,
				transition: 'visibility 0s .5s, width 0s .5s, height 0s .5s',
			};
	}, [currentOption, prevOption]);
	
	const [value, setValue] = React.useState(0);
	
	return <div
		className="hud-interactions-ems-sell-med"
		style={toggleStyles}
	>
		<div className="hud-interactions-ems-sell-med-header">
			<div className="hud-interactions-ems-sell-med-header-nickname">
                <span
	                className="hud-interactions-ems-sell-med-header-nickname__name">{targetPlayerData.nickname}</span>
				<div className="hud-interactions-ems-sell-med-header-nickname__id">ID: {targetPlayerData.id}</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" width="43.948" height="41.314" viewBox="0 0 43.948 41.314">
				<g transform="translate(-15833.053 666.336)" opacity="0.5">
					<path
						d="M26.456,33.75H3.375A3.379,3.379,0,0,1,0,30.375V10.125A3.379,3.379,0,0,1,3.375,6.75H9V3.375A3.379,3.379,0,0,1,12.375,0h11.25A3.379,3.379,0,0,1,27,3.375V6.75h5.625A3.379,3.379,0,0,1,36,10.125V23.836h-.053a9.511,9.511,0,0,0-9.5,9.5c0,.137,0,.276.009.413ZM11.813,18a.563.563,0,0,0-.562.563v3.375a.563.563,0,0,0,.563.563H15.75v3.938a.563.563,0,0,0,.563.563h3.375a.563.563,0,0,0,.563-.562V22.5h3.938a.563.563,0,0,0,.563-.562V18.563A.563.563,0,0,0,24.188,18H20.25V14.063a.563.563,0,0,0-.562-.562H16.313a.563.563,0,0,0-.562.563V18ZM13.5,4.5V6.75h9V4.5Z"
						transform="translate(15833.053 -666.336)"/>
					<path
						d="M7.4,15.978A8,8,0,0,1,7.408.022.5.5,0,0,0,7.053.5V2H6.975A3.43,3.43,0,0,0,4.449,3.116a3.388,3.388,0,0,0-.88,2.621A3.582,3.582,0,0,0,6.188,8.756l3.2.938A.922.922,0,0,1,9.131,11.5H7.06a1.9,1.9,0,0,1-1.069-.328.467.467,0,0,0-.262-.079.5.5,0,0,0-.348.142L4.294,12.3a.487.487,0,0,0-.149.382.524.524,0,0,0,.2.384,4.429,4.429,0,0,0,2.7.938v1.5a.506.506,0,0,0,.346.476Zm1.339-.011v0a.505.505,0,0,0,.315-.465V13.994a3.528,3.528,0,0,0,3.3-2.273,3.4,3.4,0,0,0-.183-2.7,3.443,3.443,0,0,0-2.082-1.727L6.716,6.306A.922.922,0,0,1,6.975,4.5H9.047a1.892,1.892,0,0,1,1.069.329.467.467,0,0,0,.262.079.5.5,0,0,0,.348-.142L11.813,3.7a.487.487,0,0,0,.149-.382.524.524,0,0,0-.2-.384A4.429,4.429,0,0,0,9.053,2V.5A.5.5,0,0,0,8.731.033a8,8,0,0,1,.007,15.934Z"
						transform="translate(15861 -641)"/>
				</g>
			</svg>
		</div>
		<div className="hud-interactions-ems-sell-med-content">
			<div className="hud-interactions-ems-sell-med-content__title">Выберите кол-во мед. наборов для продажи</div>
			<div className="hud-interactions-ems-sell-med-content-count">
				<div className="hud-interactions-ems-sell-med-content-count__title">Кол-во</div>
				<div className="hud-interactions-ems-sell-med-content-count-field">
					<img
						className="hud-interactions-ems-sell-med-content-count-field__arrow-left"
						src={arrow}
						alt="#"
						onClick={() => {
							if (value - 1 <= 0) setValue(1);
							else setValue(value - 1);
						}}
					/>
					<div className="hud-interactions-ems-sell-med-content-count-field__value">{value}</div>
					<img
						className="hud-interactions-ems-sell-med-content-count-field__arrow-right"
						src={arrow}
						alt="#"
						onClick={() => setValue(value + 1)}
					/>
				</div>
			</div>
			<div className="hud-interactions-ems-sell-med-content-input">
				<div className="hud-interactions-ems-sell-med-content-input__field">{value * medKitCost}</div>
				<div className="hud-interactions-ems-sell-med-content-input__dollar">$</div>
				<input
					className="hud-interactions-ems-sell-med-content-input__submit"
					type="submit"
					name="n_giveMoneySubmit"
					value="Продать"
					onClick={() => {
						window.alt.emit('client::interaction:sellMedKits', value, value * medKitCost, targetPlayerData.id);
					}}
				/>
			</div>
		</div>
	</div>;
};

export default React.memo(SellMedkit);