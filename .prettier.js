/*
 * @Author: yu li
 * @Date: 2022-06-11 13:33:37
 * @LastEditTime: 2022-06-11 15:09:40
 * @LastEditors: yu li
 * @FilePath: /my-vue-app/.prettier.js
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */

module.exports = {
  "printWidth": 80,                 // 单行最大字符数
  "tabWidth": 2,                    // 缩进的大小
  "useTabs": false,                 // 是否使用tab缩进
  "semi": true,                     // 语句末尾添加分号                   
  "singleQuote": false,             // 使用单引号还是双引号
  "quoteProps": "as-needed",        // 对象属性是否使用引号
  "jsxSingleQuote": false,          // jsx语法使用单引号还是双引号
  "trailingComma": "es5",           // 数组或对象最后一个元素是否添加逗号
  "bracketSpacing": true,           // 括号内部是否添加空格
  "bracketSameLine": false,         // 标签结束符>是否与元素属性同一行
  "arrowParens": "always",          // 箭头函数参数是否需要括号
  "requirePragma": false,           // 如果为true,有@format标记才格式化
  "insertPragma": false,            // 多用于命令行,给文件添加@format标记
  "proseWrap": "preserve",          // 处理markdown文本
  "htmlWhitespaceSensitivity": "css", // 限制html的多个空格
  "vueIndentScriptAndStyle": false, // vue的script和style的缩进
  "endOfLine": "auto",              // 文件行尾标志,默认是lf
  "embeddedLanguageFormatting": "auto", // 格式化嵌入文件的代码块
  "overrides": [     // 针对特定的文件,采用特定的格式化规则
    {
      "files": ["*.json5"],   // 必须
      "excludeFiles": [],     // 可选
      "options": {
        "singleQuote": false,
        "quoteProps": "preserve"
      }
    },
    {
      "files": ["*.ya?ml"],
      "options": {
        "singleQuote": false
      }
    }
  ]
}

