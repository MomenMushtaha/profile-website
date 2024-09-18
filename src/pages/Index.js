import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Momen Mushtaha's personal website. London, Ontario based Carleton Engineering graduate, "
    + 'AI Software Engineer at Micro1'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/recommendation">recommendation</Link>, {' '}
        view <Link to="/stats">site statistics</Link>
      </p>
    </article>
  </Main>
);

export default Index;
