(self.webpackJsonp=self.webpackJsonp||[]).push([[44],{2219:function(t,e,o){"use strict";(function(t){const n=o(451),s="win32"===t.platform,{REGEX_BACKSLASH:u,REGEX_REMOVE_BACKSLASH:a,REGEX_SPECIAL_CHARS:p,REGEX_SPECIAL_CHARS_GLOBAL:r}=o(2220);e.isObject=t=>null!==t&&"object"==typeof t&&!Array.isArray(t),e.hasRegexChars=t=>p.test(t),e.isRegexChar=t=>1===t.length&&e.hasRegexChars(t),e.escapeRegex=t=>t.replace(r,"\\$1"),e.toPosixSlashes=t=>t.replace(u,"/"),e.removeBackslashes=t=>t.replace(a,t=>"\\"===t?"":t),e.supportsLookbehinds=()=>{const e=t.version.slice(1).split(".").map(Number);return 3===e.length&&e[0]>=9||8===e[0]&&e[1]>=10},e.isWindows=t=>t&&"boolean"==typeof t.windows?t.windows:!0===s||"\\"===n.sep,e.escapeLast=(t,o,n)=>{const s=t.lastIndexOf(o,n);return-1===s?t:"\\"===t[s-1]?e.escapeLast(t,o,s-1):`${t.slice(0,s)}\\${t.slice(s)}`},e.removePrefix=(t,e={})=>{let o=t;return o.startsWith("./")&&(o=o.slice(2),e.prefix="./"),o},e.wrapOutput=(t,e={},o={})=>{let n=`${o.contains?"":"^"}(?:${t})${o.contains?"":"$"}`;return!0===e.negated&&(n=`(?:^(?!${n}).*$)`),n}}).call(this,o(57))},2220:function(t,e,o){"use strict";const n=o(451),s={DOT_LITERAL:"\\.",PLUS_LITERAL:"\\+",QMARK_LITERAL:"\\?",SLASH_LITERAL:"\\/",ONE_CHAR:"(?=.)",QMARK:"[^/]",END_ANCHOR:"(?:\\/|$)",DOTS_SLASH:"\\.{1,2}(?:\\/|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|\\/)\\.{1,2}(?:\\/|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:\\/|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:\\/|$))",QMARK_NO_DOT:"[^.\\/]",STAR:"[^/]*?",START_ANCHOR:"(?:^|\\/)"},u={...s,SLASH_LITERAL:"[\\\\/]",QMARK:"[^\\\\/]",STAR:"[^\\\\/]*?",DOTS_SLASH:"\\.{1,2}(?:[\\\\/]|$)",NO_DOT:"(?!\\.)",NO_DOTS:"(?!(?:^|[\\\\/])\\.{1,2}(?:[\\\\/]|$))",NO_DOT_SLASH:"(?!\\.{0,1}(?:[\\\\/]|$))",NO_DOTS_SLASH:"(?!\\.{1,2}(?:[\\\\/]|$))",QMARK_NO_DOT:"[^.\\\\/]",START_ANCHOR:"(?:^|[\\\\/])",END_ANCHOR:"(?:[\\\\/]|$)"};t.exports={MAX_LENGTH:65536,POSIX_REGEX_SOURCE:{alnum:"a-zA-Z0-9",alpha:"a-zA-Z",ascii:"\\x00-\\x7F",blank:" \\t",cntrl:"\\x00-\\x1F\\x7F",digit:"0-9",graph:"\\x21-\\x7E",lower:"a-z",print:"\\x20-\\x7E ",punct:"\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",space:" \\t\\r\\n\\v\\f",upper:"A-Z",word:"A-Za-z0-9_",xdigit:"A-Fa-f0-9"},REGEX_BACKSLASH:/\\(?![*+?^${}(|)[\]])/g,REGEX_NON_SPECIAL_CHARS:/^[^@![\].,$*+?^{}()|\\/]+/,REGEX_SPECIAL_CHARS:/[-*+?.^${}(|)[\]]/,REGEX_SPECIAL_CHARS_BACKREF:/(\\?)((\W)(\3*))/g,REGEX_SPECIAL_CHARS_GLOBAL:/([-*+?.^${}(|)[\]])/g,REGEX_REMOVE_BACKSLASH:/(?:\[.*?[^\\]\]|\\(?=.))/g,REPLACEMENTS:{"***":"*","**/**":"**","**/**/**":"**"},CHAR_0:48,CHAR_9:57,CHAR_UPPERCASE_A:65,CHAR_LOWERCASE_A:97,CHAR_UPPERCASE_Z:90,CHAR_LOWERCASE_Z:122,CHAR_LEFT_PARENTHESES:40,CHAR_RIGHT_PARENTHESES:41,CHAR_ASTERISK:42,CHAR_AMPERSAND:38,CHAR_AT:64,CHAR_BACKWARD_SLASH:92,CHAR_CARRIAGE_RETURN:13,CHAR_CIRCUMFLEX_ACCENT:94,CHAR_COLON:58,CHAR_COMMA:44,CHAR_DOT:46,CHAR_DOUBLE_QUOTE:34,CHAR_EQUAL:61,CHAR_EXCLAMATION_MARK:33,CHAR_FORM_FEED:12,CHAR_FORWARD_SLASH:47,CHAR_GRAVE_ACCENT:96,CHAR_HASH:35,CHAR_HYPHEN_MINUS:45,CHAR_LEFT_ANGLE_BRACKET:60,CHAR_LEFT_CURLY_BRACE:123,CHAR_LEFT_SQUARE_BRACKET:91,CHAR_LINE_FEED:10,CHAR_NO_BREAK_SPACE:160,CHAR_PERCENT:37,CHAR_PLUS:43,CHAR_QUESTION_MARK:63,CHAR_RIGHT_ANGLE_BRACKET:62,CHAR_RIGHT_CURLY_BRACE:125,CHAR_RIGHT_SQUARE_BRACKET:93,CHAR_SEMICOLON:59,CHAR_SINGLE_QUOTE:39,CHAR_SPACE:32,CHAR_TAB:9,CHAR_UNDERSCORE:95,CHAR_VERTICAL_LINE:124,CHAR_ZERO_WIDTH_NOBREAK_SPACE:65279,SEP:n.sep,extglobChars:t=>({"!":{type:"negate",open:"(?:(?!(?:",close:`))${t.STAR})`},"?":{type:"qmark",open:"(?:",close:")?"},"+":{type:"plus",open:"(?:",close:")+"},"*":{type:"star",open:"(?:",close:")*"},"@":{type:"at",open:"(?:",close:")"}}),globChars:t=>!0===t?u:s}},2633:function(t,e,o){"use strict";t.exports=o(2634)},2634:function(t,e,o){"use strict";const n=o(451),s=o(2635),u=o(2636),a=o(2219),p=o(2220),r=(t,e,o=!1)=>{if(Array.isArray(t)){const n=t.map(t=>r(t,e,o));return t=>{for(const e of n){const o=e(t);if(o)return o}return!1}}const n=(s=t)&&"object"==typeof s&&!Array.isArray(s)&&t.tokens&&t.input;var s;if(""===t||"string"!=typeof t&&!n)throw new TypeError("Expected pattern to be a non-empty string");const u=e||{},p=a.isWindows(e),i=n?r.compileRe(t,e):r.makeRe(t,e,!1,!0),c=i.state;delete i.state;let l=()=>!1;if(u.ignore){const t={...e,ignore:null,onMatch:null,onResult:null};l=r(u.ignore,t,o)}const A=(o,n=!1)=>{const{isMatch:s,match:a,output:A}=r.test(o,i,e,{glob:t,posix:p}),R={glob:t,state:c,regex:i,posix:p,input:o,output:A,match:a,isMatch:s};return"function"==typeof u.onResult&&u.onResult(R),!1===s?(R.isMatch=!1,!!n&&R):l(o)?("function"==typeof u.onIgnore&&u.onIgnore(R),R.isMatch=!1,!!n&&R):("function"==typeof u.onMatch&&u.onMatch(R),!n||R)};return o&&(A.state=c),A};r.test=(t,e,o,{glob:n,posix:s}={})=>{if("string"!=typeof t)throw new TypeError("Expected input to be a string");if(""===t)return{isMatch:!1,output:""};const u=o||{},p=u.format||(s?a.toPosixSlashes:null);let i=t===n,c=i&&p?p(t):t;return!1===i&&(c=p?p(t):t,i=c===n),!1!==i&&!0!==u.capture||(i=!0===u.matchBase||!0===u.basename?r.matchBase(t,e,o,s):e.exec(c)),{isMatch:Boolean(i),match:i,output:c}},r.matchBase=(t,e,o,s=a.isWindows(o))=>(e instanceof RegExp?e:r.makeRe(e,o)).test(n.basename(t)),r.isMatch=(t,e,o)=>r(e,o)(t),r.parse=(t,e)=>Array.isArray(t)?t.map(t=>r.parse(t,e)):u(t,{...e,fastpaths:!1}),r.scan=(t,e)=>s(t,e),r.compileRe=(t,e,o=!1,n=!1)=>{if(!0===o)return t.output;const s=e||{},u=s.contains?"":"^",a=s.contains?"":"$";let p=`${u}(?:${t.output})${a}`;t&&!0===t.negated&&(p=`^(?!${p}).*$`);const i=r.toRegex(p,e);return!0===n&&(i.state=t),i},r.makeRe=(t,e={},o=!1,n=!1)=>{if(!t||"string"!=typeof t)throw new TypeError("Expected a non-empty string");let s={negated:!1,fastpaths:!0};return!1===e.fastpaths||"."!==t[0]&&"*"!==t[0]||(s.output=u.fastpaths(t,e)),s.output||(s=u(t,e)),r.compileRe(s,e,o,n)},r.toRegex=(t,e)=>{try{const o=e||{};return new RegExp(t,o.flags||(o.nocase?"i":""))}catch(t){if(e&&!0===e.debug)throw t;return/$^/}},r.constants=p,t.exports=r},2635:function(t,e,o){"use strict";const n=o(2219),{CHAR_ASTERISK:s,CHAR_AT:u,CHAR_BACKWARD_SLASH:a,CHAR_COMMA:p,CHAR_DOT:r,CHAR_EXCLAMATION_MARK:i,CHAR_FORWARD_SLASH:c,CHAR_LEFT_CURLY_BRACE:l,CHAR_LEFT_PARENTHESES:A,CHAR_LEFT_SQUARE_BRACKET:R,CHAR_PLUS:f,CHAR_QUESTION_MARK:_,CHAR_RIGHT_CURLY_BRACE:E,CHAR_RIGHT_PARENTHESES:h,CHAR_RIGHT_SQUARE_BRACKET:g}=o(2220),b=t=>t===c||t===a,C=t=>{!0!==t.isPrefix&&(t.depth=t.isGlobstar?1/0:1)};t.exports=(t,e)=>{const o=e||{},y=t.length-1,S=!0===o.parts||!0===o.scanToEnd,x=[],H=[],v=[];let $,d,L=t,T=-1,O=0,k=0,m=!1,N=!1,I=!1,w=!1,B=!1,G=!1,D=!1,M=!1,P=!1,K=!1,U=0,X={value:"",depth:0,isGlob:!1};const F=()=>T>=y,Q=()=>($=d,L.charCodeAt(++T));for(;T<y;){let t;if(d=Q(),d!==a){if(!0===G||d===l){for(U++;!0!==F()&&(d=Q());)if(d!==a)if(d!==l){if(!0!==G&&d===r&&(d=Q())===r){if(m=X.isBrace=!0,I=X.isGlob=!0,K=!0,!0===S)continue;break}if(!0!==G&&d===p){if(m=X.isBrace=!0,I=X.isGlob=!0,K=!0,!0===S)continue;break}if(d===E&&(U--,0===U)){G=!1,m=X.isBrace=!0,K=!0;break}}else U++;else D=X.backslashes=!0,Q();if(!0===S)continue;break}if(d!==c){if(!0!==o.noext){if(!0===(d===f||d===u||d===s||d===_||d===i)&&L.charCodeAt(T+1)===A){if(I=X.isGlob=!0,w=X.isExtglob=!0,K=!0,d===i&&T===O&&(P=!0),!0===S){for(;!0!==F()&&(d=Q());)if(d!==a){if(d===h){I=X.isGlob=!0,K=!0;break}}else D=X.backslashes=!0,d=Q();continue}break}}if(d===s){if($===s&&(B=X.isGlobstar=!0),I=X.isGlob=!0,K=!0,!0===S)continue;break}if(d===_){if(I=X.isGlob=!0,K=!0,!0===S)continue;break}if(d===R){for(;!0!==F()&&(t=Q());)if(t!==a){if(t===g){N=X.isBracket=!0,I=X.isGlob=!0,K=!0;break}}else D=X.backslashes=!0,Q();if(!0===S)continue;break}if(!0===o.nonegate||d!==i||T!==O){if(!0!==o.noparen&&d===A){if(I=X.isGlob=!0,!0===S){for(;!0!==F()&&(d=Q());)if(d!==A){if(d===h){K=!0;break}}else D=X.backslashes=!0,d=Q();continue}break}if(!0===I){if(K=!0,!0===S)continue;break}}else M=X.negated=!0,O++}else{if(x.push(T),H.push(X),X={value:"",depth:0,isGlob:!1},!0===K)continue;if($===r&&T===O+1){O+=2;continue}k=T+1}}else D=X.backslashes=!0,d=Q(),d===l&&(G=!0)}!0===o.noext&&(w=!1,I=!1);let W=L,q="",Z="";O>0&&(q=L.slice(0,O),L=L.slice(O),k-=O),W&&!0===I&&k>0?(W=L.slice(0,k),Z=L.slice(k)):!0===I?(W="",Z=L):W=L,W&&""!==W&&"/"!==W&&W!==L&&b(W.charCodeAt(W.length-1))&&(W=W.slice(0,-1)),!0===o.unescape&&(Z&&(Z=n.removeBackslashes(Z)),W&&!0===D&&(W=n.removeBackslashes(W)));const j={prefix:q,input:t,start:O,base:W,glob:Z,isBrace:m,isBracket:N,isGlob:I,isExtglob:w,isGlobstar:B,negated:M,negatedExtglob:P};if(!0===o.tokens&&(j.maxDepth=0,b(d)||H.push(X),j.tokens=H),!0===o.parts||!0===o.tokens){let e;for(let n=0;n<x.length;n++){const s=e?e+1:O,u=x[n],a=t.slice(s,u);o.tokens&&(0===n&&0!==O?(H[n].isPrefix=!0,H[n].value=q):H[n].value=a,C(H[n]),j.maxDepth+=H[n].depth),0===n&&""===a||v.push(a),e=u}if(e&&e+1<t.length){const n=t.slice(e+1);v.push(n),o.tokens&&(H[H.length-1].value=n,C(H[H.length-1]),j.maxDepth+=H[H.length-1].depth)}j.slashes=x,j.parts=v}return j}},2636:function(t,e,o){"use strict";const n=o(2220),s=o(2219),{MAX_LENGTH:u,POSIX_REGEX_SOURCE:a,REGEX_NON_SPECIAL_CHARS:p,REGEX_SPECIAL_CHARS_BACKREF:r,REPLACEMENTS:i}=n,c=(t,e)=>{if("function"==typeof e.expandRange)return e.expandRange(...t,e);t.sort();const o=`[${t.join("-")}]`;try{new RegExp(o)}catch(e){return t.map(t=>s.escapeRegex(t)).join("..")}return o},l=(t,e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`,A=(t,e)=>{if("string"!=typeof t)throw new TypeError("Expected a string");t=i[t]||t;const o={...e},R="number"==typeof o.maxLength?Math.min(u,o.maxLength):u;let f=t.length;if(f>R)throw new SyntaxError(`Input length: ${f}, exceeds maximum allowed length: ${R}`);const _={type:"bos",value:"",output:o.prepend||""},E=[_],h=o.capture?"":"?:",g=s.isWindows(e),b=n.globChars(g),C=n.extglobChars(b),{DOT_LITERAL:y,PLUS_LITERAL:S,SLASH_LITERAL:x,ONE_CHAR:H,DOTS_SLASH:v,NO_DOT:$,NO_DOT_SLASH:d,NO_DOTS_SLASH:L,QMARK:T,QMARK_NO_DOT:O,STAR:k,START_ANCHOR:m}=b,N=t=>`(${h}(?:(?!${m}${t.dot?v:y}).)*?)`,I=o.dot?"":$,w=o.dot?T:O;let B=!0===o.bash?N(o):k;o.capture&&(B=`(${B})`),"boolean"==typeof o.noext&&(o.noextglob=o.noext);const G={input:t,index:-1,start:0,dot:!0===o.dot,consumed:"",output:"",prefix:"",backtrack:!1,negated:!1,brackets:0,braces:0,parens:0,quotes:0,globstar:!1,tokens:E};t=s.removePrefix(t,G),f=t.length;const D=[],M=[],P=[];let K,U=_;const X=()=>G.index===f-1,F=G.peek=(e=1)=>t[G.index+e],Q=G.advance=()=>t[++G.index]||"",W=()=>t.slice(G.index+1),q=(t="",e=0)=>{G.consumed+=t,G.index+=e},Z=t=>{G.output+=null!=t.output?t.output:t.value,q(t.value)},j=()=>{let t=1;for(;"!"===F()&&("("!==F(2)||"?"===F(3));)Q(),G.start++,t++;return t%2!=0&&(G.negated=!0,G.start++,!0)},Y=t=>{G[t]++,P.push(t)},z=t=>{G[t]--,P.pop()},V=t=>{if("globstar"===U.type){const e=G.braces>0&&("comma"===t.type||"brace"===t.type),o=!0===t.extglob||D.length&&("pipe"===t.type||"paren"===t.type);"slash"===t.type||"paren"===t.type||e||o||(G.output=G.output.slice(0,-U.output.length),U.type="star",U.value="*",U.output=B,G.output+=U.output)}if(D.length&&"paren"!==t.type&&(D[D.length-1].inner+=t.value),(t.value||t.output)&&Z(t),U&&"text"===U.type&&"text"===t.type)return U.value+=t.value,void(U.output=(U.output||"")+t.value);t.prev=U,E.push(t),U=t},J=(t,e)=>{const n={...C[e],conditions:1,inner:""};n.prev=U,n.parens=G.parens,n.output=G.output;const s=(o.capture?"(":"")+n.open;Y("parens"),V({type:t,value:e,output:G.output?"":H}),V({type:"paren",extglob:!0,value:Q(),output:s}),D.push(n)},tt=t=>{let n,s=t.close+(o.capture?")":"");if("negate"===t.type){let u=B;if(t.inner&&t.inner.length>1&&t.inner.includes("/")&&(u=N(o)),(u!==B||X()||/^\)+$/.test(W()))&&(s=t.close=")$))"+u),t.inner.includes("*")&&(n=W())&&/^\.[^\\/.]+$/.test(n)){const o=A(n,{...e,fastpaths:!1}).output;s=t.close=`)${o})${u})`}"bos"===t.prev.type&&(G.negatedExtglob=!0)}V({type:"paren",extglob:!0,value:K,output:s}),z("parens")};if(!1!==o.fastpaths&&!/(^[*!]|[/()[\]{}"])/.test(t)){let n=!1,u=t.replace(r,(t,e,o,s,u,a)=>"\\"===s?(n=!0,t):"?"===s?e?e+s+(u?T.repeat(u.length):""):0===a?w+(u?T.repeat(u.length):""):T.repeat(o.length):"."===s?y.repeat(o.length):"*"===s?e?e+s+(u?B:""):B:e?t:"\\"+t);return!0===n&&(u=!0===o.unescape?u.replace(/\\/g,""):u.replace(/\\+/g,t=>t.length%2==0?"\\\\":t?"\\":"")),u===t&&!0===o.contains?(G.output=t,G):(G.output=s.wrapOutput(u,G,e),G)}for(;!X();){if(K=Q(),"\0"===K)continue;if("\\"===K){const t=F();if("/"===t&&!0!==o.bash)continue;if("."===t||";"===t)continue;if(!t){K+="\\",V({type:"text",value:K});continue}const e=/^\\+/.exec(W());let n=0;if(e&&e[0].length>2&&(n=e[0].length,G.index+=n,n%2!=0&&(K+="\\")),!0===o.unescape?K=Q():K+=Q(),0===G.brackets){V({type:"text",value:K});continue}}if(G.brackets>0&&("]"!==K||"["===U.value||"[^"===U.value)){if(!1!==o.posix&&":"===K){const t=U.value.slice(1);if(t.includes("[")&&(U.posix=!0,t.includes(":"))){const t=U.value.lastIndexOf("["),e=U.value.slice(0,t),o=U.value.slice(t+2),n=a[o];if(n){U.value=e+n,G.backtrack=!0,Q(),_.output||1!==E.indexOf(U)||(_.output=H);continue}}}("["===K&&":"!==F()||"-"===K&&"]"===F())&&(K="\\"+K),"]"!==K||"["!==U.value&&"[^"!==U.value||(K="\\"+K),!0===o.posix&&"!"===K&&"["===U.value&&(K="^"),U.value+=K,Z({value:K});continue}if(1===G.quotes&&'"'!==K){K=s.escapeRegex(K),U.value+=K,Z({value:K});continue}if('"'===K){G.quotes=1===G.quotes?0:1,!0===o.keepQuotes&&V({type:"text",value:K});continue}if("("===K){Y("parens"),V({type:"paren",value:K});continue}if(")"===K){if(0===G.parens&&!0===o.strictBrackets)throw new SyntaxError(l("opening","("));const t=D[D.length-1];if(t&&G.parens===t.parens+1){tt(D.pop());continue}V({type:"paren",value:K,output:G.parens?")":"\\)"}),z("parens");continue}if("["===K){if(!0!==o.nobracket&&W().includes("]"))Y("brackets");else{if(!0!==o.nobracket&&!0===o.strictBrackets)throw new SyntaxError(l("closing","]"));K="\\"+K}V({type:"bracket",value:K});continue}if("]"===K){if(!0===o.nobracket||U&&"bracket"===U.type&&1===U.value.length){V({type:"text",value:K,output:"\\"+K});continue}if(0===G.brackets){if(!0===o.strictBrackets)throw new SyntaxError(l("opening","["));V({type:"text",value:K,output:"\\"+K});continue}z("brackets");const t=U.value.slice(1);if(!0===U.posix||"^"!==t[0]||t.includes("/")||(K="/"+K),U.value+=K,Z({value:K}),!1===o.literalBrackets||s.hasRegexChars(t))continue;const e=s.escapeRegex(U.value);if(G.output=G.output.slice(0,-U.value.length),!0===o.literalBrackets){G.output+=e,U.value=e;continue}U.value=`(${h}${e}|${U.value})`,G.output+=U.value;continue}if("{"===K&&!0!==o.nobrace){Y("braces");const t={type:"brace",value:K,output:"(",outputIndex:G.output.length,tokensIndex:G.tokens.length};M.push(t),V(t);continue}if("}"===K){const t=M[M.length-1];if(!0===o.nobrace||!t){V({type:"text",value:K,output:K});continue}let e=")";if(!0===t.dots){const t=E.slice(),n=[];for(let e=t.length-1;e>=0&&(E.pop(),"brace"!==t[e].type);e--)"dots"!==t[e].type&&n.unshift(t[e].value);e=c(n,o),G.backtrack=!0}if(!0!==t.comma&&!0!==t.dots){const o=G.output.slice(0,t.outputIndex),n=G.tokens.slice(t.tokensIndex);t.value=t.output="\\{",K=e="\\}",G.output=o;for(const t of n)G.output+=t.output||t.value}V({type:"brace",value:K,output:e}),z("braces"),M.pop();continue}if("|"===K){D.length>0&&D[D.length-1].conditions++,V({type:"text",value:K});continue}if(","===K){let t=K;const e=M[M.length-1];e&&"braces"===P[P.length-1]&&(e.comma=!0,t="|"),V({type:"comma",value:K,output:t});continue}if("/"===K){if("dot"===U.type&&G.index===G.start+1){G.start=G.index+1,G.consumed="",G.output="",E.pop(),U=_;continue}V({type:"slash",value:K,output:x});continue}if("."===K){if(G.braces>0&&"dot"===U.type){"."===U.value&&(U.output=y);const t=M[M.length-1];U.type="dots",U.output+=K,U.value+=K,t.dots=!0;continue}if(G.braces+G.parens===0&&"bos"!==U.type&&"slash"!==U.type){V({type:"text",value:K,output:y});continue}V({type:"dot",value:K,output:y});continue}if("?"===K){if(!(U&&"("===U.value)&&!0!==o.noextglob&&"("===F()&&"?"!==F(2)){J("qmark",K);continue}if(U&&"paren"===U.type){const t=F();let e=K;if("<"===t&&!s.supportsLookbehinds())throw new Error("Node.js v10 or higher is required for regex lookbehinds");("("===U.value&&!/[!=<:]/.test(t)||"<"===t&&!/<([!=]|\w+>)/.test(W()))&&(e="\\"+K),V({type:"text",value:K,output:e});continue}if(!0!==o.dot&&("slash"===U.type||"bos"===U.type)){V({type:"qmark",value:K,output:O});continue}V({type:"qmark",value:K,output:T});continue}if("!"===K){if(!0!==o.noextglob&&"("===F()&&("?"!==F(2)||!/[!=<:]/.test(F(3)))){J("negate",K);continue}if(!0!==o.nonegate&&0===G.index){j();continue}}if("+"===K){if(!0!==o.noextglob&&"("===F()&&"?"!==F(2)){J("plus",K);continue}if(U&&"("===U.value||!1===o.regex){V({type:"plus",value:K,output:S});continue}if(U&&("bracket"===U.type||"paren"===U.type||"brace"===U.type)||G.parens>0){V({type:"plus",value:K});continue}V({type:"plus",value:S});continue}if("@"===K){if(!0!==o.noextglob&&"("===F()&&"?"!==F(2)){V({type:"at",extglob:!0,value:K,output:""});continue}V({type:"text",value:K});continue}if("*"!==K){"$"!==K&&"^"!==K||(K="\\"+K);const t=p.exec(W());t&&(K+=t[0],G.index+=t[0].length),V({type:"text",value:K});continue}if(U&&("globstar"===U.type||!0===U.star)){U.type="star",U.star=!0,U.value+=K,U.output=B,G.backtrack=!0,G.globstar=!0,q(K);continue}let e=W();if(!0!==o.noextglob&&/^\([^?]/.test(e)){J("star",K);continue}if("star"===U.type){if(!0===o.noglobstar){q(K);continue}const n=U.prev,s=n.prev,u="slash"===n.type||"bos"===n.type,a=s&&("star"===s.type||"globstar"===s.type);if(!0===o.bash&&(!u||e[0]&&"/"!==e[0])){V({type:"star",value:K,output:""});continue}const p=G.braces>0&&("comma"===n.type||"brace"===n.type),r=D.length&&("pipe"===n.type||"paren"===n.type);if(!u&&"paren"!==n.type&&!p&&!r){V({type:"star",value:K,output:""});continue}for(;"/**"===e.slice(0,3);){const o=t[G.index+4];if(o&&"/"!==o)break;e=e.slice(3),q("/**",3)}if("bos"===n.type&&X()){U.type="globstar",U.value+=K,U.output=N(o),G.output=U.output,G.globstar=!0,q(K);continue}if("slash"===n.type&&"bos"!==n.prev.type&&!a&&X()){G.output=G.output.slice(0,-(n.output+U.output).length),n.output="(?:"+n.output,U.type="globstar",U.output=N(o)+(o.strictSlashes?")":"|$)"),U.value+=K,G.globstar=!0,G.output+=n.output+U.output,q(K);continue}if("slash"===n.type&&"bos"!==n.prev.type&&"/"===e[0]){const t=void 0!==e[1]?"|$":"";G.output=G.output.slice(0,-(n.output+U.output).length),n.output="(?:"+n.output,U.type="globstar",U.output=`${N(o)}${x}|${x}${t})`,U.value+=K,G.output+=n.output+U.output,G.globstar=!0,q(K+Q()),V({type:"slash",value:"/",output:""});continue}if("bos"===n.type&&"/"===e[0]){U.type="globstar",U.value+=K,U.output=`(?:^|${x}|${N(o)}${x})`,G.output=U.output,G.globstar=!0,q(K+Q()),V({type:"slash",value:"/",output:""});continue}G.output=G.output.slice(0,-U.output.length),U.type="globstar",U.output=N(o),U.value+=K,G.output+=U.output,G.globstar=!0,q(K);continue}const n={type:"star",value:K,output:B};!0!==o.bash?!U||"bracket"!==U.type&&"paren"!==U.type||!0!==o.regex?(G.index!==G.start&&"slash"!==U.type&&"dot"!==U.type||("dot"===U.type?(G.output+=d,U.output+=d):!0===o.dot?(G.output+=L,U.output+=L):(G.output+=I,U.output+=I),"*"!==F()&&(G.output+=H,U.output+=H)),V(n)):(n.output=K,V(n)):(n.output=".*?","bos"!==U.type&&"slash"!==U.type||(n.output=I+n.output),V(n))}for(;G.brackets>0;){if(!0===o.strictBrackets)throw new SyntaxError(l("closing","]"));G.output=s.escapeLast(G.output,"["),z("brackets")}for(;G.parens>0;){if(!0===o.strictBrackets)throw new SyntaxError(l("closing",")"));G.output=s.escapeLast(G.output,"("),z("parens")}for(;G.braces>0;){if(!0===o.strictBrackets)throw new SyntaxError(l("closing","}"));G.output=s.escapeLast(G.output,"{"),z("braces")}if(!0===o.strictSlashes||"star"!==U.type&&"bracket"!==U.type||V({type:"maybe_slash",value:"",output:x+"?"}),!0===G.backtrack){G.output="";for(const t of G.tokens)G.output+=null!=t.output?t.output:t.value,t.suffix&&(G.output+=t.suffix)}return G};A.fastpaths=(t,e)=>{const o={...e},a="number"==typeof o.maxLength?Math.min(u,o.maxLength):u,p=t.length;if(p>a)throw new SyntaxError(`Input length: ${p}, exceeds maximum allowed length: ${a}`);t=i[t]||t;const r=s.isWindows(e),{DOT_LITERAL:c,SLASH_LITERAL:l,ONE_CHAR:A,DOTS_SLASH:R,NO_DOT:f,NO_DOTS:_,NO_DOTS_SLASH:E,STAR:h,START_ANCHOR:g}=n.globChars(r),b=o.dot?_:f,C=o.dot?E:f,y=o.capture?"":"?:";let S=!0===o.bash?".*?":h;o.capture&&(S=`(${S})`);const x=t=>!0===t.noglobstar?S:`(${y}(?:(?!${g}${t.dot?R:c}).)*?)`,H=t=>{switch(t){case"*":return`${b}${A}${S}`;case".*":return`${c}${A}${S}`;case"*.*":return`${b}${S}${c}${A}${S}`;case"*/*":return`${b}${S}${l}${A}${C}${S}`;case"**":return b+x(o);case"**/*":return`(?:${b}${x(o)}${l})?${C}${A}${S}`;case"**/*.*":return`(?:${b}${x(o)}${l})?${C}${S}${c}${A}${S}`;case"**/.*":return`(?:${b}${x(o)}${l})?${c}${A}${S}`;default:{const e=/^(.*?)\.(\w+)$/.exec(t);if(!e)return;const o=H(e[1]);if(!o)return;return o+c+e[2]}}},v=s.removePrefix(t,{negated:!1,prefix:""});let $=H(v);return $&&!0!==o.strictSlashes&&($+=l+"?"),$},t.exports=A}}]);