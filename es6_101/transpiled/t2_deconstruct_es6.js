"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var node = {
  type: 'Hello',
  info: 'Description',
  lay1: {
    lay2: {
      lay2_var1: 'you\'ve reached 2nd layer',
      lay2_var2: 'welcome'
    },
    lay1_var1: 'you\'ve reached 1st layer',
    lay1_var2: 'welcome to the cave'
  },
  first_name: 'Mitch',
  last_name: 'Smith'
};

var type = node.type,
    info = node.info,
    cave = node.lay1,
    real_cave = node.lay1.lay2,
    bio = _objectWithoutProperties(node, ["type", "info", "lay1", "lay1"]);

var full_bio = _extends({}, node);

console.log(type);
console.log(info);
console.log(unknown);
var list = ['kitty', 'puppy', 'dog', 'cat', {
  leader: 'lion',
  herd: 'sheep'
}];
var _list$ = list[0],
    pet1 = _list$ === void 0 ? 'first pet' : _list$,
    pet2 = list[1],
    leader = list[4].leader,
    _list$2 = list[5],
    pet4 = _list$2 === void 0 ? 'new specy' : _list$2;
console.log(pet1);
console.log(pet2);
console.log(leader);
var _ref = [pet2, leader, pet1];
pet1 = _ref[0];
pet2 = _ref[1];
leader = _ref[2];
var full_pet_list = list.slice(0);
var full_pet_list_2 = list.concat();

function ex_setCookie(key, value) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      expire = _ref2.expire,
      _ref2$path = _ref2.path,
      path = _ref2$path === void 0 ? '/' : _ref2$path,
      _ref2$domain = _ref2.domain,
      domain = _ref2$domain === void 0 ? location.origin : _ref2$domain;

  var cookie = "".concat(key, "=").concat(value).concat("".concat(!!expire ? ';' + expire : '')).concat("".concat(!!path ? ';' + path : '')).concat("".concat(!!domain ? ';' + domain : ''));
  document.cookie = cookie;
}

var optionsDefaults = {
  expire: false,
  path: '/',
  domain: location.origin
};

function serious_about_default(var1, var2) {// do something

  var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : optionsDefaults,
      _ref3$expire = _ref3.expire,
      expire = _ref3$expire === void 0 ? optionsDefaults.expire : _ref3$expire,
      _ref3$path = _ref3.path,
      path = _ref3$path === void 0 ? optionsDefaults.path : _ref3$path,
      _ref3$domain = _ref3.domain,
      domain = _ref3$domain === void 0 ? optionsDefaults.domain : _ref3$domain;
}

;