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
  constructor (isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(message, key, 'encrypt');
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    return this.process(encryptedMessage, key, 'decrypt');
  }
  process(input, key, mode) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const inputUpper = input.toUpperCase();
    const keyUpper = key.toUpperCase();

    let keyIndex = 0;
    const result = inputUpper.split('').map(char => {
      const charIndex = alphabet.indexOf(char);
      if(charIndex === -1) return char;

      const keyChar = keyUpper[keyIndex % keyUpper.length];
      const keyShift = alphabet.indexOf(keyChar);
      const newIndex = mode === 'encrypt'
        ? (charIndex + keyShift) % alphabet.length
        : (charIndex - keyShift + alphabet.length) % alphabet.length;

      keyIndex += 1;
      return alphabet[newIndex];
    }).join('');

  return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
