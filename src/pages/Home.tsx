// src/pages/Home.tsx

import React from 'react';
import './Home.css';
import { MathJax } from 'better-react-mathjax';
// @ts-ignore
import homeContent from '../content/homeContent';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>{homeContent.title}</h1>
      <p>
      <MathJax> {homeContent.content} </MathJax> 
      </p>
    </div>
  );
};

export default Home;