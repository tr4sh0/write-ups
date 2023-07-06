var iDashInitialized;
(() => {
    const TITLE = 'Consultor Virtual';
    const APP_KEY = 'YXRlbmRpbWVudG9tdWx0aW1hcmNhczplMmEyNDUxNS0zMjg0LTQ3ZGQtYWIxMC02NmFlYWNhY2YwYzA=';
    const isMutantBot = true;
    const BUBBLE_ENABLE = false;
    const CUSTOM_STYLE = ``;
    const imageURLTop = '';
    const isCustomIcon = false;
    const imageMutant = '';
    const PRIMARY_COLOR = '#000';
    const BUBBLE_MESSAGE = '';
    const imageURLBottom = '';
    const outsideIframe = false;
    const widgetPkgVersion = 'https://unpkg.com/blip-chat-widget';
    const loadBlipExtension = (callback) => {
        if (window && window.require) {
            require([widgetPkgVersion], callback);
        } else {
            var script = document.createElement("script");
            script.src = widgetPkgVersion;
            script.onload = callback;
            document.head.append(script);
        }
    };
    const toggleIDashBot = () => {
        document.getElementById('blip-chat-open-iframe').click();
    }
    const startIDashBot = () => {
        startBlipChat();
    }
    const startBlipChat = () => {
        const createBubble = (client) => {
            bubbleContainer = document.createElement("div");
            bubbleContainer.id = "bubble-container";
            bubble = document.createElement("div");
            bubble.id = "message-bubble";
            bubble.onclick = () => client.widget._openChat();
            var triangle = document.createElement("div");
            triangle.id = "triangle";
            var message = document.createElement("div");
            message.id = "message";
            message.innerHTML = BUBBLE_MESSAGE;
            bubble.appendChild(message);
            bubble.appendChild(triangle);
            bubbleContainer.appendChild(bubble);
            document.querySelector("#blip-chat-container").prepend(bubbleContainer);
        };
        const hideBubble = () => {
            if (BUBBLE_ENABLE) {
                const bubble = document.getElementById('message-bubble');
                bubble.classList.add('hide');
                bubble.classList.remove('display');
            }
        }
        const blipStyle = (color) => {
            let allStyle = ` #blip-chat-header { background-color: ${color} !important; } #blip-send-message { background-color: ${color} !important; } .fixed-options ul li div { color: ${color} !important; } .blip-chat-iframe-opened { border-radius: 0px !important; } `;
            if (isMutantBot) {
                allStyle += ` ${imageMutant ? ( ` .blip-chat-container img { content: url(${imageMutant}); } ` ) : ''} .blip-chat-bot-name { display: none !important; } .blip-chat-titles::before { content: "${TITLE}" !important; } `;
            }
            if (CUSTOM_STYLE) allStyle += CUSTOM_STYLE;
            return allStyle;
        }
        const load = async () => {
            const date = new Date();
            const userCredential = crypto.randomUUID();
            const storage = JSON.parse(localStorage.getItem('@iDashCredentials'));
            if (storage && date > new Date(storage.validUntil)) localStorage.removeItem('@iDashCredentials');
            if (!storage) {
                localStorage.setItem('@iDashCredentials', JSON.stringify({
                    userIdentity: userCredential,
                    userPassword: userCredential,
                    validUntil: new Date(Date.now() + (3600 * 1000 * 24)),
                    client: '64135af0482193653c744619'
                }));
            }
            window.iDashInitialized = true;
            const head = document.getElementsByTagName('head')[0];
            const style = document.createElement('style');
            if (window.iDashIconInLeft || window.iDashIconPosition || window.iDashChatHeight || window.iDashIconZIndex || window.iDashOpenLateral || window.iDashHideButton) {
                style.textContent = ` ${window.iDashHideButton === true ? ( ` #blip-chat-open-iframe { display: none !important; } ` ) : ''} ${window.iDashIconInLeft ? ( ` #blip-chat-container { right: unset !important; left: 100px !important; } #bubble-container #triangle { transform: rotateY(180deg); right: 205px !important; } #blip-chat-container #blip-chat-open-iframe { left: 38px; } #blip-chat-container #blip-chat-iframe { left: 38px; } @media (max-width: 480px) { #blip-chat-container { left: 0 !important; right: unset; } #blip-chat-container #blip-chat-iframe { left: 0px; } } #blip-chat-notifications { left: 35px; } ` ) : ''} ${window.iDashIconPosition ? ( ` #blip-chat-container #blip-chat-iframe { bottom: calc(110px + ${window.iDashIconPosition}px) !important; } #blip-chat-container #blip-chat-open-iframe { bottom: calc(50px + ${window.iDashIconPosition}px) !important; } @media (min-width: 481px) { #blip-chat-container { bottom: calc(50px + ${window.iDashIconPosition}px) !important; } } #blip-chat-notifications { bottom: ${window.iDashIconPosition + 75}px !important; } ` ) : ''} ${window.iDashChatHeight ? ( ` @media (min-width: 481px) { #blip-chat-container #blip-chat-iframe.blip-chat-iframe-opened { height: calc(610px + ${window.iDashChatHeight}px) !important; } } ` ) : ''} ${window.iDashIconZIndex ? ( ` #blip-chat-container { z-index: ${window.iDashIconZIndex} !important; } #blip-chat-iframe { z-index: ${window.iDashIconZIndex} !important; } ` ) : ''} ${window.iDashOpenLateral ? ( ` #blip-chat-container { ${window.iDashIconInLeft ? ( `left: 0px !important; right: unset !important;` ) : ( "right: 0 !important;" )} bottom: 0 !important; height: 100% !important; } #blip-chat-iframe { top: 0 !important; bottom: 0 !important; opacity: 1 !important; height: 100% !important; ${window.iDashIconInLeft ? ("left: -480px !important;") : ( "right: -480px !important;" )} transform: none !important; max-height: 100% !important; box-shadow: none !important; transition: 0.5s !important; position: absolute !important; } ${window.iDashIconInLeft ? ( `#blip-chat-container #blip-chat-iframe { left: 38px; right: unset !important; }` ) : ''} #blip-chat-iframe.blip-chat-iframe-opened { ${window.iDashIconInLeft ? ('left: 0 !important;') : ('right: 0 !important;')} border-radius: 0px !important; box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.2) !important; } #bubble-container { top: unset !important; ${window.iDashIconInLeft ? (`left: 120px;`) : ( `right: 72px !important;` )} bottom: 20px !important; width: 220px !important; position: absolute !important; } ` ) : ''} `;
                head.appendChild(style)
            }
            const toggleWidthAtBlipChatContainer = (event) => {
                const blipChatContainer = document.getElementById('blip-chat-container');
                if (event === 'leaveEvent') {
                    blipChatContainer.removeAttribute('style');
                }
                const {
                    innerWidth
                } = window;
                if (event === 'enterEvent') {
                    if (innerWidth < 481) {
                        blipChatContainer.style.width = '100%';
                        return;
                    }
                }
            }
            loadBlipExtension((loader) => {
                const blipChatWidget = loader && loader.BlipChat ? loader.BlipChat : BlipChat;
                const blipClient = new blipChatWidget().withAppKey(APP_KEY).withButton({
                    color: PRIMARY_COLOR
                }).withCustomStyle(blipStyle(PRIMARY_COLOR)).withCustomCommonUrl('https://infracommerce.chat.blip.ai/').withEventHandler(blipChatWidget.ENTER_EVENT, function() {
                    toggleWidthAtBlipChatContainer('enterEvent');
                    hideBubble();
                    if (window.iDashOpenLateral) {
                        const buttonChat = document.getElementById('blip-chat-open-iframe');
                        buttonChat.setAttribute('style', 'display: none !important');
                    }
                }).withEventHandler(blipChatWidget.CREATE_ACCOUNT_EVENT, function() {
                    blipClient.sendMessage({
                        type: "text/plain",
                        content: '64135af0482193653c744619',
                        metadata: {
                            "#blip.hiddenMessage": true,
                        },
                    });
                }).withEventHandler(blipChatWidget.LOAD_EVENT, () => {
                    var iframe = document.getElementById('blip-chat-iframe');
                    if (!outsideIframe) {
                        iframe.contentWindow.postMessage({
                            code: 'ShowCloseButton',
                            showCloseButton: true
                        }, iframe.src, );
                    }
                }).withEventHandler(blipChatWidget.LEAVE_EVENT, () => {
                    toggleWidthAtBlipChatContainer('leaveEvent');
                    if (window.iDashOpenLateral) {
                        setTimeout(() => {
                            const buttonChat = document.getElementById('blip-chat-open-iframe');
                            buttonChat.setAttribute('style', "display: flex");
                        }, 200)
                    }
                });
                if (window.iDashOpenOutside) {
                    blipClient.withTarget(window.iDashOpenOutside)
                }
                const {
                    userIdentity,
                    userPassword,
                    client
                } = JSON.parse(localStorage.getItem('@iDashCredentials'));
                if (client === '64135af0482193653c744619') {
                    blipClient.withAuth({
                        authType: blipChatWidget.DEV_AUTH,
                        userIdentity,
                        userPassword
                    })
                }
                const replaceImageStructure = () => {
                    document.getElementById('blip-chat-open-iframe').style.display = 'none';
                    var oldImage = document.querySelector('#blip-chat-icon');
                    var container = document.createElement('div');
                    container.id = 'blip-chat-icon';
                    var img1 = document.createElement('img');
                    img1.src = imageURLTop;
                    img1.classList.add('top');
                    img1.alt = 'first icon';
                    var img2 = document.createElement('img');
                    img2.src = imageURLBottom;
                    img2.classList.add('bottom');
                    img2.alt = 'second icon';
                    container.appendChild(img1);
                    container.appendChild(img2);
                    oldImage.parentElement.insertBefore(container, oldImage);
                    oldImage.remove();
                    setTimeout(() => {
                        document.getElementById('blip-chat-open-iframe').style.display = 'block';
                    }, [300])
                };
                blipClient.build();
                if (isCustomIcon && !window.iDashOpenOutside) replaceImageStructure();
                const baloonPopUp = document.createElement('link');
                baloonPopUp.setAttribute('rel', 'stylesheet');
                baloonPopUp.setAttribute('type', 'text/css');
                baloonPopUp.setAttribute('href', 'https://idash.ifcshop.net/api/styles/style-button.css');
                head.appendChild(baloonPopUp);
                if (BUBBLE_ENABLE) {
                    setTimeout(() => {
                        createBubble(blipClient);
                    }, 400)
                }
                if (window.iDashElementToOpenChat) {
                    const element = document.getElementById(window.iDashElementToOpenChat);
                    element.addEventListener('click', () => {
                        toggleIDashBot();
                    })
                }
            });
        };
        const local = window.iDashInitialized;
        if (local) return;
        load();
    }

    function ready(fn) {
        // se o documento já carregou 
        if (document.readyState !== 'loading') {
            fn();
        } else if (document.addEventListener) {
            // se ainda não carregou, monta o bind no evento para quando ocorrer o carregamento 
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            // caso para navegadores sem suporte ao document.addEventListener 
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState !== 'loading') fn();
            });
        }
    }
    ready(() => {
        document.documentElement.style.setProperty('--first-color', '#000');
        document.documentElement.style.setProperty('--fix-icon-position', `${(window.iDashIconPosition && !isNaN(window.iDashIconPosition)) ? window.iDashIconPosition : 0}px`);
        document.documentElement.style.setProperty('--fix-zindex', `${(window.iDashIconZIndex && !isNaN(window.iDashIconZIndex)) ? window.iDashIconZIndex : 10000}`);
        if (!window.iDashBotManualStart || window.iDashBotManualStart === false) {
            setTimeout(() => {
                startIDashBot();
            }, window.iDashBotTimeoutStart || 500);
        }
        window.startIDashBot = startIDashBot;
        window.toggleIDashBot = toggleIDashBot;
    })
})();