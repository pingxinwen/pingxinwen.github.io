import{g as t,j as e}from"./vendor.def5c386.js";function o(s={}){const{wrapper:c}=Object.assign({},t(),s.components);return c?e.exports.jsx(c,Object.assign({},s,{children:e.exports.jsx(r,{})})):r();function r(){const n=Object.assign({h1:"h1",p:"p",blockquote:"blockquote",a:"a",h2:"h2",code:"code",pre:"pre"},t(),s.components);return e.exports.jsxs(e.exports.Fragment,{children:[e.exports.jsx(n.h1,{children:"Webpack\u5B66\u4E60\u603B\u7ED31 - \u5982\u4F55\u4F7F\u7528webpack\u6253\u5305/\u542F\u52A8devServe"}),`
`,e.exports.jsx(n.p,{children:"\u4ECA\u5929\u5728\u4F5C\u4E1A\u4E2D\u4F7F\u7528\u4E86webpack\u6765\u6253\u5305\u524D\u7AEF\u9879\u76EE\uFF0C\u5B66\u4E60\u4E86\u5982\u4F55\u4F7F\u7528webpack\u8FDB\u884C\u6253\u5305\u9879\u76EE\u3001\u8FD0\u884Cdev serve\u3002\u8FD9\u91CC\u603B\u7ED3\u4E00\u4E0B\u81EA\u5DF1\u7684\u5B66\u4E60\u6210\u679C\u3002"}),`
`,e.exports.jsxs(n.blockquote,{children:[`
`,e.exports.jsxs(n.p,{children:["\u672C\u6587\u7AE0\u4F7F\u7528\u7684\u4EE3\u7801\u53EF\u89C1github\uFF1A",e.exports.jsx(n.a,{href:"https://github.com/pingxinwen/myHomework/tree/master/%E5%89%8D%E7%AB%AF%E4%BD%9C%E4%B8%9A/work5",children:"\u9879\u76EE\u5730\u5740"})]}),`
`]}),`
`,e.exports.jsx(n.h2,{children:"\u521B\u5EFA\u524D\u7AEF\u9879\u76EE"}),`
`,e.exports.jsxs(n.p,{children:["\u9996\u5148\u9700\u8981\u5B89\u88C5Node.js\u548Cnpm\uFF08\u5E9F\u8BDD\uFF09\uFF0C\u7136\u540E\u521B\u5EFA",e.exports.jsx(n.code,{children:"package.json"}),"\uFF0C\u53EF\u4EE5\u4F7F\u7528",e.exports.jsx(n.code,{children:"npm init"}),"\u6765\u521B\u5EFA\u6587\u4EF6\uFF0Cnpm\u4F1A\u8BE2\u95EE\u9879\u76EE\u7684\u8BBE\u7F6E\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u4EFF\u7167\u4F7F\u7528vue-cli\u7B49\u811A\u624B\u67B6\u7684package.json\u6587\u4EF6\u81EA\u5DF1\u624B\u5199\u4E00\u4E2Apackage\u3002\u7136\u540E\u6211\u4EEC\u9700\u8981\u5B89\u88C5\u4EE5\u4E0B\u4F9D\u8D56\uFF1A",e.exports.jsx(n.code,{children:"webpack"}),"\u3001",e.exports.jsx(n.code,{children:"webpack-cli"}),"\u3001",e.exports.jsx(n.code,{children:"webpack-dev-server"})]}),`
`,e.exports.jsx(n.h2,{children:"\u8BBE\u7F6Enpm script"}),`
`,e.exports.jsxs(n.p,{children:["\u4E4B\u524D\u5199\u8FC7Vue\u3001React\u9879\u76EE\uFF0C\u542F\u52A8\u9879\u76EE\u90FD\u662F",e.exports.jsx(n.code,{children:"npm run start"}),"\uFF0C\u8FD9\u91CC\u662F\u8BA9npm\u6267\u884C\u5199\u5728package.json\u6587\u4EF6\u91CC\u8BBE\u7F6E\u597D\u7684\u547D\u4EE4\uFF0Cnpm\u81EA\u8EAB\u662F\u4E0D\u5305\u542B",e.exports.jsx(n.code,{children:"start"}),"\u7684\u5185\u5BB9\u7684\uFF0C\u56E0\u6B64\u9700\u8981\u5728\u6587\u4EF6\u91CC\u53BB\u5199\u547D\u4EE4\u3002"]}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-json",children:`{
  //...
  "scripts": {
    "dev": "webpack server --config webpack.config.js",
    "build": "webpack  --config webpack.config.js"
  }
  //...
}
`})}),`
`,e.exports.jsx(n.p,{children:"\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528\u4E865.0\u4EE5\u4E0A\u7684webpack\uFF0C\u4F7F\u7528webpack server\u7684\u547D\u4EE4\u4E0E\u4E4B\u524D\u4E0D\u540C\u4E86\uFF0C\u7F51\u4E0A\u8FD8\u6709\u5F88\u591A\u57FA\u4E8E\u4EE5\u524D\u7248\u672C\u7684\u6559\u7A0B\uFF0C\u6700\u597D\u8FD8\u662F\u53BB\u770B\u5B98\u7F51\u6587\u6863\u3002"}),`
`,e.exports.jsxs(n.p,{children:["\u8FD9\u91CC\u7F16\u5199\u4E86\u4E24\u4E2A\u547D\u4EE4\uFF1A\u4E00\u4E2A\u662Fdev\uFF0C\u7528\u6765\u5F00\u53D1\u65F6\u8FD0\u884C\u672C\u5730\u670D\u52A1\uFF0C\u9884\u89C8\u81EA\u5DF1\u7684\u4FEE\u6539\uFF0C\u4E00\u4E2A\u662F\u6253\u5305\u6210\u6587\u4EF6\uFF0C\u7136\u540E\u90E8\u7F72\u5728\u4E13\u7528\u7684\u670D\u52A1\u5668\u4E0A\u3002\u4E24\u4E2A\u547D\u4EE4\u90FD\u63D0\u4F9B\u4E86\u76F8\u540C\u7684\u53C2\u6570",e.exports.jsx(n.code,{children:"--config webpack.config.js"}),"\uFF0C\u8868\u793A\u6253\u5305\u7684\u914D\u7F6E\u6587\u4EF6\u4E3Awebpack.config.js\uFF0C\u4F7F\u7528webpack\u7684\u91CD\u70B9\u5C31\u662F\u53BB\u7F16\u5199webpack.config.js\u6587\u4EF6\u3002"]}),`
`,e.exports.jsx(n.h2,{children:"\u7F16\u5199webpack\u914D\u7F6E"}),`
`,e.exports.jsxs(n.p,{children:["webpack\u4E3B\u8981\u6709\u56DB\u5927\u6982\u5FF5\uFF1A\u5165\u53E3\u3001\u51FA\u53E3\u3001loader\u3001\u63D2\u4EF6\u3002\u5165\u53E3",e.exports.jsx(n.code,{children:"entry"}),"\u662F\u6253\u5305\u7684\u8D77\u70B9\uFF0Cwebpack\u4F1A\u89E3\u6790\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u5982\u679C\u8FD9\u4E2A\u6587\u4EF6\u6709\u4F9D\u8D56\u5219\u4F1A\u628A\u5B83\u4EEC\u52A0\u8F7D\u8FDB\u6765\u3002\u4ECE\u5165\u53E3\u5F00\u59CBwebpack\u4F1A\u7ED8\u5236\u4F9D\u8D56\u5173\u7CFB\u56FE\uFF0C\u6700\u7EC8\u628A\u9700\u8981\u7684\u6587\u4EF6\u5168\u90E8\u8054\u7CFB\u5728\u4E00\u8D77\u3002\u800C\u51FA\u53E3",e.exports.jsx(n.code,{children:"output"}),"\u5219\u662F\u6253\u5305\u7684\u7ED3\u679C\uFF0Cwebpack\u4F1A\u628A\u6574\u4E2A\u9879\u76EE\u91CD\u65B0\u7F16\u8BD1\uFF0C\u6784\u5EFA\u6210\u4E00\u4E2Ajs\u6587\u4EF6\uFF08\u5F53\u7136\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u8BA9\u4ED6\u8F93\u51FA\u591A\u4E2A\u6587\u4EF6\uFF09\u3002\u800Cloader\u548C\u63D2\u4EF6\u5219\u662F\u6269\u5C55\u4E86webpack\u7684\u89E3\u6790\u529F\u80FD\uFF0Cwebpack\u81EA\u8EAB\u53EA\u80FD\u89E3\u6790js\u548Cjson\uFF0C\u63D0\u4F9Bloader\u548C\u63D2\u4EF6\u53EF\u4EE5\u8BA9\u5B83\u89E3\u6790\u66F4\u591A\u6587\u4EF6\uFF0C\u5B9E\u73B0\u66F4\u591A\u529F\u80FD\u3002"]}),`
`,e.exports.jsx(n.p,{children:"\u8FD9\u91CC\u91C7\u7528\u7684\u9879\u76EE\u4E3B\u8981\u662F\u4E09\u4E2A\u6587\u4EF6\uFF1Acalc.html\uFF0Ccalc.css\uFF0Ccalc.js\uFF0C\u653E\u5728\u9879\u76EE\u7684src\u76EE\u5F55\u4E0B\u3002\u4E4B\u524D\u662F\u6309\u9759\u6001\u6587\u4EF6\u7684\u601D\u8DEF\uFF0C\u5728html\u6587\u4EF6\u91CC\u53BB\u5F15\u7528css\u548Cjs\uFF08link\u548Cscript\u6807\u7B7E\uFF09\uFF0C\u8FD9\u91CC\u9700\u8981\u7528webpack\u6253\u5305\u6587\u4EF6\uFF0C\u53EF\u4EE5\u5C06js\u6587\u4EF6\u4F5C\u4E3A\u6211\u4EEC\u7684\u5165\u53E3\u53BB\u6253\u5305\u6240\u6709\u5F15\u7528\u7684\u6587\u4EF6\u3002\u4F8B\u5982\u4E4B\u524D\u4F7F\u7528Vue\uFF0Cmain.js\u5C31\u662F\u6253\u5305\u7684\u5165\u53E3\u3002\u7531\u6B64\u53EF\u4EE5\u8BBE\u8BA1webpack.config.sj\u6587\u4EF6\u3002"}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-js",children:`const path = require('path');  //Node\u6A21\u5757

module.exports = {
    mode: "production",
    entry: './src/calc.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
    },
    devServer: {
        host: "127.0.0.1",
        port: "8081",
    }
  //...
}
`})}),`
`,e.exports.jsx(n.p,{children:"\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u6253\u5305\u7684\u5165\u53E3\u662F./src/calc.js\uFF0C\u7136\u540Eoutput\u4F1A\u5728dist\u76EE\u5F55\u4E0B\uFF0C\u8F93\u51FA\u6587\u4EF6\u4E3Abundle.js\u3002\u5982\u679C\u53EA\u5E0C\u671B\u6253\u5305js\u6587\u4EF6\uFF0C\u90A3\u4E48\u5B8C\u5168\u53EF\u4EE5\u628Ahtml\u5F15\u7528\u7684js\u6362\u6210bundle.js\u5373\u53EF\u3002\u4F46\u662F\u6211\u4EEC\u7684\u76EE\u6807\u662F\u5C3D\u53EF\u80FD\u7684\u6253\u6210\u4E00\u4E2A\u6587\u4EF6\uFF0C\u6216\u8005\u8BF4\u53EA\u6709\u4E24\u4E2A\u6587\u4EF6\uFF1Aindex.html\u548Cbundle.js\u3002\u6B64\u5916\u6211\u4EEC\u8BBE\u7F6E\u4E86devServer\u4E3A127.0.0.1:8081\uFF0C\u4F46\u662F\u542F\u52A8\u4E4B\u540E\u6253\u5F00\u7F51\u5740\uFF0C\u5E76\u6CA1\u6709html\u800C\u662F\u663E\u793A\u9879\u76EE\u76EE\u5F55\uFF0C\u8FD9\u8BF4\u660Ewebpack\u5E76\u6CA1\u6709\u6309\u671F\u671B\u53BB\u89E3\u6790calc.html\u3002\u6211\u4EEC\u9700\u8981\u5B89\u88C5html\u63D2\u4EF6\uFF1A"}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-shell",children:`npm install html-webpack-plugin
`})}),`
`,e.exports.jsx(n.p,{children:"package.json\u5C31\u4F1A\u51FA\u73B0\u8FD9\u4E2A\u4F9D\u8D56\u3002\u518D\u4FEE\u6539webpack\u914D\u7F6E\uFF1A"}),`
`,e.exports.jsx(n.pre,{children:e.exports.jsx(n.code,{className:"language-js",children:`const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //\u5F15\u7528\u63D2\u4EF6

module.exports = {
    mode: "production",
    entry: './src/calc.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",
    },
    devServer: {
        host: "127.0.0.1",
        port: "8081",
    },
    plugins:[
        new HtmlWebpackPlugin ({
            template:'src/calc.html',  //\u6A21\u7248html
            filename:"index.html"      //\u6253\u5305\u540E\u8F93\u51FA\u7684html
        })
    ],
    module:{
        rules:[
            {
                test:/\\.css$/,  //\u8FD9\u91CC\u662F\u6DFB\u52A0\u4E86\u5BF9CSS\u6587\u4EF6\u7684\u89E3\u6790\uFF0C\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u68C0\u9A8C\u6587\u4EF6\u7C7B\u578B
                use:[
                    'style-loader','css-loader'  //\u8868\u793A\u5BF9.css\u6587\u4EF6\u4F7F\u7528\u8FD9\u4E24\u4E2Aloader\u53BB\u89E3\u6790
                ]
            }
        ]
    }
}
`})}),`
`,e.exports.jsxs(n.p,{children:["\u6267\u884C",e.exports.jsx(n.code,{children:"npm run build"}),"\u547D\u4EE4\u540E\uFF0Cdist\u76EE\u5F55\u5C31\u4F1A\u51FA\u73B0\u4E24\u4E2A\u6587\u4EF6:",e.exports.jsx(n.code,{children:"index.html"}),"\u548C",e.exports.jsx(n.code,{children:"bundle.js"}),"\u3002\u5982\u6CD5\u70AE\u5236\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6DFB\u52A0\u5BF9CSS\u6587\u4EF6\u7684\u4F9D\u8D56\uFF0C\u5148\u7528npm\u5B89\u88C5'style-loader'\uFF0C'css-loader'\uFF0C\u518D\u6DFB\u52A0modlue\u5C5E\u6027\u3002\u4E0D\u8FC7\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u6211\u4EEC\u5E0C\u671Bcss\u6587\u4EF6\u6253\u5305\u5728\u4E00\u8D77\uFF0C\u5E94\u8BE5\u5728js\u6587\u4EF6\u4E2Dimport\u8981\u4F7F\u7528\u7684css\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u5728\u6A21\u7248html\u4E2Dlink\u8FDB\u53BB\u3002\u6700\u540E\u6253\u5305\u7684",e.exports.jsx(n.code,{children:"index.html"}),"\u4E2D\uFF0Chead\u91CC\u4F1A\u6709\u5BF9\u5E94\u6587\u4EF6\u7684style\u6807\u7B7E\u5185\u5BB9\u3002"]}),`
`,e.exports.jsx(n.p,{children:"\u7531\u6B64\u7ED3\u5408\u4E4B\u524D\u5199\u8FC7\u7684Vue\u3001React\u9879\u76EE\uFF0C\u5C31\u4E0D\u96BE\u7406\u89E3\u5982\u4F55\u5229\u7528webpack\u6253\u5305\u4E86\u3002"})]})}}export{o as default};
