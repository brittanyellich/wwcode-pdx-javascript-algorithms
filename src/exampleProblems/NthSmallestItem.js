import React from 'react';
import Problem from '../components/Problem';

export default function NthSmallestItem() {
  // Solve the problem here
  const nthSmallestItem = (inputArray, n) => {
    // Sort the array
    const sortedArray = inputArray.sort((a, b) => {
      return a - b;
    });
    // Find item in array at n-1
    return sortedArray[n - 1];
  };

  return (
    <Problem
      title="Find nth smallest item in array"
      problem="Given an array of numbers and a number that is smaller or equal to the length of the array, find the number in the order of the numbers equal to the number that you were given."
      example1Input="([3, 6, 30, 1, 4], 2)"
      example1Output={3}
      example1Answer={nthSmallestItem([3, 6, 30, 1, 4], 2)}
      example2Input="([4, 90, 2832, -423, 633, 12], 4)"
      example2Output={90}
      example2Answer={nthSmallestItem([4, 90, 2832, -423, 633, 12], 4)}
    />
  );
}
