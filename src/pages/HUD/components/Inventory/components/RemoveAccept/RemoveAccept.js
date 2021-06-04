import * as React from 'react';

import './RemoveAccept.scss';

const RemoveAccept = ({setMiddleComponent, handleDrop, render}) => {
	const screen = React.useRef(null);
	
	const renderQuality = React.useMemo(() => {
		switch (render.quality) {
			case 0:
				return '#B7C2F8';
			case 1:
				return '#8A9EFF';
			case 2:
				return '#C970FF';
			case 3:
				return '#FF8888';
			case 4:
				return '#FFD139';
			default:
				return '#FFFFFF';
		}
	}, [render.quality]);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	return <div className="inventory-remove-accept" ref={screen}>
		<div className="inventory-remove-accept-content">
			<div className="inventory-remove-accept-content-render">
				<img
					className="inventory-remove-accept-content-render__image"
					src={`./publicImages/inventory/${render.image}`}
					alt="#"
					style={{filter: `drop-shadow(0 0 15px ${renderQuality})`}}
				/>
				<div className="inventory-remove-accept-content-render__name">{render.name}</div>
				<div className="inventory-remove-accept-content-render__quality"
				     style={{textShadow: `0 0 5px ${renderQuality}`}}>{render.quality + 1} уровня
				</div>
			</div>
			<div className="inventory-remove-accept-content__title">Вы действительно хотите <br/>выбросить?</div>
			<div className="inventory-remove-accept-content-choice">
				<div className="inventory-remove-accept-content-choice-confirm" onClick={() => handleDrop(true)}>
					<div className="inventory-remove-accept-content-choice-confirm-top">
						<div className="inventory-remove-accept-content-choice-confirm-top__title">Да</div>
						<svg className="inventory-remove-accept-content-choice-confirm-top__trash" width="71.708"
						     height="22.437" viewBox="0 0 71.708 22.437">
							<defs>
								<filter id="id_trashTopFilter" x="0" y="0" width="71.708" height="22.437"
								        filterUnits="userSpaceOnUse">
									<feOffset dy="1" input="SourceAlpha"/>
									<feGaussianBlur stdDeviation="1.5" result="blur"/>
									<feFlood floodOpacity="0.749"/>
									<feComposite operator="in" in2="blur"/>
									<feComposite in="SourceGraphic"/>
								</filter>
							</defs>
							<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#id_trashTopFilter)">
								<path d="M54.531,8.979,50.052,4.5h-22.4L23.177,8.979H7.5v8.958H70.208V8.979Z"
								      transform="translate(-3 -1)" fill="#fff"/>
							</g>
						</svg>
					</div>
					<svg className="inventory-remove-accept-content-choice-confirm__bottom" width="62.75" height="71.708"
					     viewBox="0 0 62.75 71.708">
						<defs>
							<filter id="id_trashBottomFilter" x="0" y="0" width="62.75" height="71.708"
							        filterUnits="userSpaceOnUse">
								<feOffset dy="1" input="SourceAlpha"/>
								<feGaussianBlur stdDeviation="1.5" result="blur"/>
								<feFlood floodOpacity="0.749"/>
								<feComposite operator="in" in2="blur"/>
								<feComposite in="SourceGraphic"/>
							</filter>
						</defs>
						<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#id_trashBottomFilter)">
							<path
								d="M9.45,66.048a8.985,8.985,0,0,0,8.958,8.958H54.241A8.985,8.985,0,0,0,63.2,66.048V12.3H9.45ZM20.468,34.156l6.316-6.316,9.541,9.5,9.5-9.5,6.316,6.316-9.5,9.5,9.5,9.5L45.82,59.463l-9.5-9.5-9.5,9.5-6.316-6.316,9.5-9.5Z"
								transform="translate(-4.95 -8.8)" fill="#fff"/>
						</g>
					</svg>
				</div>
				<div className='inventory-remove-accept-content-choice__decline' onClick={() => setMiddleComponent('dropZone')}>Нет</div>
			</div>
		</div>
	</div>;
};

export default React.memo(RemoveAccept);