// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  let a = [];
  for (let i = 1; i < matrix.length; i = i + 2) {
    matrix[i].reverse();
  }
  a = [].concat(...matrix);
  return a;
};
