module.exports = function (webpackConf) {
  webpackConf.resolve = webpackConf.resolve || {};
  webpackConf.resolve.alias = webpackConf.resolve.alias || {};
  Object.assign(webpackConf.resolve.alias, {
    'react': 'rax',
    'react-dom': 'rax-dom',
    'create-react-class': "rax/lib/createClass"
  });
};