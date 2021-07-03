import * as React   from 'react';
import EventManager from 'utils/eventManager';

import arrow from 'assets/images/hud/interactionArrow.svg';

import './SellPill.scss';

const SellPill = ({currentOption, prevOption, targetPlayerData, pillsCost}) => {
	const toggleStyles = React.useMemo(() => {
		if (currentOption === 'sellPills' && !prevOption)
			return {visibility: 'visible', width: '100%', height: '100%'};
		else if (currentOption === 'sellPills' && prevOption)
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
	
	const [value, setValue] = React.useState(0),
		[type, setType] = React.useState('flu');
	
	return <div
		className="hud-interactions-ems-sell-pill"
		style={toggleStyles}
	>
		<div className="hud-interactions-ems-sell-pill-header">
			<div className="hud-interactions-ems-sell-pill-header-nickname">
                <span
	                className="hud-interactions-ems-sell-pill-header-nickname__name">{targetPlayerData.nickname}</span>
				<div className="hud-interactions-ems-sell-pill-header-nickname__id">ID: {targetPlayerData.id}</div>
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
		<div className="hud-interactions-ems-sell-pill-content">
			<div className="hud-interactions-ems-sell-pill-content__title">Выберите вид и кол-во лекарства</div>
			<div className="hud-interactions-ems-sell-pill-content-type">
				<svg xmlns="http://www.w3.org/2000/svg" width="29.085" height="15.042" viewBox="0 0 29.085 15.042"
				     fill={type === 'flu' ? '#aab4ee' : '#ffffff'} opacity={type === 'flu' ? 1 : .5}
				     onClick={() => setType('flu')}
				>
					<path
						d="M12.287,5.266a5.266,5.266,0,1,0-10.532,0V16.42A7.021,7.021,0,0,0,6.971,28.085h.05A7.021,7.021,0,0,0,12.287,16.42ZM7.021,25.452H6.99A4.406,4.406,0,0,1,2.633,21.04a5.105,5.105,0,0,1,1.755-3.625V5.266a2.633,2.633,0,1,1,5.266,0v12.15a5.1,5.1,0,0,1,1.755,3.648A4.393,4.393,0,0,1,7.021,25.452Zm3.511-4.388a3.511,3.511,0,1,1-5.266-3.04V5.266a1.755,1.755,0,1,1,3.511,0V18.024A3.508,3.508,0,0,1,10.532,21.064Z"
						transform="translate(28.585 0.5) rotate(90)"/>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="22.641" height="25.471" viewBox="0 0 22.641 25.471"
				     fill={type === 'amnesia' ? '#aab4ee' : '#ffffff'} opacity={type === 'amnesia' ? 1 : .5}
				     onClick={() => setType('amnesia')}
				>
					<path
						d="M9.2,0A2.822,2.822,0,0,0,6.465,2.131c-.035,0-.062-.009-.1-.009a2.833,2.833,0,0,0-2.83,2.83,2.608,2.608,0,0,0,.075.619,3.507,3.507,0,0,0-1.831,4.816,3.525,3.525,0,0,0,.4,6.324,3.241,3.241,0,0,0-.062.624,3.182,3.182,0,0,0,3.184,3.184,3,3,0,0,0,.531-.053,3.176,3.176,0,0,0,6.191-1.008V2.83A2.833,2.833,0,0,0,9.2,0ZM25.471,13.443a3.519,3.519,0,0,0-1.782-3.056,3.48,3.48,0,0,0,.367-1.543,3.538,3.538,0,0,0-2.2-3.272A2.8,2.8,0,0,0,19.1,2.123c-.035,0-.066.009-.1.009a2.825,2.825,0,0,0-5.563.7V19.457a3.176,3.176,0,0,0,6.191,1.008,3,3,0,0,0,.531.053,3.182,3.182,0,0,0,3.184-3.184,3.241,3.241,0,0,0-.062-.624A3.538,3.538,0,0,0,25.471,13.443Z"
						transform="translate(22.641) rotate(90)"/>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="30.883" height="18.727" viewBox="0 0 30.883 18.727"
				     fill={type === 'poisoning' ? '#aab4ee' : '#ffffff'} opacity={type === 'poisoning' ? 1 : .5}
				     onClick={() => setType('poisoning')}
				>
					<path
						d="M9.6,29.082v-6.7a1.8,1.8,0,0,1-2.641,0V26.2a1.8,1.8,0,0,1-3.6,0V17.358A5.446,5.446,0,0,1,0,12.329V9.363A9.366,9.366,0,0,1,17.991,5.718a9.3,9.3,0,0,1,.736,3.645v2.966a5.4,5.4,0,0,1-1.593,3.845,5.474,5.474,0,0,1-1.528,1.078v8.708a1.8,1.8,0,0,1-2.4,1.7v1.423a1.8,1.8,0,1,1-3.6,0Zm6.962-13.445v-.176a2.95,2.95,0,0,0-2.946-2.946H5.346A2.949,2.949,0,0,0,2.4,15.461v.176h.96v-1.8H15.606v1.8Z"
						transform="translate(30.883) rotate(90)"/>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="28.084" height="28.084" viewBox="0 0 28.084 28.084"
				     fill={type === 'dependence' ? '#aab4ee' : '#ffffff'} opacity={type === 'dependence' ? 1 : .5}
				     onClick={() => setType('dependence')}
				>
					<g transform="translate(28.035) rotate(90)">
						<g transform="translate(0 -0.049)">
							<path
								d="M27.8,20.558a14.225,14.225,0,0,0-6.74-1.842c-.379,0-.754.015-1.126.038a18.357,18.357,0,0,0,2.536-1.64,18.912,18.912,0,0,0,5.582-8.17.587.587,0,0,0-.11-.559.6.6,0,0,0-.533-.2,16.24,16.24,0,0,0-7.793,3.965,25.153,25.153,0,0,0-2.66,2.868,18.147,18.147,0,0,0,.593-4.5A20.569,20.569,0,0,0,14.531.247a.608.608,0,0,0-.978,0,20.568,20.568,0,0,0-3.021,10.274,18.148,18.148,0,0,0,.593,4.5,25.143,25.143,0,0,0-2.66-2.868A16.239,16.239,0,0,0,.671,8.185a.6.6,0,0,0-.533.2.587.587,0,0,0-.11.559,18.912,18.912,0,0,0,5.582,8.17,18.362,18.362,0,0,0,2.536,1.64c-.372-.023-.747-.038-1.126-.038a14.224,14.224,0,0,0-6.74,1.842.586.586,0,0,0,0,1A14.439,14.439,0,0,0,7.021,23.4a10.462,10.462,0,0,0,2.366-.293,5.13,5.13,0,0,0-1.2,3.245.585.585,0,0,0,.585.56.594.594,0,0,0,.167-.024,8.852,8.852,0,0,0,3.786-2.52,8.575,8.575,0,0,0,.728-.986V27.5a.585.585,0,1,0,1.17,0V23.383a8.569,8.569,0,0,0,.728.986,8.853,8.853,0,0,0,3.786,2.52.594.594,0,0,0,.167.024.585.585,0,0,0,.585-.56,5.129,5.129,0,0,0-1.2-3.251,10.365,10.365,0,0,0,2.371.3,14.224,14.224,0,0,0,6.74-1.842.586.586,0,0,0,0-1Z"
								transform="translate(0 0)"/>
						</g>
					</g>
				</svg>
			
			</div>
			<div className="hud-interactions-ems-sell-pill-content-count">
				<div className="hud-interactions-ems-sell-pill-content-count__title">Кол-во</div>
				<div className="hud-interactions-ems-sell-pill-content-count-field">
					<img
						className="hud-interactions-ems-sell-pill-content-count-field__arrow-left"
						src={arrow}
						alt="#"
						onClick={() => {
							if (value - 1 <= 0) setValue(1);
							else setValue(value - 1);
						}}
					/>
					<div className="hud-interactions-ems-sell-pill-content-count-field__value">{value}</div>
					<img
						className="hud-interactions-ems-sell-pill-content-count-field__arrow-right"
						src={arrow}
						alt="#"
						onClick={() => setValue(value + 1)}
					/>
				</div>
			</div>
			<div className="hud-interactions-ems-sell-pill-content-input">
				<div className="hud-interactions-ems-sell-pill-content-input__field">{value * pillsCost[type]}</div>
				<div className="hud-interactions-ems-sell-pill-content-input__dollar">$</div>
				<input
					className="hud-interactions-ems-sell-pill-content-input__submit"
					type="submit"
					name="n_giveMoneySubmit"
					value="Продать"
					onClick={() => {
						EventManager.emitServer('interaction', 'sellPills', value, type, value * pillsCost[type], targetPlayerData.id);
					}}
				/>
			</div>
		</div>
	</div>;
};

export default React.memo(SellPill);