import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

export default function Button({ id, label, onClick }: ButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      style={{ padding: '0.5rem 1rem', backgroundColor: 'beige' }}
    >
      {label}
    </button>
  );
}
