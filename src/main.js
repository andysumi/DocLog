/* exported JSON_SPACE, INFO, ERROR, WARN, DEBUG, DEBUG_MODE */

var JSON_SPACE = 0;
var INFO = '#000000';
var ERROR = '#CC0000';
var WARN = '#E69138';
var DEBUG = '#CCCCCC';
var DEBUG_MODE = false;

/**
 * インスタンスを作成する
 * @param {String} fileId 【必須】GoogleドキュメントのファイルID
 * @return {DocLog}
 */
function create(fileId) { // eslint-disable-line no-unused-vars
  return new DocLog(fileId);
}

/**
 * INFOレベルのログを出力する
 * @param {String} message 【必須】出力するメッセージ
 * @param {Object...} args messageにフォーマット文字列を指定した場合の対象の値
 * @return {Paragraph}
 */
function info(message, args) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * ERRORレベルのログを出力する
 * @param {String} message 【必須】出力するメッセージ
 * @param {Object...} args messageにフォーマット文字列を指定した場合の対象の値
 * @return {Paragraph}
 */
function error(message, args) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * WARNレベルのログを出力する
 * @param {String} message 【必須】出力するメッセージ
 * @param {Object...} args messageにフォーマット文字列を指定した場合の対象の値
 * @return {Paragraph}
 */
function warn(message, args) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * DEBUGレベルのログを出力する
 * @param {String} message 【必須】出力するメッセージ
 * @param {Object...} args messageにフォーマット文字列を指定した場合の対象の値
 * @return {Paragraph}
 */
function debug(message, args) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 区切り線を出力する
 * @return {HorizontalRule}
 */
function appendHorizontalLine() { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 改行を出力する
 * @return {PageBreak}
 */
function appendPageBreak() { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
