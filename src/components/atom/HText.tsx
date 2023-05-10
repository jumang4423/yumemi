import React from 'react';
import './hText.css';

// tag for h1 h2 h3 h4 h5 h6

interface HTextProps {
  children: React.ReactNode;
  tagNumber: number;
}

const H1Text: React.FC<HTextProps> = ({ children, tagNumber }) => {
  return <div className={`h${tagNumber}`}>{children}</div>;
};

export default H1Text;
