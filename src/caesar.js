function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    const lowerCaseInput = input.toLowerCase().split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    if(encode){
        return lowerCaseInput.map((letter) => {
            if(alphabet.includes(letter)){
                if(alphabet.indexOf(letter) + shift < 0){
                    return alphabet[alphabet.indexOf(letter) + shift + 26];
                }
                if(alphabet.indexOf(letter) + shift > 25){
                    return alphabet[alphabet.indexOf(letter) + shift - 26];
                }
                return alphabet[alphabet.indexOf(letter) + shift];
            } else{
                return letter;
            }
        }).join('');
    }

    if(!encode){
        shift *= -1;
        return lowerCaseInput.map((letter) => {
            if(alphabet.includes(letter)){
                if(alphabet.indexOf(letter) + shift < 0){
                    return alphabet[alphabet.indexOf(letter) + shift + 26];
                }
                if(alphabet.indexOf(letter) + shift > 25){
                    return alphabet[alphabet.indexOf(letter) + shift - 26];
                }
                return alphabet[alphabet.indexOf(letter) + shift];
            } else{
                return letter;
            }
        }).join('');
    }
}

module.exports = caesar;
