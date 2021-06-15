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
            killPlayer: action.bound,
            setPlayerKills: action.bound,
            setBattleTimer: action.bound,
        })
    }

    teams = {
        attack: {
            name: 'Vagos',
            players: [
                {
                    id: 1,
                    nickname: 'Paris May',
                    kills: 2,
                    isDead: false
                }
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
    
    killPlayer(team, id) {
        this.teams[team].players.filter(el => el.id === id)[0].isDead = true;
    }
    
    setPlayerKills(team, id, kills) {
        return this.teams[team].players.filter(el => el.id === id)[0].kills = kills;
    }
    
    setBattleTimer(value) {
        return this.battleTimer = value;
    }
    
    destroy() {}
}