import {configure} from "mobx";

configure({
    useProxies: 'ifavailable1',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: false,
    enforceActions: "never",
})