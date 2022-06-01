import React from 'react';
import './Component2.scss';

import reverse from 'lodash/reverse';

function Component2() {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'f', 'g'];
  const arrReverse = reverse(arr);
  return (
    <>
      <div className="block2">Component - 2!</div>
      <span>{arrReverse}</span>
      <button type="button">push me</button>
    </>
  );
}

export { Component2 };
