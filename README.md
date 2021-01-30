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
5. ngrokをインストールする  
参考：https://qiita.com/hirokisoccer/items/7033c1bb9c85bf6789bd  

6. ターミナルから以下のコマンドを実行  
　 表示されるhttpのURLを控えておく（kadai6-2で使用します）  
```
$ ngrok http localhost:3000  
```
  
  
**<CORSヘッダーの設定>**  
下記の指定になっています。
```
Access-Control-Allow-Origin：http://localhost:3000
Access-Control-Allow-Method：POST
```
