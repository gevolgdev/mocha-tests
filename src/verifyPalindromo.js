const verifyPalindromo = (word) => {
  let wordCompare = word.split('').reverse().join('');

  if(word === wordCompare) {
    return true;
  } else {
    return false;
  };
};

console.log(verifyPalindromo('ama'));