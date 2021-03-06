/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const mappedData = new Map(englishToBrailleLiteralSet);


function convertToBraille() {
  const string = document.getElementById('sourceLangText').value;
  document.getElementById('targetLangText').innerHTML = string.split('').map(i => mappedData.get(i)).join('');
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', convertToBraille);
