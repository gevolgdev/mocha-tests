// percentage = parseInt((findPattern()[value] / allVariables.length) * 100);

function percentage(all, part) {
  let percentageValue = `${parseInt((part / all) * 100)}%`;
  return percentageValue;
};
console.log(percentage(100, 10));