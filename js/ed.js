const eIn = document.querySelector('.e');
const eOut = document.querySelector('.encrypted-text');


const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let encryptedMessage = '';

eIn.addEventListener('input', e => {
  const letter = e.data;
  if (letter === 'z') {
    encryptedMessage = encryptedMessage.concat('', 'a');
  } else if (letter === 'Z') {
    encryptedMessage = encryptedMessage.concat('', 'A');
  } else if (letter === ' ') {
    encryptedMessage = encryptedMessage.concat('', ' ');
  } else if (letter === null) {
    encryptedMessage = encryptedMessage.slice(0, -1);
  } else {
    encryptedMessage = encryptedMessage.concat('', alph[alph.indexOf(letter)+1]);
  }
  eOut.innerHTML = encryptedMessage;
})
