[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp) ![Test](https://github.com/andysumi/DocLog/workflows/Test/badge.svg) ![Deploy](https://github.com/andysumi/DocLog/workflows/Deploy/badge.svg)

# DocLog

Google Apps Script用のGoogleドキュメントにログを出力するライブラリ

## スクリプトID

`15Iw-vBLNxIiBV7RDpsAzWxTEVj4KV9-ypRd_IE82OimoyCkZgjX3f-Lz`

## 使い方

### 事前準備

- [ライブラリをプロジェクトに追加する](https://developers.google.com/apps-script/guides/libraries)

### コードサンプル

```js
function myFunction() {
  var log = DocLog.create('GoogleドキュメントのファイルID');
  log.info('message: %s', 'log');

  log.JSON_SPACE = 4;
  log.info({message: 'log'});

  log.INFO = '#FF0000'
  log.info('log');
}
```

![screenshot.png](screenshot.png)
