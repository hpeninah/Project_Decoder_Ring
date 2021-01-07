const polybius = require('../src/polybius');
const expect = require('chai').expect;

describe('polybius', () => {
    it('Should translate i and j to 42', () => {
        expect(polybius('j')).to.eql('42');
        expect(polybius('i')).to.eql('42');
    });

    it('Should translate 42 to (i/j)', () => {
        const expected = 'th(i/j)nkful';
        const actual = polybius('4432423352125413', false); 
        expect(actual).to.equal(expected);
    });

    it('Should ignore capital letters and maintains spaces in message', () => {
        expect(polybius('Hello world')).to.eql('3251131343 2543241341');
        expect(polybius('3251131343 2543241341', false)).to.include(' ');
    });

    it('Should return a string when encoding input', () =>{
        const expected = 'hello world'
        const actual = polybius('3251131343 2543241341', false);
        expect(actual).to.equal(expected);
    });

    it(('Should return an encoded message'), () => {
        const expected = '4432423352125413';
        const actual = polybius('thinkful');
        expect(actual).to.eql(expected);
      });
    
      it(('Should return a decoded message'), () => {
        const expected = 'th(i/j)nkful';
        const actual = polybius('4432423352125413', false);
        expect(actual).to.eql(expected);
      });
    
      it(('Should return false when input is missing'), () => {
        const actual = polybius('', false);
        expect(actual).to.be.false;
      });
      
      it('Should return false if number of characters in string is not even', () =>{
        const actual = polybius('44324233521254134', false);
        expect(actual).to.be.false;
    });
})