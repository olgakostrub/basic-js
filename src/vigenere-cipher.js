const START_KEY_CODE = 65;
const START_CIPHER_SHIFT = 25;

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    let spaces = 0;
    if (message === undefined || key === undefined) throw new Error("Not defined message or key");
    message = message.toUpperCase().split("");
    key = key.toUpperCase().split("");
    const encrypted = message.map((value, index) => {
      if (value === " " || /[!@#$(),.\/|*\-&^%:'\d]/.test(value)) {
        spaces++;
        return value;
      }
      let keyIndex =
        index < key.length - 1 ? index - spaces : (index - spaces) % key.length;
      let encrChar =
        value.charCodeAt(0) -
        START_KEY_CODE +
        key[keyIndex].charCodeAt(0) -
        START_KEY_CODE;
      if (encrChar > START_CIPHER_SHIFT) encrChar -= START_CIPHER_SHIFT + 1;
      return String.fromCharCode(encrChar + START_KEY_CODE);
    });
    if (!this.direct) encrypted.reverse();
    return encrypted.join("");
  }

  decrypt(encryptedMessage, key) {
    let spaces = 0;
    if (encryptedMessage === undefined || key === undefined) throw new Error("Not defined message or key");
    let message = encryptedMessage.toUpperCase().split("");
    key = key.toUpperCase().split("");
    const decrypted = message.map((value, index) => {
      if (value === " " || /[!@#$(),.\/|*\-&^%:'\d]/.test(value)) {
        spaces++;
        return value;
      }
      let keyIndex =
        index < key.length - 1 ? index - spaces : (index - spaces) % key.length;
      let encrChar =
        value.charCodeAt(0) -
        START_KEY_CODE -
        (key[keyIndex].charCodeAt(0) - START_KEY_CODE);
      if (encrChar < 0) encrChar += START_CIPHER_SHIFT + 1;
      return String.fromCharCode(encrChar + START_KEY_CODE);
    });
    if (!this.direct) decrypted.reverse();
    return decrypted.join("");
  }
}

module.exports = VigenereCipheringMachine;
