let notifyQueue = [];

let isNotifyShowed = false;

const tooMuchNotify = () => {
    const notify = document.getElementById(`id_authNotify${notifyQueue[notifyQueue.length - 1].pos}`);

    isNotifyShowed = true;
    notifyQueue.length = 0;

    notify.style.opacity = '0';
    notify.classList.remove('auth-success', 'auth-error');

    setTimeout(() => {
        document.querySelector('.auth').style.background = '#707070 linear-gradient(122deg, #AAB6EF2B 1%, #84818A 88%, #7D7A82 100%)';
        notify.innerText = 'Слишком часто';
        notify.classList.add('auth-error');
        notify.style.opacity = '1';

        setTimeout(() => {
            document.querySelector('.auth').style.background = '#FFFFFF linear-gradient(122deg, #AAB6EF2B 1%, #84818A 88%, #7D7A82 100%)';
            notify.style.opacity = '0';
            notify.classList.remove('auth-error');
            setTimeout(() => {
                isNotifyShowed = false;
            }, 500)
        }, 5000)
    }, 500)
}
const sendNotify = () => {
    const notify = document.getElementById(`id_authNotify${notifyQueue[0].pos}`);

    isNotifyShowed = true;

    notify.innerText = notifyQueue[0].text;
    if (notifyQueue[0].type === 0) {
        document.querySelector('.auth').style.background = '#707070 linear-gradient(122deg, #AAB6EF2B 1%, #84818A 88%, #7D7A82 100%)';
        notify.classList.add('auth-error');
    }
    else notify.classList.add('auth-success');
    notify.style.opacity = '1';

    setTimeout(() => {
        document.querySelector('.auth').style.background = '#FFFFFF linear-gradient(122deg, #AAB6EF2B 1%, #84818A 88%, #7D7A82 100%)';
        notify.style.opacity = '0';
        notify.classList.remove('auth-success', 'auth-error');
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

export const showNotify = (type, text, pos) => {
    notifyQueue.push({type, text, pos});

    clearNotifyQueue();
}