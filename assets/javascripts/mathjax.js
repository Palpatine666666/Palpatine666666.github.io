window.MathJax = {
  tex: {
    inlineMath: [ ['$','$'], ['\\(','\\)'] ],   // 把 $ 放在最前面
    displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.startup.output.clearCache()
  MathJax.typesetClear()
  MathJax.texReset()
  MathJax.typesetPromise()
})