# react-learning

## Versions

* macOS: 12.2.1
* node: 16.14.2 (2022/03/27時点で推奨版)
* npm: 8.5.0
* npx: 8.5.0
* yarn: 1.22.18
* docker: 20.10.6
* docker-compose: 1.29.1
* nginx: 1.20.2

## Setup

### Install Docker & Compose

インストール済みとする。

### Install Node.js and npm

[公式サイト](https://nodejs.org/en/download/)からパッケージをダウンロードしてインストールする。

### Install yarn

[公式サイト](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)に掲載されているコマンドでインストールする。

```sh
$ npm install --global yarn
```

**※`8.5.5`が利用可能だが今回はアップデートせずに進める。**

**※内部的に`mkdir`が実行された際に権限エラーが発生した。`sudo`をつけて再度実行する。**

### Prepare react project

```sh
$ git clone https://github.com/kn25ha01/react-learning.git
```

新規で作成するコマンドは[公式サイト](https://ja.reactjs.org/tutorial/tutorial.html)を参考にする。

```sh
$ npx create-react-app react-learning
```

## Usage

### Development

次のコマンドを実行すると既定のブラウザで`http://localhost:3000/`が開かれる。

```sh
$ npm start
```

コンテナのビルドと検証
```
$ sh build.sh dev
$ sh run.sh dev
```

### Test

次のコマンドを実行するとテストが開始される。

```sh
$ npm test
```

### Deployment

CI/CDパイプラインを構築していないので、いずれの方法においても手動で実施する。

#### S3

`npm run build`でアセットコンパイルして`./build`下のファイルを`S3`にアップロードする。

#### EC2 (not container)

`npm run build`でアセットコンパイルして`./build`下のファイルをWebサーバーの参照先にアップロードする。

#### Fargate or EC2 (container)

`sh build.sh prod`でコンテナをビルド後、名前とタグを変更して`ECR`にpushする。
タスクを定義してコンテナを起動する。

#### Beanstalk

---

## Note

コンテナ全削除
```sh
$ docker image rm -f $(docker image ls -q)
$ docker container rm -f $(docker ps -aq)
```

Dockerfile作成時の参考資料
* https://github.com/StephenGrider/docker-react
* https://heartbeats.jp/hbblog/2014/07/3-tips-for-nginx-on-docker.html
