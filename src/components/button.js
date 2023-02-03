import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <button
      type="button"
      className="bg-purple-500 text-purple-50 px-3 rounded"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
