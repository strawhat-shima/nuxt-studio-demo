---
title: "VSCodeで作業する"
description: ""
---

# Visual Studio Code で作業を行う

コンテンツの編集作業は、ローカルPCにコピーしたフォルダ内のファイルを編集（追加・修正・削除）します。
開発用Webサーバーを起動して編集内容を確認します。確認が終わったらCommitを実行して修正内容をGithubリポジトリにpushします。
自動的にGithub Actionが実行され、デプロイが実行されます。これらの作業を一貫してVisual Studio Codeで実施できます。

### 1. プロジェクトファイルのClone
ブラウザでGithubリポジトリを開いてURLをコピーします。
![copyurl](/img/clone.png){style="width: 600px;"}

VSCodeでクローンを実行する
![cloneurl](/img/clone2.png){style="width: 600px;"}


### 2. 開発用サーバーを起動してサイトを確認する

1. VSCodeでクローンしたフォルダを開く
1. ターミナルを表示する
1. npm install を実行する
1. npm run dev を実行する

![rundev](/img/rundev.png){style="width: 600px;"}

1. ブラウザで、localhost:3000 を表示する

### 3. コンテンツページの追加・編集

contentフォルダ配下に
aaaaフォルダを追加して、フォルダの下にbbbb.mdファイルを追加し、
ブラウザで/aaaa/bbbbが表示されることを確認する

### 4. 編集の保存とデプロイ

ローカルでの編集、確認が完了したら
1. 「ソール管理」タブで、commitを実行
1. Githubにpush
1. Githubで自動でActionが実行され→サイトのデプロイが実行される
1. サイトで変更内容を確認する

