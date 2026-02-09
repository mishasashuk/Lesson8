// Написать функцию, которая складывает все четные числа и возвращает результат

const array: number[] = [4, 33, 45, 20, 57, 0, 2];

const sumEven = (arr: number[]) => {
  return arr.reduce((acc, value) => {
    if (!(value % 2)) {
      return acc + value;
    }
    return acc;
  }, 0);
};
console.log(sumEven(array));
