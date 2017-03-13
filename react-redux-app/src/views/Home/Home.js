import React from 'react';
import { Link } from 'react-router';

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <ul>
      <li><Link to='/campaign/931'>Kate Brown</Link></li>
      <li><Link to='/campaign/5591'>Ted Wheeler</Link></li>
    </ul>
  </div>
);

export default Home;