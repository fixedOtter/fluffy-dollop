import { useState } from 'react';
import logo from '../../images/stop_talking.jpg';
import './header.css';

export default function Header({ title, login, theme }) {

  return (
    <header>
      <nav className={`header ${theme}`}>
        <a href="#" className="brand">
          <img className="logo" src={logo} />
          <span>{title}</span>
        </a>

        <input id="bmenub" type="checkbox" className="show"/>
        <label htmlFor="bmenub" className="burger pseudo button">menu</label>

        <div className="menu">
          {login ? <a href="/logout" className="pseudo button">logout</a> : <a href="/login" className="button">login</a>}
          <a href="#" className="button">Plugins</a>
        </div>
      </nav>

    </header>
  );
}