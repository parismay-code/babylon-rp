import * as React   from 'react';
import EventManager from 'utils/eventManager';

import rightArrow from 'assets/images/hud/rightArrow.svg';

import './EMS.scss';

const EMS = ({
	setCurrentPage,
	noVisualOption,
	setNoVisualOption,
	currentOption,
	setCurrentOption,
	nextOption,
	setNextOption,
	targetPlayerData,
	setTargetPlayerData,
}) => {
	const titles = React.useMemo(() => ({
		'heal': 'Вылечить',
		'sellMed': 'Продать мед. набор',
		'respawn': 'Вколоть адреналин',
		'invite': 'Пригласить во фракцию',
		'unInvite': 'Исключить из фракции',
		'sellPills': 'Продать таблетки',
	}), []);
	
	const healIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="39.496" height="34.557" viewBox="0 0 39.496 34.557"
			            fill={noVisualOption === 'heal' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'heal' ? '1' : '.5'}
			            style={noVisualOption === 'heal' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M24.7,18.587l-3.833,7.667a1.233,1.233,0,0,1-2.229-.046l-4.389-9.742L11.933,22H4.674L18.751,36.382a1.374,1.374,0,0,0,1.982,0L34.818,22H26.4Zm11.84-13.1-.185-.193a10.1,10.1,0,0,0-14.455,0L19.746,7.5,17.594,5.3a10.091,10.091,0,0,0-14.455,0l-.185.185a10.591,10.591,0,0,0-.563,14.046h7.9l2.769-6.649a1.237,1.237,0,0,1,2.268-.031l4.489,9.973L23.6,15.27a1.232,1.232,0,0,1,2.206,0l2.129,4.258H37.1a10.591,10.591,0,0,0-.563-14.046Z"
					transform="translate(0.002 -2.247)"/>
			</svg>;
			
		}, [noVisualOption]),
		sellMedIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="43.945" height="41.314" viewBox="0 0 43.945 41.314"
			            fill={currentOption === 'sellMed' || nextOption === 'sellMed' ? '#eaeaea' : null}
			            opacity={currentOption === 'sellMed' || nextOption === 'sellMed' ? '1' : '.5'}
			            style={currentOption === 'sellMed' || nextOption === 'sellMed' ?
				            {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(-15833.054 666.336)">
					<path
						d="M26.456,33.75H3.375A3.379,3.379,0,0,1,0,30.375V10.125A3.379,3.379,0,0,1,3.375,6.75H9V3.375A3.379,3.379,0,0,1,12.375,0h11.25A3.379,3.379,0,0,1,27,3.375V6.75h5.625A3.379,3.379,0,0,1,36,10.125V23.836h-.053a9.511,9.511,0,0,0-9.5,9.5c0,.137,0,.276.009.413ZM11.813,18a.563.563,0,0,0-.562.563v3.375a.563.563,0,0,0,.563.563H15.75v3.938a.563.563,0,0,0,.563.563h3.375a.563.563,0,0,0,.563-.562V22.5h3.938a.563.563,0,0,0,.563-.562V18.563A.563.563,0,0,0,24.188,18H20.25V14.063a.563.563,0,0,0-.562-.562H16.313a.563.563,0,0,0-.562.563V18ZM13.5,4.5V6.75h9V4.5Z"
						transform="translate(15833.053 -666.336)"/>
					<path
						d="M7.4,15.978A8,8,0,0,1,7.408.022.5.5,0,0,0,7.053.5V2H6.975A3.43,3.43,0,0,0,4.449,3.116a3.388,3.388,0,0,0-.88,2.621A3.582,3.582,0,0,0,6.188,8.756l3.2.938A.922.922,0,0,1,9.131,11.5H7.06a1.9,1.9,0,0,1-1.069-.328.467.467,0,0,0-.262-.079.5.5,0,0,0-.348.142L4.294,12.3a.487.487,0,0,0-.149.382.524.524,0,0,0,.2.384,4.429,4.429,0,0,0,2.7.938v1.5a.506.506,0,0,0,.346.476Zm1.339-.011v0a.505.505,0,0,0,.315-.465V13.994a3.528,3.528,0,0,0,3.3-2.273,3.4,3.4,0,0,0-.183-2.7,3.443,3.443,0,0,0-2.082-1.727L6.716,6.306A.922.922,0,0,1,6.975,4.5H9.047a1.892,1.892,0,0,1,1.069.329.467.467,0,0,0,.262.079.5.5,0,0,0,.348-.142L11.813,3.7a.487.487,0,0,0,.149-.382.524.524,0,0,0-.2-.384A4.429,4.429,0,0,0,9.053,2V.5A.5.5,0,0,0,8.731.033a8,8,0,0,1,.007,15.934Z"
						transform="translate(15861 -641)"/>
				</g>
			</svg>;
		}, [currentOption, nextOption]),
		inviteIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="38.778" height="34.277" viewBox="0 0 38.778 34.277"
			            fill={noVisualOption === 'invite' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'invite' ? '1' : '.5'}
			            style={noVisualOption === 'invite' ?
				            {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(-819.223 -291.724)">
					<path
						d="M-7617.091-3759a9.009,9.009,0,0,1,9-9,9.009,9.009,0,0,1,9,9,9.011,9.011,0,0,1-9,9A9.011,9.011,0,0,1-7617.091-3759Zm2.1.7h5.7v5.7h2.4v-5.7h5.7v-2.4h-5.7v-5.7h-2.4v5.7h-5.7Zm-1.388,7.3h-18.371a3.123,3.123,0,0,1-3.121-3.119v-2.7a8.747,8.747,0,0,1,8.735-8.735h1.087a11.317,11.317,0,0,0,4.738,1.041,11.277,11.277,0,0,0,4.736-1.041h1.087c.23,0,.466.01.7.029a11.283,11.283,0,0,0-2.411,7.014,11.391,11.391,0,0,0,2.825,7.514l0,0Zm-15.252-24.958a8.329,8.329,0,0,1,8.321-8.319,8.329,8.329,0,0,1,8.319,8.319,8.328,8.328,0,0,1-8.319,8.319A8.329,8.329,0,0,1-7631.63-3775.958Z"
						transform="translate(8457.092 4076.001)"/>
				</g>
			</svg>;
		}, [noVisualOption]),
		unInviteIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="38.779" height="34.276" viewBox="0 0 38.779 34.276"
			            fill={noVisualOption === 'unInvite' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'unInvite' ? '1' : '.5'}
			            style={noVisualOption === 'unInvite' ?
				            {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(-819.222 -291.725)">
					<path
						d="M-7451.441-3759a9.01,9.01,0,0,1,9-9,9.01,9.01,0,0,1,9,9,9.011,9.011,0,0,1-9,9A9.011,9.011,0,0,1-7451.441-3759Zm2.1.7h13.8v-2.4h-13.8Zm-1.388,7.3H-7469.1a3.124,3.124,0,0,1-3.121-3.119v-2.7a8.746,8.746,0,0,1,8.735-8.737h1.086a11.3,11.3,0,0,0,4.739,1.041,11.243,11.243,0,0,0,4.737-1.041h1.086c.232,0,.467.011.7.028a11.282,11.282,0,0,0-2.412,7.015,11.4,11.4,0,0,0,2.824,7.512l0,0Zm-15.252-24.956a8.328,8.328,0,0,1,8.319-8.319,8.33,8.33,0,0,1,8.321,8.319,8.33,8.33,0,0,1-8.321,8.319A8.328,8.328,0,0,1-7465.979-3775.957Z"
						transform="translate(8291.441 4076)"/>
				</g>
			</svg>;
		}, [noVisualOption]),
		respawnIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="38.008" height="38.038" viewBox="0 0 38.008 38.038"
			            fill={noVisualOption === 'respawn' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'respawn' ? '1' : '.5'}
			            style={noVisualOption === 'respawn' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(1334.564 5080.236)">
					<path
						d="M-1318.339-4998.485a2.3,2.3,0,0,0-2.518,1.012c-.66.75-1.428,1.4-2.117,2.129-.333.351-.549.347-.9.008-1.169-1.121-1.184-1.107-2.323.03-2.146,2.142-4.306,4.271-6.426,6.439-.449.458-.692.469-1.142.011-1.049-1.068-1.075-1.043-.011-2.1,2.207-2.2,4.4-4.416,6.629-6.6.423-.416.443-.66,0-1.083-1.079-1.042-1.057-1.064.021-2.156a6.262,6.262,0,0,1,.609-.6,4.315,4.315,0,0,0,1.934-4.483c-.095-.508,1.29-2.22,1.817-2.432.3-.122.416.12.563.265.775.762,1.551,1.524,2.3,2.313.313.33.513.4.889.044,1.2-1.143,1.22-1.125.035-2.294-.55-.542-1.089-1.1-1.652-1.625-.3-.28-.379-.477-.048-.832,1.185-1.271,1.169-1.285,2.413-.041.526.526,1.066,1.038,1.576,1.579.281.3.471.383.829.051,1.227-1.134,1.244-1.119.05-2.325-.543-.549-1.079-1.107-1.645-1.632-.329-.305-.354-.554,0-.833.045-.035.079-.083.12-.123.619-.591,1.2-1.6,1.868-1.658.7-.062,1.245,1.042,1.853,1.638,1.859,1.822,3.679,3.683,5.541,5.5.447.437.562.7.044,1.208q-4.072,4-8.059,8.082C-1316.76-4998.305-1317.523-4998.639-1318.339-4998.485Z"
						transform="translate(0 -53.681)"/>
					<path
						d="M-1214.455-5070.267a18.173,18.173,0,0,1,1.5-1.25c.407-.276.6.207.811.421,4.373,4.354,8.727,8.729,13.11,13.073.512.507.511.8-.009,1.283-1.023.947-1,.974-1.98-.022-.583-.589-1.19-1.155-1.751-1.764-.327-.354-.548-.363-.885,0-.721.772-1.507,1.484-2.227,2.257-.366.393-.606.454-1.018.036q-3.488-3.542-7.029-7.032c-.365-.361-.4-.59,0-.956.757-.7,1.43-1.484,2.2-2.16.518-.454.418-.729-.028-1.137-.758-.694-1.468-1.44-2.2-2.168C-1214.078-5069.809-1214.179-5069.945-1214.455-5070.267Z"
						transform="translate(-99.49 -7.153)"/>
					<path
						d="M-1158.953-5070.825c-.254-.348-.51-.695-.762-1.044-.375-.52-.7-.593-1.192-.058-.98,1.061-1.01,1.029-2.021.013-1.07-1.074-2.131-2.157-3.225-3.207-.4-.386-.51-.64-.046-1.088,1.061-1.026,1.061-1.077,0-2.125-.454-.449-.354-.706.04-1.1,1.062-1.064,1.043-1.074,2.1-.01q2.969,2.977,5.947,5.946c1.019,1.016,1.023,1.014-.042,2.035A2.774,2.774,0,0,1-1158.953-5070.825Z"
						transform="translate(-139.208)"/>
				</g>
			</svg>;
			
		}, [noVisualOption]),
		sellPillsIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="44.527" height="38.039" viewBox="0 0 44.527 38.039"
			            fill={currentOption === 'sellPills' || nextOption === 'sellPills' ? '#eaeaea' : null}
			            opacity={currentOption === 'sellPills' || nextOption === 'sellPills' ? '1' : '.5'}
			            style={currentOption === 'sellPills' || nextOption === 'sellPills' ?
				            {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M25.91,36.475l10.6-10.613a7.565,7.565,0,0,1-10.6,10.613ZM22.953,30.48a7.563,7.563,0,0,1,7.566-7.566,7.481,7.481,0,0,1,4.6,1.572l-10.6,10.6A7.562,7.562,0,0,1,22.953,30.48ZM2.219,29.331a7.632,7.632,0,0,1,0-10.76l7.5-7.508L20.5,21.843l-7.458,7.488a7.7,7.7,0,0,1-10.819,0Zm36.969-8.222a.535.535,0,0,1-.534-.534v-1.6a4.72,4.72,0,0,1-2.887-1,.542.542,0,0,1-.06-.818l1.161-1.135a.522.522,0,0,1,.652-.067,2.039,2.039,0,0,0,1.141.351h2.213a.985.985,0,0,0,.277-1.93l-3.422-1a3.823,3.823,0,0,1-2.8-3.225A3.658,3.658,0,0,1,38.57,6.155h.084v-1.6a.535.535,0,0,1,.534-.534h1.068a.535.535,0,0,1,.534.534v1.6a4.722,4.722,0,0,1,2.887,1,.542.542,0,0,1,.06.818L42.575,9.11a.52.52,0,0,1-.651.067,2.039,2.039,0,0,0-1.141-.351H38.57a.985.985,0,0,0-.277,1.93l3.6,1.055a3.664,3.664,0,0,1,2.42,4.73,3.769,3.769,0,0,1-3.528,2.426v1.609a.535.535,0,0,1-.534.534ZM11.111,9.678,18.56,2.229A7.609,7.609,0,0,1,29.32,12.99l-7.438,7.458Zm9.217-4.451-.009.01-3.4,3.341a.98.98,0,0,0,1.365,1.406l.01-.01,3.39-3.341a.979.979,0,0,0,.03-1.386.962.962,0,0,0-.7-.3A.98.98,0,0,0,20.328,5.226Z"/>
			</svg>;
		}, [currentOption, nextOption]);
	
	return <div className="hud-interactions-fraction-ems">
		<div className="hud-interactions-fraction-ems-navigation">
			<div
				className="hud-interactions-fraction-ems-navigation-back"
				onClick={() => setCurrentPage('main')}
			>
				<img className="hud-interactions-fraction-ems-navigation-back__arrow" src={rightArrow} alt="#"/>
				<span className="hud-interactions-fraction-ems-navigation-back__title">назад</span>
			</div>
		</div>
		<div
			className="hud-interactions-fraction-ems__title">{titles[nextOption] ? titles[nextOption] : titles[noVisualOption] ? titles[noVisualOption] : null}</div>
		<div className="hud-interactions-fraction-ems-options">
			<div
				className="hud-interactions-fraction-ems-options__element hud-interactions-fraction-ems-options__element_heal"
				onMouseOver={() => setNoVisualOption('heal')}
				onClick={() => EventManager.emitServer('interaction', 'healPlayer', targetPlayerData.id)}
			>
				{healIcon}
			</div>
			<div
				className="hud-interactions-fraction-ems-options__element hud-interactions-fraction-ems-options__element_sell-med"
				onMouseOver={() => setNextOption('sellMed')}
				onClick={() => setCurrentOption('sellMed')}
			>
				{sellMedIcon}
			</div>
			<div
				className="hud-interactions-fraction-ems-options__element hud-interactions-fraction-ems-options__element_invite"
				onMouseOver={() => setNoVisualOption(targetPlayerData.isInFraction ? 'unInvite' : 'invite')}
				onClick={() => {
					if (targetPlayerData.isInFraction) EventManager.emitServer('interaction', 'fractionInvite', targetPlayerData.id);
					else EventManager.emitServer('interaction', 'fractionKick', targetPlayerData.id);
					setTargetPlayerData({...targetPlayerData, isInFraction: !targetPlayerData.isInFraction});
				}}
			>
				{targetPlayerData.isInFraction ? unInviteIcon : inviteIcon}
			</div>
			<div
				className="hud-interactions-fraction-ems-options__element hud-interactions-fraction-ems-options__element_respawn"
				onMouseOver={() => setNoVisualOption('respawn')}
				onClick={() => EventManager.emitServer('interaction', 'respawn', targetPlayerData.id)}
			>
				{respawnIcon}
			</div>
			<div
				className="hud-interactions-fraction-ems-options__element hud-interactions-fraction-ems-options__element_sell-pills"
				onMouseOver={() => setNextOption('sellPills')}
				onClick={() => setCurrentOption('sellPills')}
			>
				{sellPillsIcon}
			</div>
		</div>
	</div>;
};

export default React.memo(EMS);