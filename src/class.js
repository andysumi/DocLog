(function (global) {
  var DocLog = (function () {
    function DocLog(fileId) {
      if (!fileId) throw new Error('"fileId"は必須です');

      try {
        this.doc = DocumentApp.openById(fileId);
      } catch (err) {
        throw new Error('ドキュメントが存在しません。"fileId"をご確認ください。');
      }
    }

    return DocLog;
  })();
  return global.DocLog = DocLog;
})(this);
