import * as React   from 'react';
import EventManager from 'utils/eventManager';
import cn           from 'classnames';

import './AchievementElement.scss';

const AchievementElement = ({el, type}) => {
	const readyColor = React.useMemo(() => {
			switch (type) {
				case 'default':
					return ['#c373f3', '#aab6ef'];
				case 'fraction':
					return ['#FF5E62', '#FF9966'];
				case 'job':
					return ['#FFA743', '#FFEF84'];
				case 'special':
					return ['#718AFF', '#AAB6EF'];
				default:
					return;
			}
		}, [type]),
		readyIcon = React.useMemo(() => {
			return <svg
				width="139.837"
				height="152.282"
				viewBox="0 0 139.837 152.282"
				style={{filter: `drop-shadow(0 0 10px ${readyColor[0]})`}}
			>
				<defs>
					<linearGradient id={`${type}Gradient`} y1="0.233" x2="1" y2="0.783">
						<stop offset="0" stopColor={readyColor[1]}/>
						<stop offset="1" stopColor={readyColor[0]}/>
					</linearGradient>
				</defs>
				<g transform="translate(-890.081 -27.859)">
					<g transform="matrix(1, 0, 0, 1, 890.08, 27.86)">
						<path d="M-6546.244-5422.5l39.918,23.141.082,46.141-39.837,23L-6586-5353.359l-.082-46.141Z"
						      transform="translate(6616.08 5452.5)" fill={`url(#${type}Gradient)`}/>
					</g>
					<g transform="matrix(1, 0, 0, 1, 890.08, 27.86)">
						<path
							d="M12.227,30.9.527,19.2a1.8,1.8,0,0,1,0-2.546L3.073,14.1a1.8,1.8,0,0,1,2.546,0L13.5,21.986,30.382,5.1a1.8,1.8,0,0,1,2.546,0L35.473,7.65a1.8,1.8,0,0,1,0,2.546l-20.7,20.7A1.8,1.8,0,0,1,12.227,30.9Z"
							transform="translate(51.92 58.14)" fill="#fff"
							style={{filter: 'drop-shadow(0 0 10px #ffffff)'}}/>
					</g>
				</g>
			</svg>;
		}, [readyColor]);
	
	return <div
		className={cn('achievement-element', el.currentProgress === el.maxProgress && !el.isAwardReceived && 'achievement-element_receive')}
		onClick={() => {
			if (el.currentProgress === el.maxProgress && !el.isAwardReceived) {
				EventManager.emitServer('achievements', 'receive', type, el.id);
			}
		}}
	>
		{el.currentProgress === el.maxProgress ? !el.isAwardReceived ?
			<div className="achievement-element__icon achievement-element__icon_receive">{readyIcon}</div> :
			<img
				className="achievement-element__icon achievement-element__icon_ready"
				src={`./publicImages/achievements/${el.icon}Ready.svg`}
				alt="#"
			/> :
			<img
				className="achievement-element__icon"
				src={`./publicImages/achievements/${el.icon}.svg`}
				alt="#"
			/>
		}
		<div className="achievement-element-content">
			<div
				className="achievement-element-content__receive"
				style={{color: readyColor[1], filter: `drop-shadow(0 0 10px ${readyColor[0]})`}}
			>
				Получить
			</div>
			<div className="achievement-element-content__title">{el.name}</div>
			<div className="achievement-element-content-progress">
				<div
					className="achievement-element-content-progress__title"
					style={{color: readyColor[1]}}
				>
					{el.award}
				</div>
				<div className="achievement-element-content-progress-bar">
					<div
						className="achievement-element-content-progress-bar__fill"
						style={{
							width: `${el.currentProgress / el.maxProgress * 100}%`,
							background: `linear-gradient(-45deg, ${readyColor[0]}, ${readyColor[1]})`,
							boxShadow: `0 0 15px ${readyColor[0]}`
						}}
					/>
					<div className="achievement-element-content-progress-bar__title">
						{el.currentProgress}/{el.maxProgress}
					</div>
				</div>
			</div>
			<div className="achievement-element-content__description">{el.description}</div>
		</div>
	</div>;
};

export default React.memo(AchievementElement);