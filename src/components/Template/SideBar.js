import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Momen Mushtaha</h2>
        <h6>Data Science | Python | NLP | AI/ML finetuning</h6>
        <p><a href="mailto:mush.momen@gmail.com">mush.momen@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I'm Momen, a <a href="https://carleton.ca/">Carleton Engineering</a> graduate,
        and a Software Engineer at <a href="https://www.micro1.ai">Micro1</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Momen Mushtaha <Link to="/">mmush.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
