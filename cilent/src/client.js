const log = (text) => {
    const parent = document.querySelector('#events');
    const el = document.createElement('li');
    el.innerHTML = text;

    parent.appendChild(el);
    parent.scrollTop = parent.scrollHeight
};

const onChatSumitted = (e) => {
    e.preventDefault();

    const input = document.querySelector('#chat');
    const text = input.nodeValue;

    log(text)
}

(() => {
    log('welcome');

    document
        .querySelector('#chat-form')
        .addEventListener('Summit', onChatSumitted);
})();