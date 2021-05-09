import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class HUDStore {
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

    mapState = {
        area: 'Little Seoul',
        street: 'Паломино-Авеню',
        direction: 'NW',
        players: 0,
        id: 0
    }

    time = '22:36';
    date = '01.01.2021';

    speakers = [];

    constructor() {
        makeObservable(this, {
            mapState: observable,
            carState: observable,
            time: observable,
            date: observable,
            speakers: observable,

            fetchMapState: action.bound,
            fetchDate: action.bound,
            fetchTime: action.bound,
            fetchCarState: action.bound,
            fetchSpeaker: action.bound,
            removeSpeaker: action.bound,
        })
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

    destroy() {}
}