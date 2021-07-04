import {
	makeObservable,
	observable,
	action,
} from 'mobx';

export default class CrimeMenuStore {
	constructor() {
		makeObservable(this, {
			fractionName: observable,
			territories: observable,
			balance: observable,
			isStoreLocked: observable,
			news: observable,
			events: observable,
			players: observable,
			filteredPlayersList: observable,
			ranks: observable,
			awardLogs: observable,
			reprimandLogs: observable,
			storeLogs: observable,
			allTerritories: observable,
			fractionsCaptureStatus: observable,
			fractionsFreeze: observable,
			capture: observable,
			notifyQueue: observable,
			isNotifyShowed: observable,
			isQueuePaused: observable,
			
			fetchFractionName: action.bound,
			fetchFractionTerritories: action.bound,
			fetchPlayers: action.bound,
			filterPlayers: action.bound,
			setStoreLocked: action.bound,
			fetchBalance: action.bound,
			changePlayerData: action.bound,
			fetchNews: action.bound,
			changeNews: action.bound,
			fetchEvents: action.bound,
			changeEvents: action.bound,
			fetchRanksData: action.bound,
			changeRankData: action.bound,
			fetchAwardLogs: action.bound,
			addAward: action.bound,
			fetchReprimandLogs: action.bound,
			addReprimandLogs: action.bound,
			fetchStoreLogs: action.bound,
			addStoreLogs: action.bound,
			fetchAllTerritories: action.bound,
			changeTerritory: action.bound,
			setFractionsFreeze: action.bound,
			setFractionsCaptureStatus: action.bound,
			fetchCapture: action.bound,
			addNotify: action.bound,
		});
	}
	
	notifyQueue = [];
	isNotifyShowed = false;
	isQueuePaused = false;
	fractionsFreeze = {
		families: 0,
		ballas: 0,
		vagos: 0,
		mara: 0,
	};
	fractionsCaptureStatus = {
		families: null,
		ballas: null,
		vagos: null,
		mara: 'defence',
	};
	capture = {
		attack: 'Vagos',
		defence: 'Marabunta',
		count: 10,
		time: {
			hours: 14,
			minutes: 0,
			move: 0,
		},
		access: {
			items: {
				medkit: true,
				armour: true,
				drug: true,
				animation: false,
			},
			guns: {
				pistol: true,
				smg: false,
				assault: false,
				shotgun: false,
			},
		},
		players: [],
		lastGameBest: [
			{
				place: 1,
				id: 87598,
				nickname: 'Alexeaxer Alexeaxaraer',
				kills: 5,
				isDied: false,
			},
			{
				place: 2,
				id: 5959,
				nickname: 'Paris May',
				kills: 4,
				isDied: false,
			},
			{
				place: 3,
				id: 1234,
				nickname: 'Paris May',
				kills: 5,
				isDied: true,
			},
		],
	};
	playerRank = 1;
	playerAccess = [
		'changeRanks',
		'changeCars',
		'spawnCars',
		'manage',
		'closeStore',
		'manageCapture',
		'sendNews',
		'removeNews',
	];
	fractionName = 'Marabunta';
	territories = 0;
	isStoreLocked = false;
	balance = 0;
	news = [];
	events = [];
	players = [
		{
			id: 25,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 6,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 5,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 11,
			nickname: 'basarus basarus',
			rank: 2,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: false,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 12,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 23,
			nickname: 'basarus basarus',
			rank: 3,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 13,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 26,
			nickname: 'basarus basarus',
			rank: 4,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: false,
			punishment: [],
			onlineLogs: [],
		},
	];
	filteredPlayersList = [
		{
			id: 25,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 6,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 5,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 11,
			nickname: 'basarus basarus',
			rank: 2,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: false,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 12,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 23,
			nickname: 'basarus basarus',
			rank: 3,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 13,
			nickname: 'basarus basarus',
			rank: 1,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: true,
			punishment: [],
			onlineLogs: [],
		},
		{
			id: 26,
			nickname: 'basarus basarus',
			rank: 4,
			isOnline: true,
			joinDate: '29.06.21',
			isCapture: false,
			punishment: [],
			onlineLogs: [],
		},
	];
	ranks = [
		{
			access: [],
			name: 'Первый',
			cars: [],
		},
		{
			access: [],
			name: 'Второй',
			cars: [],
		},
		{
			access: [],
			name: 'Третий',
			cars: [],
		},
		{
			access: [],
			name: 'Четвертый',
			cars: [],
		},
	];
	awardLogs = [];
	reprimandLogs = [];
	storeLogs = [];
	allTerritories = {
		1: 'Families',
		2: 'Families',
		3: 'Families',
		4: 'Families',
		5: 'Families',
		6: 'Families',
		7: 'Families',
		8: 'Families',
		9: 'Families',
		10: 'Vagos',
		11: 'Vagos',
		12: 'Families',
		13: 'Families',
		14: 'Families',
		15: 'Families',
		16: 'Families',
		17: 'Families',
		18: 'Vagos',
		19: 'Vagos',
		20: 'Vagos',
		21: 'Vagos',
		22: 'Vagos',
		23: 'Families',
		24: 'Families',
		25: 'Ballas',
		26: 'Ballas',
		27: 'Ballas',
		28: 'Families',
		29: 'Vagos',
		30: 'Vagos',
		31: 'Vagos',
		32: 'Vagos',
		33: 'Vagos',
		34: 'Vagos',
		35: 'Ballas',
		36: 'Ballas',
		37: 'Ballas',
		38: 'Ballas',
		39: 'Ballas',
		40: 'Vagos',
		41: 'Vagos',
		42: 'Vagos',
		43: 'Vagos',
		44: 'Vagos',
		45: 'Ballas',
		46: 'Ballas',
		47: 'Ballas',
		48: 'Ballas',
		49: 'Ballas',
		50: 'Marabunta',
		51: 'Marabunta',
		52: 'Marabunta',
		53: 'Marabunta',
		54: 'Marabunta',
		55: 'Ballas',
		56: 'Ballas',
		57: 'Ballas',
		58: 'Ballas',
		59: 'Ballas',
		60: 'Marabunta',
		61: 'Marabunta',
		62: 'Marabunta',
		63: 'Marabunta',
		64: 'Marabunta',
		65: 'Marabunta',
		66: 'Marabunta',
		67: 'Marabunta',
		68: 'Marabunta',
		69: 'Marabunta',
		70: 'Marabunta',
		71: 'Marabunta',
		72: 'Marabunta',
	};
	
	addNotify(text, timeout) {
		if (!this.isQueuePaused) {
			if (text === this.notifyQueue[this.notifyQueue.length - 1]?.text) return;
			this.notifyQueue.push({text, timeout});
			
			if (this.notifyQueue.length > 5) {
				this.notifyQueue = [];
				this.notifyQueue.push({text: 'Слишком часто'});
				
				this.isQueuePaused = true;
				
				setTimeout(() => this.isQueuePaused = false, 3000);
			}
		}
	}
	fetchFractionName(name) {
		this.fractionName = name;
	}
	fetchFractionTerritories(value) {
		this.territories = value;
	}
	fetchBalance(value) {
		this.balance = value;
	}
	fetchPlayers(array) {
		this.players = array;
		this.filteredPlayersList = array;
	}
	filterPlayers(text) {
		if (text) {
			if (isNaN(Number(text))) this.filteredPlayersList = this.players.filter(el => el.nickname.toLowerCase().includes(text.toLowerCase()));
			else this.filteredPlayersList = this.players.filter(el => el.id === Number(text));
		} else this.filteredPlayersList = this.players;
	}
	setStoreLocked(bool) {
		this.isStoreLocked = bool;
	}
	changePlayerData(id, obj) {
		this.players[this.players.findIndex(el => el.id === id)] = obj;
		this.filteredPlayersList = this.players;
	}
	fetchNews(array) {
		this.news = array;
	}
	changeNews(type, ...args) {
		if (type === 'add') this.news.unshift(args[0]);
		else this.news.splice(args[0], 1);
	}
	fetchEvents(array) {
		this.events = array;
	}
	changeEvents(type, ...args) {
		if (type === 'add') this.events.unshift(args[0]);
		else this.events.splice(args[0], 1);
	}
	fetchRanksData(array) {
		this.ranks = array;
	}
	changeRankData(rank, obj) {
		this.ranks[rank - 1] = obj;
	}
	fetchAwardLogs(array) {
		this.awardLogs = array;
	}
	addAward(obj) {
		this.awardLogs.unshift(obj);
	}
	fetchReprimandLogs(array) {
		this.reprimandLogs = array;
	}
	addReprimandLogs(obj) {
		this.reprimandLogs.unshift(obj);
	}
	fetchStoreLogs(array) {
		this.storeLogs = array;
	}
	addStoreLogs(obj) {
		this.storeLogs.unshift(obj);
	}
	fetchAllTerritories(obj) {
		this.allTerritories = obj;
	}
	changeTerritory(id, gang) {
		this.allTerritories[id] = gang;
	}
	fetchCapture(obj) {
		this.capture = obj;
	}
	setFractionsFreeze(obj) {
		this.fractionsFreeze = obj;
	}
	setFractionsCaptureStatus(obj) {
		this.fractionCaptureStatus = obj;
	}
	
	destroy() {
	}
}