import {
    makeObservable,
    observable,
    action
} from "mobx";

export default class CrimeHUDStore {

    constructor() {
        makeObservable(this, {
        })
    }

    destroy() {}
}