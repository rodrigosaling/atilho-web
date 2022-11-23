import React from 'react';

export function Button({ children }) {
  return (
    <button type="button" className="bg-purple-500 text-purple-50 px-3 rounded">
      {children}
    </button>
  );
}
