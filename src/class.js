/*globals JSON_SPACE, INFO, ERROR, WARN, DEBUG*/

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
      this.WARN = WARN;
      this.DEBUG = DEBUG;
      this.JSON_SPACE = JSON_SPACE;
    }

    DocLog.prototype.info = function (message, args) { // eslint-disable-line no-unused-vars
      if (!message) throw new Error('"message"は必須です');

      return this.log_(arguments, 'INFO', this.INFO);
    };

    DocLog.prototype.error = function (message, args) { // eslint-disable-line no-unused-vars
      if (!message) throw new Error('"message"は必須です');

      return this.log_(arguments, 'ERROR', this.ERROR);
    };

    DocLog.prototype.warn = function (message, args) { // eslint-disable-line no-unused-vars
      if (!message) throw new Error('"message"は必須です');

      return this.log_(arguments, 'WARN', this.WARN);
    };

    DocLog.prototype.debug = function (message, args) { // eslint-disable-line no-unused-vars
      if (!message) throw new Error('"message"は必須です');

      return this.log_(arguments, 'DEBUG', this.DEBUG);
    };

    DocLog.prototype.appendHorizontalLine = function () {
      return this.doc.getBody().appendHorizontalRule();
    };

    DocLog.prototype.appendPageBreak = function () {
      return this.doc.getBody().appendPageBreak();
    };

    DocLog.prototype.log_ = function (msgArgs, level, color) {
      var args = [];
      for (var i = 0; i < msgArgs.length; i++) {
        var element = (typeof msgArgs[i] == 'object') ? JSON.stringify(msgArgs[i], null, this.JSON_SPACE) : msgArgs[i];
        args.push(element);
      }

      var msg = (msgArgs.length > 1) ? Utilities.formatString.apply(this, args) : args[0];
      var log = Utilities.formatString('%s [%s] %s', (level + '     ').slice(0,5), Utilities.formatDate(new Date(), 'JST', 'yy-MM-dd HH:mm:ss \'JST\''), msg);
      return this.doc.getBody().appendParagraph(log).setForegroundColor(color);
    };

    return DocLog;
  })();
  return global.DocLog = DocLog;
})(this);
