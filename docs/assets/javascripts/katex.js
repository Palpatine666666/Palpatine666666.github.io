document$.subscribe(({ body }) => { 
  renderMathInElement(body, {
    delimiters: [
      { left: "$$",  right: "$$",  display: true },
      { left: "$",   right: "$",   display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: false }
    ],
    trust: true,  // ✅ 允许 amsmath 扩展
    macros: {
      "\\eqref": "\\href{#1}{}",  // 可选：修复 \eqref 支持
    },
    strict: false,  // ✅ 避免 KaTeX 报错
    throwOnError: false  // ✅ 静默错误
  })
})