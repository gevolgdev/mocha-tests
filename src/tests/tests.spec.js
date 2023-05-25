
describe('percentage', () => {
  it('Calcula a porcentagem', () => {
    assert.equal(percentage(100, 10), '10%');
    assert.equal(percentage(100, 50), '50%');
    assert.equal(percentage(200, 50), '25%');
  });
});

describe('palindromo', () => {
  it('Verificar se a palavra é um palindromo', () => {
    assert.equal(verifyPalindromo('ama'), true);
    expect(verifyPalindromo('ama')).to.be.true;
  });
});