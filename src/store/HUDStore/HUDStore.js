import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class HUDStore {
    constructor() {
        makeObservable(this, {
            currentHud: observable,
            mapState: observable,
            carState: observable,
            time: observable,
            date: observable,
            speakers: observable,
            notifyQueue: observable,
            notifyList: observable,
            notifyId: observable,
            
            fetchMapState: action.bound,
            fetchDate: action.bound,
            fetchTime: action.bound,
            fetchCarState: action.bound,
            fetchSpeaker: action.bound,
            removeSpeaker: action.bound,
            pushNotify: action.bound,
            shiftNotify: action.bound,
            setHud: action.bound,
        })
    }
    
    currentHud = 0;
    carState = {
        engine: 100,
        fuel: 120,
        maxFuel: 200,
        speed: 0,
        maxSpeed: 0,
        seatBelt: false,
        locked: false,
        launched: false,
        cruiseControl: false
    }
    mapState = {
        area: '',
        street: '',
        direction: 'NW',
        players: 0,
        id: 0
    }
    time = '';
    date = '';
    speakers = [];
    notifyQueue = [];
    notifyList = [];
    notifyId = 0;

    setHud(int) {
        this.currentHud = int;
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
        this.date = date;
    }
    fetchTime(time) {
        this.time = time;
    }
    fetchCarState(obj) {
        switch (obj.type) {
            case 'engine': return this.carState.engine = obj.data;
            case 'fuel': return this.carState.fuel = obj.data;
            case 'maxFuel': return this.carState.maxFuel = obj.data;
            case 'speed': return this.carState.speed = obj.data;
            case 'maxSpeed': return this.carState.maxSpeed = obj.data;
            case 'seatBelt': return this.carState.seatBelt = obj.data;
            case 'locked': return this.carState.locked = obj.data;
            case 'launched': return this.carState.launched = obj.data;
            case 'cruiseControl': return this.carState.cruiseControl = obj.data;
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
    pushNotify(target, obj) {
        target.push({
            type: obj.type,
            data: {
                title: obj.data.title,
                text: obj.data.text,
                icon: obj.data.icon
            },
            id: this.notifyId++
        });
    }
    shiftNotify(target) {
        target.shift();
    }

    destroy() {}
}