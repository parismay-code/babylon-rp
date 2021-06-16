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
		});
	}
	
	fractionName = 'Ballas';
	territories = 0;
	isStoreLocked = false;
	balance = 0;
	news = [];
	events = [];
	players = [];
	filteredPlayersList = [];
	ranks = [];
	awardLogs = [];
	reprimandLogs = [];
	storeLogs = [];
	
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
		this.players.filter(el => el.id === id)[0] = obj;
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
	
	destroy() {
	}
}