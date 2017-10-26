# webpack lesson-1

# webpack:
### sudo cnpm install -g webpack      安装全局webpack
### cd 文件夹
### webpack  app.js  bundle.js
### webpack app.js bundle.js --watch   
### cnpm install jquery --save-dev
### cnpm install style-loader css-loader --save-dev
### 配置信息
### webpack
### npm run build


# webpack服务器:
### cd 文件夹
### cnpm install webpack-dev-server --save-dev
### 配置:
### "scripts": {
    "start": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
    "build": "webpack"
  },
### npm run start