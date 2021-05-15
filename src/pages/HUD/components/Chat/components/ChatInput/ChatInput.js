import * as React from "react";
import cn from "classnames";
import {observer} from "mobx-react-lite";

import chatInputArrow from "assets/images/hud/chatInputArrow.svg";

import "./ChatInput.scss";

const ChatInput = ({store, isCursorActive}) => {
    const [currentChat, setChat] = React.useState("default"),
        [currentCommand, setCommand] = React.useState(null),
        [isCommandsActive, setCommandsActive] = React.useState(false),
        [isFocused, setFocused] = React.useState(false);

    const chatTypes = React.useMemo(() => [
        {
            type: "default",
            command: null,
            name: "RP",
            visible: true,
        },
        {
            type: "nrp",
            command: "/b",
            name: "Non-RP",
            visible: true,
        },
        {
            type: "job",
            command: "/j",
            name: "Работа",
            visible: store.access.job,
        },
        {
            type: "admin",
            command: "/a",
            name: "Admins",
            visible: store.access.admin,
        },
        {
            type: "family",
            command: "/fam",
            name: "Семья",
            visible: store.access.family,
        },
        {
            type: "fraction",
            command: "/f",
            name: "Рация",
            visible: store.access.fraction,
        },
        {
            type: "nrpFraction",
            command: "/fb",
            name: "Non-RP Рация",
            visible: store.access.fraction,
        },
        {
            type: "megaphone",
            command: "/m",
            name: "Мегафон",
            visible: store.access.megaphone,
        },
        {
            type: "department",
            command: "/dep",
            name: "Деп",
            visible: store.access.department,
        },
        {
            type: "state",
            command: "/gov",
            name: "Гос",
            visible: store.access.state,
        },
    ], [store.access.job, store.access.admin, store.access.family, store.access.fraction, store.access.megaphone, store.access.department, store.access.state]);

    const commandTypes = React.useMemo(() => ["me", "do", "try"], []);

    const input = React.useRef(null);

    React.useEffect(() => {
        if ("alt" in window) {
            window.alt.on("cef::chat:toggle", (bool) => {
                setFocused(bool);
                if (bool) input.current.focus();
                else input.current.blur();
            });
            window.alt.on("cef::chat:changeMode", (string) => {
                const command = chatTypes.filter((el) => el.type === string)[0].command;
                setChat(string);
                input.current.focus();
                input.current.value = command;
            });
            window.alt.on("cef::chat:sendMessage", () => {
                window.alt.emit("client::chat:sendMessage", String(input.current.value));
                if (input.current.value) {
                    store.updateLastMessages(String(input.current.value));
                    input.current.value = null;
                }
            });
            window.alt.on("cef::chat:command", () => {
                setFocused(true);
                input.current.focus();
                input.current.value = "/";
            });
        }
    }, [input, chatTypes, store]);

    React.useEffect(() => {
        const command = chatTypes.filter((el) => el.type === currentChat)[0].command;
        if (isFocused) input.current.value = command;
    }, [input, isFocused, chatTypes, currentChat]);

    React.useEffect(() => {
        window.alt.on('cef::chat:setLastMessage', (int) => {
            if (int === -1) input.current.value = null;
            else input.current.value = store.lastMessages[int];
        });
    }, [input, store.lastMessages]);

    React.useEffect(() => {
        window.alt.emit("client::chat:changeMode", currentChat);
    }, [currentChat]);

    const checkCommand = React.useCallback((text) => {
        if (text.includes("/me")) {
            setCommand(0);
            setChat("default");
        } else if (text.includes("/do")) {
            setCommand(1);
            setChat("default");
        } else if (text.includes("/try")) {
            setCommand(2);
            setChat("default");
        } else if (text.includes("/b")) {
            setCommand(null);
            setChat("nrp");
        } else if (text.includes("/a")) {
            setCommand(null);
            setChat("admin");
        } else if (text.includes("/fam")) {
            setCommand(null);
            setChat("family");
        } else if (text.includes("/fb")) {
            setCommand(null);
            setChat("nrpFraction");
        } else if (text.includes("/f")) {
            setCommand(null);
            setChat("fraction");
        } else if (text.includes("/m")) {
            setCommand(null);
            setChat("megaphone");
        } else if (text.includes("/dep")) {
            setCommand(null);
            setChat("department");
        } else if (text.includes("/gov")) {
            setCommand(null);
            setChat("state");
        } else {
            setChat("default");
            setCommand(null);
        }
    }, []);

    return (
        <div className={cn("chat-input", !isFocused && "chat-input_disabled")}>
            <div className="chat-input-type">
                {chatTypes.map((el, key) => {
                    return (
                        <div
                            key={key}
                            className={cn(
                                "chat-input-type__element",
                                currentChat === el.type
                                    ? "chat-input-type__element_active"
                                    : null
                            )}
                            style={el.visible ? {display: "block"} : {display: "none"}}
                            onClick={() => {
                                setChat(el.type);
                                setCommand(null);
                                input.current.value = el.command;
                                input.current.focus();
                            }}
                        >
                            {el.name}
                        </div>
                    );
                })}
            </div>
            <div className="chat-input-box">
                <input
                    className="chat-input-box__input"
                    type="text"
                    placeholder={isFocused ? "Сообщение..." : null}
                    ref={input}
                    onFocus={() => setFocused(true)}
                    onChange={(e) => checkCommand(e.target.value)}
                    maxLength="200"
                    style={isCursorActive ? {pointerEvents: 'auto'} : {pointerEvents: 'none'}}
                />
                <img className="chat-input-box__image" src={chatInputArrow} alt="#"/>
            </div>
            <div className="chat-input-command">
                <div
                    className="chat-input-command-info"
                    onClick={() => setCommandsActive(!isCommandsActive)}
                >
                    Отыгровки
                </div>
                <div
                    className={cn(
                        "chat-input-command-list",
                        isCommandsActive && "chat-input-command-list_active"
                    )}
                >
                    {commandTypes.map((el, key) => {
                        return (
                            <div
                                key={key}
                                className={cn(
                                    "chat-input-command-list__element",
                                    currentCommand === el
                                        ? "chat-input-command-list__element_active"
                                        : null
                                )}
                                onClick={() => {
                                    setCommand(el);
                                    setChat("default");
                                    input.current.value = `/${el}`;
                                    input.current.focus();
                                }}
                            >
                                /{el}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default observer(ChatInput);
