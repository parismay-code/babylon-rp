import * as React from 'react';

import InCar  from './pages/InCar';
import OutCar from './pages/OutCar';

const Car = ({
	noVisualOption,
	setNoVisualOption,
	currentOption,
	setCurrentOption,
	nextOption,
	setNextOption,
	target,
}) => {
	return <div className="hud-interaction-car">
		{
			target.isInCar ?
				<InCar
					noVisualOption={noVisualOption}
					setNoVisualOption={setNoVisualOption}
					currentOption={currentOption}
					setCurrentOption={setCurrentOption}
					nextOption={nextOption}
					setNextOption={setNextOption}
					target={target}
				/> :
				<OutCar
					noVisualOption={noVisualOption}
					setNoVisualOption={setNoVisualOption}
					currentOption={currentOption}
					setCurrentOption={setCurrentOption}
					nextOption={nextOption}
					setNextOption={setNextOption}
					target={target}
				/>
		}
	</div>;
};

export default React.memo(Car);