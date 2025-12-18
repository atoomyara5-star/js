function Sum_Even_Odd(array) {
  let even = 0;
  let odd = 0;

  for (let num of array) {
    if (num % 2 == 0) {
      even += num;
    }
     else {
      odd += num;
    }
  }

  console.log("Sum Of Even:", even);
  console.log("Sum Of Odd:", odd);
}

Sum_Even_Odd([1, 2, 3, 4, 5,6,7,8,9]);
