interface Diff {
  amount: number;
  array: string[];
}

function getDiff(str1: string, str2: string): Diff {
  if (str1 === str2) {
    return { amount: 0, array: [] };
  }

  const array1 = [...str1];
  const array2 = [...str2];

  const diff = array1
    .filter((c) => !array2.includes(c))
    .concat(array2.filter((c) => !array1.includes(c)));

  return { amount: diff.length, array: diff };
}

console.log(getDiff("abc", "abcd")); // { amount: 1, array: ['d'] }
console.log(getDiff("abcd", "cdfe")); // { amount: 4, array: ['a', 'b', 'f', 'e'] }
console.log(getDiff("abc", "wbbcc")); // { amount: 2, array: ['a', 'w'] }
console.log(getDiff("abc", "abc")); // { amount: 0, array: [] }
