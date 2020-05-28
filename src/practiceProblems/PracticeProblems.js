import React from 'react';
import BirthdayCakeCandles from './BirthdayCakeCandles';
import DefangIPAddress from './DefangIPAddress';
import EvenNumberDigits from './EvenNumberDigits';
import ArrayusMaximus from './ArrayusMaximus';

export default function PracticeProblems() {
  return (
    <div className="introduction">
      <h3 className="app-header">Practice Problems</h3>
      <DefangIPAddress />
      <hr className="problem-separator" />
      <BirthdayCakeCandles />
      <hr className="problem-separator" />
      <EvenNumberDigits />
      <hr className="problem-separator" />
      <ArrayusMaximus />
    </div>
  );
}
