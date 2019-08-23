/**
 * インスタンスを作成する
 * @param {String} fileId 【必須】GoogleドキュメントのファイルID
 * @return {DocLog} DocLog インスタンス
 */
function create(fileId) { // eslint-disable-line no-unused-vars
  return new DocLog(fileId);
}
