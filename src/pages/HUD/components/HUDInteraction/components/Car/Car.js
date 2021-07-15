import * as React from 'react';

import InCar  from './pages/InCar';
import OutCar from './pages/OutCar';

const Car = ({
	setCurrentPage,
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
					setCurrentPage={setCurrentPage}
					noVisualOption={noVisualOption}
					setNoVisualOption={setNoVisualOption}
					currentOption={currentOption}
					setCurrentOption={setCurrentOption}
					nextOption={nextOption}
					setNextOption={setNextOption}
					target={target}
				/> :
				<OutCar
					setCurrentPage={setCurrentPage}
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