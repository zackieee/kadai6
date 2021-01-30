# kadai6
CORSを理解する
サーバー側のAPIプログラム

## 実行方法
1. ローカルにクローン

2. クローンフォルダに移動

3. npm install

4. 下記コマンド実行
```
$ node ./bin/www
```

5. ブラウザで`http://localhost:3000`にアクセスする(kadai6-2との挙動比較用)  
  
**<CORSヘッダーの設定>**  
下記の指定になっています。
```
Access-Control-Allow-Origin：http://localhost:3000
Access-Control-Allow-Method：POST
```

## ボタン押下時の動作について  
`http://localhost:3000`ページ表示時の動作  

[シンプルリクエスト]   
　メソッド：POST　コンテンツタイプ：application/x-www-form-urlencoded  
　→　同一ドメインのため、問題なく処理が完了する  
 　　`結果:POST処理が正常に終了しました`

[プリフライトが必要]  
　メソッド：POST　コンテンツタイプ：application/json  
　→ 同一ドメインのため、プリフライトチェックは行われない  
 　 `結果:POST処理が正常に終了しました`

[PUTメソッドの送信]  
　メソッド：PUT　コンテンツタイプ：application/json  
　→　同一ドメインのため、プリフライトチェックは行われない／CORSでのメソッド制御の対象ともならない  
 　　`結果:PUT処理が正常に終了しました`
