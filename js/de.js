const dIn = document.querySelector('.d');
const dOut = document.querySelector('.decrypted-text');

const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let decryptedMessage = '';

dIn.addEventListener('input', d => {
  const letter = d.data;
  if (letter === 'a') {
    decryptedMessage = decryptedMessage.concat('', 'z');
  } else if (letter === 'A') {
    decryptedMessage = decryptedMessage.concat('', 'Z');
  } else if (letter === ' ') {
    decryptedMessage = decryptedMessage.concat('', ' ');
  } else if (letter === null) {
    decryptedMessage = decryptedMessage.slice(0, -1);
  } else {
    decryptedMessage = decryptedMessage.concat('', alph[alph.indexOf(letter)-1]);
  }
  dOut.innerHTML = decryptedMessage;
})