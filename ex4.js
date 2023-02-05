//task 5
function task5(a, b, p) {
    var result = a / b;
    return parseFloat(result.toFixed(p));
}

// task 6
var alphaShift2 = ''; 

function getEncryptor(alphabet, shift1, shift2) {
    shift1 = shift1 * -1; 
    const a = shift1 % alphabet.length;
    const alphabet1 = alphabet.slice(0, a); 
    const alphabet2 = alphabet.slice(a);
    alphaShift2 = shift2Work(alphabet, shift2); 
    return alphabet2 + alphabet1;
}

function shift2Work(alphabet, shift2) {
    shift2 = shift2 * -1;
    const a = shift2 % alphabet.length;
    const alphabet1 = alphabet.slice(0, a);
    const alphabet2 = alphabet.slice(a);
    return alphabet2 + alphabet1;

}

function encode(abc, word, alphaShift1, alphaShift2, shift2Freq){
    var encodeWord = '';
    for (var i = 1; i < word.length + 1; i++){
        var origin = abc.indexOf(word.charAt(i-1));
        if (i % shift2Freq == 0 && i != 0){
            encodeWord = encodeWord + alphaShift2.charAt(origin);
        } else {
            encodeWord = encodeWord + alphaShift1.charAt(origin);
        }
    }
    return encodeWord;
}

const abc = '0123456789abcdefghijklmnopqrstuvwxyz '; 
const shift2Freq = 5;
var alphaShift1 = getEncryptor(abc, -2, 2); 
const secretAlpha = 'javascript'; 

console.log(encode(abc, secretAlpha, alphaShift1, alphaShift2, shift2Freq)); 
