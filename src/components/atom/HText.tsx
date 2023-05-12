import React from 'react';
import './hText.css';

interface HTextProps {
  children: React.ReactNode;
  tagNumber: number;
}

const H1Text: React.FC<HTextProps> = ({ children, tagNumber }) => {
  return <div className={`h${tagNumber}`}>{children}</div>;
};

export default H1Text;
