# ゆめみ フロントエンド コーディングテスト

[![CI](https://github.com/jumang4423/yumemi/actions/workflows/run_tests.yml/badge.svg?branch=master)](https://github.com/jumang4423/yumemi/actions/workflows/run_tests.yml)

- 株式会社ゆめみさんのフロントエンドコーディングテスト提出用。
- 都道府県ごとの人口を取得しグラフ化するためのフロントエンド。

## Setup

1. node v18をインストール

2. このrepositoryをcloneする

``` bash
git clone <yumemi github repo url>
```

3. npmパッケージをインストール
``` bash
cd yumemi
npm install
```

4. APIキーの設定

- [resas api](https://opendata.resas-portal.go.jp/)にてAPIを発行する
- .envの作成（.env.exampleを参考に）

## NPM Scripts

- 開発モードの起動

``` bash
npm run dev
```

- ビルドの実行

``` bash
npm run build
```

- テストの実行

``` bash
npm run test
```

- コードチェック

``` bash
npm run lint
```

- prettierの実行

``` bash
npm run format
```

## Github Actions

- 自動テスト実行(.github/workflows/run_tests.yml)
  githubのmasterにpushした際にgithub actionsでテストが実行されます。


## ディレクトリ説明
- apis
  apisを呼び出す関数を格納するディレクトリ
- components
  ページで使われるReactコンポーネントを格納するディレクトリ
- hooks
  カスタムフックを格納するディレクトリ
- recoil
  recoilのステート定義を格納するディレクトリ
- tools
  便利な関数を格納するディレクトリ
- types
  typescriptの型を定義するディレクトリ

## 使用技術
- node v18
- Vite.js
- Vitest
- TypeScript
- Recoil
- Prettier
- ESLint
- Rechart.js
