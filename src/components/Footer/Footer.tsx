import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/Home">Home</Link>
      <Link to="/MojiGariji">Moji gariji</Link>
      <Link to="/DodajGarije">Dodaj garija</Link>
      <Link to="/">Log out</Link>
    </div>
  );
};

export default Footer;
