import { render, screen } from '@testing-library/react';
import Dependancies from './components/Dependancies.tsx';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(
      <Dependancies>
        <App />
      </Dependancies>
    );

    expect(screen.getByText('📊 都道府県別グラフ')).toBeInTheDocument();
    expect(screen.getByText('都道府県')).toBeInTheDocument();
    expect(screen.getByText('人口カテゴリ選択')).toBeInTheDocument();
    expect(screen.getByText('プレビュー')).toBeInTheDocument();
  });
});
