
// You should implement your task here.

module.exports = function towelSort(matrix) {
    return (matrix ?? []).reduce((acc, el, i) => i % 2 === 0 ? [...acc, ...el] : [...acc, ...el.reverse()], []);
}
