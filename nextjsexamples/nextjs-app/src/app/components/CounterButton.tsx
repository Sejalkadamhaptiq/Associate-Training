'use client'; // This directive marks the component as a client-side component.

import { useState } from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button 
      onClick={() => setCount(count + 1)}
      style={{ padding: '8px 12px', borderRadius: '5px' }}
    >
      You clicked me {count} times
    </button>
  );
}