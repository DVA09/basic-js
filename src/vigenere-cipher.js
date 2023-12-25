const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  applyVigenereCipher(message, key, encrypt) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let currentCode = message.charCodeAt(i);
      if (currentCode >= 65 && currentCode <= 90) {
        let keyCharCode = key.charCodeAt(j % key.length);
        let move = keyCharCode - 65;
        let newChar = encrypt ? ((currentCode - 65 + move) % 26) + 65 : ((currentCode - 65 - move + 26) % 26) + 65;
        result += String.fromCharCode(newChar);
        j++;
      } else {
        result += message.charAt(i);
      }
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
  encrypt(message, key) {
    return this.applyVigenereCipher(message, key, true);
  }
  decrypt(encryptedMessage, key) {
    return this.applyVigenereCipher(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
