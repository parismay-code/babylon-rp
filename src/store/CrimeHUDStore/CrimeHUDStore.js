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
            icon: null,
            players: [
                {
                    id: 1,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 1,
                    isDead: true,
                },
                {
                    id: 2,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 1,
                    isDead: false,
                },
                {
                    id: 5555,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 0,
                    isDead: true,
                },
                {
                    id: 4,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 5,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 6,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 1,
                    isDead: true,
                },
                {
                    id: 7,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 1,
                    isDead: false,
                },
                {
                    id: 8,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 0,
                    isDead: true,
                },
                {
                    id: 9,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 10,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 11,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 1,
                    isDead: true,
                },
                {
                    id: 12,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 1,
                    isDead: false,
                },
                {
                    id: 13,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 0,
                    isDead: true,
                },
                {
                    id: 14,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 15,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
            ]
        },
        defence: {
            name: 'Ballas',
            icon: null,
            players: [
                {
                    id: 1,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 1,
                    isDead: true,
                },
                {
                    id: 2,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 1,
                    isDead: false,
                },
                {
                    id: 3,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 0,
                    isDead: true,
                },
                {
                    id: 4,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 5,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 6,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 1,
                    isDead: true,
                },
                {
                    id: 7,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 1,
                    isDead: false,
                },
                {
                    id: 8,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 0,
                    isDead: true,
                },
                {
                    id: 9,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 10,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 11,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 1,
                    isDead: true,
                },
                {
                    id: 12,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 1,
                    isDead: false,
                },
                {
                    id: 13,
                    nickname: 'Olefstrewntew  Olefstrewntew',
                    kills: 0,
                    isDead: true,
                },
                {
                    id: 14,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
                {
                    id: 15,
                    nickname: 'Olefstrewntew  Olefstntew',
                    kills: 0,
                    isDead: false,
                },
            ]
        }
    }
    
    battleTimer = 300;
    
    fetchTeams(obj) {
        return this.teams = obj;
    }
    
    changeTeamPlayerData(team, id, obj) {
        return this.teams[team].filter(el => el.id === id)[0] = obj;
    }
    
    setBattleTimer(value) {
        return this.battleTimer = value;
    }
    
    destroy() {}
}