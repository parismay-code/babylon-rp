import * as React   from 'react';
import EventManager from 'utils/eventManager';

import rightArrow from 'assets/images/hud/rightArrow.svg';

import './Documents.scss';

const Documents = ({setCurrentPage, noVisualOption, setNoVisualOption, targetPlayerData}) => {
	const screen = React.useRef(null);
	
	React.useEffect(() => {
		const timeout = setTimeout(() => screen.current.style.opacity = 1, 200);
		
		return () => clearTimeout(timeout);
	}, []);
	
	const titles = React.useMemo(() => ({
		'passport': 'Показать паспорт',
		'license': 'Показать лицензии',
		'certificate': 'Показать сертификаты',
		'fracCertificate': 'Показать удостоверение',
	}), []);
	
	const passportIcon = React.useMemo(() => {
			return <svg width="23.95" height="37.297" viewBox="0 0 23.95 37.297"
			            fill={noVisualOption === 'passport' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'passport' ? '1' : '.5'}
			            style={noVisualOption === 'passport' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M-1941.974,2065.3h-22.1a.923.923,0,0,1-.922-.922v-31.3a.916.916,0,0,1,.458-.8l.008.026.507-.15h22.054a.924.924,0,0,1,.923.922v31.3A.923.923,0,0,1-1941.974,2065.3Zm-17.349-5.759-1.391,3.594h.629l.148-.4h1.229l.156.406h.629Zm13.7.1v3.5h.582v-2.483h0l1.736,2.484h.589v-3.5h-.58v2.486l-1.742-2.486Zm-3.164,2.91v.586h2.307v-.586Zm-2.52-2.91v3.5h1.877v-.586h-1.3v-2.91Zm-3.612,0,1.314,1.843v1.652h.582v-1.652l1.314-1.843h-.714l-.892,1.248-.891-1.248Zm-2.613,0v3.5h1.162c.031,0,.066,0,.1,0s.093-.009.145-.015c.075-.01.128-.019.173-.03a1.752,1.752,0,0,0,.182-.057,1.323,1.323,0,0,0,.184-.087.978.978,0,0,0,.165-.129.792.792,0,0,0,.138-.171.882.882,0,0,0,.09-.227,1.19,1.19,0,0,0,.033-.287v-.033a.473.473,0,0,0-.009-.091c0-.029-.013-.059-.02-.088l0-.011-.007-.027a.577.577,0,0,0-.068-.14.879.879,0,0,0-.112-.142.7.7,0,0,0-.17-.122.834.834,0,0,0-.241-.083.819.819,0,0,0,.419-.255.764.764,0,0,0,.165-.511,1.039,1.039,0,0,0-.066-.372.881.881,0,0,0-.163-.266.951.951,0,0,0-.231-.175,1.325,1.325,0,0,0-.244-.105,1.518,1.518,0,0,0-.23-.049,1.469,1.469,0,0,0-.164-.019c-.026,0-.049,0-.066,0Zm-5.8,0v3.5h1.162c.034,0,.066,0,.105,0s.078-.007.14-.015.118-.017.173-.03a1.562,1.562,0,0,0,.182-.057,1.16,1.16,0,0,0,.184-.087.834.834,0,0,0,.165-.129.765.765,0,0,0,.137-.171.843.843,0,0,0,.093-.227,1.143,1.143,0,0,0,.033-.287v-.033a.506.506,0,0,0-.011-.091c-.006-.037-.017-.077-.03-.123a.546.546,0,0,0-.068-.143.844.844,0,0,0-.111-.142.637.637,0,0,0-.172-.122.835.835,0,0,0-.241-.083.816.816,0,0,0,.419-.255.764.764,0,0,0,.165-.511,1.018,1.018,0,0,0-.066-.372.785.785,0,0,0-.163-.266.887.887,0,0,0-.231-.175,1.352,1.352,0,0,0-.244-.105,1.461,1.461,0,0,0-.23-.049,1.354,1.354,0,0,0-.162-.019c-.028,0-.05,0-.066,0Zm15.709-.049a1.259,1.259,0,0,0-.648.177,1.306,1.306,0,0,0-.475.475,1.294,1.294,0,0,0-.173.649,1.3,1.3,0,0,0,.173.65,1.3,1.3,0,0,0,.475.475,1.258,1.258,0,0,0,.648.175,1.248,1.248,0,0,0,.5-.1,1.258,1.258,0,0,0,.413-.278,1.335,1.335,0,0,0,.277-.414,1.264,1.264,0,0,0,.1-.5,1.292,1.292,0,0,0-.173-.651,1.322,1.322,0,0,0-.474-.475A1.267,1.267,0,0,0-1947.619,2059.588Zm-12.595-3.623a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h14.376a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5h-3.938V2047h-1.75v-6h-3v7.989l-.016.011h-1.733v6.964Zm3.11-19.409a.95.95,0,0,0,.313.74,1.205,1.205,0,0,0,.781.278,1.237,1.237,0,0,0,.532-.115.988.988,0,0,0,.4-.357,1,1,0,0,0,.157-.561,1.091,1.091,0,0,0-.148-.562.939.939,0,0,0-.425-.374,1.223,1.223,0,0,0-.518-.117.568.568,0,0,1-.36-.118.394.394,0,0,1-.15-.325.443.443,0,0,1,.145-.358.539.539,0,0,1,.365-.124.573.573,0,0,1,.352.105.391.391,0,0,1,.148.313h.578a.96.96,0,0,0-.313-.723,1.087,1.087,0,0,0-.764-.282,1.163,1.163,0,0,0-.533.124,1.075,1.075,0,0,0-.406.375,1.067,1.067,0,0,0-.156.569.964.964,0,0,0,.147.537.98.98,0,0,0,.42.358,1.26,1.26,0,0,0,.527.116.569.569,0,0,1,.352.141.435.435,0,0,1,.157.343.4.4,0,0,1-.15.323.547.547,0,0,1-.359.124.57.57,0,0,1-.356-.112.4.4,0,0,1-.154-.32Zm-5.567-2.53v3.51h.586v-1.461h.585l.066,0a1.146,1.146,0,0,0,.166-.022c.077-.015.154-.034.227-.055a1.057,1.057,0,0,0,.25-.112,1.258,1.258,0,0,0,.229-.181.8.8,0,0,0,.167-.275,1.048,1.048,0,0,0,.064-.379,1,1,0,0,0-.068-.379.857.857,0,0,0-.161-.274,1.025,1.025,0,0,0-.232-.181,1.281,1.281,0,0,0-.247-.112,1.516,1.516,0,0,0-.23-.054c-.083-.014-.137-.022-.164-.023h-1.237Zm18.006.536v2.965h.58v-2.965h.736v-.536h-2.052v.536Zm-3.494-.536v.585l.554.873h-.554v2.043h.584v-1.46h.337l.908,1.461h.687l-.951-1.523a1.115,1.115,0,0,0,.266-.105,1.182,1.182,0,0,0,.244-.175.8.8,0,0,0,.19-.285,1.039,1.039,0,0,0,.069-.394,1.011,1.011,0,0,0-.068-.377.834.834,0,0,0-.163-.273.976.976,0,0,0-.231-.178,1.319,1.319,0,0,0-.247-.112,1.5,1.5,0,0,0-.232-.054c-.076-.013-.133-.021-.164-.023h-1.23Zm-3.174,2.912v.589h2.309v-.589Zm-2.932-1.454v2.043h.584v-1.461h.623c.024,0,.049-.005.075-.009l.03,0,.154-.024a1.143,1.143,0,0,0,.185-.052c.069-.028.132-.055.193-.085a.818.818,0,0,0,.183-.128.953.953,0,0,0,.155-.18.807.807,0,0,0,.107-.237,1.049,1.049,0,0,0,.041-.3,1.071,1.071,0,0,0-.065-.377.861.861,0,0,0-.164-.273.9.9,0,0,0-.231-.178,1.277,1.277,0,0,0-.243-.112,1.6,1.6,0,0,0-.233-.054c-.089-.015-.138-.022-.164-.023h-1.229v.585l.553.873Zm-5.125,1.637h1.231l.156.406h.631l-1.4-3.6-1.393,3.6h.629l.148-.405Zm9.227-3.145a1.275,1.275,0,0,0-.652.175,1.314,1.314,0,0,0-.473.477,1.281,1.281,0,0,0-.175.65,1.277,1.277,0,0,0,.175.651,1.305,1.305,0,0,0,.473.477,1.268,1.268,0,0,0,.652.175,1.262,1.262,0,0,0,.5-.1,1.369,1.369,0,0,0,.415-.28,1.353,1.353,0,0,0,.278-.415,1.258,1.258,0,0,0,.1-.5,1.266,1.266,0,0,0-.175-.652,1.289,1.289,0,0,0-.475-.475A1.274,1.274,0,0,0-1950.162,2033.977Zm-6.206,28.569h-.584v-.867h.665a.686.686,0,0,1,.14.018,1.049,1.049,0,0,1,.186.06.362.362,0,0,1,.157.13.377.377,0,0,1,.063.223.4.4,0,0,1-.04.19.36.36,0,0,1-.109.128.563.563,0,0,1-.154.074.859.859,0,0,1-.166.036A1.47,1.47,0,0,1-1956.369,2062.546Zm-5.8,0h-.586v-.867h.667a.678.678,0,0,1,.139.018,1.069,1.069,0,0,1,.186.06.363.363,0,0,1,.157.13.378.378,0,0,1,.063.223.394.394,0,0,1-.041.19.371.371,0,0,1-.107.128.625.625,0,0,1-.154.074.863.863,0,0,1-.166.036A1.517,1.517,0,0,1-1962.164,2062.546Zm3.266-.322h-.851l.425-1.213.424,1.211Zm11.279-.62a.7.7,0,0,1-.509-.209.693.693,0,0,1-.21-.507.7.7,0,0,1,.21-.507.7.7,0,0,1,.509-.208.7.7,0,0,1,.51.208.69.69,0,0,1,.209.507.693.693,0,0,1-.209.507A.7.7,0,0,1-1947.619,2061.6Zm-8.716-.51h-.618v-.871h.645a.665.665,0,0,1,.143.021,1.009,1.009,0,0,1,.171.062.339.339,0,0,1,.144.133.4.4,0,0,1,.06.225.392.392,0,0,1-.031.158.316.316,0,0,1-.083.115.522.522,0,0,1-.114.077.536.536,0,0,1-.121.047,1.042,1.042,0,0,1-.116.024l-.051.007h-.01l-.019,0Zm-5.8,0h-.618v-.871h.645a.651.651,0,0,1,.145.021,1.047,1.047,0,0,1,.171.062.346.346,0,0,1,.145.133.412.412,0,0,1,.058.225.358.358,0,0,1-.031.158.341.341,0,0,1-.081.115.514.514,0,0,1-.114.077.521.521,0,0,1-.122.047,1.049,1.049,0,0,1-.114.024l-.055.007h-.01l-.018,0Zm3.782-24.479h-.848l.424-1.212.424,1.211Zm8.187-.619a.7.7,0,0,1-.511-.209.7.7,0,0,1-.211-.508.694.694,0,0,1,.211-.507.7.7,0,0,1,.511-.209.694.694,0,0,1,.51.209.694.694,0,0,1,.211.507.7.7,0,0,1-.211.508A.7.7,0,0,1-1950.162,2036Zm-11.337-.506h-.585v-.878h.616l.041,0,.046.005.022,0,.011,0c.026,0,.051.01.079.018a.512.512,0,0,1,.123.047.519.519,0,0,1,.117.079.3.3,0,0,1,.083.116.386.386,0,0,1,.033.163.379.379,0,0,1-.033.162.35.35,0,0,1-.083.118.48.48,0,0,1-.117.077.741.741,0,0,1-.123.049.94.94,0,0,1-.114.022.621.621,0,0,1-.083.009h-.006Zm8.476-.009h0l-.548-.868h.473l.06,0a.722.722,0,0,1,.145.027.835.835,0,0,1,.174.063.364.364,0,0,1,.147.132.362.362,0,0,1,.06.21.39.39,0,0,1-.054.206.359.359,0,0,1-.147.131.923.923,0,0,1-.164.068,1.161,1.161,0,0,1-.145.03Zm6.1,0h0l-.543-.868h.467l.062,0a.659.659,0,0,1,.145.027.87.87,0,0,1,.173.063.375.375,0,0,1,.147.132.37.37,0,0,1,.059.21.371.371,0,0,1-.04.176.325.325,0,0,1-.094.122.558.558,0,0,1-.131.076.734.734,0,0,1-.131.045.84.84,0,0,1-.113.017Zm3.138-4.319h-19.735l19.735-3.162v3.161Z"
					transform="translate(1965.001 -2028)"/>
			</svg>;
		}, [noVisualOption]),
		licenseIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="27.386" height="36.152" viewBox="0 0 27.386 36.152"
			            fill={noVisualOption === 'license' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'license' ? '1' : '.5'}
			            style={noVisualOption === 'license' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<g transform="translate(-62.072)">
					<path d="M67.348,5.276V0h0L62.072,5.275h5.276Z"/>
					<g transform="translate(62.072)">
						<path
							d="M181.9,177.314l1.226.708.708,1.226h1.415l1.226.708,1.226-.708h1.415l.708-1.226,1.226-.708V175.9l.708-1.226-.708-1.226v-1.415l-1.226-.708-.708-1.226H187.7l-1.226-.708-1.226.708h-1.415l-.708,1.226-1.226.708v1.415l-.708,1.226.708,1.226v1.415Zm3.516-3.7h2.118v2.118h-2.118Z"
							transform="translate(-172.779 -157.431)"/>
						<path d="M282.308,338.707h-2.071l-.088.051,1.288,4.889.934-.611,1.114.072-1.165-4.422Z"
						      transform="translate(-264.751 -314.771)"/>
						<path d="M187.851,338.707H185.78l-.012-.022-1.165,4.422,1.114-.072.934.611,1.288-4.889Z"
						      transform="translate(-175.951 -314.771)"/>
						<path
							d="M69.466,0V7.394H62.072V36.152H89.458V0ZM80.261,30.424l-2.8,1.833-1.693-6.428-1.693,6.428-2.8-1.833-3.342.215,2.33-8.848-1.185-.684V19.036l-1.035-1.793,1.035-1.793V13.379l1.793-1.035L71.9,10.55h2.071l1.793-1.035,1.793,1.035h2.071l1.035,1.793,1.793,1.035v2.071l1.035,1.793-1.035,1.793v2.071l-1.185.684,2.33,8.848Z"
							transform="translate(-62.072)"/>
					</g>
				</g>
			</svg>;
		}, [noVisualOption]),
		certificateIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="25.677" height="36.681" viewBox="0 0 25.677 36.681"
			            fill={noVisualOption === 'certificate' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'certificate' ? '1' : '.5'}
			            style={noVisualOption === 'certificate' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M23.843,36.681H1.834A1.836,1.836,0,0,1,0,34.847V1.834A1.836,1.836,0,0,1,1.834,0H23.843a1.836,1.836,0,0,1,1.834,1.834V34.847A1.836,1.836,0,0,1,23.843,36.681Zm-11-6.179h0l2.834,2.058a.718.718,0,0,0,.452.157.9.9,0,0,0,.5-.157.808.808,0,0,0,.294-.906l-1.083-3.331,2.834-2.059a.81.81,0,0,0-.477-1.466h-3.5L13.61,21.467a.811.811,0,0,0-1.542,0L10.985,24.8h-3.5a.81.81,0,0,0-.476,1.466L9.84,28.324,8.758,31.655a.81.81,0,0,0,1.247.906L12.838,30.5Zm2.977-26.54v16l2.607-2.11a.839.839,0,0,0,.312-.655V4.805a.843.843,0,0,0-.842-.842Zm-8.032,0a.843.843,0,0,0-.842.842V17.2a.841.841,0,0,0,.312.655l2.608,2.11v-16Zm5.054,15.315a2.439,2.439,0,0,1,1.292.369V3.963H11.547V19.647A2.438,2.438,0,0,1,12.839,19.278Z"
				/>
			</svg>;
		}, [noVisualOption]),
		fracCertificateIcon = React.useMemo(() => {
			return <svg xmlns="http://www.w3.org/2000/svg" width="25.677" height="36.681" viewBox="0 0 25.677 36.681"
			            fill={noVisualOption === 'fracCertificate' ? '#eaeaea' : null}
			            opacity={noVisualOption === 'fracCertificate' ? '1' : '.5'}
			            style={noVisualOption === 'fracCertificate' ? {filter: 'drop-shadow(0 2px 2px #00000080)'} : null}>
				<path
					d="M8392.842-6278.319h-22.007a1.836,1.836,0,0,1-1.835-1.833v-33.013a1.837,1.837,0,0,1,1.835-1.835h22.007a1.837,1.837,0,0,1,1.835,1.835v33.013A1.836,1.836,0,0,1,8392.842-6278.319Zm-20.654-4.489v1h20v-1Zm6-2v1h14v-1Zm-6,0v1h5v-1Zm9.65-20.75a8.908,8.908,0,0,0-8.9,8.9,8.907,8.907,0,0,0,8.9,8.9,8.907,8.907,0,0,0,8.9-8.9A8.908,8.908,0,0,0,8381.838-6305.558Zm-9.65-6.249v2h20v-2Zm9.65,22.035a6.872,6.872,0,0,1-5.256-2.446,4,4,0,0,1,3.535-2.147.928.928,0,0,1,.253.04,4.716,4.716,0,0,0,1.468.249,4.725,4.725,0,0,0,1.467-.249.941.941,0,0,1,.255-.04,4.005,4.005,0,0,1,3.535,2.147A6.874,6.874,0,0,1,8381.838-6289.772Zm0-6.027a3.159,3.159,0,0,1-3.155-3.156,3.16,3.16,0,0,1,3.155-3.158,3.162,3.162,0,0,1,3.158,3.158A3.161,3.161,0,0,1,8381.838-6295.8Z"
					transform="translate(-8369 6315)"/>
			</svg>;
		}, [noVisualOption]);
	
	return <div ref={screen} className="hud-interactions-documents">
		<div className="hud-interactions-documents-navigation">
			<div
				className="hud-interactions-documents-navigation-back"
				onClick={() => setCurrentPage('main')}
			>
				<img className="hud-interactions-documents-navigation-back__arrow" src={rightArrow} alt="#"/>
				<span className="hud-interactions-documents-navigation-back__title">назад</span>
			</div>
		</div>
		<div className="hud-interactions-documents__title">{titles[noVisualOption]}</div>
		<div className="hud-interactions-documents-options">
			<div
				className="hud-interactions-documents-options__element hud-interactions-documents-options__element_passport"
				onMouseOver={() => setNoVisualOption('passport')}
				onClick={() => {
					EventManager.emitServer('interaction', 'showDocuments', 'passport', targetPlayerData.id);
				}}
			>
				{passportIcon}
			</div>
			<div
				className="hud-interactions-documents-options__element hud-interactions-documents-options__element_license"
				onMouseOver={() => setNoVisualOption('license')}
				onClick={() => {
					EventManager.emitServer('interaction', 'showDocuments', 'license', targetPlayerData.id);
				}}
			>
				{licenseIcon}
			</div>
			<div
				className="hud-interactions-documents-options__element hud-interactions-documents-options__element_certificate"
				onMouseOver={() => setNoVisualOption('certificate')}
				onClick={() => {
					EventManager.emitServer('interaction', 'showDocuments', 'certificate', targetPlayerData.id);
				}}
			>
				{certificateIcon}
			</div>
			<div
				className="hud-interactions-documents-options__element hud-interactions-documents-options__element_fracCertificate"
				onMouseOver={() => setNoVisualOption('fracCertificate')}
				onClick={() => {
					EventManager.emitServer('interaction', 'showDocuments', 'fracCertificate', targetPlayerData.id);
				}}
			>
				{fracCertificateIcon}
			</div>
		</div>
	</div>;
};

export default React.memo(Documents);