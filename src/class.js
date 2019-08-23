/*globals JSON_SPACE, INFO, ERROR*/

(function (global) {
  var DocLog = (function () {
    function DocLog(fileId) {
      if (!fileId) throw new Error('"fileId"は必須です');

      try {
        this.doc = DocumentApp.openById(fileId);
      } catch (err) {
        throw new Error('ドキュメントが存在しません。"fileId"をご確認ください。');
      }
      this.INFO = INFO;
      this.ERROR = ERROR;
      this.JSON_SPACE = JSON_SPACE;
    }

    DocLog.prototype.info = function (message, args) { // eslint-disable-line no-unused-vars
      if (!message) throw new Error('"message"は必須です');

      return this.log_(arguments, this.INFO);
    };

    DocLog.prototype.error = function (message, args) { // eslint-disable-line no-unused-vars
      if (!message) throw new Error('"message"は必須です');

      return this.log_(arguments, this.ERROR);
    };

    DocLog.prototype.log_ = function (msgArgs, color) {
      var args = [];
      for (var i = 0; i < msgArgs.length; i++) {
        var element = (typeof msgArgs[i] == 'object') ? JSON.stringify(msgArgs[i], null, this.JSON_SPACE) : msgArgs[i];
        args.push(element);
      }

      var msg = (msgArgs.length > 1) ? Utilities.formatString.apply(this, args) : args[0];
      this.doc.getBody().appendParagraph('[' + Utilities.formatDate(new Date(), 'JST', 'yy-MM-dd HH:mm:ss \'JST\'') + '] ' + msg).setForegroundColor(color);
    };

    return DocLog;
  })();
  return global.DocLog = DocLog;
})(this);
