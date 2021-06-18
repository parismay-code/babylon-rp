import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class AuthStore {
    resetCode = '';
    notifyQueue = [];
    isNotifyShowed = false;
    isQueuePaused = false;
    isRegistered = false;
    currentScreen = this.isRegistered ? 'log' : 'reg';

    constructor() {
        makeObservable(this, {
            resetCode: observable,
            notifyQueue: observable,
            isNotifyShowed: observable,
            isQueuePaused: observable,
            isRegistered: observable,
            currentScreen: observable,

            fetchResetCode: action.bound,
            setIsRegistered: action.bound,
            setCurrentScreen: action.bound,
            addNotify: action.bound,
        })
    }
    
    setIsRegistered(bool) {
        this.isRegistered = bool;
    }
    
    setCurrentScreen(screen) {
        this.currentScreen = screen;
    }
    
    addNotify(type, text) {
        if (!this.isQueuePaused) {
            this.notifyQueue.push({type, text});
    
            if (this.notifyQueue.length > 5) {
                this.isQueuePaused = true;
                this.notifyQueue = [];
                this.notifyQueue.push({type: 0, text: 'Слишком часто'});
                
                setTimeout(() => this.isQueuePaused = false, 3000);
            }
        }
    }

    fetchResetCode(code) {
        return this.resetCode = code;
    }

    destroy() {}
}