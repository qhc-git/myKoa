export default {
  // 单引号
  singleQuote: true,
  // 语句末尾添加分号
  semi: true,
  // jsx中也是用单引号
  jsxSingleQuote: true,
  // 避免箭头函数参数的括号
  arrowParens: 'avoid',
  // pls refer to prettier official doc
  proseWrap: 'preserve',
  // html及vue模板中一行一个属性
  singleAttributePerLine: true,
  // 不理会html中的空格
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: ['*.html'],
      options: {
        printWidth: 400,
      },
    },
  ],
};
