const pluginName = 'HtmlAfterWebpackPlugin';
//静态资源处理的小函数
const assetsHelp = (data) => {
  let js = [];
  let css = [];
  const dir = {
      js: item => `<script class="lazyload-js" src="${item}"></script>`,
      css: item => `<link  class="lazyload-css" rel="stylesheet" href="${item}">`
  }
  
  for (let jsitem of data.js) {
      js.push(dir.js(jsitem));
  }
  console.log('🍎',js)
  for (let cssitem of data.css) {
      css.push(dir.css(cssitem));
  }
  return {
      js,
      css
  }
}

class HtmlAfterWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
        //console.log('⭐',htmlPluginData);
        let _html = htmlPluginData.html;
        _html = _html.replace(/page:/g, "../../");
        _html = _html.replace(/components:/g, "../../../components/");
        const result = assetsHelp(htmlPluginData.assets);
        _html = _html.replace("<!--injectcss-->", result.css.join(""));
        _html = _html.replace("<!--injectjs-->", result.js.join(""));
        console.log('111111111', _html)
        htmlPluginData.html = _html;
      })
    })
  }
}

module.exports = HtmlAfterWebpackPlugin;