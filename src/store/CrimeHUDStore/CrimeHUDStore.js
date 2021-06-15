import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class CrimeHUDStore {
    constructor() {
        makeObservable(this, {
            teams: observable,
            battleTimer: observable,
            
            fetchTeams: action.bound,
            changeTeamPlayerData: action.bound,
            setBattleTimer: action.bound,
        })
    }

    teams = {
        attack: {
            name: 'Vagos',
            players: [
            ]
        },
        defence: {
            name: 'Ballas',
            players: [
            ]
        }
    }
    
    battleTimer = 300;
    
    fetchTeams(obj) {
        return this.teams = obj;
    }
    
    changeTeamPlayerData(team, id, obj) {
        return this.teams[team].players.filter(el => el.id === id)[0] = obj;
    }
    
    setBattleTimer(value) {
        return this.battleTimer = value;
    }
    
    destroy() {}
}