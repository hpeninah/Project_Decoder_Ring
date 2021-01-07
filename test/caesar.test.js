const caesar = require('../src/caesar');
const expect = require('chai').expect;

describe ('caesar', () => {
    it('Should return false if shift value is not present', () => {
        expect(caesar('thinkful')).to.be.false;
    });

    it('Should return false if shift value is equal to 0', () => {
        expect(caesar('thinkful', 0)).to.be.false;
    });

    it('Should return false if shift value is less than -25 ', () => {
        expect(caesar('thinkful', -26)).to.be.false;
    });

    it('Should return false if shift value is greater than 25', () => {
        expect(caesar('thinkful', 99)).to.be.false;
    });

    it('Should ignore capital letters', () => {
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar('This Is A Secret Message!', 8);      
        expect(actual).to.eql(expected);
    });

    it('Should handle shifts going past the end of the alphabet', () => {    
        expect(caesar('z', 3)).to.eql('c');
    });

    it('Should return an encoded message', () => {
        const expected = 'wklqnixo';
        const actual = caesar('Thinkful', 3);
        expect(actual).to.eql(expected); 
      });
    
      it('Should return a decoded message', () => {
        const expected = 'thinkful';
        const actual = caesar('wklqnixo', 3, false);
        expect(actual).to.eql(expected); 
      });

      it('Should maintain spaces and nonalphabetic symbols in the message', () => {
       expect(caesar('a !( ', 1)).to.equal('b !( ');
       expect('z ! )').to.equal(caesar('a ! )', 1, false))
      });
})