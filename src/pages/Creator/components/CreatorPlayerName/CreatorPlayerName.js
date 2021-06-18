import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import successIcon from 'assets/images/creator/submitIcon.svg';
import wrongIcon from 'assets/images/creator/closeIcon.svg';

import {badWords} from "./utils/badWords";
import {badNames} from "./utils/badNames";
import {regExp} from "utils/regExp";

import './CreatorPlayerName.scss';

const CreatorPlayerName = ({store}) => {
    const [isNicknameValid, setNicknameValid] = React.useState();

    const checkNickname = React.useCallback(() => {
        setNicknameValid(false);

        const firstname = store.data.name.firstname.toLowerCase(),
            lastname = store.data.name.lastname.toLowerCase();

        for (let i = 0; i < badNames.length; i++) {
            if (firstname.includes(badNames[i][0]) && lastname.includes(badNames[i][1]))
                return store.addNotify(0, 'Вы не можете использовать данный никнейм', true);
        }

        if (regExp.nickname.test(firstname))
            return store.addNotify(0, 'Имя может содержать только латинские буквы', true);
        else if (regExp.nickname.test(lastname))
            return store.addNotify(0, 'Фамилия может содержать только латинские буквы', true);
        else if (badWords.indexOf(firstname) >= 0 || badWords.indexOf(lastname) >= 0)
            return store.addNotify(0, 'Никнейм содержит запрещенные слова', true);
        else if (firstname.length < 3 || lastname.length < 3) return;
        else if (firstname.length > 13) return;
        else if (lastname.length > 13) return;
        else {
            window.alt.emit('client::characterCreator:preview', 'name', store.data.name);

            return setNicknameValid(true);
        }
    }, [store.data.name]);

    React.useEffect(() => {
        checkNickname();
    }, [store.data.name.firstname, store.data.name.lastname, checkNickname]);

    return (
        <div className='player-name'>
            <div className='player-name__title'>
                <span>выбЕРитЕ пОл и введите имя</span>
                <img src={isNicknameValid ? successIcon : wrongIcon} alt='#'/>
            </div>
            <div className='player-name__form'>
                <div className='player-name__gender'>
                    <div className={cn('player-name__gender-female', store.data.sex === 1 ? 'active' : undefined)}
                         onClick={() => {
                             store.data.sex = 1;
                             store.addNotify(1, 'Пол изменен на женский');

                             window.alt.emit('client::characterCreator:preview', 'sex', 1);
                         }}>
                        <svg width="57" height="100" viewBox="0 0 40 100" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M57 28.4961C57 12.7582 44.2402 0 28.5 0C12.7598 0 0 12.7582 0 28.4961C0 42.3059 9.82517 53.8201 22.867 56.4346V76.5926H10.7773V87.857H22.867V100H34.133V87.857H46.2227V76.5926H34.133V56.4346C47.175 53.8201 57 42.3059 57 28.4961V28.4961ZM10.7773 28.4961C10.7773 18.7094 18.7119 10.7758 28.5 10.7758C38.2881 10.7758 46.2227 18.7094 46.2227 28.4961C46.2227 38.2828 38.2881 46.2164 28.5 46.2164C18.7119 46.2164 10.7773 38.2828 10.7773 28.4961V28.4961Z"
                            />
                        </svg>
                    </div>
                    <div className='player-name__gender-separator'/>
                    <div className={cn('player-name__gender-male', store.data.sex === 0 ? 'active' : undefined)}
                         onClick={() => {
                             store.data.sex = 0;
                             store.addNotify(1, 'Пол изменен на мужской');

                             window.alt.emit('client::characterCreator:preview', 'sex', 0);
                         }}>
                        <svg width="57" height="100" viewBox="0 0 40 100" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M44.7053 68.2816L34.1283 78.8586V56.4346C47.1686 53.8201 56.9922 42.3059 56.9922 28.4961C56.9922 12.7582 44.234 0 28.4961 0C12.7582 0 0 12.7582 0 28.4961C0 42.3059 9.82363 53.8201 22.8639 56.4346V78.8586L12.2869 68.2816L4.32168 76.2469L28.523 100L52.6703 76.2469L44.7053 68.2816ZM28.4961 10.7758C38.2828 10.7758 46.2164 18.7094 46.2164 28.4961C46.2164 38.2828 38.2828 46.2164 28.4961 46.2164C18.7094 46.2164 10.7758 38.2828 10.7758 28.4961C10.7758 18.7094 18.7094 10.7758 28.4961 10.7758Z"
                            />
                        </svg>
                    </div>
                </div>
                <div className='player-name__input'>
                    <input
                        key='k_firstname'
                        type='text'
                        defaultValue={store.data.name.firstname}
                        placeholder='Имя'
                        onChange={(e) => store.data.name.firstname = e.target.value.toLowerCase()}
                    />
                </div>
                <div className='player-name__input'>
                    <input
                        key='k_lastname'
                        type='text'
                        defaultValue={store.data.name.lastname}
                        placeholder='Фамилия'
                        onChange={(e) => store.data.name.lastname = e.target.value.toLowerCase()}
                    />
                </div>
            </div>
        </div>
    )
}

export default observer(CreatorPlayerName);