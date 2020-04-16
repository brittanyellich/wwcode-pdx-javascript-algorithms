import React from 'react';
import Problem from '../components/Problem';

export default function Palindromes() {
  // Solve the problem here
  const palindromes = (input) => {
    // Empty string should be valid palindrome
    if (input === '') {
      return true;
    }
    // Strip out non-alphanumeric characters
    const nonAlphanumericCharacterString = input.replace(/\W/g, '');
    // Strip out casing from input
    const cleanedString = nonAlphanumericCharacterString.toLowerCase();
    // Check char at beginning/end of the string, compare, move to the next one
    let endPointer = cleanedString.length - 1;
    let beginningPointer = 0;
    for (let i = 0; i < cleanedString.length / 2; i++) {
      if (
        cleanedString.charAt(beginningPointer) !==
        cleanedString.charAt(endPointer)
      ) {
        return false;
      }
      beginningPointer++;
      endPointer--;
    }
    return true;
  };

  const example1Input = 'A man, a plan, a canal: Panama';
  const example2Input = 'race a car';

  return (
    <Problem
      title="Palindromes"
      problem="Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases."
      note="For the purpose of this problem, we define empty string as valid palindrome."
      source="https://leetcode.com/problems/valid-palindrome/"
      example1Input={example1Input}
      example1Output={true}
      example1Answer={palindromes(example1Input)}
      example2Input={example2Input}
      example2Output={false}
      example2Answer={palindromes(example2Input)}
    />
  );
}
