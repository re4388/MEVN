# 學習 NODE, MongoDB, Vue, Express


## 參考資料
https://vegibit.com/vue-js-express-tutorial/


## 實作內容
前端fetch後端提供的API，透過Vue render在瀏覽器上。
後端的資料來自於本機端架設的MongoDB database


## 如何啟動

### 客戶端
- 到/client
- yarn serve 


### 伺服器端
- 如果還在dev階段 nodemon index.js

### 啟動mongDB
確認有對應的mongDB資料庫，預設資料庫名稱是testproject
需要安裝mongDB, 然後建立一個資料庫叫做testproject
或是修改code內容到自己本機對應的資料庫名稱

啟動
sudo mongod

另外打開另一個terminal
mongo

可參考
http://www.runoob.com/mongodb/mongodb-osx-install.html
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

## TODO

- 加入UPDATE, 讓我可以修改已經失效的圖片來源
- 佈署在雲端


