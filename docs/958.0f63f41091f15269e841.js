(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[958],{71407:e=>{e.exports=function(e){const n=e.regex,a={$pattern:/[\w.\/]+/,built_in:["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},t=/\[\]|\[[^\]]+\]/,s=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,i=n.either(/""|"[^"]+"/,/''|'[^']+'/,t,s),l=n.concat(n.optional(/\.|\.\/|\//),i,n.anyNumberOfTimes(n.concat(/(\.|\/)/,i))),r=n.concat("(",t,"|",s,")(?==)"),c={begin:l},o=e.inherit(c,{keywords:{$pattern:/[\w.\/]+/,literal:["true","false","undefined","null"]}}),m={begin:/\(/,end:/\)/},d={className:"attr",begin:r,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,o,m]}}},g={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},d,o,m],returnEnd:!0},b=e.inherit(c,{className:"name",keywords:a,starts:e.inherit(g,{end:/\)/})});m.contains=[b];const u=e.inherit(c,{keywords:a,className:"name",starts:e.inherit(g,{end:/\}\}/})}),h=e.inherit(c,{keywords:a,className:"name"}),p=e.inherit(c,{className:"name",keywords:a,starts:e.inherit(g,{end:/\}\}/})});return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[u],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[h]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[u]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[h]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[p]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[p]}]}}}}]);
//# sourceMappingURL=958.0f63f41091f15269e841.js.map