function whatsappMe() {
    let number = '+628989098499';
    const bektik = '```';

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const numberphone = document.getElementById('number').value;

    let link =
        'https://wa.me/' +
        number +
        `${'?text=' + bektik + 'Hello%20'}` +
        "i'" +
        'am,%20' +
        fullname +
        '%0a' +
        'This%20is%20My%20Email%20:' +
        email +
        '%0a' +
        'This%20is%20My%20Secondary%20Contact%20:' +
        numberphone +
        '%0a%0a' +
        'My%20necessary%20:' +
        subject +
        '%0a' +
        'I%20Hope%20you%20read%20my%20Message:%0a' +
        message +
        bektik;

    window.open(link, '_blank').focus();
}
