/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const mappedData = new Map(englishToBrailleLiteralSet);
let output = '';
let string = '';

function convertToBraille() {
  string = document.getElementById('sourceLangText').value;
  for (let ind = 0; ind < string.length; ind += 1) {
    output += mappedData.get(string[ind]);
  }
  document.getElementById('targetLangText').innerHTML = output;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convertToBraille);
