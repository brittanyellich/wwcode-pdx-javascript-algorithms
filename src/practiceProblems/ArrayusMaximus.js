import React from 'react';
import Problem from '../components/Problem';

export default function ArayusMaximus() {
  // Solve the problem here
  const arrayusMaximus = (inputArray) => {
    return 0;
  };

  return (
    <Problem
      title="Find the maximal value of an array"
      problem="A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N)."
      source="slack!"
      example1Input="([-3, 1, 2, -2, 5, 6])"
      example1Output={60}
      example1Answer={arrayusMaximus([-3, 1, 2, -2, 5, 6])}
      example2Input="([-20, 10, 40, 100])"
      example2Output={40000}
      example2Answer={arrayusMaximus([-20, 10, 40, 100])}
    />
  );
}
