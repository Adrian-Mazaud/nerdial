'use strict';
/** Déclaration des variables */
var openForm = document.querySelector('#open-form-msg');

function toggleDisplayForm(){
    console.log(event);
    let body = document.querySelector('body');
    let content = document.querySelector('#content');
    let containerForm = document.querySelector('#send-msg');
    let overlay = document.querySelector('#overlay');
    let closeForm = containerForm.querySelector('#close');
    let msgText = containerForm.querySelector('#msg-type');
    let msgOtherLast = document.querySelector('#last_other_msg_visualisation');

    event.preventDefault();
    if (closeForm.classList.contains('is-hidden')) {
        overlay.classList.add('is-visible');
        closeForm.classList.remove('is-hidden');
        containerForm.classList.remove('is-hidden');
        content.classList.add('toTop');
        body.classList.add('no-overflow');
        msgText.focus();
        displayLastMsg();
    }else{
        overlay.classList.remove('is-visible');
        closeForm.classList.add('is-hidden');
        containerForm.classList.add('is-hidden');
        content.classList.remove('toTop');
        msgOtherLast.classList.remove('fadeIn');
        msgOtherLast.classList.add('fadeOut');
        setTimeout(function(){
            body.classList.remove('no-overflow');
            body.removeChild(msgOtherLast);
        }, 500);
    };
    // overlay.addEventListener('click', toggleDisplayForm);
    closeForm.addEventListener('click', toggleDisplayForm);
};


openForm.addEventListener('click', toggleDisplayForm);

function displayLastMsg(){
    let body = document.querySelector('body');
    let otherLastMsg = document.querySelector('#other_last');
    console.log(otherLastMsg.innerHTML);

    let msg = document.createElement('div');
    msg.className = 'last_message_visualisation';
    msg.classList.add('fadeIn');
    msg.id = 'last_other_msg_visualisation';
    msg.innerHTML = otherLastMsg.innerHTML;

    body.appendChild(msg);
};
