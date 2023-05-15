import React from 'react';
import HText from './atom/HText';

const TitleBar: React.FC = () => {
  return (
    <div>
      <HText tagNumber={1}> 📊 都道府県別グラフ</HText>
      <HText tagNumber={4}>
        RESAS-APIを使って、都道府県別の人口数をグラフで表示します。
      </HText>
    </div>
  );
};

export default TitleBar;
