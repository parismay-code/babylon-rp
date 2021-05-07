import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class AuthStore {
    resetCode = '';

    constructor() {
        makeObservable(this, {
            resetCode: observable,

            fetchResetCode: action.bound,
        })
    }

    fetchResetCode(code) {
        return this.resetCode = code;
    }

    destroy() {}
}