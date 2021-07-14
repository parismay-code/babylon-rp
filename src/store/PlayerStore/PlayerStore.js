import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class PlayerStore {
	constructor() {
		makeObservable(this, {
			playerState: observable,
			lookDirection: observable,
			quests: observable,
			
			fetchPlayerState: action.bound,
			fetchLookDirection: action.bound,
			fetchQuests: action.bound,
			addQuest: action.bound,
			removeQuest: action.bound,
			changeAchievement: action.bound,
		});
	}
	
	playerState = {
		id: 0,
		level: 0,
		gender: 0,
		fraction: {
			type: 0, // 0 - gov, 1 - pd, 2 - gang, 3 - mafia
			name: null,
		},
		job: null,
		family: {
			// name: 'Крутые',
			// icon: null
		},
		nickname: 'Paris May',
		phone: {
			number: null,
			balance: 0,
		},
		hp: 100,
		armour: 0,
		hunger: 100,
		thirst: 100,
		stars: 0,
		sick: {
			flu: false,
			amnesia: false,
			dependence: false,
			poisoning: false,
		},
		money: {
			cash: 0,
			card: 0,
		},
		donate: 0,
		bank: {
			account: null,
			type: null,
			name: null,
			createDate: null,
		},
		business: [
			// {
			//     id: 123,
			//     name: 'Магазин оружия #4',
			//     extendPrice: 1500,
			//     daysExtended: 7,
			//     balance: 132490
			// },
			// {
			//     id: 11,
			//     name: 'Магазин одежды #3',
			//     extendPrice: 1500,
			//     daysExtended: 7,
			//     balance: 4349040
			// },
			// {
			//     id: 23,
			//     name: 'Магазин 24/7 #11',
			//     extendPrice: 1500,
			//     daysExtended: 7,
			//     balance: 93930180
			// },
		],
		houses: [
			// {
			//     id: 435,
			//     extendPrice: 150,
			//     daysExtended: 3
			// },
			// {
			//     id: 790,
			//     extendPrice: 500,
			//     daysExtended: 7
			// }
		],
		cars: [
			// {
			//     id: 150,
			//     type: 'car',
			//     name: 'Laborgini',
			// },
			// {
			//     id: 13,
			//     type: 'car',
			//     name: 'Toyota',
			// },
			// {
			//     id: 1509,
			//     type: 'car',
			//     name: 'Infinity',
			// },
			// {
			//     id: 490,
			//     type: 'car',
			//     name: 'Nissan',
			// },
			// {
			//     id: 322,
			//     type: 'car',
			//     name: 'Lada',
			// },
		],
		isInGreenZone: false,
		isInCar: false,
		isRadioSet: false,
		ammo: {
			charged: 0,
			clip: 0,
		},
		dead: {
			isDead: false,
			knockdown: 300,
			attacker: {
				nickname: 'Незнакомец',
				id: 0,
			},
		},
		effects: {
			isHealing: false,
			selfHealing: false,
		},
		prime: {
			status: false,
			days: 0,
		},
		bonuses: [
			{
				value: 100,
				status: true,
			},
			{
				value: 200,
				status: false,
			},
			{
				value: 300,
				status: false,
			},
			{
				value: 400,
				status: false,
			},
			{
				value: 500,
				status: false,
			},
			{
				value: 600,
				status: false,
			},
			{
				value: 700,
				status: false,
			},
		],
		stats: {
			deaths: 0,
			timePlayed: {
				all: 0,
				weekly: 0,
				allDays: 0,
			},
		},
		achievements: {
			default: [
				{
					id: 1,
					name: 'Будем знакомы',
					icon: 'promo.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Полностью посмотреть вступительный ролик "Babylon RP',
				},
				{
					id: 2,
					name: 'Ля какой',
					icon: 'firstCharCreate.svg',
					award: '100$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Создать своего первого персонажа',
				},
				{
					id: 3,
					name: 'Первый встречный',
					icon: 'firstMeet.svg',
					award: '100$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 1,
					description: 'Познакомиться с жителем штата',
				},
				{
					id: 4,
					name: 'Новая прописка',
					icon: 'passport.svg',
					award: '5000$',
					isAwardReceived: true,
					maxProgress: 1,
					currentProgress: 1,
					description: 'Получить паспорт в Мэрии',
				},
				{
					id: 6,
					name: 'Без телефона как без рук',
					icon: 'phone.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Купить телефон',
				},
				{
					id: 7,
					name: 'Безнал',
					icon: 'bankCard.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Оформить банковскую карту',
				},
				{
					id: 8,
					name: 'Накинь на себя что-то',
					icon: 'firstClothes.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Купить первую одежду в магазине',
				},
				{
					id: 9,
					name: 'Время перекусить',
					icon: 'firstFood.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Купить предмет в магазине 24/7',
				},
				{
					id: 10,
					name: 'Больше не бомж',
					icon: 'firstHouse.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Купить жилище или подселиться',
				},
				{
					id: 11,
					name: 'Автолюбитель',
					icon: 'firstCar.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Купить первый транспорт',
				},
				{
					id: 12,
					name: 'Риелтор',
					icon: 'sellHouse.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Продать недвижимость другому игроку',
				},
				{
					id: 13,
					name: 'Автобазар',
					icon: 'payFines.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Оплатить штраф',
				},
				{
					id: 14,
					name: 'Мы открываем бизнес',
					icon: 'firstBusiness.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Купить первый бизнес',
				},
				{
					id: 15,
					name: 'По рукам',
					icon: 'sellBusiness.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Продать бизнес игроку',
				},
				{
					id: 16,
					name: 'Запах бензина',
					icon: 'firstGasFill.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Первая заправка на АЗС',
				},
				{
					id: 17,
					name: 'Мастер на все руки',
					icon: 'jobsMaxLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 10,
					currentProgress: 0,
					description: 'Достичь максимального уровня на всех работах',
				},
				{
					id: 18,
					name: 'То яма то канава',
					icon: 'highSpeed.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Разогнаться до 350 км/ч',
				},
				{
					id: 19,
					name: 'Не бит, не крашен',
					icon: 'fixCar.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Починить машину',
				},
				{
					id: 20,
					name: 'Он жив',
					icon: 'dbAlive.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Выжить после ДБ',
				},
				{
					id: 21,
					name: 'Не сегодня',
					icon: 'reanimate.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Оказать первую медицинскую помощь другому игроку',
				},
				{
					id: 22,
					name: 'Шоколад не виноват',
					icon: 'prison.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Попасть в тюрьму',
				},
				{
					id: 23,
					name: 'Золотые купала',
					icon: 'prisonLongTime.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 100,
					currentProgress: 0,
					description: 'Провести в тюрьме 100 часов',
				},
				{
					id: 24,
					name: 'Кожаный мешок',
					icon: 'firstTattoo.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Набить первое тату',
				},
				{
					id: 25,
					name: 'Волосы не помеха',
					icon: 'firstHair.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Сменить прическу',
				},
				{
					id: 26,
					name: 'Рехаб',
					icon: 'stopDependency.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Избавиться от наркозависимости',
				},
				{
					id: 27,
					name: 'Малышева рекомендует',
					icon: 'stopSick.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 100,
					currentProgress: 0,
					description: 'Вылечиться от болезней в больнице',
				},
				{
					id: 28,
					name: 'Я медиа - мне можно',
					icon: 'media.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Получить статус медиа',
				},
			],
			fraction: [
				{
					id: 1,
					name: 'Организационные моменты',
					icon: 'firstFraction.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Вступить в любую фракцию',
				},
				{
					id: 2,
					name: 'Работник месяца',
					icon: 'firstAward.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Получить первую премию',
				},
				{
					id: 3,
					name: 'Теперь ты с нами',
					icon: 'events.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 2,
					currentProgress: 1,
					description: 'Принять участие в функциональном мероприятии',
				},
				{
					id: 4,
					name: 'Карьерный рост',
					icon: 'upRank.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 2,
					currentProgress: 1,
					description: 'Получить повышение в своей фракции',
				},
				{
					id: 5,
					name: 'Теперь ты главный',
					icon: 'fractionLeader.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Стать лидером фракции',
				},
				{
					id: 6,
					name: 'Лови аптечку',
					icon: 'sellMedkits.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 100,
					currentProgress: 0,
					description: 'Продать 100 аптечек',
				},
				{
					id: 7,
					name: 'Айболит',
					icon: 'stopSickEMS.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 100,
					currentProgress: 0,
					description: 'Вылечить 100 человек от болезней',
				},
				{
					id: 8,
					name: 'Ваш полис, сэр',
					icon: 'medCards.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 100,
					currentProgress: 0,
					description: 'Выдать 100 медицинских страховок',
				},
				{
					id: 9,
					name: 'Вы арестованы',
					icon: 'arrests.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 100,
					currentProgress: 0,
					description: 'Арестовать 100 человек',
				},
				{
					id: 10,
					name: 'Вызов принят',
					icon: 'acceptCalls.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 100,
					currentProgress: 0,
					description: 'Принять 100 вызовов',
				},
				{
					id: 11,
					name: 'Вы точно охотник?',
					icon: 'gunLicense.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 100,
					currentProgress: 0,
					description: 'Выдать 100 лицензий на оружие',
				},
				{
					id: 12,
					name: 'Внимание розыск',
					icon: 'sendSearch.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Объявить человека в розыск',
				},
				{
					id: 13,
					name: 'Офицер ранен',
					icon: 'healOfficer.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Оказать первую помощь другому офицеру',
				},
				{
					id: 14,
					name: 'Работает FIB',
					icon: 'raidCrime.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Провести рейд на любую криминальную организацию',
				},
				{
					id: 15,
					name: 'Доставка прибыла',
					icon: 'materials.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Удачно провести поставку',
				},
				{
					id: 16,
					name: 'Стабильность',
					icon: 'firstCapture.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Выиграть первый капт/бизвар',
				},
				{
					id: 17,
					name: 'В ноль',
					icon: 'captureNoDeaths.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Выиграть капт/бизвар без потерь',
				},
				{
					id: 18,
					name: 'Генерал крайма',
					icon: 'fortAttack.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 10,
					currentProgress: 0,
					description: '10 раз удачно напасть на ФЗ',
				},
			],
			job: [
				{
					id: 1,
					name: 'Трудовые резервы',
					icon: 'firstJob.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Устроиться на первую работу и заработать 1000$',
				},
				{
					id: 2,
					name: 'Специалист',
					icon: 'jobLevel2.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Достигнуть 2 уровня работы',
				},
				{
					id: 3,
					name: 'Мастер своего дела',
					icon: 'jobLevel3.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Достигнуть 3 уровня работы',
				},
				{
					id: 4,
					name: 'Бомбила',
					icon: 'maxTaxiLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 4,
					currentProgress: 0,
					description: 'Достигнуть максимального уровня работы "Такси"',
				},
				{
					id: 5,
					name: 'На следующей',
					icon: 'maxBusLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 4,
					currentProgress: 0,
					description: 'Достигнуть максимального уровня работы "Водитель автобуса"',
				},
				{
					id: 6,
					name: 'Рубака',
					icon: 'maxForesterLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 4,
					currentProgress: 0,
					description: 'Продать 100 аптечек',
				},
				{
					id: 7,
					name: 'Деньги в сохранности',
					icon: 'maxCollectorLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 4,
					currentProgress: 0,
					description: 'Достигнуть максимального уровня работы "Инкассатор"',
				},
				{
					id: 8,
					name: 'Чистые улицы',
					icon: 'maxGarbageLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 4,
					currentProgress: 0,
					description: 'Достигнуть максимального уровня работы "Мусорщик"',
				},
				{
					id: 9,
					name: 'Вам посылка',
					icon: 'maxPostalLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 4,
					currentProgress: 0,
					description: 'Достигнуть максимального уровня работы "Почтальон"',
				},
				{
					id: 10,
					name: 'Нужно больше золота',
					icon: 'maxDiggerLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 4,
					currentProgress: 0,
					description: 'Достигнуть максимального уровня работы "Золотодобытчик"',
				},
				{
					id: 11,
					name: 'Прораб',
					icon: 'maxBuilderLevel.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 4,
					currentProgress: 0,
					description: 'Достигнуть максимального уровня работы "Строитель"',
				},
			],
			special: [
				{
					id: 1,
					name: 'В законе',
					icon: 'prisonVeryLongTime.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 240,
					currentProgress: 0,
					description: 'Провести 240 часов в тюрьме',
				},
				{
					id: 2,
					name: 'Киберподружка',
					icon: 'marry.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1,
					currentProgress: 0,
					description: 'Сыграть свадьбу',
				},
				{
					id: 3,
					name: 'Который час?',
					icon: 'highOnline.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1000,
					currentProgress: 0,
					description: 'Провести 1000 часов на сервере',
				},
				{
					id: 4,
					name: 'Меценат',
					icon: 'highCharity.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1000000,
					currentProgress: 0,
					description: 'Пожертвовать 1 000 000 $ на благотворительность',
				},
				{
					id: 5,
					name: 'Деньги не проблема',
					icon: 'spendHighMoney.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 5000000,
					currentProgress: 0,
					description: 'Потратить 5 000 000 $',
				},
				{
					id: 6,
					name: 'Не пошла',
					icon: 'highDeaths.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1000,
					currentProgress: 0,
					description: 'Умереть 1000 раз',
				},
				{
					id: 7,
					name: 'Король королей',
					icon: 'allLeader.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 15,
					currentProgress: 0,
					description: 'Минимум 1 раз стать лидером каждой организаций',
				},
				{
					id: 8,
					name: 'Не вижу зла',
					icon: 'killer.svg',
					award: '5000$',
					isAwardReceived: false,
					maxProgress: 1000,
					currentProgress: 0,
					description: 'Убить 1000 человек',
				},
			],
		},
	};
	
	quests = [
		// {
		// 	id: 0,
		// 	name: 'Начало начал',
		// 	description: 'Описание квеста',
		// },
		// {
		// 	id: 0,
		// 	name: 'Начало начал',
		// 	description: 'Описание квеста',
		// },
	];
	
	lookDirection = 0;
	
	fetchPlayerState(obj) {
		switch (obj.type) {
			case 'id':
				return this.playerState.id = obj.data;
			case 'nickname':
				return this.playerState.nickname = obj.data;
			case 'phone':
				return this.playerState.phone = obj.data;
			case 'hp':
				return this.playerState.hp = obj.data;
			case 'armour':
				return this.playerState.armour = obj.data;
			case 'hunger':
				return this.playerState.hunger = obj.data;
			case 'thirst':
				return this.playerState.thirst = obj.data;
			case 'stars':
				return this.playerState.stars = obj.data;
			case 'sick':
				return this.playerState.sick = obj.data;
			case 'money':
				return this.playerState.money = obj.data;
			case 'bank':
				return this.playerState.bank = obj.data;
			case 'business':
				return this.playerState.business = obj.data;
			case 'houses':
				return this.playerState.houses = obj.data;
			case 'isInGreenZone':
				return this.playerState.isInGreenZone = obj.data;
			case 'isInCar':
				return this.playerState.isInCar = obj.data;
			case 'isRadioSet':
				return this.playerState.isRadioSet = obj.data;
			case 'ammo':
				return this.playerState.ammo = obj.data;
			case 'dead':
				return this.playerState.dead = obj.data;
			case 'effects':
				return this.playerState.effects = obj.data;
			case 'level':
				return this.playerState.level = obj.data;
			case 'gender':
				return this.playerState.gender = obj.data;
			case 'fraction':
				return this.playerState.fraction = obj.data;
			case 'job':
				return this.playerState.job = obj.data;
			case 'family':
				return this.playerState.family = obj.data;
			case 'prime':
				return this.playerState.prime = obj.data;
			case 'donate':
				return this.playerState.donate = obj.data;
			case 'timePlayed':
				return this.playerState.stats.timePlayed = obj.data;
			case 'bonuses':
				return this.playerState.bonuses = obj.data;
			case 'deaths':
				return this.playerState.stats.deaths = obj.data;
			case 'achievements':
				return this.playerState.stats.achievements = obj.data;
			default:
				return this.playerState = obj.data;
		}
	}
	
	changeAchievement(type, id, data) {
		this.playerState.achievements[type].filter(el => el.id === id)[0] = data;
	}
	
	fetchLookDirection(value) {
		this.lookDirection = value;
	}
	
	fetchQuests(array) {
		this.quests = array;
	}
	
	addQuest(obj) {
		this.quests.push(obj);
	}
	
	removeQuest(id) {
		this.quests.splice(this.quests.findIndex(el => el.id === id), 1);
	}
	
	destroy() {
	}
}