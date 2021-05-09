import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class HUDStore {
    isInCar = false;

    playerState = {
        hp: 100,
        armour: 0,
        hunger: 100,
        thirst: 100,
        stars: 5,
        sick: {
            flu: false,
            amnesia: false,
            dependence: false,
            poisoning: false
        }
    };

    carState = {
        engine: 100,
        fuel: 50,
        speed: 0,
        maxSpeed: 240,
        seatBelt: false,
        locked: false,
        launched: false,
        cruiseControl: false
    }

    ammo = {
        charged: 0,
        clip: 0
    }

    money = {
        cash: 3405,
        bank: 540483
    }

    mapState = {
        area: 'Little Seoul',
        street: 'Паломино-Авеню',
        direction: 'NW',
        players: 0,
        id: 0
    }

    deadState = {
        isDead: false,
        knockdown: 300,
        attacker: {
            nickname: 'Незнакомец',
            id: 0
        }
    }

    greenZone = false;

    time = '22:36';
    date = '01.01.2021';

    speakers = [];

    effects = {
        isHealing: false,
    };

    constructor() {
        makeObservable(this, {
            isInCar: observable,
            playerState: observable,
            money: observable,
            mapState: observable,
            carState: observable,
            time: observable,
            date: observable,
            ammo: observable,
            speakers: observable,
            deadState: observable,
            greenZone: observable,
            effects: observable,

            fetchPlayerState: action.bound,
            fetchPlayerMoney: action.bound,
            fetchMapState: action.bound,
            fetchDate: action.bound,
            fetchTime: action.bound,
            fetchCarState: action.bound,
            fetchAmmo: action.bound,
            fetchSpeaker: action.bound,
            removeSpeaker: action.bound,
            fetchDeadState: action.bound,
            setGreenZone: action.bound,
            fetchEffects: action.bound,
            setCarHud: action.bound,
        })
    }

    fetchPlayerState(obj) {
        switch (obj.type) {
            case 0:
                return this.playerState.hp = obj.hp;
            case 1:
                return this.playerState.armour = obj.armour;
            case 2:
                return this.playerState.hunger = obj.hunger;
            case 3:
                return this.playerState.thirst = obj.thirst;
            case 4:
                return this.playerState.stars = obj.stars;
            case 5:
                return this.playerState.sick = obj.sick;
            default:
                return this.playerState = obj.data;
        }
    }

    fetchPlayerMoney(obj) {
        switch (obj.type) {
            case 0:
                return this.money.cash = obj.cash;
            case 1:
                return this.money.bank = obj.bank;
            default:
                return this.money = obj.data;
        }
    }

    fetchMapState(obj) {
        switch (obj.type) {
            case 0:
                return this.mapState.area = obj.area;
            case 1:
                return this.mapState.street = obj.street;
            case 2:
                return this.mapState.direction = obj.direction;
            case 3:
                return this.mapState.players = obj.players;
            case 4:
                return this.mapState.id = obj.id;
            default:
                return this.mapState = obj.data;
        }
    }

    fetchDate(date) {
        return this.date = date;
    }

    fetchTime(time) {
        return this.time = time;
    }

    fetchCarState(obj) {
        switch (obj.type) {
            case 0: return this.carState.engine = obj.engine;
            case 1: return this.carState.fuel = obj.fuel;
            case 2: return this.carState.speed = obj.speed;
            case 3: return this.carState.maxSpeed = obj.maxSpeed;
            case 4: return this.carState.seatBelt = obj.seatBelt;
            case 5: return this.carState.locked = obj.locked;
            case 6: return this.carState.launched = obj.launched;
            case 7: return this.carState.cruiseControl = obj.cruiseControl;
            default: return this.carState = obj.data;
        }
    }

    fetchAmmo(obj) {
        switch (obj.type) {
            case 0: return this.ammo.charged = obj.charged;
            case 1: return this.ammo.clip = obj.clip;
            default: return this.ammo = obj.data;
        }
    }

    fetchSpeaker(obj) {
        this.speakers.push(obj);
        if (this.speakers.length > 4) this.speakers.shift();
    }

    removeSpeaker(id) {
        for (let i = 0; i < this.speakers.length; i++) {
            if (this.speakers[i].id === id) {
                this.speakers.splice(i, 1);
                console.log(`deleted ${i} speaker`)
            }
        }
    }

    fetchDeadState(data) {
        return this.deadState = data;
    }

    setGreenZone(bool) {
        return this.greenZone = bool;
    }

    fetchEffects(obj) {
        switch (obj.type) {
            case 'healing': return this.effects.isHealing = obj.data;
            default: return this.effects = obj.data;
        }
    }

    setCarHud(bool) {
        return this.isInCar = bool;
    }

    destroy() {}
}