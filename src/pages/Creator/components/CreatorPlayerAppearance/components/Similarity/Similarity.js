import * as React   from 'react';
import {observer}   from 'mobx-react-lite';
import EventManager from 'utils/eventManager';

import male0    from 'assets/images/creator/male/0.png';
import male1    from 'assets/images/creator/male/1.png';
import male2    from 'assets/images/creator/male/2.png';
import male3    from 'assets/images/creator/male/3.png';
import male4    from 'assets/images/creator/male/4.png';
import male5    from 'assets/images/creator/male/5.png';
import male6    from 'assets/images/creator/male/6.png';
import male7    from 'assets/images/creator/male/7.png';
import male8    from 'assets/images/creator/male/8.png';
import male9    from 'assets/images/creator/male/9.png';
import male10   from 'assets/images/creator/male/10.png';
import male11   from 'assets/images/creator/male/11.png';
import male12   from 'assets/images/creator/male/12.png';
import male13   from 'assets/images/creator/male/13.png';
import male14   from 'assets/images/creator/male/14.png';
import male15   from 'assets/images/creator/male/15.png';
import male16   from 'assets/images/creator/male/16.png';
import male17   from 'assets/images/creator/male/17.png';
import male18   from 'assets/images/creator/male/18.png';
import male19   from 'assets/images/creator/male/19.png';
import male20   from 'assets/images/creator/male/20.png';
import male21   from 'assets/images/creator/male/42.png';
import male22   from 'assets/images/creator/male/43.png';
import male23   from 'assets/images/creator/male/44.png';
import female0  from 'assets/images/creator/female/21.png';
import female1  from 'assets/images/creator/female/22.png';
import female2  from 'assets/images/creator/female/23.png';
import female3  from 'assets/images/creator/female/24.png';
import female4  from 'assets/images/creator/female/25.png';
import female5  from 'assets/images/creator/female/26.png';
import female6  from 'assets/images/creator/female/27.png';
import female7  from 'assets/images/creator/female/28.png';
import female8  from 'assets/images/creator/female/29.png';
import female9  from 'assets/images/creator/female/30.png';
import female10 from 'assets/images/creator/female/31.png';
import female11 from 'assets/images/creator/female/32.png';
import female12 from 'assets/images/creator/female/33.png';
import female13 from 'assets/images/creator/female/34.png';
import female14 from 'assets/images/creator/female/35.png';
import female15 from 'assets/images/creator/female/36.png';
import female16 from 'assets/images/creator/female/37.png';
import female17 from 'assets/images/creator/female/38.png';
import female18 from 'assets/images/creator/female/39.png';
import female19 from 'assets/images/creator/female/40.png';
import female20 from 'assets/images/creator/female/41.png';
import female21 from 'assets/images/creator/female/45.png';

import scrollIcon from 'assets/images/creator/scrollIcon.svg';

import arrow from 'assets/images/creator/arrow.svg';

const Similarity = ({store}) => {
	const fathersList = React.useMemo(() => [
			{id: 0, image: male0},
			{id: 1, image: male1},
			{id: 2, image: male2},
			{id: 3, image: male3},
			{id: 4, image: male4},
			{id: 5, image: male5},
			{id: 6, image: male6},
			{id: 7, image: male7},
			{id: 8, image: male8},
			{id: 9, image: male9},
			{id: 10, image: male10},
			{id: 11, image: male11},
			{id: 12, image: male12},
			{id: 13, image: male13},
			{id: 14, image: male14},
			{id: 15, image: male15},
			{id: 16, image: male16},
			{id: 17, image: male17},
			{id: 18, image: male18},
			{id: 19, image: male19},
			{id: 20, image: male20},
			{id: 42, image: male21},
			{id: 43, image: male22},
			{id: 44, image: male23},
		], []),
		mothersList = React.useMemo(() => [
			{id: 21, image: female0},
			{id: 22, image: female1},
			{id: 23, image: female2},
			{id: 24, image: female3},
			{id: 25, image: female4},
			{id: 26, image: female5},
			{id: 27, image: female6},
			{id: 28, image: female7},
			{id: 29, image: female8},
			{id: 30, image: female9},
			{id: 31, image: female10},
			{id: 32, image: female11},
			{id: 33, image: female12},
			{id: 34, image: female13},
			{id: 35, image: female14},
			{id: 36, image: female15},
			{id: 37, image: female16},
			{id: 38, image: female17},
			{id: 39, image: female18},
			{id: 40, image: female19},
			{id: 41, image: female20},
			{id: 45, image: female21},
		], []);
	
	const [lastScrollMaleTop, setLastScrollMaleTop] = React.useState(0),
		[lastScrollFemaleTop, setLastScrollFemaleTop] = React.useState(0);
	
	const maleScroll = React.useCallback(e => {
			let value = fathersList.findIndex(el => el.id === store.data.parents.father);
			
			if (e.scrollTop > lastScrollMaleTop) value += 1;
			else if (e.scrollTop < lastScrollMaleTop) value -= 1;
			else return;
			
			store.data.parents.father = fathersList[value]?.id;
			
			setLastScrollMaleTop(125 * value);
			e.scrollTop = 125 * value;
		}, [fathersList, lastScrollMaleTop, store.data.parents]),
		femaleScroll = React.useCallback(e => {
			let value = mothersList.findIndex(el => el.id === store.data.parents.mother);
			
			if (e.scrollTop > lastScrollFemaleTop) value += 1;
			else if (e.scrollTop < lastScrollFemaleTop) value -= 1;
			else return;
			
			store.data.parents.mother = mothersList[value]?.id;
			
			setLastScrollFemaleTop(125 * value);
			e.scrollTop = 125 * value;
		}, [lastScrollFemaleTop, mothersList, store.data.parents]);
	
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'parents', 0, store.data.parents.father);
	}, [store.data.parents.father]);
	
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'parents', 1, store.data.parents.mother);
	}, [store.data.parents.mother]);
	
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'parents', 2, store.data.parents.leatherMix);
	}, [store.data.parents.leatherMix]);
	
	React.useEffect(() => {
		EventManager.emitClient('creator', 'preview', 'parents', 3, store.data.parents.similarity);
	}, [store.data.parents.similarity]);
	
	return (
		<div className="player-options">
			<div className="player-options__title">
				<span>выберите родителей</span>
			</div>
			<div className="player-options-list">
				<div key="k_parents" className="player-options-list__element parents-element">
					<div
						className="parents-element-list"
						onScroll={e => {
							maleScroll(e.target);
						}}
					>
						{fathersList.map((el, key) => {
							return <div key={key} className="parents-element-list-element">
								<img className="parents-element-list-element__image" src={el.image} alt="#"/>
							</div>;
						})}
					</div>
					<img className="parents-element__scroll" src={scrollIcon} alt="#"/>
					<div
						className="parents-element-list"
						onScroll={e => {
							femaleScroll(e.target);
						}}
					>
						{mothersList.map((el, key) => {
							return <div key={key} className="parents-element-list-element">
								<img className="parents-element-list-element__image" src={el.image} alt="#"/>
							</div>;
						})}
					</div>
				</div>
				<div key="k_similarity" className="player-options-list__element range-element">
					<span>Схожесть</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.parents.similarity -= 10;
							if (store.data.parents.similarity < -100) store.data.parents.similarity = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.parents.similarity}
							onChange={(e) => {
								store.data.parents.similarity = Number(e.target.value);
							}}
						/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.parents.similarity += 10;
							if (store.data.parents.similarity > 100) store.data.parents.similarity = -100;
						}}/>
					</div>
				</div>
				<div key="k_leatherMix" className="player-options-list__element range-element">
					<span>тон кожи</span>
					<div className="range-element__input">
						<img className="left-arrow" src={arrow} alt="#" onClick={() => {
							store.data.parents.leatherMix -= 10;
							if (store.data.parents.leatherMix < -100) store.data.parents.leatherMix = 100;
						}}/>
						<input
							type="range"
							min="-100"
							max="100"
							value={store.data.parents.leatherMix}
							onChange={(e) => {
								store.data.parents.leatherMix = Number(e.target.value);
							}}/>
						<img className="right-arrow" src={arrow} alt="#" onClick={() => {
							store.data.parents.leatherMix += 10;
							if (store.data.parents.leatherMix > 100) store.data.parents.leatherMix = -100;
						}}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default observer(Similarity);