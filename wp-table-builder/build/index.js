/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js ***!
  \**********************************************************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }),

/***/ "../../node_modules/.pnpm/nanoid@3.3.11/node_modules/nanoid/non-secure/index.cjs":
/*!***************************************************************************************!*\
  !*** ../../node_modules/.pnpm/nanoid@3.3.11/node_modules/nanoid/non-secure/index.cjs ***!
  \***************************************************************************************/
/***/ ((module) => {

// This alphabet uses `A-Za-z0-9_-` symbols.
// The order of characters is optimized for better gzip and brotli compression.
// References to the same file (works both for gzip and brotli):
// `'use`, `andom`, and `rict'`
// References to the brotli default dictionary:
// `-26T`, `1983`, `40px`, `75px`, `bush`, `jack`, `mind`, `very`, and `wolf`
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = ''
    // A compact alternative for `for (var i = 0; i < step; i++)`.
    let i = size | 0
    while (i--) {
      // `| 0` is more compact and faster than `Math.floor()`.
      id += alphabet[(Math.random() * alphabet.length) | 0]
    }
    return id
  }
}

let nanoid = (size = 21) => {
  let id = ''
  // A compact alternative for `for (var i = 0; i < step; i++)`.
  let i = size | 0
  while (i--) {
    // `| 0` is more compact and faster than `Math.floor()`.
    id += urlAlphabet[(Math.random() * 64) | 0]
  }
  return id
}

module.exports = { nanoid, customAlphabet }


/***/ }),

/***/ "../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js":
/*!***********************************************************************************************!*\
  !*** ../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js ***!
  \***********************************************************************************************/
/***/ ((module) => {

var x=String;
var create=function() {return {isColorSupported:false,reset:x,bold:x,dim:x,italic:x,underline:x,inverse:x,hidden:x,strikethrough:x,black:x,red:x,green:x,yellow:x,blue:x,magenta:x,cyan:x,white:x,gray:x,bgBlack:x,bgRed:x,bgGreen:x,bgYellow:x,bgBlue:x,bgMagenta:x,bgCyan:x,bgWhite:x,blackBright:x,redBright:x,greenBright:x,yellowBright:x,blueBright:x,magentaBright:x,cyanBright:x,whiteBright:x,bgBlackBright:x,bgRedBright:x,bgGreenBright:x,bgYellowBright:x,bgBlueBright:x,bgMagentaBright:x,bgCyanBright:x,bgWhiteBright:x}};
module.exports=create();
module.exports.createColors = create;


/***/ }),

/***/ "../../node_modules/.pnpm/postcss-safe-parser@7.0.1_postcss@8.5.14/node_modules/postcss-safe-parser/lib/safe-parse.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss-safe-parser@7.0.1_postcss@8.5.14/node_modules/postcss-safe-parser/lib/safe-parse.js ***!
  \****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let { Input } = __webpack_require__(/*! postcss */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/postcss.js")

let SafeParser = __webpack_require__(/*! ./safe-parser */ "../../node_modules/.pnpm/postcss-safe-parser@7.0.1_postcss@8.5.14/node_modules/postcss-safe-parser/lib/safe-parser.js")

module.exports = function safeParse(css, opts) {
  let input = new Input(css, opts)

  let parser = new SafeParser(input)
  parser.parse()

  return parser.root
}


/***/ }),

/***/ "../../node_modules/.pnpm/postcss-safe-parser@7.0.1_postcss@8.5.14/node_modules/postcss-safe-parser/lib/safe-parser.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss-safe-parser@7.0.1_postcss@8.5.14/node_modules/postcss-safe-parser/lib/safe-parser.js ***!
  \*****************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let Comment = __webpack_require__(/*! postcss/lib/comment */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/comment.js")
let Parser = __webpack_require__(/*! postcss/lib/parser */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parser.js")
let tokenizer = __webpack_require__(/*! postcss/lib/tokenize */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/tokenize.js")

class SafeParser extends Parser {
  checkMissedSemicolon() {}

  comment(token) {
    let node = new Comment()
    this.init(node, token[2])
    let pos =
      this.input.fromOffset(token[3]) ||
      this.input.fromOffset(this.input.css.length - 1)
    node.source.end = {
      column: pos.col,
      line: pos.line,
      offset: token[3] + 1
    }

    let text = token[1].slice(2)
    if (text.slice(-2) === '*/') text = text.slice(0, -2)

    if (/^\s*$/.test(text)) {
      node.text = ''
      node.raws.left = text
      node.raws.right = ''
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/)
      node.text = match[2]
      node.raws.left = match[1]
      node.raws.right = match[3]
    }
  }

  createTokenizer() {
    this.tokenizer = tokenizer(this.input, { ignoreErrors: true })
  }

  decl(tokens) {
    if (tokens.length > 1 && tokens.some(i => i[0] === 'word')) {
      super.decl(tokens)
    }
  }

  doubleColon() {}

  endFile() {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.current.raws.after = (this.current.raws.after || '') + this.spaces

    while (this.current.parent) {
      this.current = this.current.parent
      this.current.raws.after = ''
    }
    this.root.source.end = this.getPosition(this.tokenizer.position())
  }

  precheckMissedSemicolon(tokens) {
    let colon = this.colon(tokens)
    if (colon === false) return

    let nextStart, prevEnd
    for (nextStart = colon - 1; nextStart >= 0; nextStart--) {
      if (tokens[nextStart][0] === 'word') break
    }
    if (nextStart === 0 || nextStart < 0) return

    for (prevEnd = nextStart - 1; prevEnd >= 0; prevEnd--) {
      if (tokens[prevEnd][0] !== 'space') {
        prevEnd += 1
        break
      }
    }

    let other = tokens.slice(nextStart)
    let spaces = tokens.slice(prevEnd, nextStart)
    tokens.splice(prevEnd, tokens.length - prevEnd)
    this.spaces = spaces.map(i => i[1]).join('')

    this.decl(other)
  }

  unclosedBracket() {}

  unexpectedClose() {
    this.current.raws.after += '}'
  }

  unknownWord(tokens) {
    this.spaces += tokens.map(i => i[1]).join('')
  }

  unnamedAtrule(node) {
    node.name = ''
  }
}

module.exports = SafeParser


/***/ }),

/***/ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/index.js":
/*!**********************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/index.js ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var parse = __webpack_require__(/*! ./parse */ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/parse.js");
var walk = __webpack_require__(/*! ./walk */ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/walk.js");
var stringify = __webpack_require__(/*! ./stringify */ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/stringify.js");

function ValueParser(value) {
  if (this instanceof ValueParser) {
    this.nodes = parse(value);
    return this;
  }
  return new ValueParser(value);
}

ValueParser.prototype.toString = function() {
  return Array.isArray(this.nodes) ? stringify(this.nodes) : "";
};

ValueParser.prototype.walk = function(cb, bubble) {
  walk(this.nodes, cb, bubble);
  return this;
};

ValueParser.unit = __webpack_require__(/*! ./unit */ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/unit.js");

ValueParser.walk = walk;

ValueParser.stringify = stringify;

module.exports = ValueParser;


/***/ }),

/***/ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/parse.js":
/*!**********************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/parse.js ***!
  \**********************************************************************************************************/
/***/ ((module) => {

var openParentheses = "(".charCodeAt(0);
var closeParentheses = ")".charCodeAt(0);
var singleQuote = "'".charCodeAt(0);
var doubleQuote = '"'.charCodeAt(0);
var backslash = "\\".charCodeAt(0);
var slash = "/".charCodeAt(0);
var comma = ",".charCodeAt(0);
var colon = ":".charCodeAt(0);
var star = "*".charCodeAt(0);
var uLower = "u".charCodeAt(0);
var uUpper = "U".charCodeAt(0);
var plus = "+".charCodeAt(0);
var isUnicodeRange = /^[a-f0-9?-]+$/i;

module.exports = function(input) {
  var tokens = [];
  var value = input;

  var next,
    quote,
    prev,
    token,
    escape,
    escapePos,
    whitespacePos,
    parenthesesOpenPos;
  var pos = 0;
  var code = value.charCodeAt(pos);
  var max = value.length;
  var stack = [{ nodes: tokens }];
  var balanced = 0;
  var parent;

  var name = "";
  var before = "";
  var after = "";

  while (pos < max) {
    // Whitespaces
    if (code <= 32) {
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      token = value.slice(pos, next);

      prev = tokens[tokens.length - 1];
      if (code === closeParentheses && balanced) {
        after = token;
      } else if (prev && prev.type === "div") {
        prev.after = token;
        prev.sourceEndIndex += token.length;
      } else if (
        code === comma ||
        code === colon ||
        (code === slash &&
          value.charCodeAt(next + 1) !== star &&
          (!parent ||
            (parent && parent.type === "function" && parent.value !== "calc")))
      ) {
        before = token;
      } else {
        tokens.push({
          type: "space",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      }

      pos = next;

      // Quotes
    } else if (code === singleQuote || code === doubleQuote) {
      next = pos;
      quote = code === singleQuote ? "'" : '"';
      token = {
        type: "string",
        sourceIndex: pos,
        quote: quote
      };
      do {
        escape = false;
        next = value.indexOf(quote, next + 1);
        if (~next) {
          escapePos = next;
          while (value.charCodeAt(escapePos - 1) === backslash) {
            escapePos -= 1;
            escape = !escape;
          }
        } else {
          value += quote;
          next = value.length - 1;
          token.unclosed = true;
        }
      } while (escape);
      token.value = value.slice(pos + 1, next);
      token.sourceEndIndex = token.unclosed ? next : next + 1;
      tokens.push(token);
      pos = next + 1;
      code = value.charCodeAt(pos);

      // Comments
    } else if (code === slash && value.charCodeAt(pos + 1) === star) {
      next = value.indexOf("*/", pos);

      token = {
        type: "comment",
        sourceIndex: pos,
        sourceEndIndex: next + 2
      };

      if (next === -1) {
        token.unclosed = true;
        next = value.length;
        token.sourceEndIndex = next;
      }

      token.value = value.slice(pos + 2, next);
      tokens.push(token);

      pos = next + 2;
      code = value.charCodeAt(pos);

      // Operation within calc
    } else if (
      (code === slash || code === star) &&
      parent &&
      parent.type === "function" &&
      parent.value === "calc"
    ) {
      token = value[pos];
      tokens.push({
        type: "word",
        sourceIndex: pos - before.length,
        sourceEndIndex: pos + token.length,
        value: token
      });
      pos += 1;
      code = value.charCodeAt(pos);

      // Dividers
    } else if (code === slash || code === comma || code === colon) {
      token = value[pos];

      tokens.push({
        type: "div",
        sourceIndex: pos - before.length,
        sourceEndIndex: pos + token.length,
        value: token,
        before: before,
        after: ""
      });
      before = "";

      pos += 1;
      code = value.charCodeAt(pos);

      // Open parentheses
    } else if (openParentheses === code) {
      // Whitespaces after open parentheses
      next = pos;
      do {
        next += 1;
        code = value.charCodeAt(next);
      } while (code <= 32);
      parenthesesOpenPos = pos;
      token = {
        type: "function",
        sourceIndex: pos - name.length,
        value: name,
        before: value.slice(parenthesesOpenPos + 1, next)
      };
      pos = next;

      if (name === "url" && code !== singleQuote && code !== doubleQuote) {
        next -= 1;
        do {
          escape = false;
          next = value.indexOf(")", next + 1);
          if (~next) {
            escapePos = next;
            while (value.charCodeAt(escapePos - 1) === backslash) {
              escapePos -= 1;
              escape = !escape;
            }
          } else {
            value += ")";
            next = value.length - 1;
            token.unclosed = true;
          }
        } while (escape);
        // Whitespaces before closed
        whitespacePos = next;
        do {
          whitespacePos -= 1;
          code = value.charCodeAt(whitespacePos);
        } while (code <= 32);
        if (parenthesesOpenPos < whitespacePos) {
          if (pos !== whitespacePos + 1) {
            token.nodes = [
              {
                type: "word",
                sourceIndex: pos,
                sourceEndIndex: whitespacePos + 1,
                value: value.slice(pos, whitespacePos + 1)
              }
            ];
          } else {
            token.nodes = [];
          }
          if (token.unclosed && whitespacePos + 1 !== next) {
            token.after = "";
            token.nodes.push({
              type: "space",
              sourceIndex: whitespacePos + 1,
              sourceEndIndex: next,
              value: value.slice(whitespacePos + 1, next)
            });
          } else {
            token.after = value.slice(whitespacePos + 1, next);
            token.sourceEndIndex = next;
          }
        } else {
          token.after = "";
          token.nodes = [];
        }
        pos = next + 1;
        token.sourceEndIndex = token.unclosed ? next : pos;
        code = value.charCodeAt(pos);
        tokens.push(token);
      } else {
        balanced += 1;
        token.after = "";
        token.sourceEndIndex = pos + 1;
        tokens.push(token);
        stack.push(token);
        tokens = token.nodes = [];
        parent = token;
      }
      name = "";

      // Close parentheses
    } else if (closeParentheses === code && balanced) {
      pos += 1;
      code = value.charCodeAt(pos);

      parent.after = after;
      parent.sourceEndIndex += after.length;
      after = "";
      balanced -= 1;
      stack[stack.length - 1].sourceEndIndex = pos;
      stack.pop();
      parent = stack[balanced];
      tokens = parent.nodes;

      // Words
    } else {
      next = pos;
      do {
        if (code === backslash) {
          next += 1;
        }
        next += 1;
        code = value.charCodeAt(next);
      } while (
        next < max &&
        !(
          code <= 32 ||
          code === singleQuote ||
          code === doubleQuote ||
          code === comma ||
          code === colon ||
          code === slash ||
          code === openParentheses ||
          (code === star &&
            parent &&
            parent.type === "function" &&
            parent.value === "calc") ||
          (code === slash &&
            parent.type === "function" &&
            parent.value === "calc") ||
          (code === closeParentheses && balanced)
        )
      );
      token = value.slice(pos, next);

      if (openParentheses === code) {
        name = token;
      } else if (
        (uLower === token.charCodeAt(0) || uUpper === token.charCodeAt(0)) &&
        plus === token.charCodeAt(1) &&
        isUnicodeRange.test(token.slice(2))
      ) {
        tokens.push({
          type: "unicode-range",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      } else {
        tokens.push({
          type: "word",
          sourceIndex: pos,
          sourceEndIndex: next,
          value: token
        });
      }

      pos = next;
    }
  }

  for (pos = stack.length - 1; pos; pos -= 1) {
    stack[pos].unclosed = true;
    stack[pos].sourceEndIndex = value.length;
  }

  return stack[0].nodes;
};


/***/ }),

/***/ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/stringify.js":
/*!**************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/stringify.js ***!
  \**************************************************************************************************************/
/***/ ((module) => {

function stringifyNode(node, custom) {
  var type = node.type;
  var value = node.value;
  var buf;
  var customResult;

  if (custom && (customResult = custom(node)) !== undefined) {
    return customResult;
  } else if (type === "word" || type === "space") {
    return value;
  } else if (type === "string") {
    buf = node.quote || "";
    return buf + value + (node.unclosed ? "" : buf);
  } else if (type === "comment") {
    return "/*" + value + (node.unclosed ? "" : "*/");
  } else if (type === "div") {
    return (node.before || "") + value + (node.after || "");
  } else if (Array.isArray(node.nodes)) {
    buf = stringify(node.nodes, custom);
    if (type !== "function") {
      return buf;
    }
    return (
      value +
      "(" +
      (node.before || "") +
      buf +
      (node.after || "") +
      (node.unclosed ? "" : ")")
    );
  }
  return value;
}

function stringify(nodes, custom) {
  var result, i;

  if (Array.isArray(nodes)) {
    result = "";
    for (i = nodes.length - 1; ~i; i -= 1) {
      result = stringifyNode(nodes[i], custom) + result;
    }
    return result;
  }
  return stringifyNode(nodes, custom);
}

module.exports = stringify;


/***/ }),

/***/ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/unit.js":
/*!*********************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/unit.js ***!
  \*********************************************************************************************************/
/***/ ((module) => {

var minus = "-".charCodeAt(0);
var plus = "+".charCodeAt(0);
var dot = ".".charCodeAt(0);
var exp = "e".charCodeAt(0);
var EXP = "E".charCodeAt(0);

// Check if three code points would start a number
// https://www.w3.org/TR/css-syntax-3/#starts-with-a-number
function likeNumber(value) {
  var code = value.charCodeAt(0);
  var nextCode;

  if (code === plus || code === minus) {
    nextCode = value.charCodeAt(1);

    if (nextCode >= 48 && nextCode <= 57) {
      return true;
    }

    var nextNextCode = value.charCodeAt(2);

    if (nextCode === dot && nextNextCode >= 48 && nextNextCode <= 57) {
      return true;
    }

    return false;
  }

  if (code === dot) {
    nextCode = value.charCodeAt(1);

    if (nextCode >= 48 && nextCode <= 57) {
      return true;
    }

    return false;
  }

  if (code >= 48 && code <= 57) {
    return true;
  }

  return false;
}

// Consume a number
// https://www.w3.org/TR/css-syntax-3/#consume-number
module.exports = function(value) {
  var pos = 0;
  var length = value.length;
  var code;
  var nextCode;
  var nextNextCode;

  if (length === 0 || !likeNumber(value)) {
    return false;
  }

  code = value.charCodeAt(pos);

  if (code === plus || code === minus) {
    pos++;
  }

  while (pos < length) {
    code = value.charCodeAt(pos);

    if (code < 48 || code > 57) {
      break;
    }

    pos += 1;
  }

  code = value.charCodeAt(pos);
  nextCode = value.charCodeAt(pos + 1);

  if (code === dot && nextCode >= 48 && nextCode <= 57) {
    pos += 2;

    while (pos < length) {
      code = value.charCodeAt(pos);

      if (code < 48 || code > 57) {
        break;
      }

      pos += 1;
    }
  }

  code = value.charCodeAt(pos);
  nextCode = value.charCodeAt(pos + 1);
  nextNextCode = value.charCodeAt(pos + 2);

  if (
    (code === exp || code === EXP) &&
    ((nextCode >= 48 && nextCode <= 57) ||
      ((nextCode === plus || nextCode === minus) &&
        nextNextCode >= 48 &&
        nextNextCode <= 57))
  ) {
    pos += nextCode === plus || nextCode === minus ? 3 : 2;

    while (pos < length) {
      code = value.charCodeAt(pos);

      if (code < 48 || code > 57) {
        break;
      }

      pos += 1;
    }
  }

  return {
    number: value.slice(0, pos),
    unit: value.slice(pos)
  };
};


/***/ }),

/***/ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/walk.js":
/*!*********************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/walk.js ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = function walk(nodes, cb, bubble) {
  var i, max, node, result;

  for (i = 0, max = nodes.length; i < max; i += 1) {
    node = nodes[i];
    if (!bubble) {
      result = cb(node, i, nodes);
    }

    if (
      result !== false &&
      node.type === "function" &&
      Array.isArray(node.nodes)
    ) {
      walk(node.nodes, cb, bubble);
    }

    if (bubble) {
      cb(node, i, nodes);
    }
  }
};


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/at-rule.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/at-rule.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js")

class AtRule extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'atrule'
  }

  append(...children) {
    if (!this.proxyOf.nodes) this.nodes = []
    return super.append(...children)
  }

  prepend(...children) {
    if (!this.proxyOf.nodes) this.nodes = []
    return super.prepend(...children)
  }
}

module.exports = AtRule
AtRule.default = AtRule

Container.registerAtRule(AtRule)


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/comment.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/comment.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Node = __webpack_require__(/*! ./node */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/node.js")

class Comment extends Node {
  constructor(defaults) {
    super(defaults)
    this.type = 'comment'
  }
}

module.exports = Comment
Comment.default = Comment


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Comment = __webpack_require__(/*! ./comment */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/comment.js")
let Declaration = __webpack_require__(/*! ./declaration */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/declaration.js")
let Node = __webpack_require__(/*! ./node */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/node.js")
let { isClean, my } = __webpack_require__(/*! ./symbols */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/symbols.js")

let AtRule, parse, Root, Rule

function cleanSource(nodes) {
  return nodes.map(i => {
    if (i.nodes) i.nodes = cleanSource(i.nodes)
    delete i.source
    return i
  })
}

function markTreeDirty(node) {
  node[isClean] = false
  if (node.proxyOf.nodes) {
    for (let i of node.proxyOf.nodes) {
      markTreeDirty(i)
    }
  }
}

class Container extends Node {
  get first() {
    if (!this.proxyOf.nodes) return undefined
    return this.proxyOf.nodes[0]
  }

  get last() {
    if (!this.proxyOf.nodes) return undefined
    return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
  }

  append(...children) {
    for (let child of children) {
      let nodes = this.normalize(child, this.last)
      for (let node of nodes) this.proxyOf.nodes.push(node)
    }

    this.markDirty()

    return this
  }

  cleanRaws(keepBetween) {
    super.cleanRaws(keepBetween)
    if (this.nodes) {
      for (let node of this.nodes) node.cleanRaws(keepBetween)
    }
  }

  each(callback) {
    if (!this.proxyOf.nodes) return undefined
    let iterator = this.getIterator()

    let index, result
    while (this.indexes[iterator] < this.proxyOf.nodes.length) {
      index = this.indexes[iterator]
      result = callback(this.proxyOf.nodes[index], index)
      if (result === false) break

      this.indexes[iterator] += 1
    }

    delete this.indexes[iterator]
    return result
  }

  every(condition) {
    return this.nodes.every(condition)
  }

  getIterator() {
    if (!this.lastEach) this.lastEach = 0
    if (!this.indexes) this.indexes = {}

    this.lastEach += 1
    let iterator = this.lastEach
    this.indexes[iterator] = 0

    return iterator
  }

  getProxyProcessor() {
    return {
      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (!node[prop]) {
          return node[prop]
        } else if (
          prop === 'each' ||
          (typeof prop === 'string' && prop.startsWith('walk'))
        ) {
          return (...args) => {
            return node[prop](
              ...args.map(i => {
                if (typeof i === 'function') {
                  return (child, index) => i(child.toProxy(), index)
                } else {
                  return i
                }
              })
            )
          }
        } else if (prop === 'every' || prop === 'some') {
          return cb => {
            return node[prop]((child, ...other) =>
              cb(child.toProxy(), ...other)
            )
          }
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else if (prop === 'nodes') {
          return node.nodes.map(i => i.toProxy())
        } else if (prop === 'first' || prop === 'last') {
          return node[prop].toProxy()
        } else {
          return node[prop]
        }
      },

      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (prop === 'name' || prop === 'params' || prop === 'selector') {
          node.markDirty()
        }
        return true
      }
    }
  }

  index(child) {
    if (typeof child === 'number') return child
    if (child.proxyOf) child = child.proxyOf
    return this.proxyOf.nodes.indexOf(child)
  }

  insertAfter(exist, add) {
    let existIndex = this.index(exist)
    let nodes = this.normalize(add, this.proxyOf.nodes[existIndex]).reverse()
    existIndex = this.index(exist)
    for (let node of nodes) this.proxyOf.nodes.splice(existIndex + 1, 0, node)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (existIndex < index) {
        this.indexes[id] = index + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  insertBefore(exist, add) {
    let existIndex = this.index(exist)
    let type = existIndex === 0 ? 'prepend' : false
    let nodes = this.normalize(
      add,
      this.proxyOf.nodes[existIndex],
      type
    ).reverse()
    existIndex = this.index(exist)
    for (let node of nodes) this.proxyOf.nodes.splice(existIndex, 0, node)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (existIndex <= index) {
        this.indexes[id] = index + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  normalize(nodes, sample) {
    if (typeof nodes === 'string') {
      nodes = cleanSource(parse(nodes).nodes)
    } else if (typeof nodes === 'undefined') {
      nodes = []
    } else if (Array.isArray(nodes)) {
      nodes = nodes.slice(0)
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, 'ignore')
      }
    } else if (nodes.type === 'root' && this.type !== 'document') {
      nodes = nodes.nodes.slice(0)
      for (let i of nodes) {
        if (i.parent) i.parent.removeChild(i, 'ignore')
      }
    } else if (nodes.type) {
      nodes = [nodes]
    } else if (nodes.prop) {
      if (typeof nodes.value === 'undefined') {
        throw new Error('Value field is missed in node creation')
      } else if (typeof nodes.value !== 'string') {
        nodes.value = String(nodes.value)
      }
      nodes = [new Declaration(nodes)]
    } else if (nodes.selector || nodes.selectors) {
      nodes = [new Rule(nodes)]
    } else if (nodes.name) {
      nodes = [new AtRule(nodes)]
    } else if (nodes.text) {
      nodes = [new Comment(nodes)]
    } else {
      throw new Error('Unknown node type in node creation')
    }

    let processed = nodes.map(i => {
      /* c8 ignore next */
      if (!i[my]) Container.rebuild(i)
      i = i.proxyOf
      if (i.parent) i.parent.removeChild(i)
      if (i[isClean]) markTreeDirty(i)

      if (!i.raws) i.raws = {}
      if (typeof i.raws.before === 'undefined') {
        if (sample && typeof sample.raws.before !== 'undefined') {
          i.raws.before = sample.raws.before.replace(/\S/g, '')
        }
      }
      i.parent = this.proxyOf
      return i
    })

    return processed
  }

  prepend(...children) {
    children = children.reverse()
    for (let child of children) {
      let nodes = this.normalize(child, this.first, 'prepend').reverse()
      for (let node of nodes) this.proxyOf.nodes.unshift(node)
      for (let id in this.indexes) {
        this.indexes[id] = this.indexes[id] + nodes.length
      }
    }

    this.markDirty()

    return this
  }

  push(child) {
    child.parent = this
    this.proxyOf.nodes.push(child)
    return this
  }

  removeAll() {
    for (let node of this.proxyOf.nodes) node.parent = undefined
    this.proxyOf.nodes = []

    this.markDirty()

    return this
  }

  removeChild(child) {
    child = this.index(child)
    this.proxyOf.nodes[child].parent = undefined
    this.proxyOf.nodes.splice(child, 1)

    let index
    for (let id in this.indexes) {
      index = this.indexes[id]
      if (index >= child) {
        this.indexes[id] = index - 1
      }
    }

    this.markDirty()

    return this
  }

  replaceValues(pattern, opts, callback) {
    if (!callback) {
      callback = opts
      opts = {}
    }

    this.walkDecls(decl => {
      if (opts.props && !opts.props.includes(decl.prop)) return
      if (opts.fast && !decl.value.includes(opts.fast)) return

      decl.value = decl.value.replace(pattern, callback)
    })

    this.markDirty()

    return this
  }

  some(condition) {
    return this.nodes.some(condition)
  }

  walk(callback) {
    return this.each((child, i) => {
      let result
      try {
        result = callback(child, i)
      } catch (e) {
        throw child.addToError(e)
      }
      if (result !== false && child.walk) {
        result = child.walk(callback)
      }

      return result
    })
  }

  walkAtRules(name, callback) {
    if (!callback) {
      callback = name
      return this.walk((child, i) => {
        if (child.type === 'atrule') {
          return callback(child, i)
        }
      })
    }
    if (name instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'atrule' && name.test(child.name)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'atrule' && child.name === name) {
        return callback(child, i)
      }
    })
  }

  walkComments(callback) {
    return this.walk((child, i) => {
      if (child.type === 'comment') {
        return callback(child, i)
      }
    })
  }

  walkDecls(prop, callback) {
    if (!callback) {
      callback = prop
      return this.walk((child, i) => {
        if (child.type === 'decl') {
          return callback(child, i)
        }
      })
    }
    if (prop instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'decl' && prop.test(child.prop)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'decl' && child.prop === prop) {
        return callback(child, i)
      }
    })
  }

  walkRules(selector, callback) {
    if (!callback) {
      callback = selector

      return this.walk((child, i) => {
        if (child.type === 'rule') {
          return callback(child, i)
        }
      })
    }
    if (selector instanceof RegExp) {
      return this.walk((child, i) => {
        if (child.type === 'rule' && selector.test(child.selector)) {
          return callback(child, i)
        }
      })
    }
    return this.walk((child, i) => {
      if (child.type === 'rule' && child.selector === selector) {
        return callback(child, i)
      }
    })
  }
}

Container.registerParse = dependant => {
  parse = dependant
}

Container.registerRule = dependant => {
  Rule = dependant
}

Container.registerAtRule = dependant => {
  AtRule = dependant
}

Container.registerRoot = dependant => {
  Root = dependant
}

module.exports = Container
Container.default = Container

/* c8 ignore start */
Container.rebuild = node => {
  if (node.type === 'atrule') {
    Object.setPrototypeOf(node, AtRule.prototype)
  } else if (node.type === 'rule') {
    Object.setPrototypeOf(node, Rule.prototype)
  } else if (node.type === 'decl') {
    Object.setPrototypeOf(node, Declaration.prototype)
  } else if (node.type === 'comment') {
    Object.setPrototypeOf(node, Comment.prototype)
  } else if (node.type === 'root') {
    Object.setPrototypeOf(node, Root.prototype)
  }

  node[my] = true

  if (node.nodes) {
    node.nodes.forEach(child => {
      Container.rebuild(child)
    })
  }
}
/* c8 ignore stop */


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/css-syntax-error.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/css-syntax-error.js ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let pico = __webpack_require__(/*! picocolors */ "../../node_modules/.pnpm/picocolors@1.1.1/node_modules/picocolors/picocolors.browser.js")

let terminalHighlight = __webpack_require__(/*! ./terminal-highlight */ "?7fe3")

class CssSyntaxError extends Error {
  constructor(message, line, column, source, file, plugin) {
    super(message)
    this.name = 'CssSyntaxError'
    this.reason = message

    if (file) {
      this.file = file
    }
    if (source) {
      this.source = source
    }
    if (plugin) {
      this.plugin = plugin
    }
    if (typeof line !== 'undefined' && typeof column !== 'undefined') {
      if (typeof line === 'number') {
        this.line = line
        this.column = column
      } else {
        this.line = line.line
        this.column = line.column
        this.endLine = column.line
        this.endColumn = column.column
      }
    }

    this.setMessage()

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CssSyntaxError)
    }
  }

  setMessage() {
    this.message = this.plugin ? this.plugin + ': ' : ''
    this.message += this.file ? this.file : '<css input>'
    if (typeof this.line !== 'undefined') {
      this.message += ':' + this.line + ':' + this.column
    }
    this.message += ': ' + this.reason
  }

  showSourceCode(color) {
    if (!this.source) return ''

    let css = this.source
    if (color == null) color = pico.isColorSupported

    let aside = text => text
    let mark = text => text
    let highlight = text => text
    if (color) {
      let { bold, gray, red } = pico.createColors(true)
      mark = text => bold(red(text))
      aside = text => gray(text)
      if (terminalHighlight) {
        highlight = text => terminalHighlight(text)
      }
    }

    let lines = css.split(/\r?\n/)
    let start = Math.max(this.line - 3, 0)
    let end = Math.min(this.line + 2, lines.length)
    let maxWidth = String(end).length

    return lines
      .slice(start, end)
      .map((line, index) => {
        let number = start + 1 + index
        let gutter = ' ' + (' ' + number).slice(-maxWidth) + ' | '
        if (number === this.line) {
          if (line.length > 160) {
            let padding = 20
            let subLineStart = Math.max(0, this.column - padding)
            let subLineEnd = Math.max(
              this.column + padding,
              this.endColumn + padding
            )
            let subLine = line.slice(subLineStart, subLineEnd)

            let spacing =
              aside(gutter.replace(/\d/g, ' ')) +
              line
                .slice(0, Math.min(this.column - 1, padding - 1))
                .replace(/[^\t]/g, ' ')

            return (
              mark('>') +
              aside(gutter) +
              highlight(subLine) +
              '\n ' +
              spacing +
              mark('^')
            )
          }

          let spacing =
            aside(gutter.replace(/\d/g, ' ')) +
            line.slice(0, this.column - 1).replace(/[^\t]/g, ' ')

          return (
            mark('>') +
            aside(gutter) +
            highlight(line) +
            '\n ' +
            spacing +
            mark('^')
          )
        }

        return ' ' + aside(gutter) + highlight(line)
      })
      .join('\n')
  }

  toString() {
    let code = this.showSourceCode()
    if (code) {
      code = '\n\n' + code + '\n'
    }
    return this.name + ': ' + this.message + code
  }
}

module.exports = CssSyntaxError
CssSyntaxError.default = CssSyntaxError


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/declaration.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/declaration.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Node = __webpack_require__(/*! ./node */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/node.js")

class Declaration extends Node {
  get variable() {
    return this.prop.startsWith('--') || this.prop[0] === '$'
  }

  constructor(defaults) {
    if (
      defaults &&
      typeof defaults.value !== 'undefined' &&
      typeof defaults.value !== 'string'
    ) {
      defaults = { ...defaults, value: String(defaults.value) }
    }
    super(defaults)
    this.type = 'decl'
  }
}

module.exports = Declaration
Declaration.default = Declaration


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/document.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/document.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js")

let LazyResult, Processor

class Document extends Container {
  constructor(defaults) {
    // type needs to be passed to super, otherwise child roots won't be normalized correctly
    super({ type: 'document', ...defaults })

    if (!this.nodes) {
      this.nodes = []
    }
  }

  toResult(opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)

    return lazy.stringify()
  }
}

Document.registerLazyResult = dependant => {
  LazyResult = dependant
}

Document.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Document
Document.default = Document


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/fromJSON.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/fromJSON.js ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let AtRule = __webpack_require__(/*! ./at-rule */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/at-rule.js")
let Comment = __webpack_require__(/*! ./comment */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/comment.js")
let Declaration = __webpack_require__(/*! ./declaration */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/declaration.js")
let Input = __webpack_require__(/*! ./input */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/input.js")
let PreviousMap = __webpack_require__(/*! ./previous-map */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/previous-map.js")
let Root = __webpack_require__(/*! ./root */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/root.js")
let Rule = __webpack_require__(/*! ./rule */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/rule.js")

function fromJSON(json, inputs) {
  if (Array.isArray(json)) return json.map(n => fromJSON(n))

  let { inputs: ownInputs, ...defaults } = json
  if (ownInputs) {
    inputs = []
    for (let input of ownInputs) {
      let inputHydrated = { ...input, __proto__: Input.prototype }
      if (inputHydrated.map) {
        inputHydrated.map = {
          ...inputHydrated.map,
          __proto__: PreviousMap.prototype
        }
      }
      inputs.push(inputHydrated)
    }
  }
  if (defaults.nodes) {
    defaults.nodes = json.nodes.map(n => fromJSON(n, inputs))
  }
  if (defaults.source) {
    let { inputId, ...source } = defaults.source
    defaults.source = source
    if (inputId != null) {
      defaults.source.input = inputs[inputId]
    }
  }
  if (defaults.type === 'root') {
    return new Root(defaults)
  } else if (defaults.type === 'decl') {
    return new Declaration(defaults)
  } else if (defaults.type === 'rule') {
    return new Rule(defaults)
  } else if (defaults.type === 'comment') {
    return new Comment(defaults)
  } else if (defaults.type === 'atrule') {
    return new AtRule(defaults)
  } else {
    throw new Error('Unknown node type: ' + json.type)
  }
}

module.exports = fromJSON
fromJSON.default = fromJSON


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/input.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/input.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { nanoid } = __webpack_require__(/*! nanoid/non-secure */ "../../node_modules/.pnpm/nanoid@3.3.11/node_modules/nanoid/non-secure/index.cjs")
let { isAbsolute, resolve } = __webpack_require__(/*! path */ "?4367")
let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?2a84")
let { fileURLToPath, pathToFileURL } = __webpack_require__(/*! url */ "?cecd")

let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/css-syntax-error.js")
let PreviousMap = __webpack_require__(/*! ./previous-map */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/previous-map.js")
let terminalHighlight = __webpack_require__(/*! ./terminal-highlight */ "?7fe3")

let lineToIndexCache = Symbol('lineToIndexCache')

let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator)
let pathAvailable = Boolean(resolve && isAbsolute)

function getLineToIndex(input) {
  if (input[lineToIndexCache]) return input[lineToIndexCache]
  let lines = input.css.split('\n')
  let lineToIndex = new Array(lines.length)
  let prevIndex = 0

  for (let i = 0, l = lines.length; i < l; i++) {
    lineToIndex[i] = prevIndex
    prevIndex += lines[i].length + 1
  }

  input[lineToIndexCache] = lineToIndex
  return lineToIndex
}

class Input {
  get from() {
    return this.file || this.id
  }

  constructor(css, opts = {}) {
    if (
      css === null ||
      typeof css === 'undefined' ||
      (typeof css === 'object' && !css.toString)
    ) {
      throw new Error(`PostCSS received ${css} instead of CSS string`)
    }

    this.css = css.toString()

    if (this.css[0] === '\uFEFF' || this.css[0] === '\uFFFE') {
      this.hasBOM = true
      this.css = this.css.slice(1)
    } else {
      this.hasBOM = false
    }

    this.document = this.css
    if (opts.document) this.document = opts.document.toString()

    if (opts.from) {
      if (
        !pathAvailable ||
        /^\w+:\/\//.test(opts.from) ||
        isAbsolute(opts.from)
      ) {
        this.file = opts.from
      } else {
        this.file = resolve(opts.from)
      }
    }

    if (pathAvailable && sourceMapAvailable) {
      let map = new PreviousMap(this.css, opts)
      if (map.text) {
        this.map = map
        let file = map.consumer().file
        if (!this.file && file) this.file = this.mapResolve(file)
      }
    }

    if (!this.file) {
      this.id = '<input css ' + nanoid(6) + '>'
    }
    if (this.map) this.map.file = this.from
  }

  error(message, line, column, opts = {}) {
    let endColumn, endLine, endOffset, offset, result

    if (line && typeof line === 'object') {
      let start = line
      let end = column
      if (typeof start.offset === 'number') {
        offset = start.offset
        let pos = this.fromOffset(offset)
        line = pos.line
        column = pos.col
      } else {
        line = start.line
        column = start.column
        offset = this.fromLineAndColumn(line, column)
      }
      if (typeof end.offset === 'number') {
        endOffset = end.offset
        let pos = this.fromOffset(endOffset)
        endLine = pos.line
        endColumn = pos.col
      } else {
        endLine = end.line
        endColumn = end.column
        endOffset = this.fromLineAndColumn(end.line, end.column)
      }
    } else if (!column) {
      offset = line
      let pos = this.fromOffset(offset)
      line = pos.line
      column = pos.col
    } else {
      offset = this.fromLineAndColumn(line, column)
    }

    let origin = this.origin(line, column, endLine, endColumn)
    if (origin) {
      result = new CssSyntaxError(
        message,
        origin.endLine === undefined
          ? origin.line
          : { column: origin.column, line: origin.line },
        origin.endLine === undefined
          ? origin.column
          : { column: origin.endColumn, line: origin.endLine },
        origin.source,
        origin.file,
        opts.plugin
      )
    } else {
      result = new CssSyntaxError(
        message,
        endLine === undefined ? line : { column, line },
        endLine === undefined ? column : { column: endColumn, line: endLine },
        this.css,
        this.file,
        opts.plugin
      )
    }

    result.input = {
      column,
      endColumn,
      endLine,
      endOffset,
      line,
      offset,
      source: this.css
    }
    if (this.file) {
      if (pathToFileURL) {
        result.input.url = pathToFileURL(this.file).toString()
      }
      result.input.file = this.file
    }

    return result
  }

  fromLineAndColumn(line, column) {
    let lineToIndex = getLineToIndex(this)
    let index = lineToIndex[line - 1]
    return index + column - 1
  }

  fromOffset(offset) {
    let lineToIndex = getLineToIndex(this)
    let lastLine = lineToIndex[lineToIndex.length - 1]

    let min = 0
    if (offset >= lastLine) {
      min = lineToIndex.length - 1
    } else {
      let max = lineToIndex.length - 2
      let mid
      while (min < max) {
        mid = min + ((max - min) >> 1)
        if (offset < lineToIndex[mid]) {
          max = mid - 1
        } else if (offset >= lineToIndex[mid + 1]) {
          min = mid + 1
        } else {
          min = mid
          break
        }
      }
    }
    return {
      col: offset - lineToIndex[min] + 1,
      line: min + 1
    }
  }

  mapResolve(file) {
    if (/^\w+:\/\//.test(file)) {
      return file
    }
    return resolve(this.map.consumer().sourceRoot || this.map.root || '.', file)
  }

  origin(line, column, endLine, endColumn) {
    if (!this.map) return false
    let consumer = this.map.consumer()

    let from = consumer.originalPositionFor({ column, line })
    if (!from.source) return false

    let to
    if (typeof endLine === 'number') {
      to = consumer.originalPositionFor({ column: endColumn, line: endLine })
    }

    let fromUrl

    if (isAbsolute(from.source)) {
      fromUrl = pathToFileURL(from.source)
    } else {
      fromUrl = new URL(
        from.source,
        this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile)
      )
    }

    let result = {
      column: from.column,
      endColumn: to && to.column,
      endLine: to && to.line,
      line: from.line,
      url: fromUrl.toString()
    }

    if (fromUrl.protocol === 'file:') {
      if (fileURLToPath) {
        result.file = fileURLToPath(fromUrl)
      } else {
        /* c8 ignore next 2 */
        throw new Error(`file: protocol is not available in this PostCSS build`)
      }
    }

    let source = consumer.sourceContentFor(from.source)
    if (source) result.source = source

    return result
  }

  toJSON() {
    let json = {}
    for (let name of ['hasBOM', 'css', 'file', 'id']) {
      if (this[name] != null) {
        json[name] = this[name]
      }
    }
    if (this.map) {
      json.map = { ...this.map }
      if (json.map.consumerCache) {
        json.map.consumerCache = undefined
      }
    }
    return json
  }
}

module.exports = Input
Input.default = Input

if (terminalHighlight && terminalHighlight.registerInput) {
  terminalHighlight.registerInput(Input)
}


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/lazy-result.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/lazy-result.js ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js")
let Document = __webpack_require__(/*! ./document */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/document.js")
let MapGenerator = __webpack_require__(/*! ./map-generator */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/map-generator.js")
let parse = __webpack_require__(/*! ./parse */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parse.js")
let Result = __webpack_require__(/*! ./result */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/result.js")
let Root = __webpack_require__(/*! ./root */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/root.js")
let stringify = __webpack_require__(/*! ./stringify */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringify.js")
let { isClean, my } = __webpack_require__(/*! ./symbols */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/symbols.js")
let warnOnce = __webpack_require__(/*! ./warn-once */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/warn-once.js")

const TYPE_TO_CLASS_NAME = {
  atrule: 'AtRule',
  comment: 'Comment',
  decl: 'Declaration',
  document: 'Document',
  root: 'Root',
  rule: 'Rule'
}

const PLUGIN_PROPS = {
  AtRule: true,
  AtRuleExit: true,
  Comment: true,
  CommentExit: true,
  Declaration: true,
  DeclarationExit: true,
  Document: true,
  DocumentExit: true,
  Once: true,
  OnceExit: true,
  postcssPlugin: true,
  prepare: true,
  Root: true,
  RootExit: true,
  Rule: true,
  RuleExit: true
}

const NOT_VISITORS = {
  Once: true,
  postcssPlugin: true,
  prepare: true
}

const CHILDREN = 0

function isPromise(obj) {
  return typeof obj === 'object' && typeof obj.then === 'function'
}

function getEvents(node) {
  let key = false
  let type = TYPE_TO_CLASS_NAME[node.type]
  if (node.type === 'decl') {
    key = node.prop.toLowerCase()
  } else if (node.type === 'atrule') {
    key = node.name.toLowerCase()
  }

  if (key && node.append) {
    return [
      type,
      type + '-' + key,
      CHILDREN,
      type + 'Exit',
      type + 'Exit-' + key
    ]
  } else if (key) {
    return [type, type + '-' + key, type + 'Exit', type + 'Exit-' + key]
  } else if (node.append) {
    return [type, CHILDREN, type + 'Exit']
  } else {
    return [type, type + 'Exit']
  }
}

function toStack(node) {
  let events
  if (node.type === 'document') {
    events = ['Document', CHILDREN, 'DocumentExit']
  } else if (node.type === 'root') {
    events = ['Root', CHILDREN, 'RootExit']
  } else {
    events = getEvents(node)
  }

  return {
    eventIndex: 0,
    events,
    iterator: 0,
    node,
    visitorIndex: 0,
    visitors: []
  }
}

function cleanMarks(node) {
  node[isClean] = false
  if (node.nodes) node.nodes.forEach(i => cleanMarks(i))
  return node
}

let postcss = {}

class LazyResult {
  get content() {
    return this.stringify().content
  }

  get css() {
    return this.stringify().css
  }

  get map() {
    return this.stringify().map
  }

  get messages() {
    return this.sync().messages
  }

  get opts() {
    return this.result.opts
  }

  get processor() {
    return this.result.processor
  }

  get root() {
    return this.sync().root
  }

  get [Symbol.toStringTag]() {
    return 'LazyResult'
  }

  constructor(processor, css, opts) {
    this.stringified = false
    this.processed = false

    let root
    if (
      typeof css === 'object' &&
      css !== null &&
      (css.type === 'root' || css.type === 'document')
    ) {
      root = cleanMarks(css)
    } else if (css instanceof LazyResult || css instanceof Result) {
      root = cleanMarks(css.root)
      if (css.map) {
        if (typeof opts.map === 'undefined') opts.map = {}
        if (!opts.map.inline) opts.map.inline = false
        opts.map.prev = css.map
      }
    } else {
      let parser = parse
      if (opts.syntax) parser = opts.syntax.parse
      if (opts.parser) parser = opts.parser
      if (parser.parse) parser = parser.parse

      try {
        root = parser(css, opts)
      } catch (error) {
        this.processed = true
        this.error = error
      }

      if (root && !root[my]) {
        /* c8 ignore next 2 */
        Container.rebuild(root)
      }
    }

    this.result = new Result(processor, root, opts)
    this.helpers = { ...postcss, postcss, result: this.result }
    this.plugins = this.processor.plugins.map(plugin => {
      if (typeof plugin === 'object' && plugin.prepare) {
        return { ...plugin, ...plugin.prepare(this.result) }
      } else {
        return plugin
      }
    })
  }

  async() {
    if (this.error) return Promise.reject(this.error)
    if (this.processed) return Promise.resolve(this.result)
    if (!this.processing) {
      this.processing = this.runAsync()
    }
    return this.processing
  }

  catch(onRejected) {
    return this.async().catch(onRejected)
  }

  finally(onFinally) {
    return this.async().then(onFinally, onFinally)
  }

  getAsyncError() {
    throw new Error('Use process(css).then(cb) to work with async plugins')
  }

  handleError(error, node) {
    let plugin = this.result.lastPlugin
    try {
      if (node) node.addToError(error)
      this.error = error
      if (error.name === 'CssSyntaxError' && !error.plugin) {
        error.plugin = plugin.postcssPlugin
        error.setMessage()
      } else if (plugin.postcssVersion) {
        if (true) {
          let pluginName = plugin.postcssPlugin
          let pluginVer = plugin.postcssVersion
          let runtimeVer = this.result.processor.version
          let a = pluginVer.split('.')
          let b = runtimeVer.split('.')

          if (a[0] !== b[0] || parseInt(a[1]) > parseInt(b[1])) {
            // eslint-disable-next-line no-console
            console.error(
              'Unknown error from PostCSS plugin. Your current PostCSS ' +
                'version is ' +
                runtimeVer +
                ', but ' +
                pluginName +
                ' uses ' +
                pluginVer +
                '. Perhaps this is the source of the error below.'
            )
          }
        }
      }
    } catch (err) {
      /* c8 ignore next 3 */
      // eslint-disable-next-line no-console
      if (console && console.error) console.error(err)
    }
    return error
  }

  prepareVisitors() {
    this.listeners = {}
    let add = (plugin, type, cb) => {
      if (!this.listeners[type]) this.listeners[type] = []
      this.listeners[type].push([plugin, cb])
    }
    for (let plugin of this.plugins) {
      if (typeof plugin === 'object') {
        for (let event in plugin) {
          if (!PLUGIN_PROPS[event] && /^[A-Z]/.test(event)) {
            throw new Error(
              `Unknown event ${event} in ${plugin.postcssPlugin}. ` +
                `Try to update PostCSS (${this.processor.version} now).`
            )
          }
          if (!NOT_VISITORS[event]) {
            if (typeof plugin[event] === 'object') {
              for (let filter in plugin[event]) {
                if (filter === '*') {
                  add(plugin, event, plugin[event][filter])
                } else {
                  add(
                    plugin,
                    event + '-' + filter.toLowerCase(),
                    plugin[event][filter]
                  )
                }
              }
            } else if (typeof plugin[event] === 'function') {
              add(plugin, event, plugin[event])
            }
          }
        }
      }
    }
    this.hasListener = Object.keys(this.listeners).length > 0
  }

  async runAsync() {
    this.plugin = 0
    for (let i = 0; i < this.plugins.length; i++) {
      let plugin = this.plugins[i]
      let promise = this.runOnRoot(plugin)
      if (isPromise(promise)) {
        try {
          await promise
        } catch (error) {
          throw this.handleError(error)
        }
      }
    }

    this.prepareVisitors()
    if (this.hasListener) {
      let root = this.result.root
      while (!root[isClean]) {
        root[isClean] = true
        let stack = [toStack(root)]
        while (stack.length > 0) {
          let promise = this.visitTick(stack)
          if (isPromise(promise)) {
            try {
              await promise
            } catch (e) {
              let node = stack[stack.length - 1].node
              throw this.handleError(e, node)
            }
          }
        }
      }

      if (this.listeners.OnceExit) {
        for (let [plugin, visitor] of this.listeners.OnceExit) {
          this.result.lastPlugin = plugin
          try {
            if (root.type === 'document') {
              let roots = root.nodes.map(subRoot =>
                visitor(subRoot, this.helpers)
              )

              await Promise.all(roots)
            } else {
              await visitor(root, this.helpers)
            }
          } catch (e) {
            throw this.handleError(e)
          }
        }
      }
    }

    this.processed = true
    return this.stringify()
  }

  runOnRoot(plugin) {
    this.result.lastPlugin = plugin
    try {
      if (typeof plugin === 'object' && plugin.Once) {
        if (this.result.root.type === 'document') {
          let roots = this.result.root.nodes.map(root =>
            plugin.Once(root, this.helpers)
          )

          if (isPromise(roots[0])) {
            return Promise.all(roots)
          }

          return roots
        }

        return plugin.Once(this.result.root, this.helpers)
      } else if (typeof plugin === 'function') {
        return plugin(this.result.root, this.result)
      }
    } catch (error) {
      throw this.handleError(error)
    }
  }

  stringify() {
    if (this.error) throw this.error
    if (this.stringified) return this.result
    this.stringified = true

    this.sync()

    let opts = this.result.opts
    let str = stringify
    if (opts.syntax) str = opts.syntax.stringify
    if (opts.stringifier) str = opts.stringifier
    if (str.stringify) str = str.stringify

    let rootSource = this.result.root.source
    if (
      opts.map === undefined &&
      !(rootSource && rootSource.input && rootSource.input.map)
    ) {
      let result = ''
      str(this.result.root, i => {
        result += i
      })
      this.result.css = result
      return this.result
    }

    let map = new MapGenerator(str, this.result.root, this.result.opts)
    let data = map.generate()
    this.result.css = data[0]
    this.result.map = data[1]

    return this.result
  }

  sync() {
    if (this.error) throw this.error
    if (this.processed) return this.result
    this.processed = true

    if (this.processing) {
      throw this.getAsyncError()
    }

    for (let plugin of this.plugins) {
      let promise = this.runOnRoot(plugin)
      if (isPromise(promise)) {
        throw this.getAsyncError()
      }
    }

    this.prepareVisitors()
    if (this.hasListener) {
      let root = this.result.root
      while (!root[isClean]) {
        root[isClean] = true
        this.walkSync(root)
      }
      if (this.listeners.OnceExit) {
        if (root.type === 'document') {
          for (let subRoot of root.nodes) {
            this.visitSync(this.listeners.OnceExit, subRoot)
          }
        } else {
          this.visitSync(this.listeners.OnceExit, root)
        }
      }
    }

    return this.result
  }

  then(onFulfilled, onRejected) {
    if (true) {
      if (!('from' in this.opts)) {
        warnOnce(
          'Without `from` option PostCSS could generate wrong source map ' +
            'and will not find Browserslist config. Set it to CSS file path ' +
            'or to `undefined` to prevent this warning.'
        )
      }
    }
    return this.async().then(onFulfilled, onRejected)
  }

  toString() {
    return this.css
  }

  visitSync(visitors, node) {
    for (let [plugin, visitor] of visitors) {
      this.result.lastPlugin = plugin
      let promise
      try {
        promise = visitor(node, this.helpers)
      } catch (e) {
        throw this.handleError(e, node.proxyOf)
      }
      if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
        return true
      }
      if (isPromise(promise)) {
        throw this.getAsyncError()
      }
    }
  }

  visitTick(stack) {
    let visit = stack[stack.length - 1]
    let { node, visitors } = visit

    if (node.type !== 'root' && node.type !== 'document' && !node.parent) {
      stack.pop()
      return
    }

    if (visitors.length > 0 && visit.visitorIndex < visitors.length) {
      let [plugin, visitor] = visitors[visit.visitorIndex]
      visit.visitorIndex += 1
      if (visit.visitorIndex === visitors.length) {
        visit.visitors = []
        visit.visitorIndex = 0
      }
      this.result.lastPlugin = plugin
      try {
        return visitor(node.toProxy(), this.helpers)
      } catch (e) {
        throw this.handleError(e, node)
      }
    }

    if (visit.iterator !== 0) {
      let iterator = visit.iterator
      let child
      while ((child = node.nodes[node.indexes[iterator]])) {
        node.indexes[iterator] += 1
        if (!child[isClean]) {
          child[isClean] = true
          stack.push(toStack(child))
          return
        }
      }
      visit.iterator = 0
      delete node.indexes[iterator]
    }

    let events = visit.events
    while (visit.eventIndex < events.length) {
      let event = events[visit.eventIndex]
      visit.eventIndex += 1
      if (event === CHILDREN) {
        if (node.nodes && node.nodes.length) {
          node[isClean] = true
          visit.iterator = node.getIterator()
        }
        return
      } else if (this.listeners[event]) {
        visit.visitors = this.listeners[event]
        return
      }
    }
    stack.pop()
  }

  walkSync(node) {
    node[isClean] = true
    let events = getEvents(node)
    for (let event of events) {
      if (event === CHILDREN) {
        if (node.nodes) {
          node.each(child => {
            if (!child[isClean]) this.walkSync(child)
          })
        }
      } else {
        let visitors = this.listeners[event]
        if (visitors) {
          if (this.visitSync(visitors, node.toProxy())) return
        }
      }
    }
  }

  warnings() {
    return this.sync().warnings()
  }
}

LazyResult.registerPostcss = dependant => {
  postcss = dependant
}

module.exports = LazyResult
LazyResult.default = LazyResult

Root.registerLazyResult(LazyResult)
Document.registerLazyResult(LazyResult)


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/list.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/list.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


let list = {
  comma(string) {
    return list.split(string, [','], true)
  },

  space(string) {
    let spaces = [' ', '\n', '\t']
    return list.split(string, spaces)
  },

  split(string, separators, last) {
    let array = []
    let current = ''
    let split = false

    let func = 0
    let inQuote = false
    let prevQuote = ''
    let escape = false

    for (let letter of string) {
      if (escape) {
        escape = false
      } else if (letter === '\\') {
        escape = true
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true
        prevQuote = letter
      } else if (letter === '(') {
        func += 1
      } else if (letter === ')') {
        if (func > 0) func -= 1
      } else if (func === 0) {
        if (separators.includes(letter)) split = true
      }

      if (split) {
        if (current !== '') array.push(current.trim())
        current = ''
        split = false
      } else {
        current += letter
      }
    }

    if (last || current !== '') array.push(current.trim())
    return array
  }
}

module.exports = list
list.default = list


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/map-generator.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/map-generator.js ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { dirname, relative, resolve, sep } = __webpack_require__(/*! path */ "?4367")
let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?2a84")
let { pathToFileURL } = __webpack_require__(/*! url */ "?cecd")

let Input = __webpack_require__(/*! ./input */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/input.js")

let sourceMapAvailable = Boolean(SourceMapConsumer && SourceMapGenerator)
let pathAvailable = Boolean(dirname && resolve && relative && sep)

class MapGenerator {
  constructor(stringify, root, opts, cssString) {
    this.stringify = stringify
    this.mapOpts = opts.map || {}
    this.root = root
    this.opts = opts
    this.css = cssString
    this.originalCSS = cssString
    this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute

    this.memoizedFileURLs = new Map()
    this.memoizedPaths = new Map()
    this.memoizedURLs = new Map()
  }

  addAnnotation() {
    let content

    if (this.isInline()) {
      content =
        'data:application/json;base64,' + this.toBase64(this.map.toString())
    } else if (typeof this.mapOpts.annotation === 'string') {
      content = this.mapOpts.annotation
    } else if (typeof this.mapOpts.annotation === 'function') {
      content = this.mapOpts.annotation(this.opts.to, this.root)
    } else {
      content = this.outputFile() + '.map'
    }
    let eol = '\n'
    if (this.css.includes('\r\n')) eol = '\r\n'

    this.css += eol + '/*# sourceMappingURL=' + content + ' */'
  }

  applyPrevMaps() {
    for (let prev of this.previous()) {
      let from = this.toUrl(this.path(prev.file))
      let root = prev.root || dirname(prev.file)
      let map

      if (this.mapOpts.sourcesContent === false) {
        map = new SourceMapConsumer(prev.text)
        if (map.sourcesContent) {
          map.sourcesContent = null
        }
      } else {
        map = prev.consumer()
      }

      this.map.applySourceMap(map, from, this.toUrl(this.path(root)))
    }
  }

  clearAnnotation() {
    if (this.mapOpts.annotation === false) return

    if (this.root) {
      let node
      for (let i = this.root.nodes.length - 1; i >= 0; i--) {
        node = this.root.nodes[i]
        if (node.type !== 'comment') continue
        if (node.text.startsWith('# sourceMappingURL=')) {
          this.root.removeChild(i)
        }
      }
    } else if (this.css) {
      let startIndex
      while ((startIndex = this.css.lastIndexOf('/*#')) !== -1) {
        let endIndex = this.css.indexOf('*/', startIndex + 3)
        if (endIndex === -1) break
        while (startIndex > 0 && this.css[startIndex - 1] === '\n') {
          startIndex--
        }
        this.css = this.css.slice(0, startIndex) + this.css.slice(endIndex + 2)
      }
    }
  }

  generate() {
    this.clearAnnotation()
    if (pathAvailable && sourceMapAvailable && this.isMap()) {
      return this.generateMap()
    } else {
      let result = ''
      this.stringify(this.root, i => {
        result += i
      })
      return [result]
    }
  }

  generateMap() {
    if (this.root) {
      this.generateString()
    } else if (this.previous().length === 1) {
      let prev = this.previous()[0].consumer()
      prev.file = this.outputFile()
      this.map = SourceMapGenerator.fromSourceMap(prev, {
        ignoreInvalidMapping: true
      })
    } else {
      this.map = new SourceMapGenerator({
        file: this.outputFile(),
        ignoreInvalidMapping: true
      })
      this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from
          ? this.toUrl(this.path(this.opts.from))
          : '<no source>'
      })
    }

    if (this.isSourcesContent()) this.setSourcesContent()
    if (this.root && this.previous().length > 0) this.applyPrevMaps()
    if (this.isAnnotation()) this.addAnnotation()

    if (this.isInline()) {
      return [this.css]
    } else {
      return [this.css, this.map]
    }
  }

  generateString() {
    this.css = ''
    this.map = new SourceMapGenerator({
      file: this.outputFile(),
      ignoreInvalidMapping: true
    })

    let line = 1
    let column = 1

    let noSource = '<no source>'
    let mapping = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ''
    }

    let last, lines
    this.stringify(this.root, (str, node, type) => {
      this.css += str

      if (node && type !== 'end') {
        mapping.generated.line = line
        mapping.generated.column = column - 1
        if (node.source && node.source.start) {
          mapping.source = this.sourcePath(node)
          mapping.original.line = node.source.start.line
          mapping.original.column = node.source.start.column - 1
          this.map.addMapping(mapping)
        } else {
          mapping.source = noSource
          mapping.original.line = 1
          mapping.original.column = 0
          this.map.addMapping(mapping)
        }
      }

      lines = str.match(/\n/g)
      if (lines) {
        line += lines.length
        last = str.lastIndexOf('\n')
        column = str.length - last
      } else {
        column += str.length
      }

      if (node && type !== 'start') {
        let p = node.parent || { raws: {} }
        let childless =
          node.type === 'decl' || (node.type === 'atrule' && !node.nodes)
        if (!childless || node !== p.last || p.raws.semicolon) {
          if (node.source && node.source.end) {
            mapping.source = this.sourcePath(node)
            mapping.original.line = node.source.end.line
            mapping.original.column = node.source.end.column - 1
            mapping.generated.line = line
            mapping.generated.column = column - 2
            this.map.addMapping(mapping)
          } else {
            mapping.source = noSource
            mapping.original.line = 1
            mapping.original.column = 0
            mapping.generated.line = line
            mapping.generated.column = column - 1
            this.map.addMapping(mapping)
          }
        }
      }
    })
  }

  isAnnotation() {
    if (this.isInline()) {
      return true
    }
    if (typeof this.mapOpts.annotation !== 'undefined') {
      return this.mapOpts.annotation
    }
    if (this.previous().length) {
      return this.previous().some(i => i.annotation)
    }
    return true
  }

  isInline() {
    if (typeof this.mapOpts.inline !== 'undefined') {
      return this.mapOpts.inline
    }

    let annotation = this.mapOpts.annotation
    if (typeof annotation !== 'undefined' && annotation !== true) {
      return false
    }

    if (this.previous().length) {
      return this.previous().some(i => i.inline)
    }
    return true
  }

  isMap() {
    if (typeof this.opts.map !== 'undefined') {
      return !!this.opts.map
    }
    return this.previous().length > 0
  }

  isSourcesContent() {
    if (typeof this.mapOpts.sourcesContent !== 'undefined') {
      return this.mapOpts.sourcesContent
    }
    if (this.previous().length) {
      return this.previous().some(i => i.withContent())
    }
    return true
  }

  outputFile() {
    if (this.opts.to) {
      return this.path(this.opts.to)
    } else if (this.opts.from) {
      return this.path(this.opts.from)
    } else {
      return 'to.css'
    }
  }

  path(file) {
    if (this.mapOpts.absolute) return file
    if (file.charCodeAt(0) === 60 /* `<` */) return file
    if (/^\w+:\/\//.test(file)) return file
    let cached = this.memoizedPaths.get(file)
    if (cached) return cached

    let from = this.opts.to ? dirname(this.opts.to) : '.'

    if (typeof this.mapOpts.annotation === 'string') {
      from = dirname(resolve(from, this.mapOpts.annotation))
    }

    let path = relative(from, file)
    this.memoizedPaths.set(file, path)

    return path
  }

  previous() {
    if (!this.previousMaps) {
      this.previousMaps = []
      if (this.root) {
        this.root.walk(node => {
          if (node.source && node.source.input.map) {
            let map = node.source.input.map
            if (!this.previousMaps.includes(map)) {
              this.previousMaps.push(map)
            }
          }
        })
      } else {
        let input = new Input(this.originalCSS, this.opts)
        if (input.map) this.previousMaps.push(input.map)
      }
    }

    return this.previousMaps
  }

  setSourcesContent() {
    let already = {}
    if (this.root) {
      this.root.walk(node => {
        if (node.source) {
          let from = node.source.input.from
          if (from && !already[from]) {
            already[from] = true
            let fromUrl = this.usesFileUrls
              ? this.toFileUrl(from)
              : this.toUrl(this.path(from))
            this.map.setSourceContent(fromUrl, node.source.input.css)
          }
        }
      })
    } else if (this.css) {
      let from = this.opts.from
        ? this.toUrl(this.path(this.opts.from))
        : '<no source>'
      this.map.setSourceContent(from, this.css)
    }
  }

  sourcePath(node) {
    if (this.mapOpts.from) {
      return this.toUrl(this.mapOpts.from)
    } else if (this.usesFileUrls) {
      return this.toFileUrl(node.source.input.from)
    } else {
      return this.toUrl(this.path(node.source.input.from))
    }
  }

  toBase64(str) {
    if (Buffer) {
      return Buffer.from(str).toString('base64')
    } else {
      return window.btoa(unescape(encodeURIComponent(str)))
    }
  }

  toFileUrl(path) {
    let cached = this.memoizedFileURLs.get(path)
    if (cached) return cached

    if (pathToFileURL) {
      let fileURL = pathToFileURL(path).toString()
      this.memoizedFileURLs.set(path, fileURL)

      return fileURL
    } else {
      throw new Error(
        '`map.absolute` option is not available in this PostCSS build'
      )
    }
  }

  toUrl(path) {
    let cached = this.memoizedURLs.get(path)
    if (cached) return cached

    if (sep === '\\') {
      path = path.replace(/\\/g, '/')
    }

    let url = encodeURI(path).replace(/[#?]/g, encodeURIComponent)
    this.memoizedURLs.set(path, url)

    return url
  }
}

module.exports = MapGenerator


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/no-work-result.js":
/*!******************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/no-work-result.js ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let MapGenerator = __webpack_require__(/*! ./map-generator */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/map-generator.js")
let parse = __webpack_require__(/*! ./parse */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parse.js")
let Result = __webpack_require__(/*! ./result */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/result.js")
let stringify = __webpack_require__(/*! ./stringify */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringify.js")
let warnOnce = __webpack_require__(/*! ./warn-once */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/warn-once.js")

class NoWorkResult {
  get content() {
    return this.result.css
  }

  get css() {
    return this.result.css
  }

  get map() {
    return this.result.map
  }

  get messages() {
    return []
  }

  get opts() {
    return this.result.opts
  }

  get processor() {
    return this.result.processor
  }

  get root() {
    if (this._root) {
      return this._root
    }

    let root
    let parser = parse

    try {
      root = parser(this._css, this._opts)
    } catch (error) {
      this.error = error
    }

    if (this.error) {
      throw this.error
    } else {
      this._root = root
      return root
    }
  }

  get [Symbol.toStringTag]() {
    return 'NoWorkResult'
  }

  constructor(processor, css, opts) {
    css = css.toString()
    this.stringified = false

    this._processor = processor
    this._css = css
    this._opts = opts
    this._map = undefined

    let str = stringify
    this.result = new Result(this._processor, undefined, this._opts)
    this.result.css = css

    let self = this
    Object.defineProperty(this.result, 'root', {
      get() {
        return self.root
      }
    })

    let map = new MapGenerator(str, undefined, this._opts, css)
    if (map.isMap()) {
      let [generatedCSS, generatedMap] = map.generate()
      if (generatedCSS) {
        this.result.css = generatedCSS
      }
      if (generatedMap) {
        this.result.map = generatedMap
      }
    } else {
      map.clearAnnotation()
      this.result.css = map.css
    }
  }

  async() {
    if (this.error) return Promise.reject(this.error)
    return Promise.resolve(this.result)
  }

  catch(onRejected) {
    return this.async().catch(onRejected)
  }

  finally(onFinally) {
    return this.async().then(onFinally, onFinally)
  }

  sync() {
    if (this.error) throw this.error
    return this.result
  }

  then(onFulfilled, onRejected) {
    if (true) {
      if (!('from' in this._opts)) {
        warnOnce(
          'Without `from` option PostCSS could generate wrong source map ' +
            'and will not find Browserslist config. Set it to CSS file path ' +
            'or to `undefined` to prevent this warning.'
        )
      }
    }

    return this.async().then(onFulfilled, onRejected)
  }

  toString() {
    return this._css
  }

  warnings() {
    return []
  }
}

module.exports = NoWorkResult
NoWorkResult.default = NoWorkResult


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/node.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/node.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/css-syntax-error.js")
let Stringifier = __webpack_require__(/*! ./stringifier */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringifier.js")
let stringify = __webpack_require__(/*! ./stringify */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringify.js")
let { isClean, my } = __webpack_require__(/*! ./symbols */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/symbols.js")

function cloneNode(obj, parent) {
  let cloned = new obj.constructor()

  for (let i in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      /* c8 ignore next 2 */
      continue
    }
    if (i === 'proxyCache') continue
    let value = obj[i]
    let type = typeof value

    if (i === 'parent' && type === 'object') {
      if (parent) cloned[i] = parent
    } else if (i === 'source') {
      cloned[i] = value
    } else if (Array.isArray(value)) {
      cloned[i] = value.map(j => cloneNode(j, cloned))
    } else {
      if (type === 'object' && value !== null) value = cloneNode(value)
      cloned[i] = value
    }
  }

  return cloned
}

function sourceOffset(inputCSS, position) {
  // Not all custom syntaxes support `offset` in `source.start` and `source.end`
  if (position && typeof position.offset !== 'undefined') {
    return position.offset
  }

  let column = 1
  let line = 1
  let offset = 0

  for (let i = 0; i < inputCSS.length; i++) {
    if (line === position.line && column === position.column) {
      offset = i
      break
    }

    if (inputCSS[i] === '\n') {
      column = 1
      line += 1
    } else {
      column += 1
    }
  }

  return offset
}

class Node {
  get proxyOf() {
    return this
  }

  constructor(defaults = {}) {
    this.raws = {}
    this[isClean] = false
    this[my] = true

    for (let name in defaults) {
      if (name === 'nodes') {
        this.nodes = []
        for (let node of defaults[name]) {
          if (typeof node.clone === 'function') {
            this.append(node.clone())
          } else {
            this.append(node)
          }
        }
      } else {
        this[name] = defaults[name]
      }
    }
  }

  addToError(error) {
    error.postcssNode = this
    if (error.stack && this.source && /\n\s{4}at /.test(error.stack)) {
      let s = this.source
      error.stack = error.stack.replace(
        /\n\s{4}at /,
        `$&${s.input.from}:${s.start.line}:${s.start.column}$&`
      )
    }
    return error
  }

  after(add) {
    this.parent.insertAfter(this, add)
    return this
  }

  assign(overrides = {}) {
    for (let name in overrides) {
      this[name] = overrides[name]
    }
    return this
  }

  before(add) {
    this.parent.insertBefore(this, add)
    return this
  }

  cleanRaws(keepBetween) {
    delete this.raws.before
    delete this.raws.after
    if (!keepBetween) delete this.raws.between
  }

  clone(overrides = {}) {
    let cloned = cloneNode(this)
    for (let name in overrides) {
      cloned[name] = overrides[name]
    }
    return cloned
  }

  cloneAfter(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertAfter(this, cloned)
    return cloned
  }

  cloneBefore(overrides = {}) {
    let cloned = this.clone(overrides)
    this.parent.insertBefore(this, cloned)
    return cloned
  }

  error(message, opts = {}) {
    if (this.source) {
      let { end, start } = this.rangeBy(opts)
      return this.source.input.error(
        message,
        { column: start.column, line: start.line },
        { column: end.column, line: end.line },
        opts
      )
    }
    return new CssSyntaxError(message)
  }

  getProxyProcessor() {
    return {
      get(node, prop) {
        if (prop === 'proxyOf') {
          return node
        } else if (prop === 'root') {
          return () => node.root().toProxy()
        } else {
          return node[prop]
        }
      },

      set(node, prop, value) {
        if (node[prop] === value) return true
        node[prop] = value
        if (
          prop === 'prop' ||
          prop === 'value' ||
          prop === 'name' ||
          prop === 'params' ||
          prop === 'important' ||
          /* c8 ignore next */
          prop === 'text'
        ) {
          node.markDirty()
        }
        return true
      }
    }
  }

  /* c8 ignore next 3 */
  markClean() {
    this[isClean] = true
  }

  markDirty() {
    if (this[isClean]) {
      this[isClean] = false
      let next = this
      while ((next = next.parent)) {
        next[isClean] = false
      }
    }
  }

  next() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index + 1]
  }

  positionBy(opts = {}) {
    let pos = this.source.start
    if (opts.index) {
      pos = this.positionInside(opts.index)
    } else if (opts.word) {
      let inputString =
        'document' in this.source.input
          ? this.source.input.document
          : this.source.input.css
      let stringRepresentation = inputString.slice(
        sourceOffset(inputString, this.source.start),
        sourceOffset(inputString, this.source.end)
      )
      let index = stringRepresentation.indexOf(opts.word)
      if (index !== -1) pos = this.positionInside(index)
    }
    return pos
  }

  positionInside(index) {
    let column = this.source.start.column
    let line = this.source.start.line
    let inputString =
      'document' in this.source.input
        ? this.source.input.document
        : this.source.input.css
    let offset = sourceOffset(inputString, this.source.start)
    let end = offset + index

    for (let i = offset; i < end; i++) {
      if (inputString[i] === '\n') {
        column = 1
        line += 1
      } else {
        column += 1
      }
    }

    return { column, line, offset: end }
  }

  prev() {
    if (!this.parent) return undefined
    let index = this.parent.index(this)
    return this.parent.nodes[index - 1]
  }

  rangeBy(opts = {}) {
    let inputString =
      'document' in this.source.input
        ? this.source.input.document
        : this.source.input.css
    let start = {
      column: this.source.start.column,
      line: this.source.start.line,
      offset: sourceOffset(inputString, this.source.start)
    }
    let end = this.source.end
      ? {
          column: this.source.end.column + 1,
          line: this.source.end.line,
          offset:
            typeof this.source.end.offset === 'number'
              ? // `source.end.offset` is exclusive, so we don't need to add 1
                this.source.end.offset
              : // Since line/column in this.source.end is inclusive,
                // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
                // So, we add 1 to convert it to exclusive.
                sourceOffset(inputString, this.source.end) + 1
        }
      : {
          column: start.column + 1,
          line: start.line,
          offset: start.offset + 1
        }

    if (opts.word) {
      let stringRepresentation = inputString.slice(
        sourceOffset(inputString, this.source.start),
        sourceOffset(inputString, this.source.end)
      )
      let index = stringRepresentation.indexOf(opts.word)
      if (index !== -1) {
        start = this.positionInside(index)
        end = this.positionInside(index + opts.word.length)
      }
    } else {
      if (opts.start) {
        start = {
          column: opts.start.column,
          line: opts.start.line,
          offset: sourceOffset(inputString, opts.start)
        }
      } else if (opts.index) {
        start = this.positionInside(opts.index)
      }

      if (opts.end) {
        end = {
          column: opts.end.column,
          line: opts.end.line,
          offset: sourceOffset(inputString, opts.end)
        }
      } else if (typeof opts.endIndex === 'number') {
        end = this.positionInside(opts.endIndex)
      } else if (opts.index) {
        end = this.positionInside(opts.index + 1)
      }
    }

    if (
      end.line < start.line ||
      (end.line === start.line && end.column <= start.column)
    ) {
      end = {
        column: start.column + 1,
        line: start.line,
        offset: start.offset + 1
      }
    }

    return { end, start }
  }

  raw(prop, defaultType) {
    let str = new Stringifier()
    return str.raw(this, prop, defaultType)
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this)
    }
    this.parent = undefined
    return this
  }

  replaceWith(...nodes) {
    if (this.parent) {
      let bookmark = this
      let foundSelf = false
      for (let node of nodes) {
        if (node === this) {
          foundSelf = true
        } else if (foundSelf) {
          this.parent.insertAfter(bookmark, node)
          bookmark = node
        } else {
          this.parent.insertBefore(bookmark, node)
        }
      }

      if (!foundSelf) {
        this.remove()
      }
    }

    return this
  }

  root() {
    let result = this
    while (result.parent && result.parent.type !== 'document') {
      result = result.parent
    }
    return result
  }

  toJSON(_, inputs) {
    let fixed = {}
    let emitInputs = inputs == null
    inputs = inputs || new Map()
    let inputsNextIndex = 0

    for (let name in this) {
      if (!Object.prototype.hasOwnProperty.call(this, name)) {
        /* c8 ignore next 2 */
        continue
      }
      if (name === 'parent' || name === 'proxyCache') continue
      let value = this[name]

      if (Array.isArray(value)) {
        fixed[name] = value.map(i => {
          if (typeof i === 'object' && i.toJSON) {
            return i.toJSON(null, inputs)
          } else {
            return i
          }
        })
      } else if (typeof value === 'object' && value.toJSON) {
        fixed[name] = value.toJSON(null, inputs)
      } else if (name === 'source') {
        if (value == null) continue
        let inputId = inputs.get(value.input)
        if (inputId == null) {
          inputId = inputsNextIndex
          inputs.set(value.input, inputsNextIndex)
          inputsNextIndex++
        }
        fixed[name] = {
          end: value.end,
          inputId,
          start: value.start
        }
      } else {
        fixed[name] = value
      }
    }

    if (emitInputs) {
      fixed.inputs = [...inputs.keys()].map(input => input.toJSON())
    }

    return fixed
  }

  toProxy() {
    if (!this.proxyCache) {
      this.proxyCache = new Proxy(this, this.getProxyProcessor())
    }
    return this.proxyCache
  }

  toString(stringifier = stringify) {
    if (stringifier.stringify) stringifier = stringifier.stringify
    let result = ''
    stringifier(this, i => {
      result += i
    })
    return result
  }

  warn(result, text, opts = {}) {
    let data = { node: this }
    for (let i in opts) data[i] = opts[i]
    return result.warn(text, data)
  }
}

module.exports = Node
Node.default = Node


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parse.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parse.js ***!
  \*********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js")
let Input = __webpack_require__(/*! ./input */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/input.js")
let Parser = __webpack_require__(/*! ./parser */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parser.js")

function parse(css, opts) {
  let input = new Input(css, opts)
  let parser = new Parser(input)
  try {
    parser.parse()
  } catch (e) {
    if (true) {
      if (e.name === 'CssSyntaxError' && opts && opts.from) {
        if (/\.scss$/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse SCSS with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-scss parser'
        } else if (/\.sass/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse Sass with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-sass parser'
        } else if (/\.less$/i.test(opts.from)) {
          e.message +=
            '\nYou tried to parse Less with ' +
            'the standard CSS parser; ' +
            'try again with the postcss-less parser'
        }
      }
    }
    throw e
  }

  return parser.root
}

module.exports = parse
parse.default = parse

Container.registerParse(parse)


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parser.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parser.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let AtRule = __webpack_require__(/*! ./at-rule */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/at-rule.js")
let Comment = __webpack_require__(/*! ./comment */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/comment.js")
let Declaration = __webpack_require__(/*! ./declaration */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/declaration.js")
let Root = __webpack_require__(/*! ./root */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/root.js")
let Rule = __webpack_require__(/*! ./rule */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/rule.js")
let tokenizer = __webpack_require__(/*! ./tokenize */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/tokenize.js")

const SAFE_COMMENT_NEIGHBOR = {
  empty: true,
  space: true
}

function findLastWithPosition(tokens) {
  for (let i = tokens.length - 1; i >= 0; i--) {
    let token = tokens[i]
    let pos = token[3] || token[2]
    if (pos) return pos
  }
}

class Parser {
  constructor(input) {
    this.input = input

    this.root = new Root()
    this.current = this.root
    this.spaces = ''
    this.semicolon = false

    this.createTokenizer()
    this.root.source = { input, start: { column: 1, line: 1, offset: 0 } }
  }

  atrule(token) {
    let node = new AtRule()
    node.name = token[1].slice(1)
    if (node.name === '') {
      this.unnamedAtrule(node, token)
    }
    this.init(node, token[2])

    let type
    let prev
    let shift
    let last = false
    let open = false
    let params = []
    let brackets = []

    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken()
      type = token[0]

      if (type === '(' || type === '[') {
        brackets.push(type === '(' ? ')' : ']')
      } else if (type === '{' && brackets.length > 0) {
        brackets.push('}')
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop()
      }

      if (brackets.length === 0) {
        if (type === ';') {
          node.source.end = this.getPosition(token[2])
          node.source.end.offset++
          this.semicolon = true
          break
        } else if (type === '{') {
          open = true
          break
        } else if (type === '}') {
          if (params.length > 0) {
            shift = params.length - 1
            prev = params[shift]
            while (prev && prev[0] === 'space') {
              prev = params[--shift]
            }
            if (prev) {
              node.source.end = this.getPosition(prev[3] || prev[2])
              node.source.end.offset++
            }
          }
          this.end(token)
          break
        } else {
          params.push(token)
        }
      } else {
        params.push(token)
      }

      if (this.tokenizer.endOfFile()) {
        last = true
        break
      }
    }

    node.raws.between = this.spacesAndCommentsFromEnd(params)
    if (params.length) {
      node.raws.afterName = this.spacesAndCommentsFromStart(params)
      this.raw(node, 'params', params)
      if (last) {
        token = params[params.length - 1]
        node.source.end = this.getPosition(token[3] || token[2])
        node.source.end.offset++
        this.spaces = node.raws.between
        node.raws.between = ''
      }
    } else {
      node.raws.afterName = ''
      node.params = ''
    }

    if (open) {
      node.nodes = []
      this.current = node
    }
  }

  checkMissedSemicolon(tokens) {
    let colon = this.colon(tokens)
    if (colon === false) return

    let founded = 0
    let token
    for (let j = colon - 1; j >= 0; j--) {
      token = tokens[j]
      if (token[0] !== 'space') {
        founded += 1
        if (founded === 2) break
      }
    }
    // If the token is a word, e.g. `!important`, `red` or any other valid property's value.
    // Then we need to return the colon after that word token. [3] is the "end" colon of that word.
    // And because we need it after that one we do +1 to get the next one.
    throw this.input.error(
      'Missed semicolon',
      token[0] === 'word' ? token[3] + 1 : token[2]
    )
  }

  colon(tokens) {
    let brackets = 0
    let prev, token, type
    for (let [i, element] of tokens.entries()) {
      token = element
      type = token[0]

      if (type === '(') {
        brackets += 1
      }
      if (type === ')') {
        brackets -= 1
      }
      if (brackets === 0 && type === ':') {
        if (!prev) {
          this.doubleColon(token)
        } else if (prev[0] === 'word' && prev[1] === 'progid') {
          continue
        } else {
          return i
        }
      }

      prev = token
    }
    return false
  }

  comment(token) {
    let node = new Comment()
    this.init(node, token[2])
    node.source.end = this.getPosition(token[3] || token[2])
    node.source.end.offset++

    let text = token[1].slice(2, -2)
    if (!text.trim()) {
      node.text = ''
      node.raws.left = text
      node.raws.right = ''
    } else {
      let match = text.match(/^(\s*)([^]*\S)(\s*)$/)
      node.text = match[2]
      node.raws.left = match[1]
      node.raws.right = match[3]
    }
  }

  createTokenizer() {
    this.tokenizer = tokenizer(this.input)
  }

  decl(tokens, customProperty) {
    let node = new Declaration()
    this.init(node, tokens[0][2])

    let last = tokens[tokens.length - 1]
    if (last[0] === ';') {
      this.semicolon = true
      tokens.pop()
    }

    node.source.end = this.getPosition(
      last[3] || last[2] || findLastWithPosition(tokens)
    )
    node.source.end.offset++

    while (tokens[0][0] !== 'word') {
      if (tokens.length === 1) this.unknownWord(tokens)
      node.raws.before += tokens.shift()[1]
    }
    node.source.start = this.getPosition(tokens[0][2])

    node.prop = ''
    while (tokens.length) {
      let type = tokens[0][0]
      if (type === ':' || type === 'space' || type === 'comment') {
        break
      }
      node.prop += tokens.shift()[1]
    }

    node.raws.between = ''

    let token
    while (tokens.length) {
      token = tokens.shift()

      if (token[0] === ':') {
        node.raws.between += token[1]
        break
      } else {
        if (token[0] === 'word' && /\w/.test(token[1])) {
          this.unknownWord([token])
        }
        node.raws.between += token[1]
      }
    }

    if (node.prop[0] === '_' || node.prop[0] === '*') {
      node.raws.before += node.prop[0]
      node.prop = node.prop.slice(1)
    }

    let firstSpaces = []
    let next
    while (tokens.length) {
      next = tokens[0][0]
      if (next !== 'space' && next !== 'comment') break
      firstSpaces.push(tokens.shift())
    }

    this.precheckMissedSemicolon(tokens)

    for (let i = tokens.length - 1; i >= 0; i--) {
      token = tokens[i]
      if (token[1].toLowerCase() === '!important') {
        node.important = true
        let string = this.stringFrom(tokens, i)
        string = this.spacesFromEnd(tokens) + string
        if (string !== ' !important') node.raws.important = string
        break
      } else if (token[1].toLowerCase() === 'important') {
        let cache = tokens.slice(0)
        let str = ''
        for (let j = i; j > 0; j--) {
          let type = cache[j][0]
          if (str.trim().startsWith('!') && type !== 'space') {
            break
          }
          str = cache.pop()[1] + str
        }
        if (str.trim().startsWith('!')) {
          node.important = true
          node.raws.important = str
          tokens = cache
        }
      }

      if (token[0] !== 'space' && token[0] !== 'comment') {
        break
      }
    }

    let hasWord = tokens.some(i => i[0] !== 'space' && i[0] !== 'comment')

    if (hasWord) {
      node.raws.between += firstSpaces.map(i => i[1]).join('')
      firstSpaces = []
    }
    this.raw(node, 'value', firstSpaces.concat(tokens), customProperty)

    if (node.value.includes(':') && !customProperty) {
      this.checkMissedSemicolon(tokens)
    }
  }

  doubleColon(token) {
    throw this.input.error(
      'Double colon',
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    )
  }

  emptyRule(token) {
    let node = new Rule()
    this.init(node, token[2])
    node.selector = ''
    node.raws.between = ''
    this.current = node
  }

  end(token) {
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.semicolon = false

    this.current.raws.after = (this.current.raws.after || '') + this.spaces
    this.spaces = ''

    if (this.current.parent) {
      this.current.source.end = this.getPosition(token[2])
      this.current.source.end.offset++
      this.current = this.current.parent
    } else {
      this.unexpectedClose(token)
    }
  }

  endFile() {
    if (this.current.parent) this.unclosedBlock()
    if (this.current.nodes && this.current.nodes.length) {
      this.current.raws.semicolon = this.semicolon
    }
    this.current.raws.after = (this.current.raws.after || '') + this.spaces
    this.root.source.end = this.getPosition(this.tokenizer.position())
  }

  freeSemicolon(token) {
    this.spaces += token[1]
    if (this.current.nodes) {
      let prev = this.current.nodes[this.current.nodes.length - 1]
      if (prev && prev.type === 'rule' && !prev.raws.ownSemicolon) {
        prev.raws.ownSemicolon = this.spaces
        this.spaces = ''
        prev.source.end = this.getPosition(token[2])
        prev.source.end.offset += prev.raws.ownSemicolon.length
      }
    }
  }

  // Helpers

  getPosition(offset) {
    let pos = this.input.fromOffset(offset)
    return {
      column: pos.col,
      line: pos.line,
      offset
    }
  }

  init(node, offset) {
    this.current.push(node)
    node.source = {
      input: this.input,
      start: this.getPosition(offset)
    }
    node.raws.before = this.spaces
    this.spaces = ''
    if (node.type !== 'comment') this.semicolon = false
  }

  other(start) {
    let end = false
    let type = null
    let colon = false
    let bracket = null
    let brackets = []
    let customProperty = start[1].startsWith('--')

    let tokens = []
    let token = start
    while (token) {
      type = token[0]
      tokens.push(token)

      if (type === '(' || type === '[') {
        if (!bracket) bracket = token
        brackets.push(type === '(' ? ')' : ']')
      } else if (customProperty && colon && type === '{') {
        if (!bracket) bracket = token
        brackets.push('}')
      } else if (brackets.length === 0) {
        if (type === ';') {
          if (colon) {
            this.decl(tokens, customProperty)
            return
          } else {
            break
          }
        } else if (type === '{') {
          this.rule(tokens)
          return
        } else if (type === '}') {
          this.tokenizer.back(tokens.pop())
          end = true
          break
        } else if (type === ':') {
          colon = true
        }
      } else if (type === brackets[brackets.length - 1]) {
        brackets.pop()
        if (brackets.length === 0) bracket = null
      }

      token = this.tokenizer.nextToken()
    }

    if (this.tokenizer.endOfFile()) end = true
    if (brackets.length > 0) this.unclosedBracket(bracket)

    if (end && colon) {
      if (!customProperty) {
        while (tokens.length) {
          token = tokens[tokens.length - 1][0]
          if (token !== 'space' && token !== 'comment') break
          this.tokenizer.back(tokens.pop())
        }
      }
      this.decl(tokens, customProperty)
    } else {
      this.unknownWord(tokens)
    }
  }

  parse() {
    let token
    while (!this.tokenizer.endOfFile()) {
      token = this.tokenizer.nextToken()

      switch (token[0]) {
        case 'space':
          this.spaces += token[1]
          break

        case ';':
          this.freeSemicolon(token)
          break

        case '}':
          this.end(token)
          break

        case 'comment':
          this.comment(token)
          break

        case 'at-word':
          this.atrule(token)
          break

        case '{':
          this.emptyRule(token)
          break

        default:
          this.other(token)
          break
      }
    }
    this.endFile()
  }

  precheckMissedSemicolon(/* tokens */) {
    // Hook for Safe Parser
  }

  raw(node, prop, tokens, customProperty) {
    let token, type
    let length = tokens.length
    let value = ''
    let clean = true
    let next, prev

    for (let i = 0; i < length; i += 1) {
      token = tokens[i]
      type = token[0]
      if (type === 'space' && i === length - 1 && !customProperty) {
        clean = false
      } else if (type === 'comment') {
        prev = tokens[i - 1] ? tokens[i - 1][0] : 'empty'
        next = tokens[i + 1] ? tokens[i + 1][0] : 'empty'
        if (!SAFE_COMMENT_NEIGHBOR[prev] && !SAFE_COMMENT_NEIGHBOR[next]) {
          if (value.slice(-1) === ',') {
            clean = false
          } else {
            value += token[1]
          }
        } else {
          clean = false
        }
      } else {
        value += token[1]
      }
    }
    if (!clean) {
      let raw = tokens.reduce((all, i) => all + i[1], '')
      node.raws[prop] = { raw, value }
    }
    node[prop] = value
  }

  rule(tokens) {
    tokens.pop()

    let node = new Rule()
    this.init(node, tokens[0][2])

    node.raws.between = this.spacesAndCommentsFromEnd(tokens)
    this.raw(node, 'selector', tokens)
    this.current = node
  }

  spacesAndCommentsFromEnd(tokens) {
    let lastTokenType
    let spaces = ''
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0]
      if (lastTokenType !== 'space' && lastTokenType !== 'comment') break
      spaces = tokens.pop()[1] + spaces
    }
    return spaces
  }

  // Errors

  spacesAndCommentsFromStart(tokens) {
    let next
    let spaces = ''
    while (tokens.length) {
      next = tokens[0][0]
      if (next !== 'space' && next !== 'comment') break
      spaces += tokens.shift()[1]
    }
    return spaces
  }

  spacesFromEnd(tokens) {
    let lastTokenType
    let spaces = ''
    while (tokens.length) {
      lastTokenType = tokens[tokens.length - 1][0]
      if (lastTokenType !== 'space') break
      spaces = tokens.pop()[1] + spaces
    }
    return spaces
  }

  stringFrom(tokens, from) {
    let result = ''
    for (let i = from; i < tokens.length; i++) {
      result += tokens[i][1]
    }
    tokens.splice(from, tokens.length - from)
    return result
  }

  unclosedBlock() {
    let pos = this.current.source.start
    throw this.input.error('Unclosed block', pos.line, pos.column)
  }

  unclosedBracket(bracket) {
    throw this.input.error(
      'Unclosed bracket',
      { offset: bracket[2] },
      { offset: bracket[2] + 1 }
    )
  }

  unexpectedClose(token) {
    throw this.input.error(
      'Unexpected }',
      { offset: token[2] },
      { offset: token[2] + 1 }
    )
  }

  unknownWord(tokens) {
    throw this.input.error(
      'Unknown word ' + tokens[0][1],
      { offset: tokens[0][2] },
      { offset: tokens[0][2] + tokens[0][1].length }
    )
  }

  unnamedAtrule(node, token) {
    throw this.input.error(
      'At-rule without name',
      { offset: token[2] },
      { offset: token[2] + token[1].length }
    )
  }
}

module.exports = Parser


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/postcss.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/postcss.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let AtRule = __webpack_require__(/*! ./at-rule */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/at-rule.js")
let Comment = __webpack_require__(/*! ./comment */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/comment.js")
let Container = __webpack_require__(/*! ./container */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js")
let CssSyntaxError = __webpack_require__(/*! ./css-syntax-error */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/css-syntax-error.js")
let Declaration = __webpack_require__(/*! ./declaration */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/declaration.js")
let Document = __webpack_require__(/*! ./document */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/document.js")
let fromJSON = __webpack_require__(/*! ./fromJSON */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/fromJSON.js")
let Input = __webpack_require__(/*! ./input */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/input.js")
let LazyResult = __webpack_require__(/*! ./lazy-result */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/lazy-result.js")
let list = __webpack_require__(/*! ./list */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/list.js")
let Node = __webpack_require__(/*! ./node */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/node.js")
let parse = __webpack_require__(/*! ./parse */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/parse.js")
let Processor = __webpack_require__(/*! ./processor */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/processor.js")
let Result = __webpack_require__(/*! ./result.js */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/result.js")
let Root = __webpack_require__(/*! ./root */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/root.js")
let Rule = __webpack_require__(/*! ./rule */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/rule.js")
let stringify = __webpack_require__(/*! ./stringify */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringify.js")
let Warning = __webpack_require__(/*! ./warning */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/warning.js")

function postcss(...plugins) {
  if (plugins.length === 1 && Array.isArray(plugins[0])) {
    plugins = plugins[0]
  }
  return new Processor(plugins)
}

postcss.plugin = function plugin(name, initializer) {
  let warningPrinted = false
  function creator(...args) {
    // eslint-disable-next-line no-console
    if (console && console.warn && !warningPrinted) {
      warningPrinted = true
      // eslint-disable-next-line no-console
      console.warn(
        name +
          ': postcss.plugin was deprecated. Migration guide:\n' +
          'https://evilmartians.com/chronicles/postcss-8-plugin-migration'
      )
      if (process.env.LANG && process.env.LANG.startsWith('cn')) {
        /* c8 ignore next 7 */
        // eslint-disable-next-line no-console
        console.warn(
          name +
            ': 里面 postcss.plugin 被弃用. 迁移指南:\n' +
            'https://www.w3ctech.com/topic/2226'
        )
      }
    }
    let transformer = initializer(...args)
    transformer.postcssPlugin = name
    transformer.postcssVersion = new Processor().version
    return transformer
  }

  let cache
  Object.defineProperty(creator, 'postcss', {
    get() {
      if (!cache) cache = creator()
      return cache
    }
  })

  creator.process = function (css, processOpts, pluginOpts) {
    return postcss([creator(pluginOpts)]).process(css, processOpts)
  }

  return creator
}

postcss.stringify = stringify
postcss.parse = parse
postcss.fromJSON = fromJSON
postcss.list = list

postcss.comment = defaults => new Comment(defaults)
postcss.atRule = defaults => new AtRule(defaults)
postcss.decl = defaults => new Declaration(defaults)
postcss.rule = defaults => new Rule(defaults)
postcss.root = defaults => new Root(defaults)
postcss.document = defaults => new Document(defaults)

postcss.CssSyntaxError = CssSyntaxError
postcss.Declaration = Declaration
postcss.Container = Container
postcss.Processor = Processor
postcss.Document = Document
postcss.Comment = Comment
postcss.Warning = Warning
postcss.AtRule = AtRule
postcss.Result = Result
postcss.Input = Input
postcss.Rule = Rule
postcss.Root = Root
postcss.Node = Node

LazyResult.registerPostcss(postcss)

module.exports = postcss
postcss.default = postcss


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/previous-map.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/previous-map.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let { existsSync, readFileSync } = __webpack_require__(/*! fs */ "?3c7c")
let { dirname, join } = __webpack_require__(/*! path */ "?4367")
let { SourceMapConsumer, SourceMapGenerator } = __webpack_require__(/*! source-map-js */ "?2a84")

function fromBase64(str) {
  if (Buffer) {
    return Buffer.from(str, 'base64').toString()
  } else {
    /* c8 ignore next 2 */
    return window.atob(str)
  }
}

class PreviousMap {
  constructor(css, opts) {
    if (opts.map === false) return
    if (opts.unsafeMap) this.unsafeMap = true
    this.loadAnnotation(css)
    this.inline = this.startWith(this.annotation, 'data:')

    let prev = opts.map ? opts.map.prev : undefined
    let text = this.loadMap(opts.from, prev)
    if (!this.mapFile && opts.from) {
      this.mapFile = opts.from
    }
    if (this.mapFile) this.root = dirname(this.mapFile)
    if (text) this.text = text
  }

  consumer() {
    if (!this.consumerCache) {
      this.consumerCache = new SourceMapConsumer(this.json || this.text)
    }
    return this.consumerCache
  }

  decodeInline(text) {
    let baseCharsetUri = /^data:application\/json;charset=utf-?8;base64,/
    let baseUri = /^data:application\/json;base64,/
    let charsetUri = /^data:application\/json;charset=utf-?8,/
    let uri = /^data:application\/json,/

    let uriMatch = text.match(charsetUri) || text.match(uri)
    if (uriMatch) {
      return decodeURIComponent(text.substr(uriMatch[0].length))
    }

    let baseUriMatch = text.match(baseCharsetUri) || text.match(baseUri)
    if (baseUriMatch) {
      return fromBase64(text.substr(baseUriMatch[0].length))
    }

    let encoding = text.slice('data:application/json;'.length)
    encoding = encoding.slice(0, encoding.indexOf(','))
    throw new Error('Unsupported source map encoding ' + encoding)
  }

  getAnnotationURL(sourceMapString) {
    return sourceMapString.replace(/^\/\*\s*# sourceMappingURL=/, '').trim()
  }

  isMap(map) {
    if (typeof map !== 'object') return false
    return (
      typeof map.mappings === 'string' ||
      typeof map._mappings === 'string' ||
      Array.isArray(map.sections)
    )
  }

  loadAnnotation(css) {
    let comments = css.match(/\/\*\s*# sourceMappingURL=/g)
    if (!comments) return

    // sourceMappingURLs from comments, strings, etc.
    let start = css.lastIndexOf(comments.pop())
    let end = css.indexOf('*/', start)

    if (start > -1 && end > -1) {
      // Locate the last sourceMappingURL to avoid pickin
      this.annotation = this.getAnnotationURL(css.substring(start, end))
    }
  }

  loadFile(path, cssFile, trusted) {
    /* c8 ignore next 5 */
    if (!trusted && !this.unsafeMap) {
      if (!/\.map$/i.test(path)) {
        return undefined
      }
    }
    this.root = dirname(path)
    if (existsSync(path)) {
      this.mapFile = path
      return readFileSync(path, 'utf-8').toString().trim()
    }
  }

  loadMap(file, prev) {
    if (prev === false) return false

    if (prev) {
      if (typeof prev === 'string') {
        return prev
      } else if (typeof prev === 'function') {
        let prevPath = prev(file)
        if (prevPath) {
          let map = this.loadFile(prevPath, file, true)
          if (!map) {
            throw new Error(
              'Unable to load previous source map: ' + prevPath.toString()
            )
          }
          return map
        }
      } else if (prev instanceof SourceMapConsumer) {
        return SourceMapGenerator.fromSourceMap(prev).toString()
      } else if (prev instanceof SourceMapGenerator) {
        return prev.toString()
      } else if (this.isMap(prev)) {
        return JSON.stringify(prev)
      } else {
        throw new Error(
          'Unsupported previous source map format: ' + prev.toString()
        )
      }
    } else if (this.inline) {
      return this.decodeInline(this.annotation)
    } else if (this.annotation) {
      let map = this.annotation
      if (file) map = join(dirname(file), map)
      let unknown = this.loadFile(map, file, false)
      if (unknown) {
        try {
          /* c8 ignore next 4 */
          this.json = JSON.parse(unknown.replace(/^\)]}'[^\n]*\n/, ''))
        } catch {
          return undefined
        }
      }
      return unknown
    }
  }

  startWith(string, start) {
    if (!string) return false
    return string.substr(0, start.length) === start
  }

  withContent() {
    return !!(
      this.consumer().sourcesContent &&
      this.consumer().sourcesContent.length > 0
    )
  }
}

module.exports = PreviousMap
PreviousMap.default = PreviousMap


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/processor.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/processor.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Document = __webpack_require__(/*! ./document */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/document.js")
let LazyResult = __webpack_require__(/*! ./lazy-result */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/lazy-result.js")
let NoWorkResult = __webpack_require__(/*! ./no-work-result */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/no-work-result.js")
let Root = __webpack_require__(/*! ./root */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/root.js")

class Processor {
  constructor(plugins = []) {
    this.version = '8.5.14'
    this.plugins = this.normalize(plugins)
  }

  normalize(plugins) {
    let normalized = []
    for (let i of plugins) {
      if (i.postcss === true) {
        i = i()
      } else if (i.postcss) {
        i = i.postcss
      }

      if (typeof i === 'object' && Array.isArray(i.plugins)) {
        normalized = normalized.concat(i.plugins)
      } else if (typeof i === 'object' && i.postcssPlugin) {
        normalized.push(i)
      } else if (typeof i === 'function') {
        normalized.push(i)
      } else if (typeof i === 'object' && (i.parse || i.stringify)) {
        if (true) {
          throw new Error(
            'PostCSS syntaxes cannot be used as plugins. Instead, please use ' +
              'one of the syntax/parser/stringifier options as outlined ' +
              'in your PostCSS runner documentation.'
          )
        }
      } else {
        throw new Error(i + ' is not a PostCSS plugin')
      }
    }
    return normalized
  }

  process(css, opts = {}) {
    if (
      !this.plugins.length &&
      !opts.parser &&
      !opts.stringifier &&
      !opts.syntax
    ) {
      return new NoWorkResult(this, css, opts)
    } else {
      return new LazyResult(this, css, opts)
    }
  }

  use(plugin) {
    this.plugins = this.plugins.concat(this.normalize([plugin]))
    return this
  }
}

module.exports = Processor
Processor.default = Processor

Root.registerProcessor(Processor)
Document.registerProcessor(Processor)


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/result.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/result.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Warning = __webpack_require__(/*! ./warning */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/warning.js")

class Result {
  get content() {
    return this.css
  }

  constructor(processor, root, opts) {
    this.processor = processor
    this.messages = []
    this.root = root
    this.opts = opts
    this.css = ''
    this.map = undefined
  }

  toString() {
    return this.css
  }

  warn(text, opts = {}) {
    if (!opts.plugin) {
      if (this.lastPlugin && this.lastPlugin.postcssPlugin) {
        opts.plugin = this.lastPlugin.postcssPlugin
      }
    }

    let warning = new Warning(text, opts)
    this.messages.push(warning)

    return warning
  }

  warnings() {
    return this.messages.filter(i => i.type === 'warning')
  }
}

module.exports = Result
Result.default = Result


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/root.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/root.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js")

let LazyResult, Processor

class Root extends Container {
  constructor(defaults) {
    super(defaults)
    this.type = 'root'
    if (!this.nodes) this.nodes = []
  }

  normalize(child, sample, type) {
    let nodes = super.normalize(child)

    if (sample) {
      if (type === 'prepend') {
        if (this.nodes.length > 1) {
          sample.raws.before = this.nodes[1].raws.before
        } else {
          delete sample.raws.before
        }
      } else if (this.first !== sample) {
        for (let node of nodes) {
          node.raws.before = sample.raws.before
        }
      }
    }

    return nodes
  }

  removeChild(child, ignore) {
    let index = this.index(child)

    if (!ignore && index === 0 && this.nodes.length > 1) {
      this.nodes[1].raws.before = this.nodes[index].raws.before
    }

    return super.removeChild(child)
  }

  toResult(opts = {}) {
    let lazy = new LazyResult(new Processor(), this, opts)
    return lazy.stringify()
  }
}

Root.registerLazyResult = dependant => {
  LazyResult = dependant
}

Root.registerProcessor = dependant => {
  Processor = dependant
}

module.exports = Root
Root.default = Root

Container.registerRoot(Root)


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/rule.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/rule.js ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Container = __webpack_require__(/*! ./container */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/container.js")
let list = __webpack_require__(/*! ./list */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/list.js")

class Rule extends Container {
  get selectors() {
    return list.comma(this.selector)
  }

  set selectors(values) {
    let match = this.selector ? this.selector.match(/,\s*/) : null
    let sep = match ? match[0] : ',' + this.raw('between', 'beforeOpen')
    this.selector = values.join(sep)
  }

  constructor(defaults) {
    super(defaults)
    this.type = 'rule'
    if (!this.nodes) this.nodes = []
  }
}

module.exports = Rule
Rule.default = Rule

Container.registerRule(Rule)


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringifier.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringifier.js ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";


// Escapes sequences that could break out of an HTML <style> context.
// Uses CSS unicode escaping (\3c = '<') which is valid CSS and parsed
// correctly by all compliant CSS consumers.
const STYLE_TAG = /(<)(\/?style\b)/gi
const COMMENT_OPEN = /(<)(!--)/g

function escapeHTMLInCSS(str) {
  if (typeof str !== 'string') return str
  if (!str.includes('<')) return str
  return str.replace(STYLE_TAG, '\\3c $2').replace(COMMENT_OPEN, '\\3c $2')
}

const DEFAULT_RAW = {
  after: '\n',
  beforeClose: '\n',
  beforeComment: '\n',
  beforeDecl: '\n',
  beforeOpen: ' ',
  beforeRule: '\n',
  colon: ': ',
  commentLeft: ' ',
  commentRight: ' ',
  emptyBody: '',
  indent: '    ',
  semicolon: false
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

class Stringifier {
  constructor(builder) {
    this.builder = builder
  }

  atrule(node, semicolon) {
    let raws = node.raws
    let name = '@' + node.name
    let params = node.params ? this.rawValue(node, 'params') : ''

    if (typeof raws.afterName !== 'undefined') {
      name += raws.afterName
    } else if (params) {
      name += ' '
    }

    if (node.nodes) {
      this.block(node, name + params)
    } else {
      let end = (raws.between || '') + (semicolon ? ';' : '')
      this.builder(escapeHTMLInCSS(name + params + end), node)
    }
  }

  beforeAfter(node, detect) {
    let value
    if (node.type === 'decl') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (node.type === 'comment') {
      value = this.raw(node, null, 'beforeComment')
    } else if (detect === 'before') {
      value = this.raw(node, null, 'beforeRule')
    } else {
      value = this.raw(node, null, 'beforeClose')
    }

    let buf = node.parent
    let depth = 0
    while (buf && buf.type !== 'root') {
      depth += 1
      buf = buf.parent
    }

    if (value.includes('\n')) {
      let indent = this.raw(node, null, 'indent')
      if (indent.length) {
        for (let step = 0; step < depth; step++) value += indent
      }
    }

    return value
  }

  block(node, start) {
    let between = this.raw(node, 'between', 'beforeOpen')
    this.builder(escapeHTMLInCSS(start + between) + '{', node, 'start')

    let after
    if (node.nodes && node.nodes.length) {
      this.body(node)
      after = this.raw(node, 'after')
    } else {
      after = this.raw(node, 'after', 'emptyBody')
    }

    if (after) this.builder(escapeHTMLInCSS(after))
    this.builder('}', node, 'end')
  }

  body(node) {
    let nodes = node.nodes
    let last = nodes.length - 1
    while (last > 0) {
      if (nodes[last].type !== 'comment') break
      last -= 1
    }

    let semicolon = this.raw(node, 'semicolon')
    let isDocument = node.type === 'document'
    for (let i = 0; i < nodes.length; i++) {
      let child = nodes[i]
      let before = this.raw(child, 'before')
      if (before) this.builder(isDocument ? before : escapeHTMLInCSS(before))
      this.stringify(child, last !== i || semicolon)
    }
  }

  comment(node) {
    let left = this.raw(node, 'left', 'commentLeft')
    let right = this.raw(node, 'right', 'commentRight')
    this.builder(escapeHTMLInCSS('/*' + left + node.text + right + '*/'), node)
  }

  decl(node, semicolon) {
    let raws = node.raws
    let between = this.raw(node, 'between', 'colon')

    let string = node.prop + between + this.rawValue(node, 'value')

    if (node.important) {
      string += raws.important || ' !important'
    }

    if (semicolon) string += ';'
    this.builder(escapeHTMLInCSS(string), node)
  }

  document(node) {
    this.body(node)
  }

  raw(node, own, detect) {
    let value
    if (!detect) detect = own

    // Already had
    if (own) {
      value = node.raws[own]
      if (typeof value !== 'undefined') return value
    }

    let parent = node.parent

    if (detect === 'before') {
      // Hack for first rule in CSS
      if (!parent || (parent.type === 'root' && parent.first === node)) {
        return ''
      }

      // `root` nodes in `document` should use only their own raws
      if (parent && parent.type === 'document') {
        return ''
      }
    }

    // Floating child without parent
    if (!parent) return DEFAULT_RAW[detect]

    // Detect style by other nodes
    let root = node.root()
    let cache = root.rawCache || (root.rawCache = {})
    if (typeof cache[detect] !== 'undefined') {
      return cache[detect]
    }

    if (detect === 'before' || detect === 'after') {
      return this.beforeAfter(node, detect)
    } else {
      let method = 'raw' + capitalize(detect)
      if (this[method]) {
        value = this[method](root, node)
      } else {
        root.walk(i => {
          value = i.raws[own]
          if (typeof value !== 'undefined') return false
        })
      }
    }

    if (typeof value === 'undefined') value = DEFAULT_RAW[detect]

    cache[detect] = value
    return value
  }

  rawBeforeClose(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length > 0) {
        if (typeof i.raws.after !== 'undefined') {
          value = i.raws.after
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawBeforeComment(root, node) {
    let value
    root.walkComments(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeDecl')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeDecl(root, node) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.before !== 'undefined') {
        value = i.raws.before
        if (value.includes('\n')) {
          value = value.replace(/[^\n]+$/, '')
        }
        return false
      }
    })
    if (typeof value === 'undefined') {
      value = this.raw(node, null, 'beforeRule')
    } else if (value) {
      value = value.replace(/\S/g, '')
    }
    return value
  }

  rawBeforeOpen(root) {
    let value
    root.walk(i => {
      if (i.type !== 'decl') {
        value = i.raws.between
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawBeforeRule(root) {
    let value
    root.walk(i => {
      if (i.nodes && (i.parent !== root || root.first !== i)) {
        if (typeof i.raws.before !== 'undefined') {
          value = i.raws.before
          if (value.includes('\n')) {
            value = value.replace(/[^\n]+$/, '')
          }
          return false
        }
      }
    })
    if (value) value = value.replace(/\S/g, '')
    return value
  }

  rawColon(root) {
    let value
    root.walkDecls(i => {
      if (typeof i.raws.between !== 'undefined') {
        value = i.raws.between.replace(/[^\s:]/g, '')
        return false
      }
    })
    return value
  }

  rawEmptyBody(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length === 0) {
        value = i.raws.after
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawIndent(root) {
    if (root.raws.indent) return root.raws.indent
    let value
    root.walk(i => {
      let p = i.parent
      if (p && p !== root && p.parent && p.parent === root) {
        if (typeof i.raws.before !== 'undefined') {
          let parts = i.raws.before.split('\n')
          value = parts[parts.length - 1]
          value = value.replace(/\S/g, '')
          return false
        }
      }
    })
    return value
  }

  rawSemicolon(root) {
    let value
    root.walk(i => {
      if (i.nodes && i.nodes.length && i.last.type === 'decl') {
        value = i.raws.semicolon
        if (typeof value !== 'undefined') return false
      }
    })
    return value
  }

  rawValue(node, prop) {
    let value = node[prop]
    let raw = node.raws[prop]
    if (raw && raw.value === value) {
      return raw.raw
    }

    return value
  }

  root(node) {
    this.body(node)
    if (node.raws.after) {
      let after = node.raws.after
      let isDocument = node.parent && node.parent.type === 'document'
      this.builder(isDocument ? after : escapeHTMLInCSS(after))
    }
  }

  rule(node) {
    this.block(node, this.rawValue(node, 'selector'))
    if (node.raws.ownSemicolon) {
      this.builder(escapeHTMLInCSS(node.raws.ownSemicolon), node, 'end')
    }
  }

  stringify(node, semicolon) {
    /* c8 ignore start */
    if (!this[node.type]) {
      throw new Error(
        'Unknown AST node type ' +
          node.type +
          '. ' +
          'Maybe you need to change PostCSS stringifier.'
      )
    }
    /* c8 ignore stop */
    this[node.type](node, semicolon)
  }
}

module.exports = Stringifier
Stringifier.default = Stringifier


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringify.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringify.js ***!
  \*************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let Stringifier = __webpack_require__(/*! ./stringifier */ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/stringifier.js")

function stringify(node, builder) {
  let str = new Stringifier(builder)
  str.stringify(node)
}

module.exports = stringify
stringify.default = stringify


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/symbols.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/symbols.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports.isClean = Symbol('isClean')

module.exports.my = Symbol('my')


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/tokenize.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/tokenize.js ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";


const SINGLE_QUOTE = "'".charCodeAt(0)
const DOUBLE_QUOTE = '"'.charCodeAt(0)
const BACKSLASH = '\\'.charCodeAt(0)
const SLASH = '/'.charCodeAt(0)
const NEWLINE = '\n'.charCodeAt(0)
const SPACE = ' '.charCodeAt(0)
const FEED = '\f'.charCodeAt(0)
const TAB = '\t'.charCodeAt(0)
const CR = '\r'.charCodeAt(0)
const OPEN_SQUARE = '['.charCodeAt(0)
const CLOSE_SQUARE = ']'.charCodeAt(0)
const OPEN_PARENTHESES = '('.charCodeAt(0)
const CLOSE_PARENTHESES = ')'.charCodeAt(0)
const OPEN_CURLY = '{'.charCodeAt(0)
const CLOSE_CURLY = '}'.charCodeAt(0)
const SEMICOLON = ';'.charCodeAt(0)
const ASTERISK = '*'.charCodeAt(0)
const COLON = ':'.charCodeAt(0)
const AT = '@'.charCodeAt(0)

const RE_AT_END = /[\t\n\f\r "#'()/;[\\\]{}]/g
const RE_WORD_END = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g
const RE_BAD_BRACKET = /.[\r\n"'(/\\]/
const RE_HEX_ESCAPE = /[\da-f]/i

module.exports = function tokenizer(input, options = {}) {
  let css = input.css.valueOf()
  let ignore = options.ignoreErrors

  let code, content, escape, next, quote
  let currentToken, escaped, escapePos, n, prev

  let length = css.length
  let pos = 0
  let buffer = []
  let returned = []
  let lastBadParen = -1

  function position() {
    return pos
  }

  function unclosed(what) {
    throw input.error('Unclosed ' + what, pos)
  }

  function endOfFile() {
    return returned.length === 0 && pos >= length
  }

  function nextToken(opts) {
    if (returned.length) return returned.pop()
    if (pos >= length) return

    let ignoreUnclosed = opts ? opts.ignoreUnclosed : false

    code = css.charCodeAt(pos)

    switch (code) {
      case NEWLINE:
      case SPACE:
      case TAB:
      case CR:
      case FEED: {
        next = pos
        do {
          next += 1
          code = css.charCodeAt(next)
        } while (
          code === SPACE ||
          code === NEWLINE ||
          code === TAB ||
          code === CR ||
          code === FEED
        )

        currentToken = ['space', css.slice(pos, next)]
        pos = next - 1
        break
      }

      case OPEN_SQUARE:
      case CLOSE_SQUARE:
      case OPEN_CURLY:
      case CLOSE_CURLY:
      case COLON:
      case SEMICOLON:
      case CLOSE_PARENTHESES: {
        let controlChar = String.fromCharCode(code)
        currentToken = [controlChar, controlChar, pos]
        break
      }

      case OPEN_PARENTHESES: {
        prev = buffer.length ? buffer.pop()[1] : ''
        n = css.charCodeAt(pos + 1)
        if (
          prev === 'url' &&
          n !== SINGLE_QUOTE &&
          n !== DOUBLE_QUOTE &&
          n !== SPACE &&
          n !== NEWLINE &&
          n !== TAB &&
          n !== FEED &&
          n !== CR
        ) {
          next = pos
          do {
            escaped = false
            next = css.indexOf(')', next + 1)
            if (next === -1) {
              if (ignore || ignoreUnclosed) {
                next = pos
                break
              } else {
                unclosed('bracket')
              }
            }
            escapePos = next
            while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
              escapePos -= 1
              escaped = !escaped
            }
          } while (escaped)

          currentToken = ['brackets', css.slice(pos, next + 1), pos, next]

          pos = next
        } else if (pos <= lastBadParen) {
          currentToken = ['(', '(', pos]
        } else {
          next = css.indexOf(')', pos + 1)
          content = css.slice(pos, next + 1)

          if (next === -1 || RE_BAD_BRACKET.test(content)) {
            lastBadParen = next === -1 ? length : next
            currentToken = ['(', '(', pos]
          } else {
            currentToken = ['brackets', content, pos, next]
            pos = next
          }
        }

        break
      }

      case SINGLE_QUOTE:
      case DOUBLE_QUOTE: {
        quote = code === SINGLE_QUOTE ? "'" : '"'
        next = pos
        do {
          escaped = false
          next = css.indexOf(quote, next + 1)
          if (next === -1) {
            if (ignore || ignoreUnclosed) {
              next = pos + 1
              break
            } else {
              unclosed('string')
            }
          }
          escapePos = next
          while (css.charCodeAt(escapePos - 1) === BACKSLASH) {
            escapePos -= 1
            escaped = !escaped
          }
        } while (escaped)

        currentToken = ['string', css.slice(pos, next + 1), pos, next]
        pos = next
        break
      }

      case AT: {
        RE_AT_END.lastIndex = pos + 1
        RE_AT_END.test(css)
        if (RE_AT_END.lastIndex === 0) {
          next = css.length - 1
        } else {
          next = RE_AT_END.lastIndex - 2
        }

        currentToken = ['at-word', css.slice(pos, next + 1), pos, next]

        pos = next
        break
      }

      case BACKSLASH: {
        next = pos
        escape = true
        while (css.charCodeAt(next + 1) === BACKSLASH) {
          next += 1
          escape = !escape
        }
        code = css.charCodeAt(next + 1)
        if (
          escape &&
          code !== SLASH &&
          code !== SPACE &&
          code !== NEWLINE &&
          code !== TAB &&
          code !== CR &&
          code !== FEED
        ) {
          next += 1
          if (RE_HEX_ESCAPE.test(css.charAt(next))) {
            while (RE_HEX_ESCAPE.test(css.charAt(next + 1))) {
              next += 1
            }
            if (css.charCodeAt(next + 1) === SPACE) {
              next += 1
            }
          }
        }

        currentToken = ['word', css.slice(pos, next + 1), pos, next]

        pos = next
        break
      }

      default: {
        if (code === SLASH && css.charCodeAt(pos + 1) === ASTERISK) {
          next = css.indexOf('*/', pos + 2) + 1
          if (next === 0) {
            if (ignore || ignoreUnclosed) {
              next = css.length
            } else {
              unclosed('comment')
            }
          }

          currentToken = ['comment', css.slice(pos, next + 1), pos, next]
          pos = next
        } else {
          RE_WORD_END.lastIndex = pos + 1
          RE_WORD_END.test(css)
          if (RE_WORD_END.lastIndex === 0) {
            next = css.length - 1
          } else {
            next = RE_WORD_END.lastIndex - 2
          }

          currentToken = ['word', css.slice(pos, next + 1), pos, next]
          buffer.push(currentToken)
          pos = next
        }

        break
      }
    }

    pos++
    return currentToken
  }

  function back(token) {
    returned.push(token)
  }

  return {
    back,
    endOfFile,
    nextToken,
    position
  }
}


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/warn-once.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/warn-once.js ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
/* eslint-disable no-console */


let printed = {}

module.exports = function warnOnce(message) {
  if (printed[message]) return
  printed[message] = true

  if (typeof console !== 'undefined' && console.warn) {
    console.warn(message)
  }
}


/***/ }),

/***/ "../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/warning.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/.pnpm/postcss@8.5.14/node_modules/postcss/lib/warning.js ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";


class Warning {
  constructor(text, opts = {}) {
    this.type = 'warning'
    this.text = text

    if (opts.node && opts.node.source) {
      let range = opts.node.rangeBy(opts)
      this.line = range.start.line
      this.column = range.start.column
      this.endLine = range.end.line
      this.endColumn = range.end.column
    }

    for (let opt in opts) this[opt] = opts[opt]
  }

  toString() {
    if (this.node) {
      return this.node.error(this.text, {
        index: this.index,
        plugin: this.plugin,
        word: this.word
      }).message
    }

    if (this.plugin) {
      return this.plugin + ': ' + this.text
    }

    return this.text
  }
}

module.exports = Warning
Warning.default = Warning


/***/ }),

/***/ "../../packages/external/components.ts":
/*!*********************************************!*\
  !*** ../../packages/external/components.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignmentControl: () => (/* binding */ AlignmentControl),
/* harmony export */   BorderControl: () => (/* binding */ BorderControl),
/* harmony export */   BorderRadiusControl: () => (/* binding */ BorderRadiusControl),
/* harmony export */   BuilderApp: () => (/* binding */ BuilderApp),
/* harmony export */   ChoiceGroup: () => (/* binding */ ChoiceGroup),
/* harmony export */   ColorControl: () => (/* binding */ ColorControl),
/* harmony export */   EnhancedControl: () => (/* binding */ EnhancedControl),
/* harmony export */   IconPicker: () => (/* binding */ IconPicker),
/* harmony export */   ImagePicker: () => (/* binding */ ImagePicker),
/* harmony export */   LongTextControl: () => (/* binding */ LongTextControl),
/* harmony export */   Modal: () => (/* binding */ Modal),
/* harmony export */   NetIcon: () => (/* binding */ NetIcon),
/* harmony export */   Notifications: () => (/* binding */ Notifications),
/* harmony export */   PanelBody: () => (/* binding */ PanelBody),
/* harmony export */   RadioGroup: () => (/* binding */ RadioGroup),
/* harmony export */   RangeControl: () => (/* binding */ RangeControl),
/* harmony export */   RichText: () => (/* binding */ RichText),
/* harmony export */   SelectControl: () => (/* binding */ SelectControl),
/* harmony export */   SizeControl: () => (/* binding */ SizeControl),
/* harmony export */   SizeXYControl: () => (/* binding */ SizeXYControl),
/* harmony export */   SpacingControl: () => (/* binding */ SpacingControl),
/* harmony export */   SwitchControl: () => (/* binding */ SwitchControl),
/* harmony export */   Tab: () => (/* binding */ Tab),
/* harmony export */   TextControl: () => (/* binding */ TextControl),
/* harmony export */   ToolbarBtn: () => (/* binding */ ToolbarBtn),
/* harmony export */   UnitControl: () => (/* binding */ UnitControl)
/* harmony export */ });
const {
  AlignmentControl,
  BorderControl,
  BorderRadiusControl,
  ChoiceGroup,
  ColorControl,
  IconPicker,
  ImagePicker,
  LongTextControl,
  Modal,
  NetIcon,
  PanelBody,
  RadioGroup,
  RangeControl,
  SelectControl,
  SizeControl,
  SizeXYControl,
  SpacingControl,
  SwitchControl,
  Tab,
  TextControl,
  UnitControl,
  RichText
} = WPTB.modules.components;
const {
  EnhancedControl,
  Notifications,
  BuilderApp,
  ToolbarBtn
} = WPTB.components;

/***/ }),

/***/ "../../packages/external/front-utils.ts":
/*!**********************************************!*\
  !*** ../../packages/external/front-utils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildBlockRecursive: () => (/* binding */ buildBlockRecursive),
/* harmony export */   initializeFunctionality: () => (/* binding */ initializeFunctionality),
/* harmony export */   renderTable: () => (/* binding */ renderTable),
/* harmony export */   transformTable: () => (/* binding */ transformTable)
/* harmony export */ });
const {
  buildBlockRecursive,
  renderTable,
  initializeFunctionality,
  transformTable
} = WPTB.frontend;

/***/ }),

/***/ "../../packages/external/react-dom/client.ts":
/*!***************************************************!*\
  !*** ../../packages/external/react-dom/client.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRoot: () => (/* binding */ createRoot)
/* harmony export */ });
const {
  createRoot
} = WPTB.modules.ReactDOMClient;

/***/ }),

/***/ "../../packages/external/react-redux.ts":
/*!**********************************************!*\
  !*** ../../packages/external/react-redux.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* binding */ Provider),
/* harmony export */   useDispatch: () => (/* binding */ useDispatch),
/* harmony export */   useSelector: () => (/* binding */ useSelector)
/* harmony export */ });
const {
  useDispatch,
  useSelector,
  Provider
} = WPTB.modules.ReactRedux;

/***/ }),

/***/ "../../packages/external/react.ts":
/*!****************************************!*\
  !*** ../../packages/external/react.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StrictMode: () => (/* binding */ StrictMode),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   useCallback: () => (/* binding */ useCallback),
/* harmony export */   useEffect: () => (/* binding */ useEffect),
/* harmony export */   useLayoutEffect: () => (/* binding */ useLayoutEffect),
/* harmony export */   useMemo: () => (/* binding */ useMemo),
/* harmony export */   useRef: () => (/* binding */ useRef),
/* harmony export */   useState: () => (/* binding */ useState)
/* harmony export */ });
const {
  createElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  StrictMode
} = WPTB.modules.React;

/***/ }),

/***/ "../../packages/external/store.ts":
/*!****************************************!*\
  !*** ../../packages/external/store.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBlock: () => (/* binding */ addBlock),
/* harmony export */   addColumn: () => (/* binding */ addColumn),
/* harmony export */   addNotification: () => (/* binding */ addNotification),
/* harmony export */   addRow: () => (/* binding */ addRow),
/* harmony export */   changeId: () => (/* binding */ changeId),
/* harmony export */   clearNotification: () => (/* binding */ clearNotification),
/* harmony export */   customReducer: () => (/* binding */ customReducer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   duplicateBlock: () => (/* binding */ duplicateBlock),
/* harmony export */   mergeCells: () => (/* binding */ mergeCells),
/* harmony export */   moveBlockInto: () => (/* binding */ moveBlockInto),
/* harmony export */   removeBlock: () => (/* binding */ removeBlock),
/* harmony export */   removeCol: () => (/* binding */ removeCol),
/* harmony export */   removeRow: () => (/* binding */ removeRow),
/* harmony export */   setActiveBlock: () => (/* binding */ setActiveBlock),
/* harmony export */   setNotificationItems: () => (/* binding */ setNotificationItems),
/* harmony export */   setResponsive: () => (/* binding */ setResponsive),
/* harmony export */   setSettings: () => (/* binding */ setSettings),
/* harmony export */   setTable: () => (/* binding */ setTable),
/* harmony export */   setTableInfo: () => (/* binding */ setTableInfo),
/* harmony export */   setUpsell: () => (/* binding */ setUpsell),
/* harmony export */   sortColumns: () => (/* binding */ sortColumns),
/* harmony export */   sortRows: () => (/* binding */ sortRows),
/* harmony export */   splitCell: () => (/* binding */ splitCell),
/* harmony export */   startBuilder: () => (/* binding */ startBuilder),
/* harmony export */   startSaving: () => (/* binding */ startSaving),
/* harmony export */   timeTravel: () => (/* binding */ timeTravel),
/* harmony export */   timeTravelAdded: () => (/* binding */ timeTravelAdded),
/* harmony export */   updateNotification: () => (/* binding */ updateNotification)
/* harmony export */ });
const store = WPTB.store.store;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);
const {
  addNotification,
  setNotificationItems,
  updateNotification,
  clearNotification,
  setUpsell,
  setTable,
  changeId,
  startBuilder,
  setTableInfo,
  setResponsive,
  addBlock,
  removeBlock,
  duplicateBlock,
  moveBlockInto,
  mergeCells,
  splitCell,
  removeCol,
  removeRow,
  addColumn,
  addRow,
  sortRows,
  sortColumns,
  customReducer,
  setSettings,
  setActiveBlock,
  timeTravel,
  timeTravelAdded,
  startSaving
} = WPTB.store.actions;

/***/ }),

/***/ "../../packages/external/utils.ts":
/*!****************************************!*\
  !*** ../../packages/external/utils.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuilderCtx: () => (/* binding */ BuilderCtx),
/* harmony export */   TimeTravel: () => (/* binding */ TimeTravel),
/* harmony export */   cloneBlock: () => (/* binding */ cloneBlock),
/* harmony export */   createNewTable: () => (/* binding */ createNewTable),
/* harmony export */   getRepairedTableHtml: () => (/* binding */ getRepairedTableHtml),
/* harmony export */   insertInnerBlock: () => (/* binding */ insertInnerBlock),
/* harmony export */   notify: () => (/* binding */ notify),
/* harmony export */   parseTable: () => (/* binding */ parseTable),
/* harmony export */   removeBlock: () => (/* binding */ removeBlock),
/* harmony export */   updateNotification: () => (/* binding */ updateNotification)
/* harmony export */ });
const {
  notify,
  updateNotification,
  parseTable,
  createNewTable,
  cloneBlock,
  insertInnerBlock,
  removeBlock,
  TimeTravel,
  BuilderCtx,
  getRepairedTableHtml
} = WPTB.utils;

/***/ }),

/***/ "../../packages/ui/components/pagination/index.tsx":
/*!*********************************************************!*\
  !*** ../../packages/ui/components/pagination/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Pagination = ({
  apiData,
  setPage
}) => {
  const paginate = page => {
    if (!apiData || page < 1 || page > apiData.total_pages || page === apiData.current_page) {
      return;
    }
    setPage(page);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "wptb-pagination",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "wptb-pagination-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
          "wptb-pagination-disabled": apiData.current_page === 1
        }),
        onClick: () => paginate(apiData.current_page - 1),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            d: "m15 6l-6 6l6 6"
          })
        })
      }), apiData.pages.map(page => page !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
          "wptb-pagination-active": page === apiData.current_page
        }),
        onClick: () => paginate(page),
        children: page
      }, page) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "wptb-page-divider",
        children: "..."
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
        type: "button",
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
          "wptb-pagination-disabled": apiData.current_page === apiData.total_pages
        }),
        onClick: () => paginate(apiData.current_page + 1),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 24 24",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            d: "m9 6l6 6l-6 6"
          })
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);

/***/ }),

/***/ "../../packages/ui/components/table-list/index.tsx":
/*!*********************************************************!*\
  !*** ../../packages/ui/components/table-list/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const columnConfig = {
  id: {
    label: "ID",
    width: "80px"
  },
  title: {
    label: "Title"
  },
  date: {
    label: "Created"
  },
  modified: {
    label: "Last Modified"
  }
};
const TableList = ({
  onSelect,
  sorting: [sort, sortBy],
  isLoading,
  items,
  columns = Object.keys(columnConfig),
  checkbox,
  checked,
  onAllCheck,
  noItemsMessage = "No tables found",
  htmlColumns
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("table", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("wptb-v2-table-list", {
      "wptb-table-loading": isLoading
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("colgroup", {
      children: [checkbox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("col", {
        style: {
          width: "40px"
        }
      }), columns.map(column => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("col", {
        style: {
          width: columnConfig[column].width
        }
      }, column))]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
        children: [checkbox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "checkbox",
            checked: !!checked,
            onChange: e => onAllCheck?.(e.currentTarget.checked)
          })
        }), columns.map(column => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("th", {
          onClick: () => sortBy(column),
          children: [columnConfig[column].label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            type: "button",
            className: classnames__WEBPACK_IMPORTED_MODULE_0___default()("wptb-table-sort-btn", {
              "wptb-sort-btn-asc": sort.by === column && sort.order === "asc",
              "wptb-sort-btn-desc": sort.by === column && sort.order !== "asc"
            })
          })]
        }, column))]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tbody", {
      children: isLoading ? Array(5).fill(0).map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
        children: [checkbox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {}), columns.map(column => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            "data-column": column
          })
        }, column))]
      }, i)) : !items.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("tr", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
          colSpan: columns.length + (checkbox ? 1 : 0),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            children: noItemsMessage
          })
        })
      }) : items.map(post => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
        onClick: () => onSelect(post),
        children: [checkbox && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
            type: "checkbox",
            defaultChecked: checked
          })
        }), columns.map(column => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("td", {
          children: htmlColumns?.[column] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: post[column]
            }
          }) : post[column] || "-"
        }, column))]
      }, post.id))
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableList);

/***/ }),

/***/ "../../packages/ui/icons/actions.tsx":
/*!*******************************************!*\
  !*** ../../packages/ui/icons/actions.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddColToLeftIcon: () => (/* binding */ AddColToLeftIcon),
/* harmony export */   AddColToRightIcon: () => (/* binding */ AddColToRightIcon),
/* harmony export */   AddRowAboveIcon: () => (/* binding */ AddRowAboveIcon),
/* harmony export */   AddRowBelowIcon: () => (/* binding */ AddRowBelowIcon),
/* harmony export */   CopyIcon: () => (/* binding */ CopyIcon),
/* harmony export */   DuplicateColIcon: () => (/* binding */ DuplicateColIcon),
/* harmony export */   DuplicateRowIcon: () => (/* binding */ DuplicateRowIcon),
/* harmony export */   MergeCellsIcon: () => (/* binding */ MergeCellsIcon),
/* harmony export */   PreviewIcon: () => (/* binding */ PreviewIcon),
/* harmony export */   RedoIcon: () => (/* binding */ RedoIcon),
/* harmony export */   RemoveColIcon: () => (/* binding */ RemoveColIcon),
/* harmony export */   RemoveRowIcon: () => (/* binding */ RemoveRowIcon),
/* harmony export */   ResetIcon: () => (/* binding */ ResetIcon),
/* harmony export */   RestoreIcon: () => (/* binding */ RestoreIcon),
/* harmony export */   SaveIcon: () => (/* binding */ SaveIcon),
/* harmony export */   SearchIcon: () => (/* binding */ SearchIcon),
/* harmony export */   SplitCellIcon: () => (/* binding */ SplitCellIcon),
/* harmony export */   SplitIcon: () => (/* binding */ SplitIcon),
/* harmony export */   SwitchIcon: () => (/* binding */ SwitchIcon),
/* harmony export */   TimesIcon: () => (/* binding */ TimesIcon),
/* harmony export */   TrashIcon: () => (/* binding */ TrashIcon),
/* harmony export */   UnSplitIcon: () => (/* binding */ UnSplitIcon),
/* harmony export */   UndoIcon: () => (/* binding */ UndoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const TrashIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 26 26",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mask", {
        id: "pepiconsPopTrashCircleFilled0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
          fill: "#fff",
          d: "M0 0h26v26H0z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
          fill: "#000",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.937 7.5h-3.874A2.003 2.003 0 0 1 13 5a2.003 2.003 0 0 1 1.937 2.5"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M7.5 8.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2z"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            d: "M17.5 21.5a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zM13 11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5m-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z",
            clipRule: "evenodd"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "13",
      cy: "13",
      r: "13",
      fill: "currentColor",
      mask: "url(#pepiconsPopTrashCircleFilled0)"
    })]
  })
});
const RestoreIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M13 3a9 9 0 0 0-9 9H1l4 3.99L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.95 8.95 0 0 0 13 21a9 9 0 0 0 0-18m-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z"
  })
});
const ResetIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 20",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M6.03 2.47a.75.75 0 0 1 0 1.06L4.81 4.75H11A6.25 6.25 0 1 1 4.75 11a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 0 11 6.25H4.81l1.22 1.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"
  })
});
const SplitIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"
  })
});
const UnSplitIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
  })
});
const TimesIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  height: "1em",
  width: "1em",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M17 7L7 17M7 7l10 10"
  })
});
const CopyIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  height: "1em",
  width: "1em",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M4 5.4C4 4.622 4.622 4 5.4 4h7.2c.778 0 1.4.622 1.4 1.4V6a1 1 0 1 0 2 0v-.6C16 3.518 14.482 2 12.6 2H5.4A3.394 3.394 0 0 0 2 5.4v7.2C2 14.482 3.518 16 5.4 16H6a1 1 0 1 0 0-2h-.6c-.778 0-1.4-.622-1.4-1.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M9 11.4A2.4 2.4 0 0 1 11.4 9h7.2a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4h-7.2A2.4 2.4 0 0 1 9 18.6z"
  })]
});
const SearchIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 48 48",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: "4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinecap: "round",
      d: "M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
    })]
  })
});
const SwitchIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M3 17h2.397a5 5 0 0 0 4.096-2.133l.177-.253m3.66-5.227l.177-.254A5 5 0 0 1 17.603 7H21"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "m18 4l3 3l-3 3M3 7h2.397a5 5 0 0 1 4.096 2.133l4.014 5.734A5 5 0 0 0 17.603 17H21"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "m18 20l3-3l-3-3"
    })]
  })
});
const UndoIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4z"
  })
});
const RedoIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M9 18h3v-2H9c-1.654 0-3-1.346-3-3s1.346-3 3-3h6v3l5-4l-5-4v3H9c-2.757 0-5 2.243-5 5s2.243 5 5 5"
  })
});
const PreviewIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: "1.5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M10.584 21.25h-1.25a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6h6.5a6 6 0 0 1 6 6V10"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      strokeLinejoin: "round",
      d: "m16.55 16.864l-.51 2.959a1.164 1.164 0 0 1-2.212.093l-2.789-7.882a1.164 1.164 0 0 1 1.493-1.493l8.036 2.788a1.164 1.164 0 0 1-.115 2.234l-3.113.51a1.17 1.17 0 0 0-.79.791"
    })]
  })
});
const SaveIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M20 7.423v10.962q0 .69-.462 1.153T18.384 20H5.616q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h10.961zm-8.004 9.115q.831 0 1.417-.582T14 14.543t-.582-1.418t-1.413-.586t-1.419.581T10 14.535t.582 1.418t1.414.587M6.769 9.77h7.423v-3H6.77z"
  })
});
const AddColToLeftIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M14 19h6V5h-6zm-8 2q-.825 0-1.412-.587T4 19v-1q0-.425.288-.712T5 17t.713.288T6 18v1h6V5H6v1q0 .425-.288.713T5 7t-.712-.288T4 6V5q0-.825.588-1.412T6 3h14q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm-1-6q-.425 0-.712-.288T4 14v-1H3q-.425 0-.712-.288T2 12t.288-.712T3 11h1v-1q0-.425.288-.712T5 9t.713.288T6 10v1h1q.425 0 .713.288T8 12t-.288.713T7 13H6v1q0 .425-.288.713T5 15m9-3h-2zm0 0"
  })
});
const AddColToRightIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M10 5H4v14h6zM4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h14q.825 0 1.413.588T20 5v1q0 .425-.288.713T19 7t-.712-.288T18 6V5h-6v14h6v-1q0-.425.288-.712T19 17t.713.288T20 18v1q0 .825-.587 1.413T18 21zm15-6q-.425 0-.712-.288T18 14v-1h-1q-.425 0-.712-.288T16 12t.288-.712T17 11h1v-1q0-.425.288-.712T19 9t.713.288T20 10v1h1q.425 0 .713.288T22 12t-.288.713T21 13h-1v1q0 .425-.288.713T19 15m-9-3h2zm0 0"
  })
});
const RemoveColIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 20",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M6.4 9.98L7.68 8.7v-.256L6.4 7.164zm6.4-1.532l1.28-1.28V9.92L12.8 8.64zm7.68 9.472V0H0v17.92zm-1.28-2.56h-5.12v-1.024l-.256.256l-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024l-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704l.576.576V1.216h5.12V3.52l.96-.96l.32.32V1.216h5.12zm-5.76-2.112l-3.136-3.136l-3.264 3.264l-1.536-1.536l3.264-3.264L5.632 5.44l1.536-1.536l3.136 3.136l3.2-3.2l1.536 1.536l-3.2 3.2l3.136 3.136z"
  })
});
const DuplicateColIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 16 16",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M1 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm3 1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5A.5.5 0 0 0 4 5m5-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2 1.5a.5.5 0 0 0 .5.5h.5v1.5h-.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 0-1H12V8.5h.5A.5.5 0 0 0 13 8V5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5"
  })
});
const AddRowAboveIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M5 14v6h14v-6zm0 8q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1q.425 0 .713.288T7 5t-.288.713T6 6H5v6h14V6h-1q-.425 0-.712-.288T17 5t.288-.712T18 4h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm6-16h-1q-.425 0-.712-.288T9 5t.288-.712T10 4h1V3q0-.425.288-.712T12 2t.713.288T13 3v1h1q.425 0 .713.288T15 5t-.288.713T14 6h-1v1q0 .425-.288.713T12 8t-.712-.288T11 7zm1 8v-2zm0 0"
  })
});
const AddRowBelowIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M19 10V4H5v6zM5 20q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.587 1.413T19 20h-1q-.425 0-.712-.288T17 19t.288-.712T18 18h1v-6H5v6h1q.425 0 .713.288T7 19t-.288.713T6 20zm7 2q-.425 0-.712-.288T11 21v-1h-1q-.425 0-.712-.288T9 19t.288-.712T10 18h1v-1q0-.425.288-.712T12 16t.713.288T13 17v1h1q.425 0 .713.288T15 19t-.288.713T14 20h-1v1q0 .425-.288.713T12 22m0-12v2zm0 0"
  })
});
const RemoveRowIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 20 20",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M17.728 11.456L14.592 8.32l3.2-3.2l-1.536-1.536l-3.2 3.2L9.92 3.648L8.384 5.12l3.2 3.2l-3.264 3.264l1.536 1.536l3.264-3.264l3.136 3.136zM0 17.92V0h20.48v17.92zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2z"
  })
});
const DuplicateRowIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 2048 2048",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M2048 1024v640H768v-256H256V896H0V256h1280v640H384v384h384v-256zM128 768h1024V384H128zm1792 384H896v384h1024z"
  })
});
const MergeCellsIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M2 2h20v20H2zm2 2v16h7v-4h2v4h7V4h-7v4h-2V4zm13.182 6.232L15.414 12l1.768 1.768l-1.414 1.414L12.586 12l3.182-3.182zM8.33 8.818L11.512 12L8.33 15.182l-1.414-1.414L8.683 12l-1.767-1.768z"
  })
});
const SplitCellIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 15 15",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "currentColor",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "7",
      y: "5.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "7",
      y: "3.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "7",
      y: "7.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "7",
      y: "13.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "7",
      y: "1.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "13",
      y: "7.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "5",
      y: "7.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "3",
      y: "7.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "9",
      y: "7.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "11",
      y: "7.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "7",
      y: "9.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "7",
      y: "11.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "1",
      height: "1",
      x: "1",
      y: "7.025",
      rx: ".5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      d: "M1 1.5a.5.5 0 0 1 .5-.5H6v1H2v4H1zM13 2H9V1h4.5a.5.5 0 0 1 .5.5V6h-1zM1 13.5V9h1v4h4v1H1.5a.5.5 0 0 1-.5-.5m12-.5V9h1v4.5a.5.5 0 0 1-.5.5h-4v-1z",
      clipRule: "evenodd"
    })]
  })
});

/***/ }),

/***/ "../../packages/ui/icons/box-sides.tsx":
/*!*********************************************!*\
  !*** ../../packages/ui/icons/box-sides.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoxAllSide: () => (/* binding */ BoxAllSide),
/* harmony export */   BoxBottomSide: () => (/* binding */ BoxBottomSide),
/* harmony export */   BoxHorizontalSide: () => (/* binding */ BoxHorizontalSide),
/* harmony export */   BoxLeftSide: () => (/* binding */ BoxLeftSide),
/* harmony export */   BoxRightSide: () => (/* binding */ BoxRightSide),
/* harmony export */   BoxTopSide: () => (/* binding */ BoxTopSide),
/* harmony export */   BoxVerticalSide: () => (/* binding */ BoxVerticalSide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BoxAllSide = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z"
  })
});
const BoxTopSide = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
    style: {
      opacity: 0.25
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m16.5 6h-9v-1.5h9z"
  })]
});
const BoxRightSide = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
    style: {
      opacity: 0.25
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m18 16.5v-9h1.5v9z"
  })]
});
const BoxBottomSide = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
    style: {
      opacity: 0.25
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m16.5 19.5h-9v-1.5h9z",
    fill: "rgb(30, 30, 30)"
  })]
});
const BoxLeftSide = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
    style: {
      opacity: 0.25
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m4.5 16.5v-9h1.5v9z"
  })]
});
const BoxVerticalSide = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
    style: {
      opacity: 0.25
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 6h9v-1.5h-9z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 19.5h9v-1.5h-9z"
  })]
});
const BoxHorizontalSide = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m7.5 6h9v-1.5h-9zm0 13.5h9v-1.5h-9zm-3-3h1.5v-9h-1.5zm13.5-9v9h1.5v-9z",
    style: {
      opacity: 0.25
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m4.5 7.5v9h1.5v-9z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "m18 7.5v9h1.5v-9z"
  })]
});

/***/ }),

/***/ "../../packages/ui/icons/index.ts":
/*!****************************************!*\
  !*** ../../packages/ui/icons/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddColToLeftIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.AddColToLeftIcon),
/* harmony export */   AddColToRightIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.AddColToRightIcon),
/* harmony export */   AddRowAboveIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.AddRowAboveIcon),
/* harmony export */   AddRowBelowIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.AddRowBelowIcon),
/* harmony export */   BoxAllSide: () => (/* reexport safe */ _box_sides__WEBPACK_IMPORTED_MODULE_1__.BoxAllSide),
/* harmony export */   BoxBottomSide: () => (/* reexport safe */ _box_sides__WEBPACK_IMPORTED_MODULE_1__.BoxBottomSide),
/* harmony export */   BoxHorizontalSide: () => (/* reexport safe */ _box_sides__WEBPACK_IMPORTED_MODULE_1__.BoxHorizontalSide),
/* harmony export */   BoxLeftSide: () => (/* reexport safe */ _box_sides__WEBPACK_IMPORTED_MODULE_1__.BoxLeftSide),
/* harmony export */   BoxRightSide: () => (/* reexport safe */ _box_sides__WEBPACK_IMPORTED_MODULE_1__.BoxRightSide),
/* harmony export */   BoxTopSide: () => (/* reexport safe */ _box_sides__WEBPACK_IMPORTED_MODULE_1__.BoxTopSide),
/* harmony export */   BoxVerticalSide: () => (/* reexport safe */ _box_sides__WEBPACK_IMPORTED_MODULE_1__.BoxVerticalSide),
/* harmony export */   CheckSign: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.CheckSign),
/* harmony export */   ChevronDownIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon),
/* harmony export */   ChevronUpIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon),
/* harmony export */   CopyIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.CopyIcon),
/* harmony export */   DesktopIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.DesktopIcon),
/* harmony export */   DownloadingLoopIcon: () => (/* reexport safe */ _loaders__WEBPACK_IMPORTED_MODULE_2__.DownloadingLoopIcon),
/* harmony export */   DuplicateColIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.DuplicateColIcon),
/* harmony export */   DuplicateRowIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.DuplicateRowIcon),
/* harmony export */   EllipsisLoadingIcon: () => (/* reexport safe */ _loaders__WEBPACK_IMPORTED_MODULE_2__.EllipsisLoadingIcon),
/* harmony export */   ErrorSign: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.ErrorSign),
/* harmony export */   LoadingSpinnerIcon: () => (/* reexport safe */ _loaders__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerIcon),
/* harmony export */   LockIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.LockIcon),
/* harmony export */   MergeCellsIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.MergeCellsIcon),
/* harmony export */   MobileIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.MobileIcon),
/* harmony export */   PreviewIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.PreviewIcon),
/* harmony export */   RedoIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.RedoIcon),
/* harmony export */   RemoveColIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.RemoveColIcon),
/* harmony export */   RemoveRowIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.RemoveRowIcon),
/* harmony export */   ResetIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.ResetIcon),
/* harmony export */   RestoreIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.RestoreIcon),
/* harmony export */   SaveIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.SaveIcon),
/* harmony export */   SearchIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.SearchIcon),
/* harmony export */   SplitCellIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.SplitCellIcon),
/* harmony export */   SplitIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.SplitIcon),
/* harmony export */   SwitchIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.SwitchIcon),
/* harmony export */   TableIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.TableIcon),
/* harmony export */   TabletIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.TabletIcon),
/* harmony export */   TemplateIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.TemplateIcon),
/* harmony export */   TimesIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.TimesIcon),
/* harmony export */   TrashIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.TrashIcon),
/* harmony export */   UnSplitIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.UnSplitIcon),
/* harmony export */   UndoIcon: () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_0__.UndoIcon),
/* harmony export */   UploadingLoopIcon: () => (/* reexport safe */ _loaders__WEBPACK_IMPORTED_MODULE_2__.UploadingLoopIcon),
/* harmony export */   WPTBLogo: () => (/* reexport safe */ _logo__WEBPACK_IMPORTED_MODULE_4__.WPTBLogo),
/* harmony export */   WarningIcon: () => (/* reexport safe */ _sign__WEBPACK_IMPORTED_MODULE_3__.WarningIcon)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "../../packages/ui/icons/actions.tsx");
/* harmony import */ var _box_sides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./box-sides */ "../../packages/ui/icons/box-sides.tsx");
/* harmony import */ var _loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loaders */ "../../packages/ui/icons/loaders.tsx");
/* harmony import */ var _sign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign */ "../../packages/ui/icons/sign.tsx");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo */ "../../packages/ui/icons/logo.tsx");






/***/ }),

/***/ "../../packages/ui/icons/loaders.tsx":
/*!*******************************************!*\
  !*** ../../packages/ui/icons/loaders.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadingLoopIcon: () => (/* binding */ DownloadingLoopIcon),
/* harmony export */   EllipsisLoadingIcon: () => (/* binding */ EllipsisLoadingIcon),
/* harmony export */   LoadingSpinnerIcon: () => (/* binding */ LoadingSpinnerIcon),
/* harmony export */   UploadingLoopIcon: () => (/* binding */ UploadingLoopIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const DownloadingLoopIcon = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeDasharray: "2 4",
        strokeDashoffset: 6,
        d: "M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
          attributeName: "stroke-dashoffset",
          dur: "0.6s",
          repeatCount: "indefinite",
          values: "6;0"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeDasharray: 32,
        strokeDashoffset: 32,
        d: "M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
          fill: "freeze",
          attributeName: "stroke-dashoffset",
          begin: "0.1s",
          dur: "0.4s",
          values: "32;0"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeDasharray: 10,
        strokeDashoffset: 10,
        d: "M12 8v7.5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
          fill: "freeze",
          attributeName: "stroke-dashoffset",
          begin: "0.5s",
          dur: "0.2s",
          values: "10;0"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeDasharray: 6,
        strokeDashoffset: 6,
        d: "M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
          fill: "freeze",
          attributeName: "stroke-dashoffset",
          begin: "0.7s",
          dur: "0.2s",
          values: "6;0"
        })
      })]
    })
  });
};
const UploadingLoopIcon = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeDasharray: "2 4",
        strokeDashoffset: "6",
        d: "M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
          attributeName: "stroke-dashoffset",
          dur: "0.6s",
          repeatCount: "indefinite",
          values: "6;0"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeDasharray: "32",
        strokeDashoffset: "32",
        d: "M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
          fill: "freeze",
          attributeName: "stroke-dashoffset",
          begin: "0.1s",
          dur: "0.4s",
          values: "32;0"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeDasharray: "10",
        strokeDashoffset: "10",
        d: "M12 16v-7.5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
          fill: "freeze",
          attributeName: "stroke-dashoffset",
          begin: "0.5s",
          dur: "0.2s",
          values: "10;0"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        strokeDasharray: "6",
        strokeDashoffset: "6",
        d: "M12 8.5l3.5 3.5M12 8.5l-3.5 3.5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
          fill: "freeze",
          attributeName: "stroke-dashoffset",
          begin: "0.7s",
          dur: "0.2s",
          values: "6;0"
        })
      })]
    })
  });
};
const EllipsisLoadingIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "18",
    cy: "12",
    r: "0",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "r",
      begin: ".67",
      calcMode: "spline",
      dur: "1.5s",
      keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
      repeatCount: "indefinite",
      values: "0;2;0;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "12",
    cy: "12",
    r: "0",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "r",
      begin: ".33",
      calcMode: "spline",
      dur: "1.5s",
      keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
      repeatCount: "indefinite",
      values: "0;2;0;0"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "6",
    cy: "12",
    r: "0",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animate", {
      attributeName: "r",
      begin: "0",
      calcMode: "spline",
      dur: "1.5s",
      keySplines: "0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8",
      repeatCount: "indefinite",
      values: "0;2;0;0"
    })
  })]
});
const LoadingSpinnerIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",
    opacity: "0.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("animateTransform", {
      attributeName: "transform",
      dur: "1s",
      from: "0 12 12",
      repeatCount: "indefinite",
      to: "360 12 12",
      type: "rotate"
    })
  })]
});

/***/ }),

/***/ "../../packages/ui/icons/logo.tsx":
/*!****************************************!*\
  !*** ../../packages/ui/icons/logo.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WPTBLogo: () => (/* binding */ WPTBLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const WPTBLogo = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    ...props,
    viewBox: "0 0 134 131",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M120.619 0.704712H13.8714C6.502 0.704712 0.527954 6.64798 0.527954 13.9794V117.225C0.527954 124.557 6.502 130.5 13.8714 130.5H120.619C127.988 130.5 133.962 124.557 133.962 117.225V13.9794C133.962 6.64798 127.988 0.704712 120.619 0.704712Z",
      fill: "url(#wptb_logo_paint0_linear_7_1042)"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M106.489 28.0007H28.0248C26.8471 28.0007 25.8923 28.9506 25.8923 30.1223V44.4636C25.8923 45.6354 26.8471 46.5852 28.0248 46.5852H106.489C107.667 46.5852 108.621 45.6354 108.621 44.4636V30.1223C108.621 28.9506 107.667 28.0007 106.489 28.0007Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M59.7869 56.3042H28.0249C26.8471 56.3042 25.8923 57.254 25.8923 58.4257V72.7671C25.8923 73.9388 26.8471 74.8887 28.0249 74.8887H59.7869C60.9647 74.8887 61.9195 73.9388 61.9195 72.7671V58.4257C61.9195 57.254 60.9647 56.3042 59.7869 56.3042Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M106.489 56.3042H74.7267C73.549 56.3042 72.5942 57.254 72.5942 58.4257V72.7671C72.5942 73.9388 73.549 74.8887 74.7267 74.8887H106.489C107.667 74.8887 108.621 73.9388 108.621 72.7671V58.4257C108.621 57.254 107.667 56.3042 106.489 56.3042Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M59.7631 84.6194H28.001C26.8233 84.6194 25.8685 85.5693 25.8685 86.741V101.082C25.8685 102.254 26.8233 103.204 28.001 103.204H59.7631C60.9409 103.204 61.8957 102.254 61.8957 101.082V86.741C61.8957 85.5693 60.9409 84.6194 59.7631 84.6194Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M106.465 84.6194H74.7029C73.5251 84.6194 72.5703 85.5693 72.5703 86.741V101.082C72.5703 102.254 73.5251 103.204 74.7029 103.204H106.465C107.643 103.204 108.598 102.254 108.598 101.082V86.741C108.598 85.5693 107.643 84.6194 106.465 84.6194Z",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
        id: "wptb_logo_paint0_linear_7_1042",
        x1: "124.538",
        y1: "-5.75483",
        x2: "45.6569",
        y2: "93.515",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          stopColor: "#29ABE2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          offset: "1",
          stopColor: "#0071BC"
        })]
      })
    })]
  });
};

/***/ }),

/***/ "../../packages/ui/icons/sign.tsx":
/*!****************************************!*\
  !*** ../../packages/ui/icons/sign.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckSign: () => (/* binding */ CheckSign),
/* harmony export */   ChevronDownIcon: () => (/* binding */ ChevronDownIcon),
/* harmony export */   ChevronUpIcon: () => (/* binding */ ChevronUpIcon),
/* harmony export */   DesktopIcon: () => (/* binding */ DesktopIcon),
/* harmony export */   ErrorSign: () => (/* binding */ ErrorSign),
/* harmony export */   LockIcon: () => (/* binding */ LockIcon),
/* harmony export */   MobileIcon: () => (/* binding */ MobileIcon),
/* harmony export */   TableIcon: () => (/* binding */ TableIcon),
/* harmony export */   TabletIcon: () => (/* binding */ TabletIcon),
/* harmony export */   TemplateIcon: () => (/* binding */ TemplateIcon),
/* harmony export */   WarningIcon: () => (/* binding */ WarningIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const CheckSign = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "m8 12l3 3l5-6"
    })]
  })
});
const ErrorSign = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
  })
});
const WarningIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 1024 1024",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4a51.2 51.2 0 0 0 0 102.4"
  })
});
const ChevronDownIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m4 8l8 8l8-8"
  })
});
const ChevronUpIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m4 16l8-8l8 8"
  })
});
const TableIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M4 8h16V5H4zm10 11v-9h-4v9zm2 0h4v-9h-4zm-8 0v-9H4v9zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
  })
});
const TemplateIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "currentColor",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fillRule: "evenodd",
      d: "M3 3v6h18V3zm16 2H5v2h14zM3 11v10h8V11zm6 2H5v6h4z",
      clipRule: "evenodd"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M21 11h-8v2h8zm-8 4h8v2h-8zm8 4h-8v2h8z"
    })]
  })
});
const MobileIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 768 1280",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M464 1152q0-33-23.5-56.5T384 1072t-56.5 23.5T304 1152t23.5 56.5T384 1232t56.5-23.5T464 1152m208-160V288q0-13-9.5-22.5T640 256H128q-13 0-22.5 9.5T96 288v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5T672 992M480 144q0-16-16-16H304q-16 0-16 16t16 16h160q16 0 16-16m288-16v1024q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V128q0-52 38-90t90-38h512q52 0 90 38t38 90"
  })
});
const TabletIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 24 24",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm3-2h12V6H6z"
  })
});
const DesktopIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "1em",
  height: "1em",
  viewBox: "0 0 512 512",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "currentColor",
    d: "M16 352a48.05 48.05 0 0 0 48 48h133.88l-4 32H144a16 16 0 0 0 0 32h224a16 16 0 0 0 0-32h-49.88l-4-32H448a48.05 48.05 0 0 0 48-48v-48H16Zm240-16a16 16 0 1 1-16 16a16 16 0 0 1 16-16M496 96a48.05 48.05 0 0 0-48-48H64a48.05 48.05 0 0 0-48 48v192h480Z"
  })
});
const LockIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512",
  height: "1em",
  width: "1em",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#b1b4b5",
    d: "M376.749 349.097c-13.531 0-24.5-10.969-24.5-24.5V181.932c0-48.083-39.119-87.203-87.203-87.203c-48.083 0-87.203 39.119-87.203 87.203v82.977c0 13.531-10.969 24.5-24.5 24.5s-24.5-10.969-24.5-24.5v-82.977c0-75.103 61.1-136.203 136.203-136.203s136.203 61.1 136.203 136.203v142.665c0 13.531-10.969 24.5-24.5 24.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#ffb636",
    d: "M414.115 497.459H115.977c-27.835 0-50.4-22.565-50.4-50.4V274.691c0-27.835 22.565-50.4 50.4-50.4h298.138c27.835 0 50.4 22.565 50.4 50.4v172.367c0 27.836-22.565 50.401-50.4 50.401"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#ffd469",
    d: "M109.311 456.841h-2.525c-7.953 0-14.4-6.447-14.4-14.4V279.309c0-7.953 6.447-14.4 14.4-14.4h2.525c7.953 0 14.4 6.447 14.4 14.4v163.132c0 7.953-6.447 14.4-14.4 14.4"
  })]
});

/***/ }),

/***/ "../../packages/utils/check.ts":
/*!*************************************!*\
  !*** ../../packages/utils/check.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNumeric: () => (/* binding */ isNumeric)
/* harmony export */ });
const isNumeric = value => {
  return typeof value === "number" || parseInt(value).toString() === value;
};

/***/ }),

/***/ "../../packages/utils/html/css-xss.ts":
/*!********************************************!*\
  !*** ../../packages/utils/html/css-xss.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scopeAndImportantCSS: () => (/* binding */ scopeAndImportantCSS)
/* harmony export */ });
/* harmony import */ var postcss_safe_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! postcss-safe-parser */ "../../node_modules/.pnpm/postcss-safe-parser@7.0.1_postcss@8.5.14/node_modules/postcss-safe-parser/lib/safe-parse.js");
/* harmony import */ var postcss_safe_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(postcss_safe_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var postcss_value_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! postcss-value-parser */ "../../node_modules/.pnpm/postcss-value-parser@4.2.0/node_modules/postcss-value-parser/lib/index.js");
/* harmony import */ var postcss_value_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(postcss_value_parser__WEBPACK_IMPORTED_MODULE_1__);


const SAFE_AT_RULES = new Set(["media", "supports"]);

/**
 * Legacy CSS features that can execute script
 * in old/legacy browsers.
 */
const XSS_RISK_PROPERTIES = new Set(["behavior", "-moz-binding", "binding"]);
const ALLOWED_PROTOCOLS = new Set(["https:", "http:"]);

/**
 * Remove surrounding quotes.
 */
function stripQuotes(value) {
  return value.replace(/^['"]|['"]$/g, "").trim();
}

/**
 * Decode CSS escapes.
 *
 * Example:
 *   \6a avascript: -> javascript:
 */
function decodeCssEscapes(input) {
  return input.replace(/\\([0-9a-fA-F]{1,6}\s?|.)/g, (_, escaped) => {
    const hex = escaped.trim();
    if (/^[0-9a-fA-F]{1,6}$/.test(hex)) {
      return String.fromCodePoint(parseInt(hex, 16));
    }
    return escaped;
  });
}

/**
 * Validate a URL found inside CSS.
 */
function isSafeUrl(rawUrl) {
  const cleaned = decodeCssEscapes(stripQuotes(rawUrl)).trim();

  /**
   * FIX: Reject empty url() — resolves to origin and
   * passes the https: protocol check, which is a logic
   * error. Empty URLs serve no purpose.
   */
  if (cleaned === "") {
    return false;
  }
  try {
    /**
     * Explicitly reject dangerous schemes before URL parsing.
     * This catches:
     *   javascript:
     *   data:
     *   vbscript:
     */
    const lowered = cleaned.toLowerCase();
    if (lowered.startsWith("javascript:") || lowered.startsWith("data:") || lowered.startsWith("vbscript:")) {
      return false;
    }

    /**
     * Resolve relative URLs safely.
     */
    const parsed = new URL(cleaned, window.location.origin);
    return ALLOWED_PROTOCOLS.has(parsed.protocol);
  } catch {
    return false;
  }
}

/**
 * Detect dangerous CSS values.
 */
function hasUnsafeValue(value) {
  let unsafe = false;
  const parsed = postcss_value_parser__WEBPACK_IMPORTED_MODULE_1___default()(value);
  parsed.walk(node => {
    if (node.type !== "function") {
      return;
    }
    const fn = node;
    const fnName = decodeCssEscapes(fn.value.toLowerCase());

    /**
     * Block expression()
     */
    if (fnName === "expression") {
      unsafe = true;
      return false;
    }

    /**
     * Validate every url()
     */
    if (fnName === "url") {
      const urlValue = postcss_value_parser__WEBPACK_IMPORTED_MODULE_1___default().stringify(fn.nodes).trim();
      if (!isSafeUrl(urlValue)) {
        unsafe = true;
        return false;
      }
    }
  });
  return unsafe;
}

/**
 * FIX: Check @supports condition strings for unsafe url() references.
 *
 * PostCSS parses @supports conditions as raw strings (atRule.params),
 * not as declarations, so the declaration walker never sees them.
 * A rule like:
 *   @supports (background: url(javascript:alert(1))) { ... }
 * would previously pass through unsanitized.
 */
function hasUnsafeSupportsCondition(params) {
  return hasUnsafeValue(params);
}

/**
 * Scope selectors safely.
 */
function scopeSelector(selector, scope) {
  selector = selector.trim();

  /**
   * Preserve root selector meaning.
   */
  if (selector === "html" || selector === "body" || selector === ":root") {
    return scope;
  }
  return `${scope} ${selector}`;
}
function scopeAndImportantCSS(css, scope = ".user-content") {
  const root = postcss_safe_parser__WEBPACK_IMPORTED_MODULE_0___default()(css);
  root.walk(node => {
    /**
     * Remove unsafe at-rules.
     */
    if (node.type === "atrule") {
      const atRule = node;
      const name = atRule.name.toLowerCase();
      if (!SAFE_AT_RULES.has(name)) {
        atRule.remove();
        return;
      }

      /**
       * FIX: Validate @supports condition params for unsafe url().
       * @media params (e.g. screen, print, min-width) cannot contain
       * url() so only @supports needs this check.
       */
      if (name === "supports" && hasUnsafeSupportsCondition(atRule.params)) {
        atRule.remove();
        return;
      }
    }

    /**
     * Sanitize declarations.
     */
    if (node.type === "decl") {
      const decl = node;
      const prop = decodeCssEscapes(decl.prop.toLowerCase());
      if (XSS_RISK_PROPERTIES.has(prop)) {
        decl.remove();
        return;
      }
      if (hasUnsafeValue(decl.value)) {
        decl.remove();
        return;
      }
    }

    /**
     * Scope selectors + force !important
     */
    if (node.type === "rule") {
      const rule = node;
      rule.selectors = rule.selectors.map(sel => scopeSelector(sel, scope));
      rule.walkDecls(decl => {
        decl.important = true;
      });
    }
  });
  return root.toString();
}

/***/ }),

/***/ "../../packages/utils/html/index.ts":
/*!******************************************!*\
  !*** ../../packages/utils/html/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyCustomStyle: () => (/* binding */ applyCustomStyle),
/* harmony export */   attrsToString: () => (/* binding */ attrsToString),
/* harmony export */   buildLinkAttrs: () => (/* binding */ buildLinkAttrs),
/* harmony export */   escapeAttr: () => (/* binding */ escapeAttr),
/* harmony export */   escapeHtml: () => (/* binding */ escapeHtml),
/* harmony export */   renderIcon: () => (/* binding */ renderIcon),
/* harmony export */   scopeAndImportantCSS: () => (/* reexport safe */ _css_xss__WEBPACK_IMPORTED_MODULE_0__.scopeAndImportantCSS),
/* harmony export */   stylesToString: () => (/* binding */ stylesToString)
/* harmony export */ });
/* harmony import */ var _css_xss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-xss */ "../../packages/utils/html/css-xss.ts");


/**
 * Converts a CSS properties object to an HTML style string
 * @param styles - Object containing CSS properties
 * @returns HTML style string (e.g., "color: red; font-size: 14px")
 */
const stylesToString = styles => {
  if (!styles) return "";
  return Object.entries(styles).filter(([_, value]) => value !== undefined && value !== null && value !== "").map(([key, value]) => {
    // Convert camelCase to kebab-case
    const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    return `${kebabKey}: ${value}`;
  }).join("; ");
};

/**
 * Escapes HTML special characters to prevent XSS
 * @param str - String to escape
 * @returns Escaped string
 */
const escapeHtml = str => {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
};
/**
 * Renders HTML attributes from an object
 * @param attrs - Object containing attribute key-value pairs
 * @returns HTML attribute string
 */
const attrsToString = attrs => {
  if (!attrs) return "";
  return Object.entries(attrs).filter(([_, value]) => value !== undefined && value !== null && value !== false).map(([key, value]) => {
    if (value === true) return key;
    if (key === "style" && typeof value === "object") {
      return `style="${stylesToString(value)}"`;
    }
    if (key === "class" || key === "className") {
      return `class="${escapeAttr(value)}"`;
    }
    return `${key}="${String(value).replace(/"/g, "&quot;")}"`;
  }).join(" ");
};

/**
 * Renders an icon as HTML by fetching the SVG
 * @param name - Icon name
 * @returns HTML string for the icon
 */
const renderIcon = name => {
  if (!name) return "";
  // Icon will be loaded by frontend script
  return ``;
};

/**
 * Escapes HTML special characters
 * @param str - String to escape
 * @returns Escaped string
 */
const escapeAttr = str => {
  if (str === undefined || str === null) return "";
  return str.toString().replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

/**
 * Interface for link properties
 */

/**
 * Builds link attributes with proper escaping and URL conversion
 * @param props - Link properties
 * @returns Object with tag name and attributes string
 */
const buildLinkAttrs = props => {
  const {
    url,
    target,
    rel,
    convertToAbsolute,
    className,
    style,
    id,
    attrs
  } = props;
  const baseStyle = style ? `style="${stylesToString(style)}"` : '';
  const classAttr = className ? `class="${escapeAttr(className)}"` : '';
  const idAttr = id ? `id="${escapeAttr(id)}"` : '';
  if (!url || url === "") {
    const attrs = [classAttr, baseStyle, idAttr].filter(Boolean).join(' ');
    return {
      tag: 'div',
      attrs
    };
  }
  let finalUrl = url;
  if (convertToAbsolute && !/^https?:\/\//.test(url)) {
    finalUrl = "https://" + url.replace(/^\//, "");
  }
  const relStr = rel?.join?.(" ") || "";
  const linkAttrs = [classAttr, baseStyle, idAttr, `href="${escapeAttr(finalUrl)}"`, target ? `target="${escapeAttr(target)}"` : '', relStr ? `rel="${escapeAttr(relStr)}"` : '', ...Object.entries(attrs || {}).map(([key, value]) => `${key}="${escapeAttr(value)}"`)].filter(Boolean).join(' ');
  return {
    tag: 'a',
    attrs: linkAttrs
  };
};
const applyCustomStyle = async (style, tableId, doc = document) => {
  if (!style || !tableId || !doc) return;
  const el = doc.querySelector(`style#wptb-table-${tableId}`);
  if (el) {
    el.remove();
  }
  try {
    const scopedStyle = (0,_css_xss__WEBPACK_IMPORTED_MODULE_0__.scopeAndImportantCSS)(style, `.wptb-table-${tableId}:not(#wptb-style-isolation):not(#wptb-style-isolation)`);
    const styleElement = doc.createElement("style");
    styleElement.id = `wptb-table-${tableId}`;
    styleElement.textContent = scopedStyle;
    styleElement.setAttribute("data-table-id", tableId);
    doc.head.appendChild(styleElement);
  } catch (error) {
    console.error("Error applying custom styles:", error);
  }
};

/***/ }),

/***/ "../../packages/utils/http.ts":
/*!************************************!*\
  !*** ../../packages/utils/http.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiDownload: () => (/* binding */ apiDownload),
/* harmony export */   apiGet: () => (/* binding */ apiGet),
/* harmony export */   apiPost: () => (/* binding */ apiPost),
/* harmony export */   makeRestUrl: () => (/* binding */ makeRestUrl)
/* harmony export */ });
const makeRestUrl = path => {
  const sub_url = new URL(path, "https://protibimbok.github.io");
  const base = WPTB_CFG.WEB_URL;
  const url = new URL(`${base}/?rest_route=/wp-table-builder${sub_url.pathname}`);
  const search = new URLSearchParams(url.search);
  const sub_search = new URLSearchParams(sub_url.search);
  sub_search.forEach((value, key) => {
    search.set(key, value);
  });
  url.search = search.toString();
  return url.toString();
};
const apiPost = async (url, data, init) => {
  let body = data,
    contentType = "application/json";
  if (typeof data === "object" && !(data instanceof FormData)) {
    body = JSON.stringify(data);
  } else if (data instanceof FormData) {
    contentType = "multipart/form-data";
  }
  const response = await fetch(makeRestUrl(url), {
    ...init,
    method: "POST",
    body,
    headers: {
      "Content-Type": contentType,
      ...init?.headers,
      "X-WP-Nonce": WPTB_CFG.NONCE.wp_rest
    }
  });
  return [await response.json(), response];
};
const apiGet = async (url, init) => {
  const response = await fetch(makeRestUrl(url), {
    ...init,
    headers: {
      ...init?.headers,
      "X-WP-Nonce": WPTB_CFG.NONCE.wp_rest
    }
  });
  return await response.json();
};

/**
 * Download a file from the REST API (returns raw Response for binary handling)
 */
const apiDownload = async (url, init) => {
  return fetch(makeRestUrl(url), {
    ...init,
    headers: {
      ...init?.headers,
      "X-WP-Nonce": WPTB_CFG.NONCE.wp_rest
    }
  });
};

/***/ }),

/***/ "../../packages/utils/react.tsx":
/*!**************************************!*\
  !*** ../../packages/utils/react.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSorting: () => (/* binding */ useSorting),
/* harmony export */   useTablePage: () => (/* binding */ useTablePage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "../../packages/utils/ui.ts");
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ "../../packages/utils/http.ts");



const useSorting = (by, order = "asc") => {
  const [sorting, setSorting] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    by,
    order
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [sorting, by => {
    let order = "asc";
    if (sorting.by === by) {
      order = sorting.order === "asc" ? "desc" : "asc";
    }
    setSorting({
      by,
      order
    });
  }], [sorting]);
};
const defaultPage = {
  loading: true,
  posts: [],
  current_page: 1,
  page_start: "...",
  page_end: "...",
  total_count: "...",
  pages: [],
  total_pages: 1
};
const useTablePage = ({
  page,
  search,
  status,
  skipTables,
  sort,
  per_page,
  abortCtrl,
  refetchOnSkipChange
}) => {
  const [apiData, setApiData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultPage);
  const [re, setRe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const setPageTables = (tables, doSort) => {
    if (doSort) {
      let sortField;
      if (!["id", "title", "date", "modified"].includes(sort.by || "id")) {
        sortField = "id";
      } else {
        sortField = sort.by;
      }
      if (sortField !== "id") {
        if (sort.order === "asc") {
          tables.sort((a, b) => {
            // @ts-expect-error is_template is a boolean
            return a[sortField].localeCompare(b[sortField]);
          });
        } else {
          tables.sort((a, b) => {
            // @ts-expect-error is_template is a boolean
            return b[sortField].localeCompare(a[sortField]);
          });
        }
      } else {
        if (sort.order === "asc") {
          tables.sort((a, b) => {
            return a[sortField] - b[sortField];
          });
        } else {
          tables.sort((a, b) => {
            return b[sortField] - a[sortField];
          });
        }
      }
    }
    setApiData({
      ...apiData,
      posts: tables
    });
  };
  const refetchForSkipChange = refetchOnSkipChange ? skipTables : "";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const params = new URLSearchParams({
      page: page.toString(),
      search: search ? search : "",
      status: status ? status : "",
      except: skipTables ? skipTables : "",
      ...(sort ? {
        sort_by: sort.by,
        sort_order: sort.order
      } : {}),
      ...(per_page ? {
        per_page: per_page.toString()
      } : {})
    });
    const url = `/tables?${params.toString()}`;
    setApiData(apiData => ({
      ...apiData,
      current_page: page,
      loading: true
    }));
    (0,_http__WEBPACK_IMPORTED_MODULE_2__.apiGet)(url, {
      signal: abortCtrl?.signal
    }).then(data => {
      const {
        posts,
        current_page,
        total_pages,
        total_count
      } = data;
      const pageStart = (current_page - 1) * data.per_page + 1;
      const pageEnd = pageStart + posts.length - 1;
      setApiData({
        loading: false,
        posts,
        current_page,
        page_start: pageStart,
        page_end: pageEnd,
        pages: (0,_ui__WEBPACK_IMPORTED_MODULE_1__.getPages)(total_pages, 2),
        total_pages,
        total_count
      });
    }).catch(() => {
      setApiData({
        ...apiData,
        loading: false
      });
      WPTB.utils.notify("Something went wrong! Please reload the page!", "error", 0);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, status, sort.by, sort.order, per_page, refetchForSkipChange, re]);
  return [apiData, setPageTables, () => setRe(!re)];
};

/***/ }),

/***/ "../../packages/utils/ui.ts":
/*!**********************************!*\
  !*** ../../packages/utils/ui.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard),
/* harmony export */   getPages: () => (/* binding */ getPages)
/* harmony export */ });
const getPages = (totalPages, perSection = 2) => {
  const pages = [];
  if (totalPages <= perSection * 3 + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
  for (let i = 1; i <= perSection; i++) {
    pages.push(i);
  }
  const lim1 = Math.ceil(totalPages / 2 - perSection / 2);
  if (pages.at(-1) < lim1 - 1) {
    pages.push(0);
  }
  for (let i = 0; i < perSection; i++) {
    pages.push(lim1 + i);
  }
  pages.push(0);
  for (let i = 1; i <= perSection; i++) {
    pages.push(totalPages - perSection + i);
  }
  return pages;
};
const copyToClipboard = text => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    return;
  }
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
};

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"version":"2.0.2","name":"wptb/table-block","title":"WP Table Builder","category":"design","description":"WP Table Builder - Drag and Drop Responsive Table Builder Plugin for WordPress","keywords":["table","wp-table-builder","wptb","cell","row","column"],"allowedBlocks":[],"attributes":{"id":{"type":["string","number"],"default":""}},"supports":{"align":["wide","full","none"]},"textdomain":"wp-table-builder","editorStyle":["wptb-frontend-style","wptb-editor-style","wptb-gutenberg-style","wptb-pro-frontend-style","wptb-pro-editor-style"]}');

/***/ }),

/***/ "./src/components/builder/index.tsx":
/*!******************************************!*\
  !*** ./src/components/builder/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wptb_external_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wptb/external/store */ "../../packages/external/store.ts");
/* harmony import */ var _wptb_external_react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wptb/external/react-redux */ "../../packages/external/react-redux.ts");
/* harmony import */ var _wptb_external_react_dom_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wptb/external/react-dom/client */ "../../packages/external/react-dom/client.ts");
/* harmony import */ var _wptb_external_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wptb/external/react */ "../../packages/external/react.ts");
/* harmony import */ var _wptb_external_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wptb/external/components */ "../../packages/external/components.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const BuilderPage = ({
  onSave,
  onClose
}) => {
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!elRef.current) {
      return;
    }
    const root = (0,_wptb_external_react_dom_client__WEBPACK_IMPORTED_MODULE_4__.createRoot)(elRef.current);
    root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wptb_external_react__WEBPACK_IMPORTED_MODULE_5__.StrictMode, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wptb_external_react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
        store: _wptb_external_store__WEBPACK_IMPORTED_MODULE_2__["default"],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wptb_external_components__WEBPACK_IMPORTED_MODULE_6__.BuilderApp, {
          onSave: onSave,
          onClose: onClose,
          isLoaded: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wptb_external_components__WEBPACK_IMPORTED_MODULE_6__.Notifications, {})]
      })
    }));
    return () => {
      root.unmount();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elRef.current, onSave, onClose]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleKeyDown = event => {
      if (event.key === "z" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    window.addEventListener("keydown", handleKeyDown, {
      capture: true
    });
    return () => {
      window.removeEventListener("keydown", handleKeyDown, {
        capture: true
      });
    };
  }, []);
  return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    className: "wptb-builder-modal",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "wptb-app-root",
      ref: elRef
    })
  }), document.body);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuilderPage);

/***/ }),

/***/ "./src/components/picker/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/picker/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tables */ "./src/components/tables/index.tsx");
/* harmony import */ var _wptb_ui_icons_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wptb/ui/icons/actions */ "../../packages/ui/icons/actions.tsx");
/* harmony import */ var _wptb_external_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wptb/external/utils */ "../../packages/external/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const TableCreator = ({
  setTable
}) => {
  const [rows, setRows] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);
  const [cols, setCols] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);
  const onCreateNew = () => {
    if (cols < 1 || rows < 1) {
      return;
    }
    const id = (0,_wptb_external_utils__WEBPACK_IMPORTED_MODULE_4__.createNewTable)(rows, cols);
    setTable(id, true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
    gap: "10px",
    justify: "center",
    align: "end",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
      __nextHasNoMarginBottom: true,
      type: "number",
      label: "Column count",
      value: cols,
      onChange: count => setCols(Number(count)),
      min: "1",
      className: "blocks-table__placeholder-input"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
      __nextHasNoMarginBottom: true,
      type: "number",
      label: "Row count",
      value: rows,
      onChange: count => setRows(Number(count)),
      min: "1",
      className: "blocks-table__placeholder-input"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      className: "blocks-table__placeholder-button",
      variant: "primary",
      onClick: onCreateNew,
      type: "button",
      children: "Create"
    })]
  });
};
const PickerPage = ({
  id,
  setTable
}) => {
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("tables");
  const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const onSelect = id => {
    setTable(id.toString());
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "wptb-mini-picker",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "wptb-mini-picker-top",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
        children: "WP Table Builder"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wptb-mini-picker-search",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "1em",
          height: "1em",
          viewBox: "0 0 48 48",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinejoin: "round",
            strokeWidth: "4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              d: "M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("path", {
              strokeLinecap: "round",
              d: "M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "search",
          placeholder: "Search...",
          value: search,
          onChange: e => setSearch(e.target.value)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "wptb-mini-picker-tabs",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: activeTab === "tables" ? "active" : "",
          onClick: () => setActiveTab("tables"),
          children: "Tables"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          className: activeTab === "create" ? "active" : "",
          onClick: () => setActiveTab("create"),
          children: "Create"
        }), id && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          type: "button",
          onClick: () => setTable(id),
          children: _wptb_ui_icons_actions__WEBPACK_IMPORTED_MODULE_3__.TimesIcon
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "wptb-mini-picker-content",
      children: activeTab === "tables" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tables__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSelect: onSelect,
        search: search
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TableCreator, {
        setTable: setTable
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PickerPage);

/***/ }),

/***/ "./src/components/recovery/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/recovery/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Recovery: () => (/* binding */ Recovery),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * For some reason, the recovery UI from the UI package is not working in the Gutenberg editor.
 * This is a temporary component to display the recovery UI in the Gutenberg editor.
 * It will be replaced with the recovery UI from the UI package when it is ready.
 */

const Recovery = ({
  corruption,
  onRecover,
  onCancel
}) => {
  const {
    expectedCols,
    expectedRows,
    rowIssues,
    missingCells,
    overflowingSpans
  } = corruption;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "wptb-recovery",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "wptb-recovery-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "wptb-recovery-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
        className: "wptb-recovery-title",
        children: "Table Structure Issue Detected"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        className: "wptb-recovery-description",
        children: "The table has structural inconsistencies that need to be fixed before editing. This is usually caused by invalid row/column spans or missing cells."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "wptb-recovery-details",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "wptb-recovery-stat",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            className: "wptb-recovery-stat-label",
            children: "Expected Grid"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
            className: "wptb-recovery-stat-value",
            children: [expectedRows, " rows \xD7 ", expectedCols, " columns"]
          })]
        }), missingCells.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "wptb-recovery-issue",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wptb-recovery-issue-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              className: "wptb-recovery-issue-icon wptb-recovery-issue-icon--missing",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                  x: "3",
                  y: "3",
                  width: "18",
                  height: "18",
                  rx: "2",
                  strokeDasharray: "4 2"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
              className: "wptb-recovery-issue-title",
              children: [missingCells.length, " Missing Cell", missingCells.length > 1 ? 's' : '']
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "wptb-recovery-issue-description",
            children: ["Empty cells will be inserted at positions: ", missingCells.slice(0, 5).map(c => `(${c.row + 1}, ${c.col + 1})`).join(', '), missingCells.length > 5 ? ` and ${missingCells.length - 5} more...` : '']
          })]
        }), overflowingSpans.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "wptb-recovery-issue",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wptb-recovery-issue-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              className: "wptb-recovery-issue-icon wptb-recovery-issue-icon--overflow",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                  d: "M4 4h16v16H4zM9 9h10M9 9v10"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
              className: "wptb-recovery-issue-title",
              children: [overflowingSpans.length, " Overflowing Span", overflowingSpans.length > 1 ? 's' : '']
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: "wptb-recovery-issue-description",
            children: "Cell spans extending beyond table boundaries will be reduced."
          })]
        }), rowIssues.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "wptb-recovery-issue",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wptb-recovery-issue-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              className: "wptb-recovery-issue-icon wptb-recovery-issue-icon--row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                  d: "M3 12h18M12 3v18"
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
              className: "wptb-recovery-issue-title",
              children: [rowIssues.length, " Row", rowIssues.length > 1 ? 's' : '', " with Issues"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
            className: "wptb-recovery-issue-description",
            children: ["Rows ", rowIssues.slice(0, 5).map(r => r.row + 1).join(', '), rowIssues.length > 5 ? ` and ${rowIssues.length - 5} more` : '', " have incomplete coverage."]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "wptb-recovery-actions",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          className: "wptb-recovery-btn wptb-recovery-btn--secondary",
          onClick: onCancel,
          children: "Go Back"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
          className: "wptb-recovery-btn wptb-recovery-btn--primary",
          onClick: onRecover,
          children: "Repair Table"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Recovery);

/***/ }),

/***/ "./src/components/table/index.tsx":
/*!****************************************!*\
  !*** ./src/components/table/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wptb_ui_icons_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wptb/ui/icons/loaders */ "../../packages/ui/icons/loaders.tsx");
/* harmony import */ var _wptb_external_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wptb/external/store */ "../../packages/external/store.ts");
/* harmony import */ var _wptb_external_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wptb/external/utils */ "../../packages/external/utils.ts");
/* harmony import */ var _wptb_external_front_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wptb/external/front-utils */ "../../packages/external/front-utils.ts");
/* harmony import */ var _wptb_utils_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wptb/utils/http */ "../../packages/utils/http.ts");
/* harmony import */ var _utils_state_to_f_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/state-to-f-table */ "./src/utils/state-to-f-table.ts");
/* harmony import */ var _wptb_utils_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wptb/utils/html */ "../../packages/utils/html/index.ts");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











const formatConfig = config => {
  return {
    transpose: config.stackDirection === "row",
    repeatFirst: config.enableHead,
    columnCount: config.itemsPerHead + (config.enableHead ? 1 : 0)
  };
};
const getResponsiveConfig = (props, deviceType) => {
  if (deviceType === "desktop") {
    return null;
  }
  const mainConfig = props.responsive;
  if (!mainConfig?.enable) return null;
  const {
    mobile,
    tablet
  } = mainConfig;
  if (deviceType === "mobile") {
    if (mobile.disable) return null;
    return formatConfig(mobile);
  }
  if (tablet.disable) return null;
  return formatConfig(tablet);
};
const doRendering = (table, el, id, deviceType) => {
  const responsiveConfig = getResponsiveConfig(table.props, deviceType);
  const renderedTable = (0,_wptb_external_front_utils__WEBPACK_IMPORTED_MODULE_4__.renderTable)(responsiveConfig ? (0,_wptb_external_front_utils__WEBPACK_IMPORTED_MODULE_4__.transformTable)(table, responsiveConfig) : table, Boolean(responsiveConfig), id);
  el.innerHTML = renderedTable.wrapperHtml;
  el.style.cssText = renderedTable.rootStyle;
  el.className = `wptb-table-${id} wptb-style-isolation`;
  (0,_wptb_external_front_utils__WEBPACK_IMPORTED_MODULE_4__.initializeFunctionality)(table.props, el);
  (0,_wptb_utils_html__WEBPACK_IMPORTED_MODULE_7__.applyCustomStyle)(table.props.extraStyles, id, el.ownerDocument);
};
const TablePage = ({
  id,
  shouldLoad,
  setShouldLoad,
  saveId,
  onCorruptionChange
}) => {
  const elRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [corruption, setCorruption] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!shouldLoad) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const abortCtrl = new AbortController();
    (0,_wptb_utils_http__WEBPACK_IMPORTED_MODULE_5__.apiGet)(`/table?id=${id}`, {
      signal: abortCtrl.signal
    }).then(data => {
      const {
        table,
        props,
        innerBlocks,
        tableProps,
        corruption
      } = (0,_wptb_external_utils__WEBPACK_IMPORTED_MODULE_3__.parseTable)(data.table);
      if (corruption) {
        setCorruption(corruption);
        onCorruptionChange?.(corruption, data.table);
        setIsLoading(false);
        setShouldLoad(false);
        return;
      }
      _wptb_external_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch((0,_wptb_external_store__WEBPACK_IMPORTED_MODULE_2__.setTable)({
        id,
        table: {
          id,
          title: data.name,
          desktop: table.desktop,
          tablet: table.tablet,
          mobile: table.mobile
        },
        tableProps,
        props,
        innerBlocks
      }));
      _wptb_external_store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch((0,_wptb_external_store__WEBPACK_IMPORTED_MODULE_2__.startBuilder)(id));
      setIsLoading(false);
      setShouldLoad(false);
    }).catch(_ => undefined);
    return () => {
      abortCtrl.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const deviceType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(
  // @ts-expect-error not typed yet
  select => select("core/editor").getDeviceType()?.toLowerCase(), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!elRef.current || isLoading || corruption) {
      return;
    }
    const table = (0,_utils_state_to_f_table__WEBPACK_IMPORTED_MODULE_6__.stateToFTable)(id);
    if (!table) {
      return;
    }
    doRendering(table, elRef.current, id, deviceType);
    (0,_wptb_utils_html__WEBPACK_IMPORTED_MODULE_7__.applyCustomStyle)(table.props.extraStyles, id, elRef.current.ownerDocument);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elRef.current, isLoading, id, saveId, deviceType, corruption]);
  return isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: "wptb-table-loading-icon",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wptb_ui_icons_loaders__WEBPACK_IMPORTED_MODULE_1__.DownloadingLoopIcon, {})
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: "wptb-root-app",
    ref: elRef
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TablePage);

/***/ }),

/***/ "./src/components/tables/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/tables/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wptb_utils_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wptb/utils/react */ "../../packages/utils/react.tsx");
/* harmony import */ var _packages_ui_components_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../packages/ui/components/pagination */ "../../packages/ui/components/pagination/index.tsx");
/* harmony import */ var _packages_ui_components_table_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../packages/ui/components/table-list */ "../../packages/ui/components/table-list/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Do not install @wptb/components
 * or change the imports to "@wptb/external/components"
 * They have to be relative path because
 * gutenberg & WPTB uses two different instances of react
 *
 * aliasing is an option but it has only one use case rn
 */



const Tables = ({
  search,
  onSelect
}) => {
  const abortCtrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const sorting = (0,_wptb_utils_react__WEBPACK_IMPORTED_MODULE_1__.useSorting)("modified", "desc");
  const tOutRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [searchTxt, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(search);
  const [apiData] = (0,_wptb_utils_react__WEBPACK_IMPORTED_MODULE_1__.useTablePage)({
    page,
    search: searchTxt,
    sort: sorting[0],
    abortCtrl: abortCtrl.current
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const newSearch = search?.trim();
    if (!searchTxt) {
      if (!newSearch || newSearch.length < 2) {
        return;
      }
    } else if (newSearch && newSearch.length > 0 && newSearch.length < 2) {
      return;
    }
    if (tOutRef.current) {
      clearTimeout(tOutRef.current);
    }
    if (abortCtrl.current) {
      abortCtrl.current.abort();
    }
    abortCtrl.current = new AbortController();
    tOutRef.current = setTimeout(() => {
      setSearch(newSearch);
      abortCtrl.current = undefined;
      tOutRef.current = undefined;
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
      className: "wptb-pagination-info",
      children: ["Showing ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
        children: apiData.page_start
      }), " to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
        children: apiData.page_end
      }), " of", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
        children: apiData.total_count
      }), " entries"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_packages_ui_components_table_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isLoading: apiData.loading,
      items: apiData.posts,
      onSelect: t => onSelect(t.id),
      sorting: sorting,
      columns: ["id", "title", "modified"],
      htmlColumns: {
        title: true
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_packages_ui_components_pagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
      apiData: apiData,
      setPage: setPage
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tables);

/***/ }),

/***/ "./src/utils/state-to-f-table.ts":
/*!***************************************!*\
  !*** ./src/utils/state-to-f-table.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   stateToFTable: () => (/* binding */ stateToFTable)
/* harmony export */ });
/* harmony import */ var _wptb_external_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wptb/external/store */ "../../packages/external/store.ts");
/* harmony import */ var _wptb_external_front_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wptb/external/front-utils */ "../../packages/external/front-utils.ts");


const stateToFTable = id => {
  const storeState = _wptb_external_store__WEBPACK_IMPORTED_MODULE_0__["default"].getState();
  const allProps = storeState.props;
  const tableProps = allProps[id];
  if (!tableProps) {
    return null;
  }
  const innerBlocks = storeState.innerBlocks;
  const table = storeState.tables[id]?.desktop;
  if (!table) {
    return null;
  }
  const cells = [];
  for (let i = 0; i < table.length; i++) {
    const row = table[i];
    const rowCells = [];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      const innerBlock = innerBlocks[cell];
      const cellProps = allProps[cell];
      let el = '';
      for (const blockId of innerBlock.blockOrder) {
        el += (0,_wptb_external_front_utils__WEBPACK_IMPORTED_MODULE_1__.buildBlockRecursive)(blockId, innerBlocks, allProps, [cellProps, tableProps]);
      }
      rowCells.push({
        ...allProps[cell],
        el
      });
    }
    cells.push(rowCells);
  }
  return {
    props: tableProps,
    cells
  };
};

/***/ }),

/***/ "?2a84":
/*!*******************************!*\
  !*** source-map-js (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3c7c":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4367":
/*!**********************!*\
  !*** path (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?7fe3":
/*!**************************************!*\
  !*** ./terminal-highlight (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?cecd":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/builder */ "./src/components/builder/index.tsx");
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/table */ "./src/components/table/index.tsx");
/* harmony import */ var _components_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/picker */ "./src/components/picker/index.tsx");
/* harmony import */ var _components_recovery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/recovery */ "./src/components/recovery/index.tsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wptb_utils_check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wptb/utils/check */ "../../packages/utils/check.ts");
/* harmony import */ var _wptb_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wptb/ui/icons */ "../../packages/ui/icons/index.ts");
/* harmony import */ var _wptb_external_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wptb/external/store */ "../../packages/external/store.ts");
/* harmony import */ var _wptb_external_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wptb/external/utils */ "../../packages/external/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);














const Edit = ({
  attributes,
  setAttributes
}) => {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: "wptb-gutenberg"
  });
  const [shouldLoad, setShouldLoad] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_wptb_utils_check__WEBPACK_IMPORTED_MODULE_9__.isNumeric)(attributes.id));
  const [builder, setBuilder] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [tblId, setTblId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(attributes.id);
  const [saveId, setSaveId] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [corruption, setCorruption] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const [rawTableHtml, setRawTableHtml] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setTblId(attributes.id);
  }, [attributes.id]);
  const setTable = (id, isNew) => {
    if (id === attributes.id) {
      setTblId(id);
      return;
    }
    if (isNew) {
      setBuilder(true);
      setTblId(id);
      setShouldLoad(false);
    } else {
      setShouldLoad(true);
      setAttributes({
        id
      });
    }
  };
  const onSave = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(data => {
    if (data.is_new) {
      const id = data.id.toString();
      setTblId(id);
      setAttributes({
        id
      });
    }
    setSaveId(prev => prev + 1);
  }, [tblId]);
  const startBuilderCallback = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (!tblId) {
      return;
    }
    setBuilder(true);
    _wptb_external_store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch((0,_wptb_external_store__WEBPACK_IMPORTED_MODULE_11__.startBuilder)(tblId));
    _wptb_external_utils__WEBPACK_IMPORTED_MODULE_12__.TimeTravel.init();
  }, [tblId]);
  const handleCorruptionChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((corruptionInfo, rawHtml) => {
    setCorruption(corruptionInfo);
    setRawTableHtml(rawHtml);
  }, []);
  const handleRecover = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    if (!rawTableHtml || !tblId) return;
    const repairedHtml = (0,_wptb_external_utils__WEBPACK_IMPORTED_MODULE_12__.getRepairedTableHtml)(rawTableHtml);
    const parsed = (0,_wptb_external_utils__WEBPACK_IMPORTED_MODULE_12__.parseTable)(repairedHtml);
    const {
      table,
      props,
      innerBlocks,
      tableProps
    } = parsed;
    _wptb_external_store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch((0,_wptb_external_store__WEBPACK_IMPORTED_MODULE_11__.setTable)({
      id: tblId,
      table: {
        id: tblId,
        title: "",
        desktop: table.desktop,
        tablet: table.tablet,
        mobile: table.mobile
      },
      tableProps,
      props,
      innerBlocks
    }));
    _wptb_external_store__WEBPACK_IMPORTED_MODULE_11__["default"].dispatch((0,_wptb_external_store__WEBPACK_IMPORTED_MODULE_11__.startBuilder)(tblId));
    _wptb_external_utils__WEBPACK_IMPORTED_MODULE_12__.TimeTravel.init();
    setCorruption(undefined);
    setRawTableHtml(undefined);
    setSaveId(prev => prev + 1); // Trigger table re-render
    (0,_wptb_external_utils__WEBPACK_IMPORTED_MODULE_12__.notify)("Table repaired successfully", "success", 3000);
  }, [rawTableHtml, tblId]);
  const handleCancelRecovery = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    setCorruption(undefined);
    setRawTableHtml(undefined);
    setBuilder(false);
    setTblId("");
  }, []);
  const builderComponent = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!tblId || !builder || corruption) {
      return null;
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_builder__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClose: () => setBuilder(false),
      onSave: onSave
    });
  }, [builder, tblId, onSave, corruption]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    ...blockProps,
    children: [corruption && tblId ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_recovery__WEBPACK_IMPORTED_MODULE_7__["default"], {
      corruption: corruption,
      onRecover: handleRecover,
      onCancel: handleCancelRecovery
    }) : tblId ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_table__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: tblId,
      saveId: saveId,
      shouldLoad: shouldLoad,
      setShouldLoad: setShouldLoad,
      onCorruptionChange: handleCorruptionChange
    }, tblId) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_picker__WEBPACK_IMPORTED_MODULE_6__["default"], {
      setTable: setTable,
      id: attributes.id
    }), builderComponent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.PanelBody, {
        title: "WP Table Builder",
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
          variant: "secondary",
          onClick: () => {
            setTblId("");
            setCorruption(undefined);
            setRawTableHtml(undefined);
          },
          icon: "remove",
          className: "wptb-show-picker-btn",
          children: "Change Table"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
          variant: "primary",
          onClick: startBuilderCallback,
          icon: "share-alt2",
          className: "wptb-open-editor-btn",
          disabled: !!corruption,
          children: "Edit Table"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ToolbarButton, {
        icon: "share-alt2",
        label: "Edit Table",
        onClick: startBuilderCallback,
        placeholder: "Edit Table",
        disabled: !!corruption,
        onPointerEnterCapture: () => {},
        onPointerLeaveCapture: () => {}
      })
    })]
  });
};
const save = () => {
  return null;
};

// @ts-expect-error typical gutenberg
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  title: _block_json__WEBPACK_IMPORTED_MODULE_1__.title,
  category: _block_json__WEBPACK_IMPORTED_MODULE_1__.category,
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_wptb_ui_icons__WEBPACK_IMPORTED_MODULE_10__.WPTBLogo, {}),
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_1__.attributes,
  edit: Edit,
  save,
  transforms: {
    from: [{
      type: "shortcode",
      tag: "wptb",
      attributes: {
        id: {
          type: "number",
          shortcode: ({
            named
          }) => {
            return parseInt(named.id, 10);
          }
        }
      },
      priority: 1
    }]
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map