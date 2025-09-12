import React from 'react';
import './Header.css';

interface Props {
  title: string;
}

function Header({ title }: Props) {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
