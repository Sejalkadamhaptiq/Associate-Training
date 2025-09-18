'use client'; // <-- This directive is crucial!

// 1. Import types from React, like ReactNode for the 'children' prop.
import { useState, type ReactNode } from 'react';

// 2. Define a type for the component's props for type safety.
type CollapsibleProps = {
  title: string;
  children: ReactNode; // 'children' can be any valid React element.
};

// 3. Apply the props type to the component's function signature.
export default function Collapsible({ title, children }: CollapsibleProps) {
  // TypeScript correctly infers that 'isOpen' is a boolean here.
  const [isOpen, setIsOpen] = useState(false);

  const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <button onClick={toggleVisibility}>
        {isOpen ? 'Hide' : 'Show'} Content
      </button>

      {/* Conditionally render the children passed as a prop */}
      {isOpen && children}
    </div>
  );
}