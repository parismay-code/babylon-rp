let notifyQueue = [];

let isNotifyShowed = false;

const tooMuchNotify = () => {
    const notify = document.getElementById('id_creatorNotify');

    isNotifyShowed = true;
    notifyQueue.length = 0;

    notify.style.transition = 'max-width .5s ease, color .1s linear';
    notify.classList.remove('creator-success', 'creator-error');

    setTimeout(() => {
        notify.style.transition = 'max-width .5s ease, color .3s linear .5s';
        notify.innerText = 'Слишком часто';
        notify.classList.add('creator-error');

        setTimeout(() => {
            notify.style.transition = 'max-width .5s ease, color .1s linear';
            notify.classList.remove('creator-error');
            setTimeout(() => {
                isNotifyShowed = false;
            }, 500)
        }, 5000)
    }, 500)
}
const sendNotify = () => {
    const notify = document.getElementById('id_creatorNotify');

    isNotifyShowed = true;

    notify.style.transition = 'max-width .5s ease, color .3s linear .5s';
    notify.innerText = notifyQueue[0].text;
    if (notifyQueue[0].type === 0) notify.classList.add('creator-error');
    else notify.classList.add('creator-success');

    setTimeout(() => {
        notify.style.transition = 'max-width .5s ease, color .1s linear';
        notify.classList.remove('creator-success', 'creator-error');
        notifyQueue.shift();
        setTimeout(() => {
            isNotifyShowed = false;
            clearNotifyQueue();
        }, 500)

    }, 5000)
}
const clearNotifyQueue = () => {
    if (notifyQueue.length > 5) tooMuchNotify();
    else {
        if (notifyQueue.length !== 0) {
            if (isNotifyShowed) {
                const notifyInterval = setInterval(() => {
                    if (!isNotifyShowed) {
                        if (notifyQueue.length === 0) {
                            clearInterval(notifyInterval);
                        } else {
                            clearInterval(notifyInterval);
                            sendNotify();
                        }
                    }
                }, 100)
            } else {
                sendNotify();
            }
        }
    }
}
export const showNotify = (type, text) => {
    notifyQueue.push({type, text});

    clearNotifyQueue();
}